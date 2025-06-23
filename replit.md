# Wedding Website - Vanessa & Augustine

## Overview

This is a full-stack wedding website application built for Vanessa & Augustine's wedding celebration on July 29th, 2025. The project is structured as a modern web application with a React frontend and Express.js backend, featuring elegant animations, responsive design, and user interaction capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom wedding theme colors (pink, gold, charcoal)
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and envelope animation
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with tsx
- **Production**: Compiled to ESM with esbuild

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in shared directory for type safety
- **Current Implementation**: In-memory storage (MemStorage class)
- **Production Ready**: Configured for PostgreSQL with Neon Database integration

## Key Components

### Pages
- **Landing Page**: Interactive envelope animation with music toggle
- **Home**: Hero section with couple names and wedding date
- **Event Details**: Ceremony and reception information
- **Countdown**: Live countdown timer to wedding day
- **RSVP**: Form for guest responses (uses FormSubmit service)
- **Love Story**: Timeline of relationship milestones
- **Gallery**: Photo gallery with hover effects
- **Gift Registry**: Registry options and contribution links
- **Contact**: Venue details and contact information

### Shared Components
- **Navigation**: Responsive navigation with mobile menu
- **Music Toggle**: Audio control button
- **Countdown Timer**: Real-time countdown display
- **Envelope Animation**: Multi-step animated invitation reveal

### UI System
- **Design System**: Wedding-themed color palette with CSS custom properties
- **Typography**: Multiple Google Fonts (Playfair Display, Dancing Script, Inter, Great Vibes)
- **Responsive**: Mobile-first design with breakpoint utilities
- **Accessibility**: Proper ARIA labels and semantic HTML

## Data Flow

### Client-Side Data
- Wedding date and venue information stored in constants
- Countdown calculations performed in real-time with custom hooks
- Form submissions handled via FormSubmit external service
- No persistent client-side storage required

### Server-Side Data
- User schema defined with Drizzle ORM (currently unused but prepared)
- Storage interface abstraction allows easy migration from memory to database
- API routes structured but not yet implemented
- Ready for future features like guest management or admin dashboard

## External Dependencies

### Frontend Libraries
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight router
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management

### Backend Libraries
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **express**: Web framework
- **tsx**: TypeScript execution for development

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **postcss**: CSS processing
- **esbuild**: Production bundling for server

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with hot reload
- **Production**: Autoscale deployment target
- **Build Process**: 
  - Frontend: Vite build to `dist/public`
  - Backend: esbuild bundle to `dist/index.js`

### Infrastructure
- **Platform**: Replit with PostgreSQL 16 module
- **Port Configuration**: Internal port 5000, external port 80
- **Static Assets**: Served through Vite in development, Express in production
- **Database**: Ready for PostgreSQL with environment variable configuration

### Scripts
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema migration

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```