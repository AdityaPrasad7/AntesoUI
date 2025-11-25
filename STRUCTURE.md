# Project Structure

This document outlines the folder structure and organization of the AntesoUI project.

## 📁 Directory Structure

```
AntesoUI/
├── app/                          # Next.js app directory
│   ├── (home)/                  # Home page (route: /)
│   │   └── page.tsx             # Home page component
│   ├── about/                   # About page (route: /about)
│   │   └── page.tsx             # About page component
│   ├── services/                # Services page (route: /services)
│   │   └── page.tsx             # Services page component
│   ├── technology/              # Technology page (route: /technology)
│   │   └── page.tsx             # Technology page component
│   ├── contact/                 # Contact page (route: /contact)
│   │   └── page.tsx             # Contact page component
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout
│   └── README.md                # App directory documentation
│
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components (shadcn/ui)
│   │   ├── primitives/         # Basic building blocks
│   │   ├── forms/               # Form components
│   │   ├── overlays/            # Modal/overlay components
│   │   ├── navigation/          # Navigation components
│   │   ├── feedback/            # User feedback components
│   │   ├── data-display/        # Data presentation
│   │   ├── layout/              # Layout components
│   │   └── index.ts             # Centralized exports
│   ├── layout/                  # Layout-specific components
│   │   ├── theme-provider.tsx
│   │   └── index.ts
│   ├── features/                # Feature-specific components
│   └── README.md                # Components documentation
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   ├── use-toast.ts             # Toast notification hook
│   └── index.ts                 # Centralized exports
│
├── lib/                          # Utility functions
│   └── utils.ts                 # Utility functions (cn, etc.)
│
├── public/                       # Static assets
│   ├── machines/                # Medical machine images
│   │   ├── cbct-machine.jpg
│   │   ├── ct-scan.jpg
│   │   ├── cath-lab.jpg
│   │   ├── c-arm.jpg
│   │   ├── fixed-xray.jpg
│   │   ├── mobile-xray.jpg
│   │   └── mammogram.jpg
│   └── [other assets]
│
├── styles/                       # Additional styles (if needed)
│   └── globals.css
│
├── components.json               # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── STRUCTURE.md                 # This file
```

## 📦 Component Organization

### UI Components (`components/ui/`)

Components are organized by functionality:

- **primitives/** - Basic components (Button, Label, Separator)
- **forms/** - Form inputs and controls
- **overlays/** - Modals, dialogs, tooltips
- **navigation/** - Menus, breadcrumbs, sidebars
- **feedback/** - Alerts, toasts, progress indicators
- **data-display/** - Cards, tables, badges, charts
- **layout/** - Tabs, carousels, scroll areas, resizable panels

### Import Examples

```tsx
// From centralized index
import { Button, Input, Card } from '@/components/ui'

// Or from specific folders
import { Button } from '@/components/ui/primitives/button'
import { Input } from '@/components/ui/forms/input'
import { Card } from '@/components/ui/data-display/card'
```

## 🎣 Hooks (`hooks/`)

All custom React hooks are located in the `hooks/` directory:

- `use-mobile.ts` - Detects mobile screen size
- `use-toast.ts` - Toast notification management

```tsx
import { useIsMobile, useToast } from '@/hooks'
```

## 📂 Public Assets (`public/`)

Static assets are organized by type:

- `machines/` - Medical equipment images
- Root level - Icons, logos, and other general assets

## 🎨 Styling

- `app/globals.css` - Global styles, animations, and theme variables
- `tailwind.config.ts` - Tailwind configuration with custom breakpoints

## 📝 Naming Conventions

### Files
- **Components**: PascalCase (e.g., `Button.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `use-mobile.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Assets**: kebab-case (e.g., `cbct-machine.jpg`)

### Components
- **Component names**: PascalCase (e.g., `Button`, `InputGroup`)
- **Props interfaces**: PascalCase with `Props` suffix (e.g., `ButtonProps`)
- **Type exports**: PascalCase (e.g., `ButtonVariant`)

## 🔄 Adding New Components

1. **Determine category** - Choose the appropriate subfolder in `components/ui/`
2. **Create component** - Use proper naming conventions
3. **Export** - Add to `components/ui/index.ts` for centralized imports
4. **Document** - Update `components/README.md` if adding new category
5. **Type** - Add proper TypeScript types and JSDoc comments

## 🔄 Adding New Hooks

1. Create hook file in `hooks/` directory
2. Export from `hooks/index.ts`
3. Follow naming convention: `use-[name].ts`
4. Add JSDoc comments for documentation

## 📸 Adding Images

1. **Machine images**: Place in `public/machines/`
2. **General assets**: Place in `public/` root
3. Use descriptive, kebab-case names
4. Reference in code: `/machines/cbct-machine.jpg`

## 🚀 Best Practices

1. **Keep components focused** - One responsibility per component
2. **Use TypeScript** - Proper typing for all components and hooks
3. **Document exports** - Add JSDoc comments for public APIs
4. **Follow structure** - Maintain the organized folder structure
5. **Update docs** - Keep README and STRUCTURE.md updated

## 📚 Additional Resources

- See `components/README.md` for detailed component documentation
- See `components.json` for shadcn/ui configuration
- See `tailwind.config.ts` for custom breakpoints and theme

