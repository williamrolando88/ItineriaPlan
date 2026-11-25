# Prompt Inicial para v0.dev - Fullscreen Hero Carousel

Este prompt está optimizado para generar en **v0.dev** (o herramientas similares con React + Tailwind + Framer Motion) un componente de Hero Carousel interactivo a pantalla completa basado en la estructura de los conceptos de Dribbble (*Foxico / Unknown Planet*).

---

```text
Create a pixel-perfect, interactive Fullscreen Travel Hero Carousel component inspired by modern Dribbble shots (Foxico / Unknown Planet) using React, Tailwind CSS, Framer Motion, and Lucide icons.

=======================================================
1. COMPONENT ARCHITECTURE & STATE:
=======================================================
- Array of exactly 5 travel destinations.
- State: `currentIndex` (0 to 4), auto-play interval every 5 seconds, auto-pause on mouse hover.
- Cross-fade full-screen background image with a dark gradient overlay (from-slate-950/90 via-slate-900/50 to-transparent) for crisp text contrast.

=======================================================
2. 5 DATA ITEMS (Use these exact mock objects):
=======================================================
1. ID: 1 | Tag: "INDONESIA" | Title: "BALI ARCHIPELAGO" | CTA: "EXPLORE TOUR"
   Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident."
   BgImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80"
   CardImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80"
   Rating: "4.9" | Price: "$1,200"

2. ID: 2 | Tag: "PERU" | Title: "MACHU PICCHU" | CTA: "START JOURNEY"
   Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies."
   BgImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1920&q=80"
   CardImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80"
   Rating: "4.8" | Price: "$1,450"

3. ID: 3 | Tag: "GREECE" | Title: "SANTORINI CLIFFS" | CTA: "BOOK TRIP"
   Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin."
   BgImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80"
   CardImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80"
   Rating: "4.9" | Price: "$1,800"

4. ID: 4 | Tag: "JAPAN" | Title: "KYOTO TEMPLES" | CTA: "DISCOVER MORE"
   Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia."
   BgImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80"
   CardImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
   Rating: "4.7" | Price: "$2,100"

5. ID: 5 | Tag: "ICELAND" | Title: "REYKJAVIK AURORA" | CTA: "VIEW EXPEDITION"
   Description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus."
   BgImage: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1920&q=80"
   CardImage: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80"
   Rating: "5.0" | Price: "$2,400"

=======================================================
3. VISUAL LAYOUT & EXACT INTERACTIONS:
=======================================================

A. TOP NAVBAR:
- Logo "FOXICO" with a minimal flame/fox icon on the left.
- Center navigation links: "Destinations", "Tours", "Stories", "Contact" in semi-transparent white text.
- Right: Circular white search button and a hamburger menu icon.

B. LEFT VERTICAL STEP INDICATOR (Synced to the 5 destinations):
- Fixed on the left margin (px-8).
- A vertical thin line connecting exactly 5 clickable dots representing the 5 slides.
- The active dot highlights in bright blue (#3B82F6) with scale-125 and smoothly moves down as slides advance.
- Below the line, display the counter: "01 / 05" (updated dynamically).
- Clicking any dot immediately sets `currentIndex` to that slide.

C. MAIN HERO CONTENT (Left Column with Upward Text Transition):
- Wrap this content in Framer Motion `<AnimatePresence mode="wait">`.
- TRANSITION REQUIREMENT: When advancing to the next slide, the outgoing text must scroll/slide UP and fade out (exit: { opacity: 0, y: -40 }). The new incoming text must enter from below and slide UP into position (initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }).
- Elements inside the text block:
  1. Small pill tag badge (e.g. "INDONESIA") in rounded-md bg-blue-600 text-white text-xs font-bold tracking-wider px-2.5 py-1.
  2. Massive bold uppercase title: font-black text-5xl md:text-7xl tracking-tight text-white leading-none mt-2.
  3. Description paragraph: 4 to 6 lines of the lorem text above, in text-white/75 text-sm md:text-base max-w-lg leading-relaxed mt-4.
  4. CTA Button: rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 mt-6 inline-flex items-center gap-2 shadow-lg shadow-blue-600/30.
  5. Social media links (Facebook, Twitter, Instagram) in the bottom-left corner.

D. RIGHT-SIDE CARDS CAROUSEL (Preview of Upcoming Destinations):
- A horizontal flex track displaying preview cards for the other 4 upcoming destinations.
- Each card:
  - Width 200px, height 300px, rounded-2xl overflow-hidden, relative border border-white/10.
  - Full-cover image, dark bottom gradient, and destination title + tag.
  - Top right corner: Small circular white button with a bookmark icon.
  - Bottom: Rating stars with score (e.g. ★ 4.9).
  - Clicking any preview card immediately transitions to that slide.
- Bottom under the cards:
  - Two circular glassmorphism navigation buttons (< and >) with `backdrop-blur-md bg-white/15 hover:bg-white/25` to manually trigger next/prev.
  - Slide indicator line on bottom right: "01 ————— 05".

Make the entire component responsive, self-contained, and ready to preview.
```
