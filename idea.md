# AURA Website Idea (Completed)

## 1) Project Vision
Create an original luxury fragrance and beauty landing website for the AURA brand using existing in-house assets in this workspace. The experience should feel cinematic, premium, and editorial, while staying lightweight and fast.

Core concept:
- "Quiet luxury" visual direction: deep blacks, ivory highlights, restrained gold accents.
- Strong story-first layout: emotion first, products second.
- Mobile-first performance with elegant transitions.

## 2) Brand Positioning
Brand mood:
- Refined, modern, intimate, high-end.
- Not loud or flashy.

Target audience:
- 20-40, beauty/fragrance buyers.
- Interested in premium gifts, aesthetics, and routine rituals.

Value proposition:
- Premium scent and beauty experience.
- Clear product details, strong visual trust, and elevated branding.

## 3) Real Asset Mapping (Current Workspace)
Use the existing structure (do not rename manually in the concept):

- Root video: `video.mp4` (hero background video)
- Materials folder: `materials/`
- Product app/mockups: `materials/APP/`
- Product details: `materials/Chi tiết sản phẩm/`
- Product box: `materials/Hộp sản phẩm/`
- Product color variants: `materials/Màu sản phẩm/`
- Fragrance tube assets: `materials/Ống hương/`
- Model images: `materials/ảnh với model/`
- Other visuals:
  - `materials/Mock-up chính.png`
  - `materials/Quy trình sử dụng sản phẩm.png`
  - `materials/Slide giới thiệu sản phẩm.png`

If any section lacks suitable assets, use placeholders and mark with TODO in implementation.

## 4) Main Product Goal
Build a single-page conversion-focused luxury homepage that:
- Communicates premium brand identity in the first 5 seconds.
- Highlights 3-6 hero products/collections.
- Makes product story and routine clear.
- Captures leads through newsletter/signup CTA.

Success signals:
- Fast loading on mobile.
- Clear CTA visibility above the fold.
- Strong visual coherence across all sections.

## 5) Technical Scope
Tech stack:
- HTML5
- CSS3
- Vanilla JavaScript

Constraints:
- No React/Next.js/TypeScript/Tailwind.
- No external UI framework.

Implementation standards:
- Semantic HTML sections.
- Reusable CSS tokens (color, spacing, typography, radius, motion).
- Simple JS modules for interactions (menu, reveal-on-scroll, slider).
- Responsive breakpoints for mobile/tablet/desktop.

## 6) Website Structure (Final)
1. Hero (Fullscreen)
- Use `video.mp4` as background.
- Autoplay + muted + loop + playsinline.
- Dark gradient overlay for readability.
- Headline, subhead, 2 CTAs (Shop Now / Discover Story).

2. Signature Collection
- Featured product cards (3-6 items).
- Hover zoom + quick details.
- Category labels: Perfume, Makeup, Skincare, Limited.

3. Brand Story
- Editorial split layout with model imagery.
- Text blocks: heritage, craft, sensorial philosophy.

4. Product Ritual / How To Use
- Use process visual (`Quy trình sử dụng sản phẩm.png`).
- Step-by-step ritual section with icons/text.

5. Collection Showcase
- Alternating image/text storytelling rows.
- Pull assets from product detail, color, box, and tube folders.

6. Campaign Highlight
- Secondary media block with cinematic styling.
- Optional video or still campaign card + CTA.

7. Testimonials / Beauty Quotes
- Minimal slider with short, elegant quotes.

8. Newsletter + Footer
- Email signup panel.
- Footer navigation, social links, contact info.

## 7) Content Direction
Tone of voice:
- Confident, poetic, concise.
- Premium language without exaggeration.

Copy style examples:
- Short headlines (3-8 words).
- Supporting text 1-2 lines.
- CTA verbs: Discover, Explore, Shop, Experience.

Content fallback rules:
- If missing copy, generate elegant placeholders.
- Keep paragraph length short for luxury feel.

## 8) Design System Direction
Color tokens (initial):
- `--black: #0d0d0d`
- `--ivory: #f7f2e8`
- `--champagne: #d6c3a1`
- `--muted-gold: #b49a6b`
- `--smoke: #8a8a8a`

Typography suggestion:
- Serif display for headings.
- Clean sans-serif for body and UI labels.

Visual principles:
- High contrast hierarchy.
- Generous spacing.
- Limited but meaningful animation.

## 9) Motion & Interaction
Use subtle cinematic motion only:
- Fade + upward reveal on scroll.
- Parallax-lite movement for large visuals.
- Soft hover transitions on cards/buttons.
- Smooth anchor scrolling.

Performance guardrails:
- Avoid heavy JS animation libraries.
- Prefer CSS transforms/opacity.

## 10) Accessibility + SEO Baseline
Accessibility:
- Sufficient text contrast.
- Keyboard-focus styles.
- Alt text on all images.
- Respect reduced-motion preference.

SEO:
- Proper title + description.
- Open Graph tags.
- Structured heading hierarchy (`h1` to `h3`).

## 11) File/Folder Plan for Build
Recommended implementation structure:

```bash
/index.html
/css
  /base.css
  /components.css
  /sections.css
/js
  /main.js
  /slider.js
/materials
/video.mp4
```

## 12) Non-Negotiables
Do not:
- Copy Dior or any other brand code/text/layout pixel-by-pixel.
- Use copyrighted third-party assets without rights.
- Over-design with excessive effects.

Do:
- Keep the output original.
- Use only local project assets.
- Prioritize quality, readability, and performance.

## 13) Final Definition of Done
The idea is complete when the final page:
- Feels like a world-class luxury beauty homepage.
- Uses the current local asset structure correctly.
- Works smoothly on mobile and desktop.
- Delivers an original premium brand story with clear conversion CTAs.

## 14) Full Implementation Checklist (Order + Time Estimates)

Estimation model:
- 1 person, intermediate frontend level, static site only.
- Includes build, QA, and refinements.
- Does not include backend/email service integration.

Total estimated effort:
- Fast track: 24-28 hours
- Standard quality pass: 30-36 hours

### Phase A - Foundation and Planning (3-4 hours)
- [ ] A1. Confirm final section order and wireframe flow (45-60m)
- [ ] A2. Audit all assets in materials and map each to sections (60-75m)
- [ ] A3. Define design tokens: colors, spacing, type scale, motion durations (45-60m)
- [ ] A4. Prepare copy draft for all section headings and CTA labels (30-45m)

Output of phase:
- Locked structure, locked visual direction, and clear asset-to-section mapping.

### Phase B - Project Setup and Architecture (2-3 hours)
- [ ] B1. Create final folder structure and base files (20-30m)
- [ ] B2. Build semantic HTML skeleton with all sections (40-50m)
- [ ] B3. Add base CSS reset, variables, typography, and utilities (35-45m)
- [ ] B4. Add starter JS module structure (menu, reveal, slider placeholders) (20-30m)

Output of phase:
- Runnable skeleton with stable structure and reusable style system.

### Phase C - Core UI Build (10-12 hours)
- [ ] C1. Hero section with video.mp4, overlay, headline, and CTAs (1.5-2h)
- [ ] C2. Signature collection card grid with hover interactions (1.5-2h)
- [ ] C3. Brand story split layout with model imagery (1-1.5h)
- [ ] C4. Product ritual section using process image and steps (1-1.5h)
- [ ] C5. Collection showcase alternating blocks (1.5-2h)
- [ ] C6. Campaign highlight section (0.75-1h)
- [ ] C7. Testimonials/quotes slider UI + content states (1.5-2h)
- [ ] C8. Newsletter and footer (1-1.5h)

Output of phase:
- Full visual page in place, desktop and mobile layout complete.

### Phase D - Interaction and Motion (3-4.5 hours)
- [ ] D1. Scroll reveal animations with intersection observer (45-60m)
- [ ] D2. Card hover polish and subtle parallax-lite effects (45-60m)
- [ ] D3. Smooth anchor navigation and sticky header behavior (35-50m)
- [ ] D4. Testimonials slider behavior (auto + manual controls) (45-60m)
- [ ] D5. Reduced motion fallback support (20-30m)

Output of phase:
- Cinematic but restrained motion system, consistent across sections.

### Phase E - Responsive and Accessibility Pass (4-5 hours)
- [ ] E1. Mobile breakpoint pass for all sections (1.5-2h)
- [ ] E2. Tablet layout tuning and spacing corrections (45-60m)
- [ ] E3. Keyboard navigation and visible focus styles (45-60m)
- [ ] E4. Contrast checks and text readability improvements (35-50m)
- [ ] E5. Alt text and semantic heading cleanup (20-30m)

Output of phase:
- Reliable UX on phone/tablet/desktop with accessibility baseline met.

### Phase F - Performance, SEO, and Final Polish (4-5 hours)
- [ ] F1. Optimize media loading strategy (poster, preload metadata, lazy images) (60-75m)
- [ ] F2. Add SEO metadata, Open Graph, and social preview basics (30-45m)
- [ ] F3. Trim CSS/JS, remove dead styles, reduce layout shift risks (45-60m)
- [ ] F4. Add loading states and graceful fallbacks for missing assets (45-60m)
- [ ] F5. Final visual polish and consistency pass (45-60m)

Output of phase:
- Production-ready static landing page with strong Lighthouse potential.

### Phase G - QA and Handover (3-3.5 hours)
- [ ] G1. Cross-browser test: Safari, Chrome, mobile Safari/Chrome (60-75m)
- [ ] G2. Fix regression issues from responsive and animation tests (45-60m)
- [ ] G3. Final content proofread and CTA consistency check (25-35m)
- [ ] G4. Prepare README usage notes and TODO asset replacement list (35-45m)

Output of phase:
- Stable handoff build with documented known gaps and replacements.

## 15) Suggested Execution Schedule (5 Days)

Day 1 (6-7h):
- Complete Phase A + Phase B
- Start C1 and C2

Day 2 (6-7h):
- Finish remaining Phase C sections

Day 3 (5-6h):
- Complete Phase D
- Begin Phase E mobile pass

Day 4 (6-7h):
- Finish Phase E
- Complete Phase F

Day 5 (4-5h):
- Complete Phase G
- Buffer for final fixes and presentation

## 16) Critical Path (Must-Do First)
The following sequence should not be reordered:
1. Asset audit and section mapping
2. Semantic structure and CSS token setup
3. Hero and core section layouts
4. Responsive pass
5. Accessibility and SEO pass
6. Performance optimization
7. Final QA

If timeline is tight, reduce complexity in animations before cutting responsive or accessibility work.

## 17) Risk and Buffer Planning
Main risks:
- Inconsistent asset dimensions causing layout shifts
- Heavy hero video impacting mobile performance
- Typography mismatch between devices

Buffer recommendation:
- Add 15-20 percent schedule buffer
- Reserve at least 3 hours at the end for bug fixes only

## 18) Completion Checklist for Sign-off
- [ ] All 8 sections implemented and visually consistent
- [ ] Hero video works on mobile with autoplay muted loop
- [ ] No broken image/video paths
- [ ] Responsive pass complete for phone/tablet/desktop
- [ ] Keyboard and focus accessibility checks complete
- [ ] SEO title/description/Open Graph present
- [ ] Lighthouse quality pass performed
- [ ] README and TODO asset list completed

## 14) Full Implementation Checklist (Order + Time Estimates)

### A. Planning and Setup
1. Confirm scope and freeze section list
- Output: locked page sections and content map.
- Estimate: 0.5 hour.

2. Create project scaffold
- Tasks: create `index.html`, `css/base.css`, `css/components.css`, `css/sections.css`, `js/main.js`, `js/slider.js`.
- Output: runnable static skeleton.
- Estimate: 0.5-1 hour.

3. Build asset inventory sheet
- Tasks: map each available file in `materials/` to target section.
- Output: asset placement matrix and missing asset TODO list.
- Estimate: 1-1.5 hours.

Subtotal A: 2-3 hours.

### B. Foundation Layer
4. Semantic HTML structure
- Tasks: create all major sections, heading hierarchy, anchors.
- Output: complete semantic wireframe in HTML.
- Estimate: 1-1.5 hours.

5. Design tokens and base styles
- Tasks: define color variables, spacing scale, typography scale, utility classes.
- Output: stable visual system for all sections.
- Estimate: 1-1.5 hours.

6. Global responsive system
- Tasks: mobile-first breakpoints, container widths, section paddings.
- Output: consistent responsive behavior.
- Estimate: 1-1.5 hours.

Subtotal B: 3-4.5 hours.

### C. Core Section Build (Critical Path)
7. Hero video section
- Tasks: implement `video.mp4` background, overlay, headline, CTAs.
- Output: fully working cinematic hero.
- Estimate: 1.5-2.5 hours.

8. Signature collection cards
- Tasks: product grid/cards, hover states, category labels.
- Output: high-end product highlight block.
- Estimate: 1.5-2.5 hours.

9. Brand story section
- Tasks: editorial split layout, copy blocks, imagery composition.
- Output: brand narrative section.
- Estimate: 1-2 hours.

10. Product ritual section
- Tasks: integrate process image, create step-by-step flow.
- Output: ritual/how-to-use module.
- Estimate: 1-1.5 hours.

11. Collection showcase rows
- Tasks: alternating image-text rows and visual rhythm.
- Output: immersive storytelling block.
- Estimate: 1.5-2.5 hours.

12. Campaign highlight block
- Tasks: campaign media block with CTA and supporting text.
- Output: campaign section ready.
- Estimate: 1-1.5 hours.

13. Testimonials slider
- Tasks: lightweight slider logic in `js/slider.js` and UI states.
- Output: functional quote slider.
- Estimate: 1.5-2 hours.

14. Newsletter and footer
- Tasks: signup module, footer nav, social/contact.
- Output: closing conversion + navigation block.
- Estimate: 1-1.5 hours.

Subtotal C: 10-15.5 hours.

### D. Motion and Interaction Polish
15. Scroll reveal and micro-interactions
- Tasks: reveal-on-scroll, subtle hover transitions, smooth anchor behavior.
- Output: polished interaction layer.
- Estimate: 1.5-2.5 hours.

16. Reduced motion and interaction fallback
- Tasks: `prefers-reduced-motion` handling, simplify motion for accessibility.
- Output: accessible animation behavior.
- Estimate: 0.5-1 hour.

Subtotal D: 2-3.5 hours.

### E. Performance, Accessibility, SEO
17. Media optimization pass
- Tasks: image compression, lazy loading, correct dimensions, preload strategy for hero video.
- Output: faster first render and smoother scrolling.
- Estimate: 1.5-2.5 hours.

18. Accessibility pass
- Tasks: keyboard navigation, focus states, alt text, contrast checks.
- Output: accessible baseline compliance.
- Estimate: 1-2 hours.

19. SEO metadata and social tags
- Tasks: title, description, OG tags, structured headings review.
- Output: discoverability-ready markup.
- Estimate: 0.5-1 hour.

Subtotal E: 3-5.5 hours.

### F. QA and Finalization
20. Cross-device QA
- Tasks: test key breakpoints and major browsers, fix layout regressions.
- Output: stable responsive page.
- Estimate: 1.5-2.5 hours.

21. Final content refinement
- Tasks: tighten copy length, CTA wording, spacing rhythm.
- Output: premium final polish.
- Estimate: 1-1.5 hours.

22. Documentation and handoff
- Tasks: create README with run/setup notes, asset replacement TODO list.
- Output: clean handoff package.
- Estimate: 0.5-1 hour.

Subtotal F: 3-5 hours.

### Total Estimated Effort
- Lean build (minimum): 23 hours.
- Standard build (realistic): 28-32 hours.
- Premium polish build: 36-40 hours.

### Suggested Execution Timeline
Day 1 (6-8h): Steps 1-6.
Day 2 (6-8h): Steps 7-10.
Day 3 (6-8h): Steps 11-15.
Day 4 (4-6h): Steps 16-19.
Day 5 (3-5h): Steps 20-22.

### Milestone Gates (Quality Checkpoints)
Gate 1 after Step 6:
- All sections exist in semantic form.
- Core design tokens are stable.

Gate 2 after Step 14:
- Full page content complete.
- Navigation and major interactions work.

Gate 3 after Step 19:
- Performance, accessibility, and SEO baseline complete.

Gate 4 after Step 22:
- Final QA passed and documentation complete.

### Risk Buffer Recommendations
- Reserve 15 percent time buffer for asset mismatch and responsive fixes.
- Reserve extra 2-4 hours if image preprocessing is heavy.
