import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-card-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
            {category.description}
          </p>
          <span className="inline-flex items-center mt-2 text-xs text-muted-foreground">
            {category.playlists.length} playlists
          </span>
        </div>
      </div>
    </Link>
  );
}

