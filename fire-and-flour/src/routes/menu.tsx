import { createFileRoute } from '@tanstack/react-router';
import { MenuPage } from '@/components/pizzeria/menu-page';
import { pageHead } from '@/lib/pizzeria';
export const Route = createFileRoute('/menu')({ head: () => pageHead('Our Menu — Fire & Flour', 'Explore our wood-fired pizza menu, signature toppings, sides, and drinks. Fresh 12-inch pizzas from $14.'), component: MenuPage });
