import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/30",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20",
        ghost: "bg-transparent text-foreground hover:bg-muted hover:scale-105",
        outline: "border border-border bg-transparent hover:bg-muted hover:border-primary/50",
        gradient: "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/30",
        glass: "bg-background/10 backdrop-blur-md border border-white/10 text-foreground hover:bg-background/20 hover:border-primary/30",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-3",
        lg: "h-14 px-8",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <span className={cn(loading && "opacity-0")}>
          {children}
        </span>
        
        {/* Gradient overlay for default variant */}
        {variant === "default" && (
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
