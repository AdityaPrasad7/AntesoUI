# Components Structure

This directory contains all reusable components for the application, organized by purpose and functionality.

## Directory Structure

```
components/
├── ui/                          # Base UI components (shadcn/ui)
│   ├── primitives/              # Basic primitive components
│   │   ├── button.tsx
│   │   ├── label.tsx
│   │   └── separator.tsx
│   ├── forms/                   # Form-related components
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── checkbox.tsx
│   │   ├── radio-group.tsx
│   │   ├── switch.tsx
│   │   ├── form.tsx
│   │   ├── field.tsx
│   │   └── input-group.tsx
│   ├── overlays/                # Overlay components (modals, popovers, etc.)
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   ├── drawer.tsx
│   │   ├── popover.tsx
│   │   ├── tooltip.tsx
│   │   ├── hover-card.tsx
│   │   ├── alert-dialog.tsx
│   │   └── context-menu.tsx
│   ├── navigation/              # Navigation components
│   │   ├── navigation-menu.tsx
│   │   ├── menubar.tsx
│   │   ├── breadcrumb.tsx
│   │   └── sidebar.tsx
│   ├── feedback/                # User feedback components
│   │   ├── alert.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── sonner.tsx
│   │   ├── progress.tsx
│   │   ├── skeleton.tsx
│   │   └── spinner.tsx
│   ├── data-display/            # Data presentation components
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── chart.tsx
│   │   ├── empty.tsx
│   │   └── item.tsx
│   └── layout/                  # Layout components
│       ├── scroll-area.tsx
│       ├── resizable.tsx
│       ├── aspect-ratio.tsx
│       └── tabs.tsx
├── layout/                      # Layout-specific components
│   └── theme-provider.tsx
├── features/                    # Feature-specific components
│   └── (feature-specific components)
└── README.md                    # This file
```

## Component Categories

### Primitives (`ui/primitives/`)
Basic building blocks that are used throughout the application.
- **button.tsx** - Button component with variants
- **label.tsx** - Form label component
- **separator.tsx** - Visual separator component

### Forms (`ui/forms/`)
All form-related input and control components.
- **input.tsx** - Text input field
- **textarea.tsx** - Multi-line text input
- **select.tsx** - Dropdown select component
- **checkbox.tsx** - Checkbox input
- **radio-group.tsx** - Radio button group
- **switch.tsx** - Toggle switch
- **form.tsx** - Form wrapper with validation
- **field.tsx** - Form field wrapper
- **input-group.tsx** - Input with addons
- **input-otp.tsx** - OTP input component

### Overlays (`ui/overlays/`)
Components that appear above the main content.
- **dialog.tsx** - Modal dialog
- **sheet.tsx** - Slide-out panel
- **drawer.tsx** - Bottom drawer
- **popover.tsx** - Popover tooltip
- **tooltip.tsx** - Tooltip component
- **hover-card.tsx** - Hover card
- **alert-dialog.tsx** - Alert dialog
- **context-menu.tsx** - Right-click menu

### Navigation (`ui/navigation/`)
Navigation and menu components.
- **navigation-menu.tsx** - Main navigation menu
- **menubar.tsx** - Menu bar component
- **breadcrumb.tsx** - Breadcrumb navigation
- **sidebar.tsx** - Sidebar component

### Feedback (`ui/feedback/`)
Components that provide user feedback.
- **alert.tsx** - Alert message
- **toast.tsx** - Toast notification
- **toaster.tsx** - Toast container
- **sonner.tsx** - Sonner toast variant
- **progress.tsx** - Progress indicator
- **skeleton.tsx** - Loading skeleton
- **spinner.tsx** - Loading spinner

### Data Display (`ui/data-display/`)
Components for displaying data and content.
- **card.tsx** - Card container
- **table.tsx** - Data table
- **badge.tsx** - Badge component
- **avatar.tsx** - User avatar
- **chart.tsx** - Chart component
- **empty.tsx** - Empty state
- **item.tsx** - List item

### Layout (`ui/layout/`)
Layout and structure components.
- **scroll-area.tsx** - Custom scrollable area
- **resizable.tsx** - Resizable panels
- **aspect-ratio.tsx** - Aspect ratio container
- **tabs.tsx** - Tab navigation
- **pagination.tsx** - Pagination controls
- **carousel.tsx** - Carousel/slider
- **calendar.tsx** - Calendar component
- **slider.tsx** - Range slider
- **toggle.tsx** - Toggle button
- **toggle-group.tsx** - Toggle group
- **button-group.tsx** - Button group
- **command.tsx** - Command palette
- **kbd.tsx** - Keyboard key display
- **collapsible.tsx** - Collapsible content

## Usage

### Importing Components

```tsx
// Primitives
import { Button } from '@/components/ui/primitives/button'
import { Label } from '@/components/ui/primitives/label'

// Forms
import { Input } from '@/components/ui/forms/input'
import { Select } from '@/components/ui/forms/select'

// Overlays
import { Dialog } from '@/components/ui/overlays/dialog'
import { Tooltip } from '@/components/ui/overlays/tooltip'

// Navigation
import { NavigationMenu } from '@/components/ui/navigation/navigation-menu'

// Feedback
import { Alert } from '@/components/ui/feedback/alert'
import { Toast } from '@/components/ui/feedback/toast'

// Data Display
import { Card } from '@/components/ui/data-display/card'
import { Table } from '@/components/ui/data-display/table'

// Layout
import { ScrollArea } from '@/components/ui/layout/scroll-area'
```

## Naming Conventions

- **File names**: Use kebab-case (e.g., `input-group.tsx`)
- **Component names**: Use PascalCase (e.g., `InputGroup`)
- **Props interfaces**: Use PascalCase with `Props` suffix (e.g., `ButtonProps`)
- **Type exports**: Use PascalCase (e.g., `ButtonVariant`)

## Adding New Components

1. Determine the appropriate category folder
2. Create the component file with proper naming
3. Export the component as default or named export
4. Update this README if adding a new category
5. Add proper TypeScript types and JSDoc comments

## Notes

- All UI components are based on shadcn/ui
- Components use Tailwind CSS for styling
- Components follow the design system defined in `app/globals.css`
- Hooks are located in the `/hooks` directory, not in components

