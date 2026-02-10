import Link from 'next/link';
import { Playlist } from '@/types';

interface PlaylistCardProps {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  // Extract YouTube ID if possible for thumbnail (future proofing)
  // For now, since we don't have thumbnails in the data, we'll use a clean academic placeholder pattern
  // or just a simple card without image if that was the intent. 
  // But the design said "Thumbnail (left)".
  // Let's use a stylish placeholder with the playlist count or difficulty.
  
  return (
    <a
      href={playlist.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 sm:p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-200 hover:shadow-sm"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Icon/Thumbnail Placeholder - keeping it minimal as "Invisible Library" */}
        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="flex-1 min-w-0 grid gap-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold text-foreground truncate pr-4 group-hover:text-primary transition-colors">
              {playlist.title}
            </h3>
            <span className="shrink-0 text-muted-foreground/50 group-hover:text-primary/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            by <span className="text-foreground/80">{playlist.creator}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-1">
             <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground capitalize`}>
              {playlist.difficulty}
            </span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-muted-foreground capitalize">{playlist.language}</span>
            {playlist.videoCount && (
                <>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-xs text-muted-foreground">{playlist.videoCount} videos</span>
                </>
            )}
            {playlist.year && (
                <>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-xs text-muted-foreground">{playlist.year}</span>
                </>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
