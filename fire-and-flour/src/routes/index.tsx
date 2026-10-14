import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pizzeria/home-page";
import { pageHead } from "@/lib/pizzeria";
export const Route = createFileRoute("/")({
  head: () => pageHead("Fire & Flour — Good dough. Real fire.", "Discover handmade wood-fired pizza at Fire & Flour. Explore our signature pizzas, fresh ingredients, and neighborhood pizzeria."),
  component: HomePage,
});
