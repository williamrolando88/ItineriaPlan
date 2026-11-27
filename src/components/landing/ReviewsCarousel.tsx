import { COPY, type Locale } from "../../i18n/translations";

export function ReviewsCarousel({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale].reviews;
  return (
    <section
      id="stories"
      aria-labelledby="reviews-heading"
      className="border-t border-ink/10 bg-surface px-6 py-24 text-ink md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent">
          {t.eyebrow}
        </span>
        <h2
          id="reviews-heading"
          className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
        >
          {t.heading}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink/60">
          {t.subtitle}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.items.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-surface-elevated/45 p-6"
            >
              <blockquote className="text-sm leading-relaxed text-ink/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4 text-xs">
                <span className="block font-bold text-ink">{item.author}</span>
                <span className="text-ink/50">{item.trip}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
