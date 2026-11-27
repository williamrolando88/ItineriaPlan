export function ReviewsCarousel() {
  return (
    <section
      id="stories"
      aria-labelledby="reviews-heading"
      className="border-t border-ink/10 bg-surface px-6 py-24 text-ink md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent">
          TRAVELER STORIES
        </span>
        <h2
          id="reviews-heading"
          className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
        >
          Reviews Carousel
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink/60">
          Placeholder for upcoming traveler reviews and testimonials carousel.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-dashed border-ink/15 bg-ink/[0.03] p-6 text-sm text-ink/40"
            >
              Review card {item} placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
