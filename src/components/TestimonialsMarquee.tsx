import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsMarqueeProps {
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
}

export function TestimonialsMarquee({ testimonials }: TestimonialsMarqueeProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  if (prefersReducedMotion) {
    return (
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {testimonials.slice(0, 6).map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div 
        className="group flex overflow-hidden p-2 [--gap:0.75rem] sm:[--gap:1rem] flex-row [--duration:50s] sm:[--duration:40s]"
        aria-label="Testimonials carousel"
      >
        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] will-change-transform">
          {[...Array(4)].map((_, setIndex) => (
            testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`${setIndex}-${i}`}
                {...testimonial}
              />
            ))
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-secondary/30 sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-secondary/30 sm:block" />
    </div>
  )
}
