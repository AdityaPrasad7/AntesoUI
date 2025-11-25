# App Directory Structure

This directory follows Next.js 13+ App Router conventions with organized page folders.

## 📁 Directory Structure

```
app/
├── (home)/              # Home/Landing page (route: /)
│   └── page.tsx
├── about/               # About page (route: /about)
│   └── page.tsx
├── services/            # Services page (route: /services)
│   └── page.tsx
├── technology/          # Technology page (route: /technology)
│   └── page.tsx
├── contact/             # Contact page (route: /contact)
│   └── page.tsx
├── layout.tsx          # Root layout (applies to all pages)
└── globals.css         # Global styles
```

## 📄 Page Organization

Each page has its own folder for better organization:

### Route Groups `(folder-name)`
- Folders with parentheses are **route groups**
- They organize files without affecting the URL
- Example: `(home)` keeps the route as `/` instead of `/home`

### Regular Folders
- Folders without parentheses create routes
- Example: `about/` creates the `/about` route

## 🚀 Adding a New Page

1. **Create folder**: `app/[page-name]/`
2. **Create page**: `app/[page-name]/page.tsx`
3. **Route**: Automatically available at `/[page-name]`

### Example

```tsx
// app/products/page.tsx
export default function ProductsPage() {
  return <div>Products Page</div>
}
```

This creates the route: `/products`

## 📝 File Naming

- **`page.tsx`** - Creates a route (required)
- **`layout.tsx`** - Layout for that route segment
- **`loading.tsx`** - Loading UI
- **`error.tsx`** - Error UI
- **`not-found.tsx`** - 404 UI

## 🎯 Best Practices

1. **One page per folder** - Keep page-specific files together
2. **Use route groups** - For organization without URL changes
3. **Shared layouts** - Use `layout.tsx` for common UI
4. **Page-specific components** - Create `components/` folder inside page folder if needed

## 📚 Next.js App Router

- **File-based routing** - Folders create routes automatically
- **Nested layouts** - Each folder can have its own `layout.tsx`
- **Server Components** - Default, use `"use client"` for interactivity
- **Route Groups** - Use `(folder)` for organization

