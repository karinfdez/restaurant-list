# Restaurant List App

A modern restaurant listing application built with Next.js that allows users to browse restaurants with an interactive card-based interface. Features include restaurant management, caching, and a responsive design with hover effects.

## Features

- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- 🖼️ **Interactive Cards**: Beautiful restaurant cards with hover effects and sliding descriptions
- ⚡ **Caching**: Efficient data caching with React Query for optimal performance
- 🎨 **Modern UI**: Clean design with Tailwind CSS and shadcn/ui components
- 🔍 **Restaurant Management**: Add, view, and manage restaurant listings
- 📊 **Rating System**: Display restaurant ratings and review counts
- 💰 **Price Range**: Visual price indicators ($, $$, $$$)

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[React 19](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com)** - Headless UI primitives
- **[Lucide React](https://lucide.dev)** - Icon library
- **[Class Variance Authority](https://cva.style)** - Component variants

### Data Management
- **[TanStack React Query](https://tanstack.com/query)** - Data fetching and caching
- **[Zod](https://zod.dev)** - Schema validation

### Form Handling
- **[React Hook Form](https://react-hook-form.com)** - Form management
- **[Hookform Resolvers](https://github.com/react-hook-form/resolvers)** - Form validation

### Development Tools
- **[ESLint](https://eslint.org)** - Code linting
- **[PostCSS](https://postcss.org)** - CSS processing

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── apis/              # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── providers/         # Context providers
│   ├── ui/               # shadcn/ui components
│   └── restaurant-card.tsx # Restaurant card component
├── lib/                   # Utility functions
│   ├── db.ts             # Mock database
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript type definitions
└── public/               # Static assets
    └── images/           # Restaurant images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Restaurant Cards
- Full-background images with overlay effects
- Hover animations with sliding descriptions
- Rating badges and price indicators
- Responsive grid layout

### Data Caching
- React Query integration for efficient data fetching
- 5-minute stale time for optimal performance
- Automatic background refetching

### Responsive Design
- 1 column on mobile
- 2 columns on small screens
- 3 columns on large screens
- 4 columns on extra large screens
