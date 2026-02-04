import { Category } from '@/types';

// Import all category data
import dsaData from '../../data/dsa.json';
import pythonData from '../../data/python.json';
import webdevData from '../../data/webdev.json';
import mlData from '../../data/ml.json';
import systemDesignData from '../../data/system-design.json';
import osData from '../../data/os.json';
import dbmsData from '../../data/dbms.json';

export const categories: Category[] = [
  dsaData as Category,
  pythonData as Category,
  webdevData as Category,
  mlData as Category,
  systemDesignData as Category,
  osData as Category,
  dbmsData as Category,
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((cat) => cat.slug);
}
