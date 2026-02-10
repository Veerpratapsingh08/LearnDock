import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col p-6 h-full bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl select-none filter grayscale group-hover:grayscale-0 transition-all duration-300" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
          {category.playlists.length}
        </span>
      </div>
      
      <div className="mt-auto">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
}

