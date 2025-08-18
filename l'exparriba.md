<!-- Cleared during repository cleanup. -->
Smart Scroll Navigation System:

From Homepage Navbar: Click "L'Histoire" → Navigate to /lexp-arriba + auto-scroll to #histoire section
From Homepage Navbar: Click "L'Équipe" → Navigate to /lexp-arriba + auto-scroll to #equipe section
From Homepage Navbar: Click "La Vie Arriba" → Navigate to /lexp-arriba + auto-scroll to #gallerie section
Within L'Exp Arriba Page: Navbar clicks trigger smooth scroll to respective sections (no page reload)
URL Updates: Browser URL updates with section anchors (/lexp-arriba#histoire)

Technical Implementation:
javascript// Navigation logic pseudocode
const handleNavClick = (section) => {
  if (currentPage !== 'lexp-arriba') {
    router.push(`/lexp-arriba#${section}`);
    // Auto-scroll after page load
  } else {
    smoothScrollTo(`#${section}`);
    updateURL(`#${section}`);
  }
};

📐 PAGE STRUCTURE & LAYOUT
SECTION 1: HERO VIDEO INTRODUCTION
Visual Layout:

Full-width, full-height video background
Video content: Surf camp lifestyle, waves, community moments
Overlay gradient: rgba(0,0,0,0.3) to rgba(0,0,0,0.5)
Centered content container with maximum width of 1200px

Content Structure:
┌─────────────────────────────────────────┐
│           VIDEO BACKGROUND              │
│  ┌─────────────────────────────────┐   │
│  │         L'EXP ARRIBA            │   │ <- Main Title (Large, Bold)
│  │    Vivez l'aventure ultime      │   │ <- Subtitle (Medium)
│  │                                 │   │
│  │  [Intro paragraph about the    │   │ <- Descriptive text (Readable)
│  │   Arriba experience - 2-3      │   │
│  │   lines of compelling copy]     │   │
│  │                                 │   │
│  │    ↓ Découvrez notre histoire   │   │ <- Scroll indicator
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
Text Content Example:

Main Title: "L'EXP ARRIBA" (Uppercase, Bold, White)
Subtitle: "Vivez l'aventure ultime du surf en Indonésie"
Description: "Depuis 2018, Arriba Surf Camp redéfinit l'expérience du surf camp. Entre eaux cristallines, communauté passionnée et spots secrets, découvrez pourquoi nos riders reviennent année après année."


SECTION 2: L'HISTOIRE (#histoire)
Visual Layout:

Two-column responsive layout
Left: Sketch-style illustrations/drawings
Right: Text content with timeline elements
Background: Light cream/off-white (#FAFAFA)

Content Structure:
┌─────────────────────────────────────────────────────────────┐
│                        L'HISTOIRE                           │ <- Section Title
├──────────────────────┬──────────────────────────────────────┤
│                      │  ┌─────────────────────────────────┐ │
│   [Sketch/Drawing    │  │ 2018 - LES DÉBUTS              │ │ <- Timeline Entry 1
│    of surf camp      │  │ Paragraph about founding...     │ │
│    founding]         │  └─────────────────────────────────┘ │
│                      │                                      │
│   [Sketch of first   │  ┌─────────────────────────────────┐ │
│    surfers]          │  │ 2019 - PREMIÈRE EXPANSION       │ │ <- Timeline Entry 2
│                      │  │ Paragraph about growth...       │ │
│                      │  └─────────────────────────────────┘ │
│                      │                                      │
│   [Sketch of villa   │  ┌─────────────────────────────────┐ │
│    construction]     │  │ 2020-2024 - L'ÉVOLUTION        │ │ <- Timeline Entry 3
│                      │  │ Paragraph about evolution...    │ │
│                      │  └─────────────────────────────────┘ │
└──────────────────────┴──────────────────────────────────────┘
Design Elements:

Sketches: Hand-drawn style illustrations (black ink on cream paper effect)
Timeline: Vertical line connecting timeline entries with circular markers
Typography: Mix of handwritten-style fonts for dates, clean sans-serif for paragraphs
Colors: Earth tones, sketch blue (#2E5984), warm orange accents (#FF6B35)

Content Themes:

Les Débuts (2018) - The founding vision and first waves
Première Expansion (2019) - Growing the community
L'Évolution (2020-2024) - Becoming a surf destination


SECTION 3: L'ÉQUIPE (#equipe)
Visual Layout:

Grid-based team showcase
Individual profile cards with photos
Background: Gradient from white to light blue (#F0F8FF)

Content Structure:
┌─────────────────────────────────────────────────────────────┐
│                        L'ÉQUIPE                             │ <- Section Title
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │  [PHOTO] │  │  [PHOTO] │  │  [PHOTO] │  │  [PHOTO] │       │ <- Team Photos
│  │  Name 1  │  │  Name 2  │  │  Name 3  │  │  Name 4  │       │
│  │  Role    │  │  Role    │  │  Role    │  │  Role    │       │
│  │  Bio...  │  │  Bio...  │  │  Bio...  │  │  Bio...  │       │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │  [PHOTO] │  │  [PHOTO] │  │  [PHOTO] │                     │ <- More Team
│  │  Name 5  │  │  Name 6  │  │  Name 7  │                     │
│  │  Role    │  │  Role    │  │  Role    │                     │
│  │  Bio...  │  │  Bio...  │  │  Bio...  │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
└─────────────────────────────────────────────────────────────┘
Team Profile Cards:

Photo: Circular profile image with surf-themed border
Name: Bold, prominent display
Role: Surf Instructor, Camp Manager, Chef, etc.
Bio: 2-3 sentences about their surf background and personality
Hover Effects: Card lift, photo zoom, color accents

Team Categories:

Surf Instructors - Certified professionals with surf credentials
Camp Staff - Managers, coordinators, maintenance
Kitchen Team - Chefs specializing in local/international cuisine
Local Guides - Indonesian locals who know secret spots


SECTION 4: LA VIE ARRIBA - GALERIE (#gallerie)
Visual Layout:

Pinterest-style masonry grid layout
Photo categories with filtering options
Lightbox functionality for full-screen viewing
Background: Dark theme (#1A1A1A) to make photos pop

Content Structure:
┌─────────────────────────────────────────────────────────────┐
│                    LA VIE ARRIBA                            │ <- Section Title
│                                                             │
│  [Surf Sessions] [Camp Life] [Food] [Sunsets] [Community]  │ <- Filter Tabs
│                                                             │
│ ┌────┐ ┌──────────┐ ┌────┐ ┌────────┐                      │
│ │    │ │          │ │    │ │        │                      │ <- Masonry Grid
│ │ P1 │ │    P2    │ │ P3 │ │   P4   │                      │    (Different sizes)
│ │    │ │          │ │    │ │        │                      │
│ └────┘ └──────────┘ └────┘ └────────┘                      │
│                                                             │
│ ┌──────────┐ ┌────┐ ┌────┐ ┌──────┐                        │
│ │          │ │    │ │    │ │      │                        │
│ │    P5    │ │ P6 │ │ P7 │ │  P8  │                        │
│ │          │ │    │ │    │ │      │                        │
│ └──────────┘ └────┘ └────┘ └──────┘                        │
└─────────────────────────────────────────────────────────────┘
Photo Categories & Content:

Surf Sessions - Action shots of surfers, wave photos, dawn patrol
Camp Life - Daily activities, yoga, hanging out, learning
Food & Dining - Local cuisine, communal meals, cooking classes
Sunsets & Nature - Indonesian landscapes, golden hour, wildlife
Community - Group photos, celebrations, new friendships

Interactive Features:

Filter System: Click category tabs to show specific photo types
Lightbox Gallery: Full-screen viewing with navigation arrows
Infinite Scroll: Load more photos as user scrolls down
Social Sharing: Share individual photos on social media


🎨 DESIGN SYSTEM SPECIFICATIONS
Color Palette Per Section:

Hero Video: White text, orange accents (#FF6B35)
L'Histoire: Cream backgrounds (#FAFAFA), sketch blue (#2E5984)
L'Équipe: Light blue gradient (#F0F8FF to #E6F3FF)
Galerie: Dark theme (#1A1A1A), white text, orange filters

Typography Hierarchy:
Section Titles: 3rem, Bold, Uppercase, Letter-spacing
Subsection Titles: 2rem, Semi-bold, Title-case
Timeline Dates: 1.5rem, Bold, Color accent
Body Text: 1.1rem, Regular, Line-height 1.7
Captions: 0.9rem, Italic, Lighter color
Animation Guidelines:

Section Transitions: Smooth scroll with easing
Image Loading: Fade-in with slight scale effect
Timeline Elements: Staggered reveal on scroll
Team Cards: Hover lift with shadow increase
Gallery Photos: Smooth zoom and overlay effects


📱 RESPONSIVE BEHAVIOR
Mobile Adaptations:

Hero: Shorter height, larger text for readability
L'Histoire: Single column, sketches above text
L'Équipe: 2-column grid instead of 4-column
Galerie: 2-column masonry, touch-friendly filtering

Tablet Adjustments:

L'Histoire: Maintain 2-column but adjust proportions
L'Équipe: 3-column grid layout
Galerie: 3-column masonry with larger photos


🔧 TECHNICAL IMPLEMENTATION NOTES
React Components Structure:
LExpArribaPage/
├── HeroVideo.jsx
├── HistoireSection.jsx
│   ├── TimelineEntry.jsx
│   └── SketchIllustration.jsx
├── EquipeSection.jsx
│   └── TeamCard.jsx
├── GallerieSection.jsx
│   ├── PhotoFilter.jsx
│   ├── MasonryGrid.jsx
│   └── Lightbox.jsx
└── ScrollNavigation.jsx
Key Technical Features:

Intersection Observer: Detect which section is in view for navbar highlighting
Smooth Scrolling: Native CSS scroll-behavior: smooth with JavaScript fallback
Lazy Loading: Progressive image loading for gallery performance
State Management: Context for current section, gallery filters
URL Management: Update browser history with section anchors

This specification provides a complete roadmap for creating an engaging, immersive L'Exp Arriba page that tells the surf camp story through multiple media formats and interactive elements.