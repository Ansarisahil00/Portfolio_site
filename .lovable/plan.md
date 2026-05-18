## Scope
All changes applied to existing `src/routes/index.tsx` and `src/routes/__root.tsx`. No rebuild.

## 1. Bug fixes & cleanup (in `src/routes/index.tsx`)
- Verify mobile hamburger toggle (Bootstrap collapse) opens/closes smoothly with all 6 links; auto-close on link click already exists — confirm working.
- Bump navbar `z-index` to `1050` and ensure hero blobs sit at `z-index: 0` so the dropdown sits above all sections.
- Add `html, body { overflow-x: hidden; max-width: 100vw; }` and audit blob/decoration elements for negative margins causing horizontal scroll at 375/768/1024/1440px.
- Remove any leftover unused CSS rules / JS handlers from previous prompts (purple-pink tokens, old gallery tilt code if any remain).
- Re-init AOS with `once: true, duration: 800, offset: 50` and call `AOS.refresh()` after dynamic sections mount so first-scroll triggers fire.
- Keep EmailJS wiring intact: `service_z8dmrf7` / `template_o4twtzn` / `_G982YW0HScWtP8S6`.

## 2. New section: Projects I've Built (between Services and Contact)
- Section id `projects`, heading "Projects I've Built" with cyan gradient underline.
- 2×2 grid (desktop) / 1-col (mobile) using Bootstrap `row`/`col-md-6`.
- Each card: glassmorphism + gradient border, Font Awesome icon top, bold title, 1-line description, tech badge row, "View Details" button opening a Bootstrap modal with the longer detail text.
- AOS `fade-up` with staggered delays.
- 4 projects exactly as specified: Business Portfolio Website, Inventory Management System, eCommerce Store, Custom CRM System (icons, descriptions, tech, modal copy per prompt).

## 3. New section: Testimonials (after Projects, before Contact)
- Section id `testimonials`, heading "What Clients Say" with cyan underline.
- 3 glassmorphism cards in a row (`col-md-4`) / stacked on mobile.
- Each card: `fa-quote-left` cyan icon, italic quote, bold name, role, 5 yellow `fa-star`s.
- AOS `fade-up` delays 100/200/300ms.
- Content: Rahul Sharma, Priya Menon, Arjun Patel — exact quotes per prompt.

## 4. Hero updates
- Add 3rd CTA "Download Resume" — `<a href="/resume.pdf" download>` styled as outlined cyan-border button, fills cyan on hover. Placed beside existing CTAs.
- Add typing effect in the hero subtitle cycling: "Full Stack Developer", "Laravel Expert", "Web App Builder", "Problem Solver" — vanilla JS in a `useEffect` (type → pause → delete → next).
- Subtle parallax on hero background via GSAP ScrollTrigger (`y: 100, scrub: true`).

## 5. SEO & head (in `src/routes/__root.tsx` via `head()`)
- Title: `Sahil Ansari — Full Stack Developer | Portfolio`
- Meta: description, keywords, author, robots `index, follow`, og:title, og:description, og:type=website (exact strings per prompt).
- Favicon link `/favicon.ico` (file added later by user).

## 6. UX additions (in `index.tsx`)
- **Preloader**: full-screen `#0A0F1E` overlay with cyan spinning circle, fades out after 1.5s via `useEffect` setTimeout removing a state flag.
- **Scroll-to-top button**: fixed bottom-right circular cyan button with white up arrow; visible after `scrollY > 300`; smooth `scrollTo({top:0, behavior:'smooth'})`.
- **GSAP stagger** on skills badges with ScrollTrigger (`scale: 0 → 1, stagger: 0.08`).

## 7. Design tweaks
- Active nav link: thin glowing cyan underline (`::after` with box-shadow).
- Section headings: centered 60×3px cyan gradient rounded underline (shared `.section-title` class).
- Contact submit button: idle cyan pulse-glow animation (keyframes on box-shadow).
- Footer social icons: hover `scale(1.2)` + cyan color with `transition: 0.3s`.
- Standardize section padding: `80px 0` desktop, `50px 0` mobile (single CSS rule on `section`).

## 8. Navbar
- Update links to: Home, About, Skills, Services, Projects, Contact — anchors `#home #about #skills #services #projects #contact`. Smooth scroll already handled by CSS `scroll-behavior: smooth`.

## Files changed
- `src/routes/index.tsx` — sections, hero CTAs, preloader, scroll-to-top, typing effect, GSAP, CSS additions, navbar links, cleanup.
- `src/routes/__root.tsx` — SEO meta + favicon link in `head()`.

## Out of scope
- `resume.pdf` and `favicon.ico` assets (user will add manually).
- No backend, no new packages — uses existing CDN GSAP/AOS/Bootstrap/Font Awesome + EmailJS.
