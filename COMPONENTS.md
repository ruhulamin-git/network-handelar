# Component Structure

## Overview
The application has been refactored into modular, reusable components using shadcn/ui and custom components.

## Component Hierarchy

```
app/page.tsx (Main Page)
├── Header (components/Header.tsx)
├── HeroSection (components/HeroSection.tsx)
└── ChatWidget (components/ChatWidget.tsx)
```

## Components

### 1. **Header** (`components/Header.tsx`)
- Fixed navigation bar with dark navy background
- Logo with "NETWORK HANDLERS" branding
- Desktop navigation menu (Home, About, Services, Pages, Blog, Contact)
- Contact information with phone number
- "Get Started" CTA button using CustomButton
- Mobile responsive with hamburger menu
- Uses lucide-react icons (Menu, Phone)

### 2. **HeroSection** (`components/HeroSection.tsx`)
- Full-screen hero section with background image
- Content includes:
  - Tagline: "Empower your business by"
  - Main heading: "Building Better Experiences"
  - Description text
  - Two CTA buttons (Discover Our Services, Get In Touch)
- Uses CustomButton component with different variants
- GSAP animations applied via `.hero-text` class

### 3. **ChatWidget** (`components/ChatWidget.tsx`)
- Fixed position chat button (bottom-right)
- Cyan circular button with MessageCircle icon
- Hover effects and transitions
- Uses lucide-react MessageCircle icon

### 4. **CustomButton** (`components/ui/custom-button.tsx`)
- Extended shadcn button component
- Custom variants:
  - `primary`: Orange-to-red gradient
  - `cyan`: Cyan background
  - `outline`: Transparent with white border
  - `ghost`: Subtle hover effect
- Sizes: `sm`, `default`, `lg`, `icon`
- Optional `uppercase` prop for text transformation
- Optional `showArrow` prop to display arrow icon
- Built with class-variance-authority (CVA)

## Styling

### Custom Button Variants
```tsx
<CustomButton variant="primary" showArrow>Get Started</CustomButton>
<CustomButton variant="cyan" uppercase showArrow>Discover Our Services</CustomButton>
<CustomButton variant="outline" uppercase showArrow>Get In Touch</CustomButton>
```

### Color Scheme
- Primary: Orange (#f97316) to Red (#dc2626) gradient
- Accent: Cyan (#06b6d4)
- Dark Navy: #0a1628
- Text: White with various opacity levels

## Dependencies
- **shadcn/ui**: UI component library
- **lucide-react**: Icon library
- **class-variance-authority**: For variant-based styling
- **@radix-ui/react-slot**: For polymorphic components
- **GSAP**: Animation library
- **Lenis**: Smooth scrolling

## Usage

### Adding New Buttons
```tsx
import { CustomButton } from "@/components/ui/custom-button";

<CustomButton 
  variant="cyan" 
  size="lg" 
  uppercase 
  showArrow
>
  Click Me
</CustomButton>
```

### Customizing Components
Each component is self-contained and can be easily modified or extended. The CustomButton component uses CVA for easy variant management.

## Next Steps
- Add more sections (Services, About, Features, etc.)
- Create additional reusable components
- Add form components for contact section
- Implement navigation dropdowns
- Add footer component
