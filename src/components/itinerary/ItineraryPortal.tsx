import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  KeyRound,
  MapPin,
  Receipt,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";
import type { Locale } from "../../i18n/translations";

interface DayPlan {
  day: string;
  title: string;
  stay: string;
  highlights: string[];
}

interface CostLine {
  label: string;
  amount: string;
}

interface MapStop {
  name: string;
  nights: string;
  transfer: string;
}

interface PortalCopy {
  gateEyebrow: string;
  gateTitle: string;
  gateSubtitle: string;
  codeLabel: string;
  codePlaceholder: string;
  unlockBtn: string;
  demoBtn: string;
  invalidCode: string;
  backLink: string;
  changeCode: string;
  statusValid: string;
  tripTitle: string;
  tripDates: string;
  tripTravelers: string;
  itineraryHeading: string;
  stayLabel: string;
  mapHeading: string;
  mapSubtitle: string;
  costsHeading: string;
  totalLabel: string;
  volatilityNote: string;
  approveBtn: string;
  adjustBtn: string;
  days: DayPlan[];
  costs: CostLine[];
  totalAmount: string;
  stops: MapStop[];
}

const PORTAL_COPY: Record<Locale, PortalCopy> = {
  en: {
    gateEyebrow: "CLIENT PORTAL",
    gateTitle: "Access your custom itinerary",
    gateSubtitle:
      "Enter the private access code from your travel designer to view your day-by-day route, live cost breakdown, and map.",
    codeLabel: "Access code",
    codePlaceholder: "e.g. ITN-4829",
    unlockBtn: "Open itinerary",
    demoBtn: "Preview sample (ITN-4829)",
    invalidCode: "Code not found. Try ITN-4829 to preview the sample itinerary.",
    backLink: "Back to home",
    changeCode: "Switch code",
    statusValid: "Quote valid until Dec 5, 2026",
    tripTitle: "Kyoto & Hakone Heritage Route",
    tripDates: "Oct 12 – Oct 21, 2026 (9 nights)",
    tripTravelers: "2 Travelers · Boutique Tier",
    itineraryHeading: "Day-by-day itinerary",
    stayLabel: "Stay",
    mapHeading: "Route map",
    mapSubtitle: "Connected stops & estimated transfers",
    costsHeading: "Cost breakdown",
    totalLabel: "Estimated total (2 travelers)",
    volatilityNote:
      "Airfare and hotel rates fluctuate with market availability until confirmed with a deposit.",
    approveBtn: "Approve & lock quote",
    adjustBtn: "Request changes",
    days: [
      {
        day: "DAY 01",
        title: "Arrival in Tokyo & Ginza Evening",
        stay: "Hotel The Mitsui / Boutique Ginza",
        highlights: [
          "Private airport transfer with meet & greet",
          "Evening walk through Ginza & welcome izakaya dinner",
        ],
      },
      {
        day: "DAY 02–03",
        title: "Hakone Onsen & Mt. Fuji Views",
        stay: "Gora Kadan Ryokan (Private Onsen)",
        highlights: [
          "Scenic Romancecar train to Hakone",
          "Lake Ashi boat crossing & Open-Air Museum",
        ],
      },
      {
        day: "DAY 04–07",
        title: "Kyoto Temples, Arashiyama & Nara",
        stay: "Ace Hotel Kyoto / Higashiyama",
        highlights: [
          "Early-morning Fushimi Inari & private tea ceremony",
          "Arashiyama bamboo grove & Nishiki food walk",
        ],
      },
      {
        day: "DAY 08–09",
        title: "Osaka Gastronomy & Departure",
        stay: "Conrad Osaka",
        highlights: [
          "Dotonbori street food tour with local guide",
          "Private transfer to Kansai International Airport",
        ],
      },
    ],
    costs: [
      { label: "Boutique stays & ryokan (9 nights)", amount: "$3,420" },
      { label: "Shinkansen & private transfers", amount: "$780" },
      { label: "Private guides & cultural experiences", amount: "$940" },
      { label: "24/7 concierge & local taxes", amount: "$360" },
    ],
    totalAmount: "$5,500 USD",
    stops: [
      { name: "Tokyo", nights: "1N", transfer: "1h 25m train" },
      { name: "Hakone", nights: "2N", transfer: "2h 10m Shinkansen" },
      { name: "Kyoto", nights: "4N", transfer: "30m express" },
      { name: "Osaka", nights: "2N", transfer: "Departure" },
    ],
  },
  es: {
    gateEyebrow: "PORTAL DE CLIENTES",
    gateTitle: "Accede a tu itinerario a medida",
    gateSubtitle:
      "Ingresa el código privado que te compartió tu asesor para ver tu ruta día por día, desglose de costos y mapa.",
    codeLabel: "Código de acceso",
    codePlaceholder: "Ej. ITN-4829",
    unlockBtn: "Ver itinerario",
    demoBtn: "Ver ejemplo (ITN-4829)",
    invalidCode: "Código no encontrado. Prueba ITN-4829 para ver el itinerario de muestra.",
    backLink: "Volver al inicio",
    changeCode: "Cambiar código",
    statusValid: "Cotización vigente hasta el 5 dic 2026",
    tripTitle: "Ruta Tradición: Kioto y Hakone",
    tripDates: "12 oct – 21 oct 2026 (9 noches)",
    tripTravelers: "2 Viajeros · Nivel Boutique",
    itineraryHeading: "Itinerario día por día",
    stayLabel: "Hospedaje",
    mapHeading: "Mapa de la ruta",
    mapSubtitle: "Paradas conectadas y traslados estimados",
    costsHeading: "Desglose de costos",
    totalLabel: "Total estimado (2 viajeros)",
    volatilityNote:
      "Las tarifas aéreas y hoteleras cambian según disponibilidad del mercado hasta confirmar con depósito.",
    approveBtn: "Aprobar cotización",
    adjustBtn: "Pedir ajustes",
    days: [
      {
        day: "DÍA 01",
        title: "Llegada a Tokio y noche en Ginza",
        stay: "Hotel The Mitsui / Boutique Ginza",
        highlights: [
          "Traslado privado desde aeropuerto con asistencia",
          "Caminata nocturna por Ginza y cena izakaya",
        ],
      },
      {
        day: "DÍA 02–03",
        title: "Onsen en Hakone y vistas al Monte Fuji",
        stay: "Gora Kadan Ryokan (Onsen privado)",
        highlights: [
          "Tren panorámico Romancecar hacia Hakone",
          "Cruce por el lago Ashi y Museo al Aire Libre",
        ],
      },
      {
        day: "DÍA 04–07",
        title: "Templos de Kioto, Arashiyama y Nara",
        stay: "Ace Hotel Kyoto / Higashiyama",
        highlights: [
          "Fushimi Inari al amanecer y ceremonia del té privada",
          "Bosque de bambú de Arashiyama y ruta gastronómica",
        ],
      },
      {
        day: "DÍA 08–09",
        title: "Gastronomía en Osaka y regreso",
        stay: "Conrad Osaka",
        highlights: [
          "Tour culinario por Dotonbori con guía local",
          "Traslado privado al aeropuerto internacional de Kansai",
        ],
      },
    ],
    costs: [
      { label: "Hospedajes boutique y ryokan (9 noches)", amount: "$3,420" },
      { label: "Shinkansen y traslados privados", amount: "$780" },
      { label: "Guías privados y experiencias", amount: "$940" },
      { label: "Concierge 24/7 e impuestos locales", amount: "$360" },
    ],
    totalAmount: "$5,500 USD",
    stops: [
      { name: "Tokio", nights: "1N", transfer: "1h 25m tren" },
      { name: "Hakone", nights: "2N", transfer: "2h 10m Shinkansen" },
      { name: "Kioto", nights: "4N", transfer: "30m expreso" },
      { name: "Osaka", nights: "2N", transfer: "Salida" },
    ],
  },
};

const DEMO_CODE = "ITN-4829";

export function ItineraryPortal({ locale = "en" }: { locale?: Locale }) {
  const t = PORTAL_COPY[locale];
  const [codeInput, setCodeInput] = useState("");
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code")?.trim().toUpperCase();
    if (urlCode === DEMO_CODE) {
      setCodeInput(urlCode);
      setActiveCode(urlCode);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = codeInput.trim().toUpperCase();
    if (normalized === DEMO_CODE) {
      setError(false);
      setActiveCode(normalized);
      return;
    }
    setError(true);
  };

  const openDemo = () => {
    setCodeInput(DEMO_CODE);
    setError(false);
    setActiveCode(DEMO_CODE);
  };

  if (!activeCode) {
    return (
      <section className="mx-auto flex min-h-[calc(100svh-180px)] max-w-xl items-center px-6 pb-20 pt-32 md:px-8">
        <div className="w-full rounded-3xl border border-ink/10 bg-surface-elevated/55 p-7 sm:p-10">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-accent">
            <KeyRound className="size-3.5" aria-hidden="true" />
            {t.gateEyebrow}
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-ink">
            {t.gateTitle}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            {t.gateSubtitle}
          </p>

          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/75">
              {t.codeLabel}
              <input
                type="text"
                value={codeInput}
                onChange={(e) => {
                  setCodeInput(e.target.value);
                  if (error) setError(false);
                }}
                placeholder={t.codePlaceholder}
                className="rounded-xl border border-ink/15 bg-surface px-4 py-3 text-sm uppercase tracking-wider text-ink placeholder:normal-case placeholder:tracking-normal placeholder:text-ink/35 focus:border-brand-hover focus:outline-none"
              />
            </label>

            {error && (
              <p className="text-xs font-medium text-brand-accent" role="alert">
                {t.invalidCode}
              </p>
            )}

            <div className="mt-1 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="rounded-xl bg-brand px-6 py-3 text-xs font-bold tracking-wide text-ink shadow-lg shadow-brand/25 transition hover:bg-brand-hover"
              >
                {t.unlockBtn}
              </button>
              <button
                type="button"
                onClick={openDemo}
                className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-ink/10 px-4 py-3 text-xs font-semibold text-ink/85 transition hover:bg-ink/20"
              >
                <Sparkles className="size-3.5 text-brand-accent" aria-hidden="true" />
                {t.demoBtn}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-8 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-md bg-brand/20 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-brand-accent">
              {activeCode}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface-elevated px-3 py-1 text-[11px] font-medium text-ink/75">
              <CheckCircle2 className="size-3.5 text-brand-accent" aria-hidden="true" />
              {t.statusValid}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
            {t.tripTitle}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-ink/60">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" aria-hidden="true" />
              {t.tripDates}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="size-3.5" aria-hidden="true" />
              {t.tripTravelers}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setActiveCode(null)}
          className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-ink/10 px-4 py-2.5 text-xs font-semibold text-ink/80 transition hover:bg-ink/20 hover:text-ink"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          {t.changeCode}
        </button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-extrabold tracking-tight text-ink">
            {t.itineraryHeading}
          </h2>
          <div className="flex flex-col gap-4">
            {t.days.map((day) => (
              <article
                key={day.day}
                className="rounded-2xl border border-ink/10 bg-surface-elevated/50 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-brand-accent">
                    {day.day}
                  </span>
                  <span className="text-xs text-ink/55">
                    {t.stayLabel}: <strong className="font-semibold text-ink/80">{day.stay}</strong>
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-ink">{day.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5 text-sm text-ink/70">
                  {day.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-2xl border border-ink/10 bg-surface-elevated/50 p-6">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-brand-accent" aria-hidden="true" />
              <h2 className="text-base font-extrabold tracking-tight text-ink">
                {t.mapHeading}
              </h2>
            </div>
            <p className="mt-1 text-xs text-ink/55">{t.mapSubtitle}</p>

            <div className="mt-5 rounded-xl border border-ink/10 bg-surface p-4">
              <div className="flex flex-col gap-3">
                {t.stops.map((stop, idx) => (
                  <div key={stop.name} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <span className="size-2.5 rounded-full bg-brand-hover ring-4 ring-brand/20" />
                      {idx < t.stops.length - 1 && (
                        <span className="mt-1 h-5 w-px bg-ink/20" aria-hidden="true" />
                      )}
                    </div>
                    <div className="flex flex-1 items-center justify-between text-xs">
                      <span className="font-bold text-ink">
                        {stop.name}{" "}
                        <span className="font-normal text-ink/50">({stop.nights})</span>
                      </span>
                      <span className="text-ink/55">{stop.transfer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-surface-elevated/50 p-6">
            <div className="flex items-center gap-2">
              <Receipt className="size-4 text-brand-accent" aria-hidden="true" />
              <h2 className="text-base font-extrabold tracking-tight text-ink">
                {t.costsHeading}
              </h2>
            </div>

            <dl className="mt-5 flex flex-col gap-3 text-sm">
              {t.costs.map((line) => (
                <div key={line.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink/70">{line.label}</dt>
                  <dd className="font-semibold text-ink">{line.amount}</dd>
                </div>
              ))}
              <div className="mt-2 flex items-baseline justify-between border-t border-ink/10 pt-3">
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/60">
                  {t.totalLabel}
                </dt>
                <dd className="text-lg font-black text-ink">{t.totalAmount}</dd>
              </div>
            </dl>

            <p className="mt-4 flex items-start gap-2 rounded-xl border border-ink/10 bg-surface/70 p-3 text-xs leading-relaxed text-ink/60">
              <ShieldAlert className="mt-0.5 size-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
              <span>{t.volatilityNote}</span>
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-xl bg-brand px-4 py-3 text-xs font-bold text-ink transition hover:bg-brand-hover"
              >
                {t.approveBtn}
              </button>
              <button
                type="button"
                className="flex-1 rounded-xl border border-ink/15 bg-ink/10 px-4 py-3 text-xs font-semibold text-ink transition hover:bg-ink/20"
              >
                {t.adjustBtn}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ItineraryPortal;
