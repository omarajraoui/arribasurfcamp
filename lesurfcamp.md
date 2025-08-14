# Le Surf Camp Sections Development Guide

## 🏄‍♂️ Navigation Structure

### Main Page: `/le-surf-camp`
- **Clickable main link** "Le Surf Camp" → goes to `/le-surf-camp` landing page
- **Dropdown links** → scroll to specific sections on same page:
  - "Les Chambres" → `/le-surf-camp#chambres`
  - "La Villa" → `/le-surf-camp#villa` 
  - "Le Planning" → `/le-surf-camp#planning`

### Page Structure:
```jsx
// pages/LeSurfCamp.jsx
<div className="surf-camp-page">
  <section id="chambres" className="min-h-screen">
    <Chambres />
  </section>
  
  <section id="villa" className="min-h-screen">
    <Villa />
  </section>
  
  <section id="planning" className="min-h-screen">
    <Planning />
  </section>
</div>
```

---

## 🛏️ Section 1: Les Chambres

### Content from Business Plan:
- **Capacity**: 28 people per week
- **Layout**: 5-6 bedrooms, 4-6 people per room
- **Style**: Shared villa accommodation
- **Price**: 500€/week (2026), 600€/week (2027+)

### Photo Layout Structure:
Create a **magazine-style photo gallery** with overlapping images and room details:

```jsx
// components/Chambres.jsx
<div className="chambres-section bg-cream-100 py-20">
  {/* Hero Title */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-orange-500 mb-4">Les Chambres</h2>
    <p className="text-lg text-gray-700">Votre chez-vous à Lombok</p>
  </div>

  {/* Photo Gallery Grid */}
  <div className="photo-gallery-grid">
    {/* Large featured photo */}
    <div className="featured-room-photo">
      <img src="room-main.jpg" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      <div className="photo-caption handwritten">
        "La chambre principale avec vue sur l'océan 🌊"
      </div>
    </div>

    {/* Smaller detail photos */}
    <div className="detail-photos-cluster">
      <img src="room-bunk-beds.jpg" className="polaroid rotated-left" />
      <img src="room-balcony.jpg" className="polaroid rotated-right" />
      <img src="room-bathroom.jpg" className="polaroid" />
    </div>

    {/* Room amenities card */}
    <div className="amenities-card sticky-note yellow">
      <h3>Dans chaque chambre:</h3>
      <ul>
        <li>✓ 4-6 lits confortables</li>
        <li>✓ Climatisation</li>
        <li>✓ Salle de bain privée</li>
        <li>✓ Balcon avec vue</li>
        <li>✓ Casiers sécurisés</li>
        <li>✓ Prises internationales</li>
      </ul>
    </div>
  </div>

  {/* Pricing Info */}
  <div className="pricing-section">
    <div className="price-card polaroid">
      <h3>Tarifs 2026</h3>
      <div className="big-price">500€</div>
      <div className="price-details">
        <p>7 jours / 6 nuits</p>
        <p>Tout inclus*</p>
        <small>*sauf vols et boissons alcoolisées</small>
      </div>
    </div>
  </div>
</div>
```

### Photo Ideas Needed:
- `room-main.jpg` - Main bedroom with ocean view
- `room-bunk-beds.jpg` - Bunk bed setup
- `room-balcony.jpg` - Balcony with surfboards
- `room-bathroom.jpg` - Clean, modern bathroom
- `room-common-area.jpg` - Shared living space
- `room-storage.jpg` - Lockers and storage

---

## 🏡 Section 2: La Villa

### Content from Business Plan:
- **Location**: South Lombok (Kuta Beach area)
- **Capacity**: 28 people total
- **Features**: Pool, covered common area, equipped kitchen, high-speed WiFi, parking

### Villa Layout Structure:
Create an **architectural showcase** with floor plan and feature highlights:

```jsx
// components/Villa.jsx
<div className="villa-section bg-blue-50 py-20">
  {/* Title */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-blue-600 mb-4">La Villa Arriba</h2>
    <p className="text-lg text-gray-700">Votre base camp au paradis</p>
  </div>

  {/* Villa Features Grid */}
  <div className="villa-features-grid">
    {/* Pool area - main feature */}
    <div className="pool-showcase">
      <img src="villa-pool.jpg" className="main-villa-photo" />
      <div className="feature-label pool">
        "Piscine avec vue sur les collines 🏊‍♀️"
      </div>
    </div>

    {/* Common areas */}
    <div className="common-areas-collage">
      <img src="villa-living.jpg" className="polaroid" />
      <img src="villa-kitchen.jpg" className="polaroid rotated" />
      <img src="villa-terrace.jpg" className="polaroid" />
    </div>

    {/* Amenities list */}
    <div className="villa-amenities notebook-paper">
      <h3>Équipements Villa:</h3>
      <div className="amenities-list">
        <div className="amenity-item">🏊‍♀️ Piscine privée</div>
        <div className="amenity-item">🍽️ Cuisine équipée complète</div>
        <div className="amenity-item">📶 WiFi haut débit</div>
        <div className="amenity-item">🚗 Parking sécurisé</div>
        <div className="amenity-item">🌴 Terrasse couverte</div>
        <div className="amenity-item">🏄‍♂️ Stockage planches</div>
        <div className="amenity-item">🧺 Service ménage quotidien</div>
      </div>
    </div>

    {/* Location highlight */}
    <div className="location-card map-style">
      <h3>Localisation Premium</h3>
      <p>🏖️ 5 min à pied de Kuta Beach</p>
      <p>🏄‍♂️ 10 min des meilleurs spots</p>
      <p>🍕 2 min des restaurants locaux</p>
      <p>✈️ 15 min de l'aéroport</p>
    </div>
  </div>
</div>
```

### Photo Ideas Needed:
- `villa-pool.jpg` - Pool with mountain backdrop
- `villa-living.jpg` - Cozy common living area
- `villa-kitchen.jpg` - Modern equipped kitchen
- `villa-terrace.jpg` - Covered outdoor dining area
- `villa-exterior.jpg` - Full villa exterior shot
- `villa-garden.jpg` - Tropical garden areas

---

## 📅 Section 3: Le Planning

### Content from Business Plan Activities:
- **Daily surf lessons** (1 per day with professional instructor)
- **Yoga/Pilates** (3 sessions per week)
- **Local cooking class** (1 per week)
- **Balinese offerings class** (1 per week)  
- **Outdoor movie night** (1 per week)
- **Snorkeling trip** (1 per week)
- **Group BBQ** (1 per week)

### Weekly Calendar Design:
Create a **visual weekly schedule** that looks like a handmade planning board:

```jsx
// components/Planning.jsx
<div className="planning-section bg-orange-50 py-20">
  {/* Title */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-orange-600 mb-4">Le Planning</h2>
    <p className="text-lg text-gray-700">Une semaine type à Arriba</p>
  </div>

  {/* Weekly Calendar */}
  <div className="weekly-calendar-board">
    <div className="calendar-header">
      <h3 className="marker-text">Semaine Type - Programme Arriba</h3>
    </div>

    {/* Days of week */}
    <div className="calendar-grid">
      {/* Monday */}
      <div className="day-card monday">
        <div className="day-header">LUNDI</div>
        <div className="day-activities">
          <div className="activity surf">🏄‍♂️ Surf Lesson (7h)</div>
          <div className="activity yoga">🧘‍♀️ Yoga (17h)</div>
          <div className="activity welcome">🎉 Welcome Dinner</div>
        </div>
      </div>

      {/* Tuesday */}
      <div className="day-card tuesday">
        <div className="day-header">MARDI</div>
        <div className="day-activities">
          <div className="activity surf">🏄‍♂️ Surf Lesson (7h)</div>
          <div className="activity cooking">👨‍🍳 Cours Cuisine (15h)</div>
          <div className="activity free">🌅 Sunset Free Time</div>
        </div>
      </div>

      {/* Wednesday */}
      <div className="day-card wednesday">
        <div className="day-header">MERCREDI</div>
        <div className="day-activities">
          <div className="activity surf">🏄‍♂️ Surf Lesson (7h)</div>
          <div className="activity snorkel">🤿 Snorkeling Trip (14h)</div>
          <div className="activity movie">🎬 Movie Night (20h)</div>
        </div>
      </div>

      {/* Thursday */}
      <div className="day-card thursday">
        <div className="day-header">JEUDI</div>
        <div className="day-activities">
          <div className="activity surf">🏄‍♂️ Surf Lesson (7h)</div>
          <div className="activity culture">🙏 Offrandes Balinaises (16h)</div>
          <div className="activity yoga">🧘‍♀️ Yoga (18h)</div>
        </div>
      </div>

      {/* Friday */}
      <div className="day-card friday">
        <div className="day-header">VENDREDI</div>
        <div className="day-activities">
          <div className="activity surf">🏄‍♂️ Surf Lesson (7h)</div>
          <div className="activity pilates">💪 Pilates (17h)</div>
          <div className="activity bbq">🔥 Group BBQ (19h)</div>
        </div>
      </div>

      {/* Weekend */}
      <div className="day-card weekend">
        <div className="day-header">WEEKEND</div>
        <div className="day-activities">
          <div className="activity surf">🏄‍♂️ Surf Lesson (7h)</div>
          <div className="activity free">🏝️ Explore Lombok</div>
          <div className="activity farewell">👋 Farewell Party</div>
        </div>
      </div>
    </div>

    {/* Activity legend */}
    <div className="activity-legend sticky-note-grid">
      <div className="legend-item surf-color">🏄‍♂️ Surf quotidien inclus</div>
      <div className="legend-item wellness-color">🧘‍♀️ 3x Yoga/Pilates/semaine</div>
      <div className="legend-item culture-color">🎭 Activités culturelles</div>
      <div className="legend-item social-color">🎉 Moments de groupe</div>
    </div>
  </div>

  {/* Alternative: Photo-based calendar */}
  <div className="photo-calendar-option">
    <img src="weekly-schedule-board.jpg" className="handmade-calendar" />
    <div className="calendar-caption">
      "Planning fait main par l'équipe Arriba ✨"
    </div>
  </div>
</div>
```

### Photo Ideas for Planning:
- `weekly-schedule-board.jpg` - Handwritten schedule on cork board
- `surf-lesson-action.jpg` - Morning surf session
- `yoga-sunset.jpg` - Yoga session at sunset
- `cooking-class.jpg` - Local cooking class in action
- `group-bbq.jpg` - Evening BBQ gathering
- `snorkeling-trip.jpg` - Snorkeling excursion

---

## 📋 Book Now Page Development

### Create comprehensive booking experience:

```jsx
// pages/BookNow.jsx
<div className="book-now-page">
  {/* Hero section */}
  <section className="booking-hero">
    <h1>Réservez Votre Aventure Arriba</h1>
    <p>7 jours inoubliables à partir de 500€</p>
  </section>

  {/* Booking form */}
  <section className="booking-form-section">
    <div className="booking-steps">
      {/* Step 1: Dates */}
      <div className="booking-step dates">
        <h3>1. Choisissez vos dates</h3>
        <DatePicker 
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          minDate={new Date()}
          excludeDateIntervals={bookedDates}
        />
      </div>

      {/* Step 2: Participants */}
      <div className="booking-step participants">
        <h3>2. Nombre de participants</h3>
        <ParticipantSelector 
          min={1} 
          max={6}
          value={participants}
          onChange={setParticipants}
        />
      </div>

      {/* Step 3: Package selection */}
      <div className="booking-step package">
        <h3>3. Choisissez votre formule</h3>
        <div className="package-options">
          <div className="package-card standard selected">
            <h4>Formule Standard</h4>
            <div className="price">500€/personne</div>
            <ul className="inclusions">
              <li>✓ 7 jours / 6 nuits</li>
              <li>✓ Tous les repas</li>
              <li>✓ Cours de surf quotidiens</li>
              <li>✓ Yoga 3x/semaine</li>
              <li>✓ Activités culturelles</li>
              <li>✓ Transferts aéroport</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 4: Personal info */}
      <div className="booking-step personal-info">
        <h3>4. Vos informations</h3>
        <PersonalInfoForm />
      </div>

      {/* Step 5: Payment */}
      <div className="booking-step payment">
        <h3>5. Paiement</h3>
        <PaymentOptions />
      </div>
    </div>

    {/* Booking summary sidebar */}
    <div className="booking-summary">
      <BookingSummary 
        dates={[startDate, endDate]}
        participants={participants}
        total={calculateTotal()}
      />
    </div>
  </section>

  {/* Trust signals */}
  <section className="trust-signals">
    <div className="trust-item">
      <span className="icon">🔒</span>
      <span>Paiement sécurisé</span>
    </div>
    <div className="trust-item">
      <span className="icon">📞</span>
      <span>Support 24/7</span>
    </div>
    <div className="trust-item">
      <span className="icon">🔄</span>
      <span>Annulation flexible</span>
    </div>
  </section>
</div>
```

### Booking Form Features:
- **Multi-step process** with progress indicator
- **Real-time availability** checking
- **Dynamic pricing** calculation
- **Multiple payment options** (card, PayPal, transfer)
- **Confirmation system** with email
- **Mobile-responsive** design

---

## 🛠️ Implementation Checklist

### Navigation Setup:
- [ ] Create `/le-surf-camp` main route
- [ ] Add smooth scroll to hash sections
- [ ] Update navbar dropdown logic
- [ ] Test mobile navigation

### Content Creation:
- [ ] Source high-quality photos for each section
- [ ] Write authentic copy for each area
- [ ] Create pricing calculator
- [ ] Design visual calendar/schedule

### Booking System:
- [ ] Set up date picker with availability
- [ ] Create participant selector
- [ ] Build multi-step form
- [ ] Integrate payment gateway
- [ ] Set up email confirmations

### Responsive Design:
- [ ] Test all sections on mobile
- [ ] Optimize photo galleries for touch
- [ ] Ensure booking form works on all devices

This structure will create a comprehensive surf camp showcase that matches your business plan while maintaining the authentic, experiential feel of Arriba! 🏄‍♂️✨