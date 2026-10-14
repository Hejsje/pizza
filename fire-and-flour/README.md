# Fire & Flour — Pizza restaurant website

Complete restaurant website source with original generated pizza photography, menu filtering, a session-only basket, and separate home, menu, story, and visit pages.

## Run the website

```sh
bun install
bun run dev
```

## Restaurant content

Fire & Flour is a fictional restaurant concept. All USD prices, opening hours, food descriptions, and the address are sample content and should be replaced with actual restaurant details before launch. Images are generated illustrations of the dishes, not photographs of a real restaurant's food.

The basket supports adding pizzas, adjusting quantities, and viewing totals. It does not send orders, collect payments, or save a basket between visits. Sides and drinks are displayed as restaurant-only items. No payment, account, or restaurant service is connected.

The menu and prices are in `src/lib/pizzeria.ts`; restaurant pages are in `src/routes`; shared visuals and basket controls are in `src/components/pizzeria`; design tokens are in `src/styles.css`.

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
