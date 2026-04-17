# Design Brief

## Direction

Professional B2B IT & Web Services — credible, approachable, tech-forward design for Australian SMBs.

## Tone

Refined professional with subtle warmth: expert but accessible, never cold or corporate-heavy.

## Differentiation

Deep teal-blue primary paired with warm amber CTAs creates trust without sterileness; spacious card-based layout with intentional elevation hierarchy distinguishes from generic SaaS.

## Color Palette

| Token      | OKLCH            | Role                          |
| ---------- | ---------------- | ----------------------------- |
| background | 0.98 0.006 230   | Light cool off-white          |
| foreground | 0.18 0.012 230   | Dark text, full contrast      |
| card       | 1.0 0.004 230    | White elevated surfaces       |
| primary    | 0.42 0.14 240    | Deep ocean blue — trust      |
| accent     | 0.68 0.18 60     | Warm amber — CTA emphasis    |
| muted      | 0.94 0.008 230   | Subtle backgrounds           |
| border     | 0.88 0.008 230   | Soft dividers                |

## Typography

- Display: Space Grotesk — hero, section headings, labels (tech-forward, modern)
- Body: DM Sans — paragraphs, UI labels, descriptions (clean, professional)
- Scale: hero `text-5xl md:text-7xl`, h2 `text-3xl md:text-5xl`, label `text-sm uppercase`, body `text-base lg:text-lg`

## Elevation & Depth

Flat backgrounds with subtle lifted cards (2-8px shadows). Primary surface is background; cards and popovers elevated with soft shadows. No gradients; clarity through layering and white space.

## Structural Zones

| Zone    | Background      | Border        | Notes                                      |
| ------- | --------------- | ------------- | ------------------------------------------ |
| Header  | `bg-card`       | `border-b`    | White with subtle border, fixed or sticky |
| Content | `bg-background` | —             | Alternates `bg-muted/20` every other box |
| Footer  | `bg-card`       | `border-t`    | White, mirrors header, same elevation     |

## Spacing & Rhythm

Generous gutters (3–4rem between sections). Cards use 1.5–2rem padding. Content sections staggered with 2rem vertical rhythm. Micro-spacing 0.5–1rem for typography grouping.

## Component Patterns

- Buttons: Rounded 8px, primary blue on white, accent amber for CTAs, hover lifts 2px with shadow
- Cards: Rounded 8px, white background, soft shadow, border-muted on hover
- Badges: Rounded 6px, muted background with primary text (for tags/labels)

## Motion

- Entrance: fade-in 0.6s on scroll, staggered 0.2s per element
- Hover: lift 2px with shadow-elevated 0.3s smooth, text brightens slightly
- Decorative: none (clarity priority)

## Constraints

- Light mode primary (trust + readability for B2B)
- Max 2 font families (Space Grotesk + DM Sans)
- No full-bleed gradients or glows
- Rounded corners at 6–8px (professional, not juvenile)

## Signature Detail

Warm amber accent contrasts with cool teal primary: signals approachability + expertise, avoiding corporate coldness while maintaining credibility for service-based B2B.
