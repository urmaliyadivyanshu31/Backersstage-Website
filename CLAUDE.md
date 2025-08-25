# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Commands
- `pnpm dev` - Start development server at http://localhost:3000
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (note: disabled during builds via next.config.mjs)

### Package Manager
This project uses `pnpm` as the package manager (evidenced by pnpm-lock.yaml).

## Project Architecture

### Framework & Stack
- **Next.js 15** with App Router (not Pages Router)
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for animations
- **shadcn/ui** components with Radix UI primitives
- **Vercel Analytics** and **Speed Insights** integrated

### Key Architectural Patterns

#### Component Structure
- **Custom components** in `/components/` - reusable UI components
- **UI components** in `/components/ui/` - shadcn/ui components
- **Page components** in `/app/` following Next.js App Router structure
- **IconWrapper component** for client-side icon rendering (important for SSR)

#### Styling System
- Custom CSS classes like `heading-xl`, `body-lg`, `section-padding`, `container-lg`, `custom-card`
- CSS variables for theming in neutral color palette (50-950)
- Custom animations: `text-shimmer`, `float`, accordion animations
- Gradient utilities and noise texture overlay patterns

#### Font Configuration
- **Syne** (`--font-syne`) for display/heading text
- **Space Grotesk** (`--font-space`) for body text
- Both fonts loaded via next/font/google in layout.tsx

### Important Configuration Notes

#### Next.js Config
- ESLint and TypeScript errors are **ignored during builds** (next.config.mjs:4-7)
- Images are **unoptimized** (next.config.mjs:10)

#### Component Naming & Patterns
- Use `RevealText` and `RevealImage` components for scroll-triggered animations
- `MagneticButton` wrapper for interactive button effects
- Icon components must use `IconWrapper` for proper SSR/client hydration
- Feature cards use standardized icon names: "BarChart", "Handshake", "Zap", "CheckCircle", "Calendar", "Filter", "Users"

#### Theming
- Fixed to dark theme (`defaultTheme="dark"`, `enableSystem={false}`)
- Uses neutral-950 background with accent color highlighting
- Theme provider configured in layout.tsx

### Import Aliases
- `@/components` → `/components/`
- `@/lib` → `/lib/`
- `@/hooks` → `/hooks/`
- Standard Next.js absolute imports from root

### Key Business Context
- **BackersStage** is a Web3 startup ecosystem platform
- Hosts **Demo Days** connecting blockchain startups with VCs
- Recent event: Token2049 Dubai (500+ project registrations, 50+ VCs)
- Upcoming: Cannes event during ETHCC [8] Week (June 29, 2025)
- Focus on **quality connections** over volume, targeting early-stage Web3 startups