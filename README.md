This is a my variation to webxwiz test task.

## Getting Started

To get started:

1. use git clone url in vscode or w/e u have
2. npm i
3.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. ur good to go.

(if for some reason you got 404 on main page, try localhost:3000/en)

In this project, I used the following tools:

- Redux and RTK for state management across the entire app, primarily for implementing a fully functional shopping cart. Additionally, each product has its own route and modal where you can add items to the cart. You can access the cart through the header button with a shopping bag icon. I implemented there classic cart logic, like the ability to increase and decrease the number of items and delete items from the cart.

- Material UI was used whenever I felt it would save time. Although I wonder if I should have used Shadcn UI...

- i18n for multi-language support.

- Axios for fetching data. I also implemented server-side fetching from an API route.

- SCSS for styling, although I occasionally mixed it with Tailwind.

P.S. Many aspects, such as responsiveness and translation, are intentionally not finished. There's always room for improvement, but I didn't want to spend excessive time on them. The primary purpose of this project is to demonstrate problem-solving skills.

Cheers
