import { Playlist } from '@/types';

interface PlaylistCardProps {
  playlist: Playlist;
}

const difficultyColors = {
  beginner: 'bg-green-50 text-green-700 border-green-200',
  intermediate: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  advanced: 'bg-red-50 text-red-700 border-red-200',
};

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <a
      href={playlist.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 bg-white rounded-xl border border-surface-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex flex-col gap-3">
        {/* Title & Creator */}
        <div>
          <h3 className="font-semibold text-surface-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {playlist.title}
          </h3>
          <p className="text-sm text-surface-500 mt-1">by {playlist.creator}</p>
        </div>

        {/* Description */}
        {playlist.description && (
          <p className="text-sm text-surface-600 line-clamp-2">
            {playlist.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {/* Difficulty */}
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${difficultyColors[playlist.difficulty]}`}
          >
            {difficultyLabels[playlist.difficulty]}
          </span>

          {/* Language */}
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-100 text-surface-600 border border-surface-200">
            {playlist.language}
          </span>

          {/* Video Count */}
          {playlist.videoCount && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-100 text-surface-600 border border-surface-200">
              {playlist.videoCount} videos
            </span>
          )}

          {/* Year */}
          {playlist.year && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-100 text-surface-500 border border-surface-200">
              {playlist.year}
            </span>
          )}
        </div>

        {/* External link indicator */}
        <div className="flex items-center gap-1 text-xs text-primary-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Open on YouTube</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
