# Todo List App

A simple todo list application built with Next.js and shadcn/ui.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Bun package manager

## Project Structure

```
app/
  page.tsx          # Main page rendering TodoList
  layout.tsx        # Root layout
  globals.css       # Global styles with CSS variables
components/
  todo-list.tsx     # Main TodoList component
  ui/               # shadcn/ui components (button, input, checkbox, card)
lib/
  utils.ts          # Utility functions (cn helper)
```

## Commands

```bash
bun dev      # Start development server
bun build    # Build for production
bun start    # Start production server
bun lint     # Run ESLint
```

## Adding shadcn Components

```bash
bunx --bun shadcn@latest add <component-name>
```
