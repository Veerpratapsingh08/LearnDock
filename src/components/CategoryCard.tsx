import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block p-6 bg-white rounded-2xl border border-surface-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-surface-900 group-hover:text-primary-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-surface-500 mt-1 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
              {category.playlists.length} Playlists
            </span>
          </div>
        </div>
        <svg
          className="w-5 h-5 text-surface-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
