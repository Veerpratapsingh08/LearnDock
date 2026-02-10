'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Fuse from 'fuse.js';
import { Category, Playlist } from '@/types';
import PlaylistCard from './PlaylistCard';
import Link from 'next/link';

interface SearchBarProps {
  categories: Category[];
  variant?: 'hero' | 'header';
}

interface SearchResult {
  playlist: Playlist;
  categoryName: string;
  categorySlug: string;
}

const SUGGESTION_CHIPS = ['DSA', 'Python', 'Web Dev', 'System Design'];

export default function SearchBar({ categories, variant = 'hero' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten all playlists with category info
  const allPlaylists = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.playlists.map((playlist) => ({
        playlist,
        categoryName: cat.name,
        categorySlug: cat.slug,
      }))
    );
  }, [categories]);

  // Initialize Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(allPlaylists, {
      keys: [
        { name: 'playlist.title', weight: 2 },
        { name: 'playlist.creator', weight: 1.5 },
        { name: 'categoryName', weight: 0.5 },
        { name: 'playlist.language', weight: 0.3 },
      ],
      threshold: 0.3,
      includeScore: true,
    });
  }, [allPlaylists]);

  // Search on query change
  useEffect(() => {
    setActiveIndex(-1);
    if (query.trim()) {
      const searchResults = fuse.search(query).slice(0, 5);
      setResults(searchResults.map((r) => r.item));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, fuse]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0) {
        e.preventDefault();
        window.open(results[activeIndex].playlist.url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // ⌘K / Ctrl+K global shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHero = variant === 'hero';

  return (
    <div ref={wrapperRef} className={`relative w-full ${isHero ? 'max-w-2xl mx-auto' : 'max-w-md'}`} onKeyDown={handleKeyDown}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className={`text-muted-foreground transition-colors group-focus-within:text-primary ${isHero ? 'w-5 h-5' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isHero ? "Search playlists, creators, topics..." : "Search..."}
          className={`block w-full rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200
            ${isHero 
              ? 'pl-12 pr-16 py-4 text-lg border-border shadow-sm hover:shadow-md' 
              : 'pl-10 pr-12 py-2 text-sm border-border/50 hover:border-border'
            }
          `}
          onFocus={() => query.trim() && setIsOpen(true)}
        />
        {/* ⌘K hint or clear button */}
        {query ? (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <kbd className={`hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono font-medium text-muted-foreground ${isHero ? 'text-xs' : 'text-[10px]'}`}>
              ⌘K
            </kbd>
          </div>
        )}
      </div>

      {/* Suggestion Chips — hero variant only */}
      {isHero && !isOpen && (
        <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
          <span className="text-xs text-muted-foreground/60">Try:</span>
          {SUGGESTION_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => {
                setQuery(chip);
                inputRef.current?.focus();
              }}
              className="px-3 py-1 text-xs rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-150"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 origin-top-left bg-popover border border-border rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-[480px] animate-in fade-in zoom-in-95 duration-100">
          {results.length > 0 ? (
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                <span>Playlists</span>
                <span className="normal-case font-normal">{results.length} found</span>
              </div>
              {results.map((result, index) => (
                <div 
                    key={`${result.categorySlug}-${index}`} 
                    className={`border-b border-border/50 last:border-0 cursor-pointer ${index === activeIndex ? 'bg-muted/50' : ''}`}
                    onClick={() => {
                        window.open(result.playlist.url, '_blank', 'noopener,noreferrer');
                    }}
                >
                  <PlaylistCard playlist={result.playlist} />
                </div>
              ))}
              <div className="bg-muted/30 px-4 py-2 text-xs text-center text-muted-foreground border-t border-border">
                ↑↓ to navigate · Enter to open · Esc to close
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground text-sm mb-3">No playlists for &quot;{query}&quot; yet.</p>
              <Link 
                href="/contribute" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                Suggest one →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
