"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const customButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#d6fd70] text-[#131313] hover:shadow-lg",

        cyan: [
          // layout & clip
          "relative overflow-hidden group",
          // default look: lime bg, dark text, lime border
          "bg-[#ccff00] text-[#131313] ring-2 ring-[#d6fd70]",
          // ── fill layer: full-width black slab parked off the RIGHT ──
          // uses padding-aware inset so it truly covers wall-to-wall
          "before:absolute before:inset-0 before:content-[''] before:bg-[#131313] before:z-0",
          "before:translate-x-[102%]",
          "before:transition-transform before:duration-500 before:ease-in-out",
          "hover:before:translate-x-0",
          // text flips to white as fill arrives
          "transition-colors duration-500",
          "hover:text-white",
          // all direct children float above fill
          "[&>*]:relative [&>*]:z-10",
        ].join(" "),

        outline:
          "bg-[#d6fd70]  border-2 border-white/30 hover:border-white/50 text-[#131313] ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-6 md:px-4 py-3 md:py-1 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-10 py-2 text-base",
        icon: "h-10 w-10",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
      },
      uppercase: {
        true: "uppercase tracking-widest",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "full",
      uppercase: false,
    },
  }
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      uppercase,
      asChild = false,
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          customButtonVariants({ variant, size, rounded, uppercase, className })
        )}
        ref={ref}
        {...props}
      >
        {/* Text label */}
        <span className="relative z-10">{children}</span>

        {showArrow && (
          /**
           * The badge itself has NO background — it's transparent by default.
           * A lime disc is painted via a pseudo/inner span that also sits in
           * the z-10 layer, so the black fill sweeps UNDER it seamlessly.
           * On hover the disc colour inverts via group-hover.
           */
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
            {/* Disc — lime default, dark on hover */}
            <span
              className={cn(
                "absolute inset-0 rounded-full transition-colors duration-500",
                variant === "cyan"
                  ? "bg-[#131313] group-hover:bg-[#d6fd70]"
                  : "bg-[#131313]"
              )}
            />
            {/* Icon — lime default, dark on hover */}
            <ArrowUpRight
              className={cn(
                "relative z-10 h-4 w-4 transition-colors duration-500",
                variant === "cyan"
                  ? "text-[#d6fd70] group-hover:text-[#131313]"
                  : "text-white"
              )}
              strokeWidth={2.5}
            />
          </span>
        )}
      </Comp>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton, customButtonVariants };

/*
 * ─── USAGE ────────────────────────────────────────────────────────────────────
 *
 * <Link href="/services">
 *   <CustomButton
 *     variant="cyan"
 *     uppercase
 *     showArrow
 *     className="px-8 py-4 text-sm font-bold"
 *   >
 *     Get Started
 *   </CustomButton>
 * </Link>
 * ──────────────────────────────────────────────────────────────────────────────
 */