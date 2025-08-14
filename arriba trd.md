# ARRIBA SURF CAMP - TECHNICAL REQUIREMENTS DOCUMENT (TRD)

## PROJECT OVERVIEW
Build a modern surf camp website using React + Tailwind CSS inspired by Hotel Dame des Arts design patterns, featuring immersive visuals, smooth animations, and multi-language support.

---

## 🎯 CORE FUNCTIONALITY REQUIREMENTS

### 1. HERO SECTION WITH VIDEO BACKGROUND
**Functionality:**
- Full-screen video background showing a man surfing
- Overlay with camp title "ARRIBA SURF CAMP"
- Subtitle: "Indonesia - Experience the Ultimate Surf Adventure"
- Centered rectangular booking component with:
  - Arrival date picker (clickable calendar)
  - Departure date picker (clickable calendar) 
  - Participants dropdown (1-5+ people)
  - Search/Book button

**Technical Implementation:**
- Use HTML5 video element with autoplay, muted, loop
- Video overlay with gradient opacity
- React DatePicker component for calendar functionality
- Responsive video scaling for mobile devices
- Smooth fade-in animations on page load

### 2. SCROLL-TRIGGERED NAVIGATION BAR
**Functionality:**
- Hidden initially, appears when user scrolls down 80% of hero section
- **Left Navigation:**
  - "Accueil" (Home)
  - "L'Exp Arriba" with dropdown:
    - L'Histoire (The Story)
    - L'Équipe (The Team)  
    - La Vie Arriba (Life at Arriba)
- **Center:** Logo "ARRIBA SURF CAMP"
- **Right Navigation:**
  - "Le Surf Camp" with dropdown:
    - Les Chambres (The Rooms)
    - La Villa (The Villa)
    - Le Planning (The Schedule)
  - Language selector: ESP | ENG | FR | ID
  - "Book Now" button (primary CTA)

**Technical Implementation:**
- Use React useState for navbar visibility
- Implement scroll event listener with useEffect
- CSS transforms for smooth slide-down animation
- Dropdown menus with hover states
- Active language highlighting
- Responsive hamburger menu for mobile

### 3. NAVIGATION GRID SECTION
**Functionality:**
- 6 interactive cards in responsive grid layout:
  1. **Arriba** → Links to L'Histoire page
  2. **L'Équipe** → Links to L'Équipe page  
  3. **Galerie** → Links to La Vie Arriba page
  4. **Chambres** → Links to Les Chambres page
  5. **Villa** → Links to La Villa page
  6. **Planning** → Links to Le Planning page

**Technical Implementation:**
- CSS Grid with auto-fit minmax for responsiveness
- Each card has background image with gradient overlay
- Hover effects with scale transform and shadow changes
- React Router navigation on click
- Smooth transitions and animations
- Image lazy loading for performance

### 4. ABOUT SECTION (CAMP DESCRIPTION)
**Functionality:**
- Two-column layout (text + images)
- Left: Camp description text with surf camp branding
- Right: Photo grid showcasing surf camp facilities
- Parallax scrolling effects
- Animated text reveal on scroll

**Technical Implementation:**
- CSS Grid for layout structure
- Intersection Observer API for scroll animations
- Image optimization and responsive loading
- Text animations with staggered reveals
- Mobile-responsive stacking

---

## 📱 RESPONSIVE DESIGN REQUIREMENTS

### Breakpoints:
- **Mobile:** < 768px (single column, hamburger menu)
- **Tablet:** 768px - 1024px (adjusted grid, compact navbar)
- **Desktop:** > 1024px (full layout, hover effects)

### Mobile Optimizations:
- Touch-friendly navigation
- Optimized video for mobile bandwidth
- Swipe gestures for image galleries
- Compact booking component
- Collapsible navigation sections

---

## 🌍 MULTI-LANGUAGE SYSTEM

### Supported Languages:
- **ESP** (Spanish) - Primary market
- **ENG** (English) - International guests
- **FR** (French) - European market  
- **ID** (Indonesian) - Local market

### Implementation:
- React i18n library integration
- JSON translation files for each language
- Dynamic content loading based on selected language
- URL routing with language prefixes (/en/, /es/, etc.)
- Language persistence in localStorage
- Right-to-left support if needed

---

## 🎨 DESIGN SYSTEM SPECIFICATIONS

### Color Palette:
- **Primary Orange:** #FF6B35 (surf sunset)
- **Secondary Orange:** #F7931E (warm accent)
- **Dark:** #333333 (text primary)
- **Light Gray:** #F8F8F8 (backgrounds)
- **White:** #FFFFFF (contrast)
- **Overlay:** rgba(0,0,0,0.4) (video overlays)

### Typography:
- **Headers:** Bold, uppercase, letter-spacing
- **Body:** Clean, readable, 1.6 line-height
- **Buttons:** Uppercase, medium weight, letter-spacing

### Animation Standards:
- **Duration:** 0.3s for interactions, 0.8s for page elements
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) for smooth feel
- **Transforms:** translateY, scale, opacity for modern effects
- **Hover States:** Consistent 2-3px translateY lift

---

## 🛠 TECHNICAL STACK

### Frontend Framework:
- **React 18** with functional components
- **React Router** for navigation
- **React Hooks** (useState, useEffect, useContext)

### Styling:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for complex animations
- **CSS Grid & Flexbox** for layouts

### Additional Libraries:
- **React DatePicker** for calendar functionality
- **React i18next** for internationalization
- **Framer Motion** or **AOS** for scroll animations
- **React Intersection Observer** for scroll triggers
- **React Helmet** for SEO meta tags

### Performance:
- **Lazy loading** for images and components
- **Code splitting** by routes
- **Image optimization** (WebP, responsive images)
- **Video optimization** (compressed formats)

---

## 📄 REQUIRED PAGES

### 1. **Homepage** ✅ (Current page)
- Hero section with video
- Navigation grid
- About section
- Footer

### 2. **L'Histoire** (The Story)
- Surf camp founding story
- Mission and values
- Photo timeline
- Founder profiles

### 3. **L'Équipe** (The Team) 
- Staff profiles with photos
- Surf instructors credentials
- Team lifestyle images
- Contact information per team member

### 4. **La Vie Arriba** (Life at Arriba)
- Photo gallery with lightbox
- Daily life at the camp
- Surf sessions documentation
- Community activities
- Video testimonials

### 5. **Les Chambres** (The Rooms)
- Room types with pricing
- 360° virtual tours
- Amenities list
- Booking integration
- Availability calendar

### 6. **La Villa** (The Villa)
- Villa overview and features
- Common areas photography
- Facility details
- Group booking options
- Virtual tour integration

### 7. **Le Planning** (The Schedule)
- Daily activity schedules
- Surf lesson timetables
- Meal times and menus
- Optional excursions
- Weather-dependent alternatives

### 8. **Book Now** (Booking Page)
- Multi-step booking form
- Room/package selection
- Date availability checker
- Payment integration
- Confirmation system
- Customer details form

### 9. **Contact** 
- Contact form
- Location map (Google Maps)
- Getting there instructions
- Emergency contacts
- FAQ section

---

## 🔧 DEVELOPMENT PHASES

### Phase 1: Foundation Setup
1. Initialize React + Tailwind project
2. Set up routing structure
3. Create reusable components (Navbar, Footer, etc.)
4. Implement responsive layout system
5. Set up translation system

### Phase 2: Homepage Development
1. Build hero section with video background
2. Implement scroll-triggered navbar
3. Create navigation grid with animations
4. Build about section with image gallery
5. Add mobile responsiveness

### Phase 3: Content Pages
1. Develop L'Histoire page with timeline
2. Create L'Équipe with team profiles
3. Build La Vie Arriba gallery system
4. Implement Les Chambres with booking preview
5. Create La Villa showcase page
6. Build Le Planning with schedule display

### Phase 4: Booking System
1. Develop booking flow UI
2. Implement date picker and availability
3. Create payment integration placeholder
4. Build confirmation and email system
5. Add booking management dashboard

### Phase 5: Polish & Optimization
1. Performance optimization
2. SEO implementation
3. Cross-browser testing
4. Mobile optimization refinement
5. Accessibility improvements
6. Final design polish

---

## 🎯 SUCCESS METRICS

### Performance Targets:
- **Page Load Speed:** < 3 seconds
- **Mobile Performance Score:** > 90
- **Accessibility Score:** > 95
- **SEO Score:** > 95

### User Experience Goals:
- Intuitive navigation flow
- Engaging visual experience
- Clear booking process
- Multi-language accessibility
- Mobile-first usability

---

## 🚀 DEPLOYMENT REQUIREMENTS

### Hosting Platform:
- **Vercel** or **Netlify** for static hosting
- **CDN** for image and video optimization
- **Custom domain** setup
- **SSL certificate** configuration

### Environment Setup:
- **Development:** Local React dev server
- **Staging:** Preview deployments
- **Production:** Optimized build with caching

This TRD provides a comprehensive roadmap for building the Arriba Surf Camp website with React and Tailwind CSS, following the design inspiration from Hotel Dame des Arts while creating a unique surf camp experience.