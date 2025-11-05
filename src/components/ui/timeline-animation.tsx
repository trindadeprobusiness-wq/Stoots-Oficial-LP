"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLDivElement>
  customVariants?: Variants
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ children, animationNum, timelineRef, customVariants, className, as: Component = "div" }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(contentRef, { once: true, margin: "-100px" })

    const defaultVariants: Variants = {
      visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: animationNum * 0.2,
          duration: 0.5,
        },
      },
      hidden: {
        filter: "blur(10px)",
        y: -20,
        opacity: 0,
      },
    }

    const variants = customVariants || defaultVariants

    return (
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        custom={animationNum}
        className={cn(className)}
      >
        {children}
      </motion.div>
    )
  }
)

TimelineContent.displayName = "TimelineContent"
