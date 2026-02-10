'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
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

export default function SearchBar({ categories, variant = 'hero' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
        // { name: 'playlist.description', weight: 1 }, // Reduced weight or removed to focus on title/creator
        { name: 'categoryName', weight: 0.5 },
        { name: 'playlist.language', weight: 0.3 },
      ],
      threshold: 0.3, // Stricter threshold
      includeScore: true,
    });
  }, [allPlaylists]);

  const [activeIndex, setActiveIndex] = useState(-1);

  // Search on query change
  useEffect(() => {
    setActiveIndex(-1); // Reset selection on query change
    if (query.trim()) {
      const searchResults = fuse.search(query).slice(0, 5); // Limit to top 5 for cleaner dropdown
      setResults(searchResults.map((r) => r.item));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, fuse]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
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
        // Optional: clear search or close
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

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
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isHero ? "Search playlists, creators, topics..." : "Search..."}
          className={`block w-full rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200
            ${isHero 
              ? 'pl-12 pr-4 py-4 text-lg border-border shadow-sm hover:shadow-md' 
              : 'pl-10 pr-4 py-2 text-sm border-border/50 hover:border-border'
            }
          `}
          onFocus={() => query.trim() && setIsOpen(true)}
        />
        {query && (
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
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 origin-top-left bg-popover border border-border rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {results.length > 0 ? (
            <div className="py-2">
               <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Playlists
                </div>
              {results.map((result, index) => (
                <div 
                    key={`${result.categorySlug}-${index}`} 
                    className={`border-b border-border/50 last:border-0 ${index === activeIndex ? 'bg-muted/50' : ''}`}
                    onClick={() => {
                        window.open(result.playlist.url, '_blank', 'noopener,noreferrer');
                    }}
                >
                  <PlaylistCard playlist={result.playlist} />
                </div>
              ))}
              <div className="bg-muted/30 px-4 py-2 text-xs text-center text-muted-foreground border-t border-border">
                Press generic keywords to find more
              </div>
            </div>
          ) : (
             <div className="p-8 text-center">
                <p className="text-muted-foreground text-sm">No results found for &quot;{query}&quot;</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
}
