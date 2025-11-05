"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  children: string;
  animation?: "slideUp" | "fadeIn" | "slideDown";
  by?: "word" | "character";
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export const TextAnimate = ({
  children,
  animation = "slideUp",
  by = "word",
  className,
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.08,
}: TextAnimateProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  // Dividir texto em palavras ou caracteres
  const items = by === "word" 
    ? children.split(" ") 
    : children.split("");

  // Configurações de animação baseadas no tipo
  const getAnimationVariants = () => {
    switch (animation) {
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      case "slideDown":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        };
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getAnimationVariants();

  // Se o usuário preferir redução de movimento, renderizar sem animação
  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          className="inline-block will-change-transform"
          style={{ transform: "translateZ(0)" }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {item}
          {by === "word" && index < items.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </span>
  );
};
