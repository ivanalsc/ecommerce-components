import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { ButtonHTMLAttributes, forwardRef } from "react"

type ButtonVariant = "default" | "secondary" | "ghost" | "icon"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isLoading?: boolean
}

const baseButtonStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2"

const variantStyles = {
  default: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-gray-100 text-black hover:bg-gray-200",
  ghost: "bg-transparent hover:bg-gray-100",
  icon: "p-2 bg-gray-100 hover:bg-gray-200 h-10 w-10",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", isLoading = false, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseButtonStyles,
          variantStyles[variant],
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
