import * as React from "react"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui 2/button"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-scroll rounded-md scroll-smooth py-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselContent.displayName = "CarouselContent"

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("snap-start shrink-0 w-full first:pl-6 last:pr-6", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselItem.displayName = "CarouselItem"

interface CarouselPreviousProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-2 top-1/2 z-10 -translate-y-1/2 h-8 w-8 rounded-full opacity-75 hover:opacity-100 disabled:opacity-25",
          className
        )}
        {...props}
        ref={ref}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = "CarouselPrevious"

interface CarouselNextProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-2 top-1/2 z-10 -translate-y-1/2 h-8 w-8 rounded-full opacity-75 hover:opacity-100 disabled:opacity-25",
          className
        )}
        {...props}
        ref={ref}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    )
  }
)
CarouselNext.displayName = "CarouselNext"

interface CarouselIndicatorsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const CarouselIndicators = React.forwardRef<HTMLDivElement, CarouselIndicatorsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-4 left-0 right-0 flex justify-center space-x-2",
          className
        )}
        {...props}
      />
    )
  }
)
CarouselIndicators.displayName = "CarouselIndicators"

interface CarouselIndicatorProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

const CarouselIndicator = React.forwardRef<HTMLButtonElement, CarouselIndicatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-2 w-2 rounded-full bg-gray-300 opacity-50 hover:opacity-75 data-[active]:opacity-100 data-[active]:bg-gray-500 transition-opacity",
          className
        )}
        {...props}
      />
    )
  }
)
CarouselIndicator.displayName = "CarouselIndicator"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
  CarouselIndicator,
}
