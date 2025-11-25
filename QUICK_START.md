# Quick Start Guide

## 📁 Folder Structure Overview

### Components Organization

```
components/
├── ui/                    # Base UI components
│   ├── primitives/        # Button, Label, Separator
│   ├── forms/            # Input, Select, Checkbox, etc.
│   ├── overlays/          # Dialog, Sheet, Tooltip, etc.
│   ├── navigation/       # NavigationMenu, Sidebar, etc.
│   ├── feedback/          # Alert, Toast, Progress, etc.
│   ├── data-display/      # Card, Table, Badge, etc.
│   └── layout/            # Tabs, Carousel, ScrollArea, etc.
├── layout/                # ThemeProvider, etc.
└── features/              # Feature-specific components
```

### Where to Place Files

| File Type | Location | Example |
|-----------|----------|---------|
| UI Component | `components/ui/[category]/` | `components/ui/primitives/button.tsx` |
| Custom Hook | `hooks/` | `hooks/use-mobile.ts` |
| Layout Component | `components/layout/` | `components/layout/theme-provider.tsx` |
| Feature Component | `components/features/` | `components/features/services-carousel.tsx` |
| Machine Images | `public/machines/` | `public/machines/cbct-machine.jpg` |
| Utilities | `lib/` | `lib/utils.ts` |

## 🚀 Common Tasks

### Adding a New UI Component

1. Determine category (primitives, forms, overlays, etc.)
2. Create file: `components/ui/[category]/[component-name].tsx`
3. Add export to: `components/ui/index.ts`
4. Import: `import { ComponentName } from '@/components/ui'`

### Adding a New Hook

1. Create file: `hooks/use-[name].ts`
2. Add export to: `hooks/index.ts`
3. Import: `import { useHookName } from '@/hooks'`

### Adding Machine Images

1. Place images in: `public/machines/`
2. Use kebab-case naming: `cbct-machine.jpg`
3. Reference in code: `/machines/cbct-machine.jpg`

### Import Examples

```tsx
// UI Components (from centralized index)
import { Button, Input, Card, Dialog } from '@/components/ui'

// Or from specific folders
import { Button } from '@/components/ui/primitives/button'
import { Input } from '@/components/ui/forms/input'

// Hooks
import { useIsMobile, useToast } from '@/hooks'

// Layout Components
import { ThemeProvider } from '@/components/layout'

// Utilities
import { cn } from '@/lib/utils'
```

## 📝 Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `InputGroup.tsx`)
- **Hooks**: camelCase with `use` prefix (`use-mobile.ts`, `use-toast.ts`)
- **Files**: kebab-case for assets (`cbct-machine.jpg`)
- **Folders**: kebab-case (`data-display/`, `input-group/`)

## 🔍 Finding Components

| Need | Look in |
|------|---------|
| Basic button/label | `components/ui/primitives/` |
| Form inputs | `components/ui/forms/` |
| Modals/dialogs | `components/ui/overlays/` |
| Menus/navigation | `components/ui/navigation/` |
| Alerts/toasts | `components/ui/feedback/` |
| Cards/tables | `components/ui/data-display/` |
| Tabs/carousels | `components/ui/layout/` |

## 📚 Documentation

- **Component Details**: See `components/README.md`
- **Full Structure**: See `STRUCTURE.md`
- **shadcn/ui Config**: See `components.json`

