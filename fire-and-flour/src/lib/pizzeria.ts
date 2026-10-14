export const pizzas = [
  { id: 'margherita', name: 'The Margherita', description: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.', price: 14, category: 'Vegetarian', tag: 'The classic', crop: 0 },
  { id: 'pepperoni', name: 'Pepperoni, Please', description: 'Our signature tomato sauce, mozzarella, crispy pepperoni, oregano.', price: 17, category: 'Meat lovers', tag: 'Crowd favorite', crop: 1 },
  { id: 'mushroom', name: 'Truffle Shuffle', description: 'Roasted mushrooms, creamy mozzarella, truffle oil, fresh thyme.', price: 19, category: 'Vegetarian', tag: 'A little fancy', crop: 2 },
  { id: 'diavola', name: 'The Hot Honey', description: 'Spicy salami, red chili, mozzarella, and a drizzle of hot honey.', price: 18, category: 'Meat lovers', tag: 'Bring the heat', crop: 3 },
];
export type Pizza = typeof pizzas[number];
export const money = (amount: number) => `$${amount.toFixed(2)}`;
export function pageHead(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
