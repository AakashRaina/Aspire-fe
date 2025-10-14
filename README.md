# Aspire - FE coding challenge

## 🌐 Live Demo

**Live Application**: [https://aakash-aspire.netlify.app/](https://aakash-aspire.netlify.app/)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd aspire

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🏗️ Tech Stack

### Core

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with ShadCN
- **Lucide React** - Icon library

### State Management

- **Zustand** - Lightweight state management

### Components

- **Embla Carousel** - Touch-friendly carousel
- **React Modal Sheet** - Mobile-friendly bottomsheet

## 🎨 UI Components

Custom components built with shadcn/ui:

- Tabs
- Accordion
- Alert Dialog
- Select Input
- Button
- Spinner

## 📁 Project Structure

```
src/
├── components/ui/     # Reusable UI components
├── view/             # Page components
├── common/           # API, types, utilities
├── store/            # Zustand state management
├── hooks/            # Custom React hooks
└── assets/           # Images and icons
```

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `1024px+`

## 🚀 Deployment

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.
