'use client';

import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Category, Playlist } from '@/types';
import PlaylistCard from './PlaylistCard';

interface SearchBarProps {
  categories: Category[];
}

interface SearchResult {
  playlist: Playlist;
  categoryName: string;
  categorySlug: string;
}

export default function SearchBar({ categories }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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
        { name: 'playlist.description', weight: 1 },
        { name: 'categoryName', weight: 0.5 },
        { name: 'playlist.language', weight: 0.3 },
      ],
      threshold: 0.4,
      includeScore: true,
    });
  }, [allPlaylists]);

  // Search on query change
  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query).slice(0, 8);
      setResults(searchResults.map((r) => r.item));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, fuse]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="search-container relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search playlists, creators, topics..."
          className="w-full pl-12 pr-4 py-4 text-lg bg-white border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
          onFocus={() => query.trim() && setIsOpen(true)}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-surface-100 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-5 h-5 text-surface-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-surface-200 rounded-xl shadow-xl max-h-[70vh] overflow-y-auto">
          <div className="p-2">
            <p className="text-xs text-surface-500 px-3 py-2">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </p>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div key={`${result.categorySlug}-${index}`}>
                  <div className="px-3 py-1">
                    <span className="text-xs font-medium text-primary-600">
                      {result.categoryName}
                    </span>
                  </div>
                  <PlaylistCard playlist={result.playlist} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No results */}
      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-surface-200 rounded-xl shadow-xl p-6 text-center">
          <p className="text-surface-500">
            No playlists found for &quot;{query}&quot;
          </p>
          <p className="text-sm text-surface-400 mt-1">
            Try different keywords or browse categories below
          </p>
        </div>
      )}
    </div>
  );
}
