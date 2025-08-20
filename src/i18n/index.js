import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      construction: {
        notice: "This site is under construction – for investor research purposes only",
        close: "Close notice"
      },
      heroExp: {
        title: "ARRIBA EXPERIENCE",
        subtitle: "28 travelers, one villa in Lombok, 7 days of total immersion",
        description: "Shared rooms (4 to 6 beds) in the heart of a tropical villa with private pool and open common areas. Modern comfort, friendly atmosphere and ideal location: a place designed to rest, connect and fully live the Surf Camp adventure.",
        discover: "DISCOVER"
      },
      history: {
        title: "Our Story",
        subtitle: "The Arriba adventure: from an idea to a surf paradise 🏄‍♂️",
        annotations: {
          start: "Our story begins...",
            dreams: "Dreams become reality ✨",
            building: "Building Paradise!",
            family: "Family grows bigger 👨‍👩‍👧‍👦",
            adventures: "Endless Adventures!"
        },
        timeline: [
          { year: "1", title: "Project Origin", content: "Camille and Louise met while working as group leaders in a French children’s holiday camp. That shared experience brought us together and gave us solid expertise in creating meaningful group dynamics.", noteText: "Meeting", noteColor: "yellow" },
          { year: "2", title: "Discovering Indonesia", content: "At 18, Camille moved to Indonesia. From Sulawesi to Bali and finally Lombok where she discovered surfing. The island’s raw, preserved nature and world‑class conditions revealed its incredible potential.", noteText: "Inspiration", noteColor: "pink" },
          { year: "3", title: "Birth of the Concept", content: "Louise joined Camille a few months later. Drawing on our group animation background, we shaped the idea of an adult surf camp: adventure, surf progression and relaxation—without the stress of planning.", noteText: "Idea", noteColor: "blue" },
          { year: "4", title: "Arriba Surf Camps Today", content: "Our formula speaks to adults seeking adventure, friendship and calm. We take care of logistics so guests can focus on surfing, exploring Lombok and recharging in an exceptional natural environment.", noteText: "Experience", noteColor: "yellow" },
          { year: "5", title: "The Project Takes Shape", content: "After over a year of reflection, planning and refining every detail, the Arriba Surf Camps project is ready to emerge. We’re now looking for passionate investors who share our vision to bring this unique adventure to life.", noteText: "Structure", noteColor: "pink" },
          { year: "6", title: "Join the Adventure", content: "If our project inspires you and you’d like to be part of the journey, reach out. Together we’ll create unforgettable memories!", noteText: "Invest", noteColor: "blue" }
        ]
      },
      team: {
        title: "The Arriba Team",
        subtitle: "Meet the passionate people who make every moment unique",
  closingNote: "",
        members: [
          { id: 1, name: "Camille", role: "Operations & Guest Experience", photo: "/src/assets/gallery/camille-to-crop.jpeg", bio: "She orchestrates daily logistics, partner coordination and ensures every guest feels at home.", stickyNote: "", noteColor: "yellow", rotation: -5 },
          { id: 2, name: "Louise", role: "Community & Experience Curator", photo: "/src/assets/gallery/louise-to-crop.jpeg", bio: "She grows the Arriba community and shapes the collective vibe before, during and after each stay.", stickyNote: "", noteColor: "pink", rotation: 6 }
        ],
        annotations: {
          bestTeam: "Best team ever! 🎉",
          family: "Arriba Family ✨",
          legends: "LEGENDS!",
          memories: "Making memories 📸"
        }
      },
      gallery: {
        title: "Arriba Life",
        subtitle: "Discover the magic of Arriba through the eyes of our community. Every photo tells a story, every moment becomes a memory.",
        loadMore: "View More Moments",
        shareTitle: "Share Your Arriba Experience",
        shareSubtitle: "Tag us @arribasurfcamp to appear in our gallery!"
      },
      photoFilter: {
        categories: {
          all: "All",
          surf: "Surf Sessions",
          camp: "Camp Life",
          food: "Food",
          sunsets: "Sunsets",
          community: "Community"
        },
        descriptions: {
          all: "All categories • Explore our universe",
          surf: "Surf sessions • The essence of Arriba",
          camp: "Camp life • Chill moments",
          food: "Gastronomy • Fusion flavors",
          sunsets: "Sunsets • Daily magic",
          community: "Community • Endless friendships"
        }
      },
      navigation: {
  home: "Home",
  experience: "Arriba Experience",
  surfCamp: "Surf Camp",
  history: "History",
  team: "Team",
  life: "Arriba Life",
  rooms: "Rooms",
  villa: "Villa",
  planning: "Schedule",
  bookNow: "Book Now"
      },
  // homeRoomTypes removed (section deprecated)
      hero: {
        title: "ARRIBA SURF CAMP",
  subtitle: "Reinventing the surf camp: 7 days of total immersion – surf, Indonesian culture & group spirit"
      },
      booking: {
        title: "Book Your Surf Adventure",
        arrivalDate: "Arrival Date",
        departureDate: "Departure Date",
        participants: "Participants",
  roomType: "Room type",
        person: "Person",
        people: "People",
        searchBook: "SEARCH & BOOK",
        selectArrival: "Select arrival date",
        selectDeparture: "Select departure date"
      },
      cards: {
        discover: "Discover",
        arriba: "Arriba Experience",
        team: "The Team",
        gallery: "Gallery",
        rooms: "Rooms",
        villa: "Villa",
        planning: "Planning"
      },
      offers: {
        title: "Choose Your Surf Adventure",
        subtitle: "Experience the ultimate surf adventure in Lombok with our carefully crafted packages. From beginners to pros, we have the perfect journey waiting for you.",
        specialOffers: "SPECIAL OFFERS",
        mostPopular: "MOST POPULAR",
        premium: "PREMIUM",
        exclusive: "EXCLUSIVE",
        discount: "OFF",
        perPerson: "per person",
        bookNow: "Book Now",
        viewAll: "View All Packages",
        contactUs: "Contact Us",
        limitedOffer: "🏄‍♂️ Limited Time Offer - Book Before March 2025!",
  limitedDesc: "Save up to 25% on all surf packages. Perfect waves, expert instructors, and unforgettable memories await. All packages include insurance.",
        packages: {
          beginner: {
            name: "Beginner Package",
            duration: "7 Days",
            features: [
              "7 nights accommodation",
              "6 surf lessons with instructor",
              "Surfboard & wetsuit included",
              "Daily breakfast",
              "Airport transfers",
              "Beach access",
              "Photography session"
            ]
          },
          intermediate: {
            name: "Intermediate Package",
            duration: "10 Days",
            features: [
              "10 nights luxury accommodation",
              "8 advanced surf lessons",
              "Premium surfboard selection",
              "All meals included",
              "Yoga sessions",
              "Island excursions",
              "Surf video analysis",
              "Certificate completion"
            ]
          },
          pro: {
            name: "Pro Surfer Retreat",
            duration: "14 Days",
            features: [
              "14 nights premium villa",
              "Unlimited surf coaching",
              "Personal surf instructor",
              "All meals & beverages",
              "Spa treatments",
              "Private beach access",
              "Drone surf footage",
              "Competition preparation",
              "Networking events"
            ]
          }
        }
      },
    surfcamp: {
        common: {
          amenitiesTitle: "Amenities",
          capacityConfigTitle: "Capacity & Layout",
          locationTitle: "Premium Location",
          locationBadge: "Location",
          uniqueRateTitle: "Single Rate",
          weekTypeTitle: "Typical Week",
      photoPlanningPlaceholder: ""
        },
        photo: {
          mainRoomPlaceholder: "Main room photo (ocean view) coming soon",
          mainRoomCaption: "Primary room with ocean view",
          villaMainPlaceholder: "Pool & hills view photo coming soon"
        },
        rooms: {
          title: "Rooms",
          subtitle: "Shared villa lodging – comfort, space and community vibe",
          amenities: [
            "4-6 comfortable beds",
            "Air conditioning",
            "Private bathroom",
            "Balcony with view",
            "Secure lockers",
            "International outlets"
          ],
          secondaryPhotos: [
            "Bunk beds 4-6 pax",
            "Balcony & boards",
            "Modern bathroom",
            "Common / lounge area"
          ],
          pricing: {
            durationLine: "7 days / 6 nights",
            allInclusiveLine: "All inclusive package (see details)",
            excludesLine: "Except flights & alcoholic drinks"
          }
        },
        villa: {
          title: "The Arriba Villa",
          subtitle: "Your base camp in Lombok: space, comfort and community",
            features: [
              "Private pool",
              "Fully equipped kitchen",
              "High speed WiFi",
              "Secure parking",
              "Covered terrace",
              "Board storage",
              "Daily cleaning service"
            ],
            secondaryPhotos: [
              "Outdoor chill area",
              "Shaded dining corner",
              "Tropical garden",
              "Shared living room"
            ],
            capacity: [
              "Total capacity: 28 people",
              "Shared rooms 4-6 people",
              "Open common spaces",
              "International & friendly vibe"
            ],
            location: [
              "🏖️ 5 min walk to Tajung Beach",
              "🏄‍♂️ 10 min to top surf spots",
              "🍕 2 min to restaurants & cafés",
              "✈️ 15 min from airport"
            ],
            map: {
              popupTitle: "Shaya Cottage (Villa Arriba)",
              addressLines: ["Jalan Sekotong Raya", "Tajung, Lombok"]
            }
        },
        planning: {
          title: "Planning",
          subtitle: "A balanced week between surf progression, wellness and local discovery",
          daysOrder: ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],
          days: {
            sunday: { label: "SUNDAY", activities: ["✈️ Arrival Day", "🌅 Sunset Welcome", "🍽️ Welcome Dinner"] },
            monday: { label: "MONDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "🧘‍♀️ Yoga (5pm)", "🎉 Community Time"] },
            tuesday: { label: "TUESDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "👨‍🍳 Cooking Class (3pm)", "🌅 Sunset Free Time"] },
            wednesday: { label: "WEDNESDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "🤿 Snorkeling Trip (2pm)", "🎬 Movie Night (8pm)"] },
            thursday: { label: "THURSDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "🙏 Balinese Offerings (4pm)", "🧘‍♀️ Yoga (6pm)"] },
            friday: { label: "FRIDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "💪 Pilates (5pm)", "🔥 Group BBQ (7pm)"] },
            saturday: { label: "SATURDAY", activities: ["🏄‍♂️ Final Surf Session", "🏝️ Explore Lombok", "👋 Farewell Party"] }
          },
           legends: [
             "🏄‍♂️ Daily included surf",
             "🧘‍♀️ 3x Yoga/Pilates per week",
             "🎭 Cultural activities",
             "🎉 Group moments"
           ],
          activityAlert: "Special TREK weekend & Lombok mountain discovery – 24 September. Book your week."
        }
      }
      ,
      bookingComponent: {
        weekLabel: "Week (Arrival on Sunday)",
        weekPlaceholder: "Choose a Sunday",
        stayPrefix: "Stay:",
        bookWeek: "Book this week"
      },
      offerSection: {
        specialBadge: "LOMBOK SPECIAL OFFER",
        heading: "Your Perfect Surf Adventure",
        subheading: "Discover the magic of Lombok's waves with our all-inclusive formula. An authentic surf experience blending local culture and world-class spots.",
        discountSuffix: "% OFF - Limited Time!",
        locationTag: "Lombok, Indonesia",
        allInclusiveTagline: "All inclusive package - Lombok, Indonesia",
        cta: "Book Now - {{price}}",
        includedTitle: "Included in the Package",
        highlightsTitle: "Why Choose Arriba",
        contactHeading: "Ready to Book?",
        contactText: "Contact us directly for instant booking or any question about your surf adventure.",
        contactWhatsapp: "📱 WhatsApp",
        contactEmail: "✉️ Info Email",
        trust: { surfSpots: "Best Surf Spots", instructors: "Experienced Instructors", authentic: "Authentic Experience", sharedVilla: "Shared Villa" }
      },
      bookNowPage: {
        heroTitle: "Book Your Arriba Adventure",
  heroSubtitle: "Unforgettable 7 days all inclusive from {{price}}",
        steps: { dates: "1. Choose your dates", participants: "2. Participants", roomType: "3. Room type", package: "4. Package", info: "5. Your information", payment: "6. Payment" },
        weeklyNote: "Weekly stays (7 days / 6 nights).",
        standardPackage: "Standard Package",
        perPerson: "/ person",
        packageFeatures: ["✓ 7 days / 6 nights","✓ All meals","✓ Daily surf lessons","✓ Yoga 3x/week","✓ Cultural activities","✓ Airport transfers"],
        includedBadge: "INCLUDED",
        confirmCta: "Confirm booking",
        termsNote: "By confirming you accept our general terms & flexible cancellation policy.",
  trustSignals: ["Secure payment","Flexible cancellation"],
  invalidStart: "Please choose a Sunday (weekly stays run Sunday → Saturday).",
        roomTypes: {
          mixed: { title: "Mixed Room", description: "Share with both male & female travelers." },
          girls: { title: "Girls Only Room", description: "Women-only shared room for extra comfort." },
          boys: { title: "Boys Only Room", description: "Men-only shared room – relaxed vibe." }
        }
      },
      personalInfoForm: { firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone / WhatsApp", infoNote: "We will use this information only for your booking." },
      paymentOptions: {
        method: { card: "Card", bank: "Bank Transfer", later: "Later" },
        card: {
          title: "Pay by Card",
          form: { cardholder: "Cardholder", number: "Card Number" },
          comingSoon: "Secure payment module coming soon (Stripe)."
        },
        secure: "SECURE",
        secureDetail: "256-bit encryption",
        bank: { title: "Bank Transfer", iban: "FR76 XXXX XXXX XXXX", bic: "BIC XXXXXXXX", proof: "Send proof to booking@arriba.com", note: "Processing 1-2 business days" },
        laterTitle: "Book Now, Decide Later",
        later: "Lock in your spot without immediate payment.",
        laterPoints: ["Confirmation within 24h","Link to pay deposit when ready","Spot held 72h"],
        breakdown: { title: "Payment Breakdown", package: "Package Total", deposit30: "30% Deposit", balance: "Remaining Balance", note: "Balance due 14 days before arrival." },
        timeline: { title: "Timeline", steps: ["Booking & deposit","Confirmation & welcome pack","Balance payment","Arrival & adventure"] },
        deposit: "Deposit (30%):"
      },
      bookingSummary: {
        title: "Summary",
        dates: "Dates",
        participants: "Participants",
        roomType: "Room Type",
        weekPrice: "Week price",
        total: "Total",
        inclusions: ["All inclusive except flights & alcoholic drinks","Confirmation within 24h","30% deposit to secure your spot"]
      }
    }
  },
  fr: {
    translation: {
      construction: {
        notice: "Ce site est en construction – destiné uniquement à la recherche d'investisseurs",
        close: "Fermer l'avertissement"
      },
      heroExp: {
        title: "L'EXPERIENCE ARRIBA",
        subtitle: "28 voyageurs, une villa à Lombok, 7 jours d'immersion totale",
        description: "Chambres partagées de 4 à 6 lits au cœur d’une villa tropicale avec piscine privée et espaces communs ouverts. Confort moderne, ambiance conviviale et localisation idéale : un lieu pensé pour se reposer, partager et vivre pleinement l’aventure du Surf Camp.",
        discover: "DÉCOUVRIR"
      },
      history: {
        title: "Notre Histoire",
        subtitle: "L'aventure Arriba : de l'idée au paradis du surf 🏄‍♂️",
        annotations: {
          start: "Notre histoire commence...",
          dreams: "Dreams become reality ✨",
          building: "Building Paradise!",
          family: "Family grows bigger 👨‍👩‍👧‍👦",
          adventures: "Endless Adventures!"
        },
        timeline: [
          { year: "1", title: "L'origine du projet", content: "Camille et Louise se sont rencontrées en tant qu'animatrices dans une colonie de vacances pour enfants en France. Cette expérience commune dans l'animation nous a rapidement rapprochées et nous a donné une expertise solide dans la création d'expériences de groupe réussies.", noteText: "Rencontre", noteColor: "yellow" },
          { year: "2", title: "Découverte de l'Indonésie", content: "À 18 ans, Camille est partie vivre en Indonésie. Son parcours l'a menée de Sulawesi à Bali, puis à Lombok où elle a découvert le surf. L'aspect sauvage et préservé de Lombok, combiné à des conditions de surf exceptionnelles, l'a convaincue du potentiel de cette destination.", noteText: "Inspiration", noteColor: "pink" },
          { year: "3", title: "Naissance du concept", content: "Louise a rejoint Camille quelques mois plus tard en Indonésie. Fortes de notre expérience en animation, nous avons développé l'idée d'un camp de surf pour adultes. L'objectif : proposer des vacances alliant aventure, découverte du surf, et détente, sans le stress de l'organisation.", noteText: "Idée", noteColor: "blue" },
          { year: "4", title: "Arriba Surf Camps aujourd'hui", content: "Notre formule s'adresse aux adultes en quête d'aventure, d'amitié et de tranquillité. Nous nous occupons de toute l'organisation pour permettre à nos clients de profiter pleinement de leur séjour : surf, exploration de Lombok, et moments de détente dans un environnement naturel exceptionnel.", noteText: "Expérience", noteColor: "yellow" },
          { year: "5", title: "Le projet prend forme", content: "Après plus d'une année de réflexion, de planification et de peaufinage de chaque détail, notre projet Arriba Surf Camps est prêt à voir le jour. Nous recherchons maintenant des investisseurs passionnés qui partagent notre vision pour donner vie à cette aventure unique.", noteText: "Structure", noteColor: "pink" },
          { year: "6", title: "Rejoignez l'aventure", content: "Si notre projet vous inspire et que vous souhaitez faire partie de cette belle aventure, n'hésitez pas à nous contacter. Ensemble, créons des souvenirs inoubliables !", noteText: "Investir", noteColor: "blue" }
        ]
      },
      team: {
        title: "L'Équipe Arriba",
    subtitle: "Rencontrez les passionnés qui rendent chaque moment unique",
  closingNote: "",
        members: [
          { id: 1, name: "Camille", role: "Opérations & Expérience Client", photo: "/src/assets/gallery/camille-to-crop.jpeg", bio: "Elle gère l'organisation quotidienne, coordonne les partenaires et veille à ce que tout se déroule parfaitement.", stickyNote: "", noteColor: "yellow", rotation: -5 },
          { id: 2, name: "Louise", role: "Communauté & Animation", photo: "/src/assets/gallery/louise-to-crop.jpeg", bio: "Elle développe la communauté Arriba et garantit l'énergie collective unique de chaque groupe.", stickyNote: "", noteColor: "pink", rotation: 6 }
        ],
        annotations: {
          bestTeam: "Best team ever! 🎉",
          family: "Arriba Family ✨",
          legends: "LEGENDS!",
          memories: "Making memories 📸"
        }
      },
      gallery: {
        title: "La Vie Arriba",
  subtitle: "7 jours, 1000 moments à partager: Sessions surf à l'aube, fous rires pendant les cours de cuisine, soirées sous les étoiles... Découvrez en images l'aventure Arriba qui vous attend à Lombok",
        loadMore: "Voir Plus de Moments",
        shareTitle: "Partagez Votre Expérience Arriba",
        shareSubtitle: "Taguez-nous @arribasurfcamp pour apparaître dans notre galerie !"
      },
      photoFilter: {
        categories: {
          all: "Tout",
          surf: "Surf Sessions",
          camp: "Camp Life",
          food: "Food",
          sunsets: "Sunsets",
          community: "Community"
        },
        descriptions: {
          all: "Toutes les catégories • Explorez notre univers",
          surf: "Sessions de surf • L'essence d'Arriba",
          camp: "Vie au camp • Moments de détente",
          food: "Gastronomie • Saveurs fusion",
          sunsets: "Couchers de soleil • Magie quotidienne",
          community: "Communauté • Amitiés éternelles"
        }
      },
      navigation: {
        home: "Accueil",
        experience: "L'Exp Arriba",
        surfCamp: "Le Surf Camp",
        history: "L'Histoire",
        team: "L'Équipe",
        life: "La Vie Arriba",
        rooms: "Les Chambres",
        villa: "La Villa",
        planning: "Le Planning",
        bookNow: "Réserver"
      },
  // homeRoomTypes removed (section deprecated)
      hero: {
        title: "ARRIBA SURF CAMP",
  subtitle: "Réinventons le surf camp, 7 jours d'immersion totale entre surf, culture indonésienne et esprit de groupe"
      },
      booking: {
        title: "Réservez Votre Aventure Surf",
        arrivalDate: "Date d'Arrivée",
        departureDate: "Date de Départ",
        participants: "Participants",
  roomType: "Type de chambre",
        person: "Personne",
        people: "Personnes",
        searchBook: "RECHERCHER & RÉSERVER",
        selectArrival: "Sélectionner la date d'arrivée",
        selectDeparture: "Sélectionner la date de départ"
      },
      cards: {
        discover: "Découvrir",
        arriba: "Expérience Arriba",
        team: "L'Équipe",
        gallery: "Galerie",
        rooms: "Chambres",
        villa: "Villa",
        planning: "Planning"
      },
      offers: {
        title: "Choisissez Votre Aventure Surf",
        subtitle: "Vivez l'aventure surf ultime à Lombok avec nos forfaits soigneusement conçus. Des débutants aux pros, nous avons le voyage parfait qui vous attend.",
        specialOffers: "OFFRES SPÉCIALES",
        mostPopular: "PLUS POPULAIRE",
        premium: "PREMIUM",
        exclusive: "EXCLUSIF",
        discount: "REMISE",
        perPerson: "par personne",
        bookNow: "Réserver",
        viewAll: "Voir Tous les Forfaits",
        contactUs: "Nous Contacter",
        limitedOffer: "🏄‍♂️ Offre Limitée - Réservez Avant Mars 2025!",
  limitedDesc: "Économisez jusqu'à 25% sur tous les forfaits surf. Vagues parfaites, instructeurs experts, et souvenirs inoubliables vous attendent. Tous les forfaits incluent l'assurance.",
        packages: {
          beginner: {
            name: "Forfait Débutant",
            duration: "7 Jours",
            features: [
              "7 nuits d'hébergement",
              "6 cours de surf avec instructeur",
              "Planche de surf et combinaison incluses",
              "Petit-déjeuner quotidien",
              "Transferts aéroport",
              "Accès à la plage",
              "Séance photo"
            ]
          },
          intermediate: {
            name: "Forfait Intermédiaire",
            duration: "10 Jours",
            features: [
              "10 nuits hébergement de luxe",
              "8 cours de surf avancés",
              "Sélection de planches premium",
              "Tous les repas inclus",
              "Séances de yoga",
              "Excursions sur l'île",
              "Analyse vidéo de surf",
              "Certificat de completion"
            ]
          },
          pro: {
            name: "Retraite Surfeur Pro",
            duration: "14 Jours",
            features: [
              "14 nuits villa premium",
              "Coaching surf illimité",
              "Instructeur de surf personnel",
              "Tous repas et boissons",
              "Soins spa",
              "Accès plage privée",
              "Filmage drone surf",
              "Préparation compétition",
              "Événements networking"
            ]
          }
        }
      },
      surfcamp: {
        common: {
          amenitiesTitle: "Équipements",
          capacityConfigTitle: "Capacité & Configuration",
          locationTitle: "Localisation Premium",
          locationBadge: "Emplacement",
          uniqueRateTitle: "Tarif Unique",
          weekTypeTitle: "Semaine Type",
          photoPlanningPlaceholder: ""
        },
        photo: {
          mainRoomPlaceholder: "Photo principale chambre (vue océan) à venir",
          mainRoomCaption: "La chambre principale avec vue sur l'océan",
          villaMainPlaceholder: "Photo piscine & vue collines à venir"
        },
        rooms: {
          title: "Les Chambres",
          subtitle: "Hébergement en villa partagée - confort, espace et ambiance conviviale",
          amenities: [
            "4-6 lits confortables",
            "Climatisation",
            "Salle de bain privée",
            "Balcon avec vue",
            "Casiers sécurisés",
            "Prises internationales"
          ],
          secondaryPhotos: [
            "Lits superposés 4-6 pers",
            "Balcon & boards",
            "Salle de bain moderne",
            "Espace commun / lounge"
          ],
          pricing: {
            durationLine: "7 jours / 6 nuits",
            allInclusiveLine: "Formule tout compris (voir détails)",
            excludesLine: "Sauf vols & boissons alcoolisées"
          }
        },
        villa: {
          title: "La Villa Arriba",
          subtitle: "Votre base camp à Lombok : espace, confort et communauté",
          features: [
            "Piscine privée",
            "Cuisine équipée complète",
            "WiFi haut débit",
            "Parking sécurisé",
            "Terrasse couverte",
            "Stockage planches",
            "Service ménage quotidien"
          ],
          secondaryPhotos: [
            "Espace chill extérieur",
            "Coin repas ombragé",
            "Jardin tropical",
            "Salon commun"
          ],
          capacity: [
            "Capacité totale: 28 personnes",
            "Chambres partagées 4-6 personnes",
            "Espaces communs ouverts",
            "Ambiance internationale & conviviale"
          ],
          location: [
            "🏖️ 5 min à pied de Tajung Beach",
            "🏄‍♂️ 10 min des meilleurs spots",
            "🍕 2 min des restaurants & cafés",
            "✈️ 15 min de l'aéroport"
          ],
          map: {
            popupTitle: "Shaya Cottage (Villa Arriba)",
            addressLines: ["Jalan Sekotong Raya", "Tajung, Lombok"]
          }
        },
  planning: {
          title: "Le Planning",
          subtitle: "Une semaine équilibrée entre progression surf, bien-être et découverte locale",
          daysOrder: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
          days: {
            dimanche: { label: "DIMANCHE", activities: ["✈️ Jour d'Arrivée", "🌅 Accueil Sunset", "🍽️ Dîner de Bienvenue"] },
            lundi: { label: "LUNDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "🧘‍♀️ Yoga (17h)", "🎉 Temps Communauté"] },
            mardi: { label: "MARDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "👨‍🍳 Cours Cuisine (15h)", "🌅 Sunset Libre"] },
            mercredi: { label: "MERCREDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "🤿 Snorkeling Trip (14h)", "🎬 Movie Night (20h)"] },
            jeudi: { label: "JEUDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "🙏 Offrandes Balinaises (16h)", "🧘‍♀️ Yoga (18h)"] },
            vendredi: { label: "VENDREDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "💪 Pilates (17h)", "🔥 BBQ Groupe (19h)"] },
            samedi: { label: "SAMEDI", activities: ["🏄‍♂️ Session Surf Finale", "🏝️ Explore Lombok", "👋 Farewell Party"] }
          },
          legends: [
            "🏄‍♂️ Surf quotidien inclus",
            "🧘‍♀️ 3x Yoga/Pilates/semaine",
            "🎭 Activités culturelles",
            "🎉 Moments de groupe"
          ],
          activityAlert: "Week-end spécialisé TREK & découverte des montagnes de Lombok – 24 Septembre. Réservez votre semaine."
        }
      }
      ,
      bookingComponent: {
        weekLabel: "Semaine (Arrivée le Dimanche)",
        weekPlaceholder: "Choisissez un dimanche",
        stayPrefix: "Séjour:",
        bookWeek: "Réserver cette semaine"
      },
      offerSection: {
        specialBadge: "OFFRE SPÉCIALE LOMBOK",
        heading: "Votre Aventure Surf Parfaite",
        subheading: "Découvrez la magie des vagues de Lombok avec notre formule tout compris. Une expérience surf authentique mêlant culture locale et spots exceptionnels.",
        discountSuffix: "% OFF - Offre Limitée!",
        locationTag: "Lombok, Indonésie",
        allInclusiveTagline: "Formule tout compris - Lombok, Indonésie",
        cta: "Réserver Maintenant - {{price}}",
        includedTitle: "Inclus dans la Formule",
        highlightsTitle: "Pourquoi Choisir Arriba",
        contactHeading: "Prêt à Réserver ?",
        contactText: "Contactez-nous directement pour une réservation instantanée ou toute question.",
        contactWhatsapp: "📱 WhatsApp",
        contactEmail: "✉️ Email Info",
        trust: { surfSpots: "Meilleurs Spots de Surf", instructors: "Instructeurs Expérimentés", authentic: "Expérience Authentique", sharedVilla: "Villa Partagée" }
      },
      bookNowPage: {
        heroTitle: "Réservez Votre Aventure Arriba",
  heroSubtitle: "7 jours inoubliables tout compris dès {{price}}",
        steps: { dates: "1. Choisissez vos dates", participants: "2. Nombre de participants", roomType: "3. Type de chambre", package: "4. Formule", info: "5. Vos informations", payment: "6. Paiement" },
        weeklyNote: "Séjours hebdomadaires (7 jours / 6 nuits).",
        standardPackage: "Formule Standard",
        perPerson: "/ personne",
        packageFeatures: ["✓ 7 jours / 6 nuits","✓ Tous les repas","✓ Cours de surf quotidiens","✓ Yoga 3x/semaine","✓ Activités culturelles","✓ Transferts aéroport"],
        includedBadge: "INCLUS",
        confirmCta: "Confirmer la réservation",
        termsNote: "En confirmant vous acceptez nos conditions générales & politique d'annulation flexible.",
  trustSignals: ["Paiement sécurisé","Annulation flexible"],
        invalidStart: "Veuillez choisir un dimanche (séjour du dimanche au samedi).",
        roomTypes: {
          mixed: { title: "Chambre Mixte", description: "Partagée avec voyageurs hommes & femmes." },
          girls: { title: "Chambre Filles Uniquement", description: "Réservée aux voyageuses." },
          boys: { title: "Chambre Garçons Uniquement", description: "Réservée aux voyageurs." }
        }
      },
      personalInfoForm: { firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone / WhatsApp", infoNote: "Nous utiliserons ces informations uniquement pour votre réservation." },
      paymentOptions: {
        method: { card: "Carte", bank: "Virement", later: "Plus tard" },
        card: {
          title: "Payer par Carte",
          form: { cardholder: "Titulaire", number: "Numéro de carte" },
          comingSoon: "Module de paiement sécurisé bientôt disponible (Stripe)."
        },
        secure: "SÉCURISÉ",
        secureDetail: "Chiffrement 256-bit",
        bank: { title: "Virement bancaire", iban: "FR76 XXXX XXXX XXXX", bic: "BIC XXXXXXXX", proof: "Envoyez la preuve à booking@arriba.com", note: "Traitement 1-2 jours ouvrés" },
        laterTitle: "Réserver Maintenant, Décider Plus Tard",
        later: "Bloquez votre place sans paiement immédiat.",
        laterPoints: ["Confirmation sous 24h","Lien pour payer l'acompte quand prêt","Place gardée 72h"],
        breakdown: { title: "Détail du Paiement", package: "Total Forfait", deposit30: "Acompte 30%", balance: "Solde Restant", note: "Solde à régler 14 jours avant l'arrivée." },
        timeline: { title: "Timeline", steps: ["Réservation & acompte","Confirmation & pack de bienvenue","Paiement du solde","Arrivée & aventure"] },
        deposit: "Acompte (30%) :"
      },
      bookingSummary: {
        title: "Résumé",
        dates: "Dates",
        participants: "Participants",
        roomType: "Type de chambre",
        weekPrice: "Prix semaine",
        total: "Total",
        inclusions: ["Tout inclus sauf vols & boissons alcoolisées","Confirmation sous 24h","Acompte 30% pour bloquer votre place"]
      }
    }
  },
  es: {
    translation: {
      construction: {
        notice: "Este sitio está en construcción – solo para investigación de inversores",
        close: "Cerrar aviso"
      },
      heroExp: {
        title: "L'EXP ARRIBA",
        subtitle: "28 viajeros, una villa en Lombok, 7 días de inmersión total",
        description: "Habitaciones compartidas (4 a 6 camas) en el corazón de una villa tropical con piscina privada y zonas comunes abiertas. Confort moderno, ambiente acogedor y localización ideal: un lugar pensado para descansar, conectar y vivir plenamente la aventura del Surf Camp.",
        discover: "DESCUBRIR"
      },
      history: {
        title: "Nuestra Historia",
        subtitle: "La aventura Arriba: de una idea al paraíso del surf 🏄‍♂️",
        annotations: { start: "Nuestra historia comienza...", dreams: "Los sueños se hacen realidad ✨", building: "Construyendo el paraíso!", family: "La familia crece 👨‍👩‍👧‍👦", adventures: "Aventuras infinitas!" },
        timeline: [
          { year: "1", title: "Origen del Proyecto", content: "Camille y Louise se conocieron como animadoras en un campamento de niños francés. Esta experiencia compartida en animación de grupos nos unió y nos dio expertise sólida en crear experiencias grupales exitosas.", noteText: "Encuentro", noteColor: "yellow" },
          { year: "2", title: "Descubriendo Indonesia", content: "A los 18 años, Camille se fue a vivir a Indonesia. Su viaje la llevó de Sulawesi a Bali, luego a Lombok donde descubrió el surf. El aspecto salvaje y preservado de Lombok, combinado con condiciones de surf excepcionales, la convenció del potencial de este destino.", noteText: "Inspiración", noteColor: "pink" },
          { year: "3", title: "Nacimiento del Concepto", content: "Louise se unió a Camille unos meses después en Indonesia. Con nuestra experiencia en animación, desarrollamos la idea de un camp de surf para adultos. El objetivo: ofrecer vacaciones que combinen aventura, descubrimiento del surf y relajación, sin el estrés de la organización.", noteText: "Idea", noteColor: "blue" },
          { year: "4", title: "Arriba Surf Camps Hoy", content: "Nuestra fórmula se dirige a adultos en busca de aventura, amistad y tranquilidad. Nos encargamos de toda la organización para permitir que nuestros clientes disfruten plenamente de su estancia: surf, exploración de Lombok y momentos de relajación en un entorno natural excepcional.", noteText: "Experiencia", noteColor: "yellow" },
          { year: "5", title: "El Proyecto Toma Forma", content: "Después de más de un año de reflexión, planificación y perfeccionamiento de cada detalle, nuestro proyecto Arriba Surf Camps está listo para ver la luz. Ahora buscamos inversores apasionados que compartan nuestra visión para dar vida a esta aventura única.", noteText: "Estructura", noteColor: "pink" },
          { year: "6", title: "Únete a la Aventura", content: "Si nuestro proyecto te inspira y quieres formar parte de esta hermosa aventura, no dudes en contactarnos. ¡Juntos, creemos recuerdos inolvidables!", noteText: "Invertir", noteColor: "blue" }
        ]
      },
      team: {
        title: "El Equipo Arriba",
        subtitle: "Conoce a los apasionados que hacen cada momento único",
  closingNote: "",
        members: [
          { id: 1, name: "Camille", role: "Operaciones & Experiencia", photo: "/src/assets/gallery/camille-to-crop.jpeg", bio: "Coordina la logística diaria y asegura que cada huésped se sienta en casa.", stickyNote: "", noteColor: "yellow", rotation: -5 },
          { id: 2, name: "Louise", role: "Comunidad & Animación", photo: "/src/assets/gallery/louise-to-crop.jpeg", bio: "Hace crecer la comunidad Arriba y crea la energía colectiva única.", stickyNote: "", noteColor: "pink", rotation: 6 }
        ],
        annotations: { bestTeam: "Mejor equipo! 🎉", family: "Arriba Family ✨", legends: "LEGENDA!", memories: "Creando recuerdos 📸" }
      },
      gallery: { title: "La Vida Arriba", subtitle: "Descubre la magia de Arriba...", loadMore: "Ver Más Momentos", shareTitle: "Comparte Tu Experiencia Arriba", shareSubtitle: "Etiquétanos @arribasurfcamp para aparecer!" },
      photoFilter: { categories: { all: "Todo", surf: "Surf Sessions", camp: "Camp Life", food: "Food", sunsets: "Sunsets", community: "Community" }, descriptions: { all: "Todas las categorías", surf: "Sesiones de surf", camp: "Vida en el camp", food: "Gastronomía", sunsets: "Atardeceres", community: "Comunidad" } },
      navigation: {
        home: "Inicio",
  experience: "Experiencia Arriba",
  surfCamp: "Surf Camp",
  history: "Historia",
  team: "Equipo",
  life: "Vida Arriba",
  rooms: "Habitaciones",
  villa: "Villa",
  planning: "Planificación",
        bookNow: "Reservar"
      },
  // homeRoomTypes removed (section deprecated)
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesia – Experimenta la Aventura de Surf Definitiva"
      },
      booking: {
        title: "Reserva Tu Aventura de Surf",
        arrivalDate: "Fecha de Llegada",
        departureDate: "Fecha de Salida",
        participants: "Participantes",
  roomType: "Tipo de habitación",
        person: "Persona",
        people: "Personas",
        searchBook: "BUSCAR & RESERVAR",
        selectArrival: "Seleccionar fecha de llegada",
        selectDeparture: "Seleccionar fecha de salida"
      },
      bookNowPage: {
        heroTitle: "Reserva Tu Aventura Arriba",
  heroSubtitle: "7 días inolvidables todo incluido desde {{price}}",
        steps: { dates: "1. Elige tus fechas", participants: "2. Participantes", roomType: "3. Tipo de habitación", package: "4. Paquete", info: "5. Tus datos", payment: "6. Pago" },
        weeklyNote: "Estancias semanales (7 días / 6 noches).",
        standardPackage: "Paquete Estándar",
        perPerson: "/ persona",
        packageFeatures: ["✓ 7 días / 6 noches","✓ Todas las comidas","✓ Clases de surf diarias","✓ Yoga 3x/semana","✓ Actividades culturales","✓ Transfers aeropuerto"],
        includedBadge: "INCLUIDO",
        confirmCta: "Confirmar reserva",
        termsNote: "Al confirmar aceptas nuestros términos y política flexible de cancelación.",
  trustSignals: ["Pago seguro","Cancelación flexible"],
        invalidStart: "Por favor elige un domingo (estancia de domingo a sábado).",
        roomTypes: {
          mixed: { title: "Habitación Mixta", description: "Compartida con viajeros de ambos géneros." },
          girls: { title: "Habitación Solo Chicas", description: "Solo para viajeras." },
          boys: { title: "Habitación Solo Chicos", description: "Solo para viajeros." }
        }
      },
      cards: {
  discover: "Descubrir",
  arriba: "Experiencia Arriba",
  team: "El Equipo",
  gallery: "Galería",
  rooms: "Habitaciones",
  villa: "Villa",
  planning: "Planificación"
      },
      offers: {
        title: "Elige Tu Aventura de Surf",
        subtitle: "Experimenta la aventura de surf definitiva en Lombok con nuestros paquetes cuidadosamente diseñados. Desde principiantes hasta profesionales, tenemos el viaje perfecto esperándote.",
        specialOffers: "OFERTAS ESPECIALES",
        mostPopular: "MÁS POPULAR",
        premium: "PREMIUM",
        exclusive: "EXCLUSIVO",
        discount: "DESC.",
        perPerson: "por persona",
        bookNow: "Reservar",
        viewAll: "Ver Todos los Paquetes",
        contactUs: "Contáctanos",
        limitedOffer: "🏄‍♂️ Oferta Limitada - ¡Reserva Antes de Marzo 2025!",
  limitedDesc: "Ahorra hasta 25% en todos los paquetes de surf. Olas perfectas, instructores expertos, y recuerdos inolvidables te esperan. Todos los paquetes incluyen seguro.",
        packages: {
          beginner: {
            name: "Paquete Principiante",
            duration: "7 Días",
            features: [
              "7 noches de alojamiento",
              "6 clases de surf con instructor",
              "Tabla de surf y traje incluidos",
              "Desayuno diario",
              "Traslados aeropuerto",
              "Acceso a la playa",
              "Sesión de fotografía"
            ]
          },
          intermediate: {
            name: "Paquete Intermedio",
            duration: "10 Días",
            features: [
              "10 noches alojamiento de lujo",
              "8 clases de surf avanzadas",
              "Selección de tablas premium",
              "Todas las comidas incluidas",
              "Sesiones de yoga",
              "Excursiones a la isla",
              "Análisis de video de surf",
              "Certificado de finalización"
            ]
          },
          pro: {
            name: "Retiro Surfista Pro",
            duration: "14 Días",
            features: [
              "14 noches villa premium",
              "Entrenamiento surf ilimitado",
              "Instructor de surf personal",
              "Todas las comidas y bebidas",
              "Tratamientos de spa",
              "Acceso playa privada",
              "Filmación drone surf",
              "Preparación competición",
              "Eventos networking"
            ]
          }
        }
      },
      surfcamp: {
        common: {
          amenitiesTitle: "Servicios",
          capacityConfigTitle: "Capacidad & Configuración",
          locationTitle: "Ubicación Premium",
          locationBadge: "Ubicación",
          uniqueRateTitle: "Tarifa Única",
          weekTypeTitle: "Semana Tipo",
          photoPlanningPlaceholder: ""
        },
        rooms: {
          title: "Habitaciones",
          subtitle: "Alojamiento compartido en villa – confort, espacio y comunidad",
          amenities: [
            "4-6 camas cómodas",
            "Aire acondicionado",
            "Baño privado",
            "Balcón con vista",
            "Taquillas seguras",
            "Enchufes internacionales"
          ],
          secondaryPhotos: [
            "Literas 4-6 pax",
            "Balcón y tablas",
            "Baño moderno",
            "Zona común / lounge"
          ],
          pricing: {
            durationLine: "7 días / 6 noches",
            allInclusiveLine: "Paquete todo incluido (ver detalles)",
            excludesLine: "Excepto vuelos y bebidas alcohólicas"
          }
        },
        villa: {
          title: "La Villa Arriba",
          subtitle: "Tu base en Lombok: espacio, confort y comunidad",
          features: [
            "Piscina privada",
            "Cocina totalmente equipada",
            "WiFi alta velocidad",
            "Parking seguro",
            "Terraza cubierta",
            "Almacenamiento tablas",
            "Servicio limpieza diario"
          ],
          secondaryPhotos: [
            "Zona chill exterior",
            "Comedor sombreado",
            "Jardín tropical",
            "Sala común"
          ],
          capacity: [
            "Capacidad total: 28 personas",
            "Habitaciones compartidas 4-6",
            "Espacios comunes abiertos",
            "Ambiente internacional y amigable"
          ],
          location: [
            "🏖️ 5 min a pie de Tajung Beach",
            "🏄‍♂️ 10 min a spots top",
            "🍕 2 min a restaurantes y cafés",
            "✈️ 15 min del aeropuerto"
          ],
          map: {
            popupTitle: "Shaya Cottage (Villa Arriba)",
            addressLines: ["Jalan Sekotong Raya", "Tajung, Lombok"]
          }
        },
        planning: {
          title: "Planificación",
          subtitle: "Una semana equilibrada entre progreso surf, bienestar y descubrimiento local",
          daysOrder: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
          days: {
            domingo: { label: "DOMINGO", activities: ["✈️ Llegada & Check-in", "🌅 Bienvenida Sunset", "🍽️ Cena de Bienvenida"] },
            lunes: { label: "LUNES", activities: ["🏄‍♂️ Clase Surf (7h)", "🧘‍♀️ Yoga (17h)", "🎉 Tiempo Comunidad"] },
            martes: { label: "MARTES", activities: ["🏄‍♂️ Clase Surf (7h)", "👨‍🍳 Clase Cocina (15h)", "🌅 Sunset Libre"] },
            miércoles: { label: "MIÉRCOLES", activities: ["🏄‍♂️ Clase Surf (7h)", "🤿 Snorkel (14h)", "🎬 Noche Cine (20h)"] },
            jueves: { label: "JUEVES", activities: ["🏄‍♂️ Clase Surf (7h)", "🙏 Ofrendas Balinesas (16h)", "🧘‍♀️ Yoga (18h)"] },
            viernes: { label: "VIERNES", activities: ["🏄‍♂️ Clase Surf (7h)", "💪 Pilates (17h)", "🔥 BBQ Grupo (19h)"] },
            sábado: { label: "SÁBADO", activities: ["🏄‍♂️ Sesión Surf Final", "🏝️ Explorar Lombok", "👋 Fiesta Despedida"] }
          },
          legends: [
            "🏄‍♂️ Surf diario incluido",
            "🧘‍♀️ 3x Yoga/Pilates por semana",
            "🎭 Actividades culturales",
            "🎉 Momentos de grupo"
          ],
          activityAlert: "Fin de semana especial TREK y descubrimiento de las montañas de Lombok – 24 de Septiembre. Reserva tu semana."
        }
      },
      bookingSummary: {
        title: "Resumen",
        dates: "Fechas",
        participants: "Participantes",
        roomType: "Tipo de habitación",
        weekPrice: "Precio semana",
        total: "Total",
        inclusions: ["Todo incluido excepto vuelos y bebidas alcohólicas","Confirmación en 24h","Depósito 30% para asegurar tu lugar"]
      }
    }
  },
  nl: {
    translation: {
      construction: {
        notice: "Deze site is in aanbouw – uitsluitend voor investeerdersonderzoek",
        close: "Melding sluiten"
      },
  heroExp: { title: "L'EXP ARRIBA", subtitle: "28 reizigers, één villa op Lombok, 7 dagen totale onderdompeling", description: "Gedeelde kamers (4 tot 6 bedden) in het hart van een tropische villa met privézwembad en open gemeenschappelijke ruimtes. Modern comfort, gezellige sfeer en ideale ligging: een plek om uit te rusten, te verbinden en de Surf Camp avontuur volledig te beleven.", discover: "ONTDEK" },
  history: { title: "Ons Verhaal", subtitle: "Het Arriba avontuur: van idee tot surf paradijs 🏄‍♂️", annotations: { start: "Ons verhaal begint...", dreams: "Dromen worden realiteit ✨", building: "Paradijs bouwen!", family: "Familie groeit 👨‍👩‍👧‍👦", adventures: "Eindeloze avonturen!" }, timeline: [
    { year: "1", title: "Project Oorsprong", content: "Camille en Louise ontmoetten elkaar als groepsleiders op een Frans kinderkamp. Deze gedeelde ervaring in groepsleiding bracht ons samen en gaf ons solide expertise in het creëren van succesvolle groepservaringen.", noteText: "Ontmoeting", noteColor: "yellow" },
    { year: "2", title: "Indonesië Ontdekken", content: "Op 18-jarige leeftijd ging Camille in Indonesië wonen. Haar reis voerde haar van Sulawesi naar Bali, vervolgens naar Lombok waar ze surfen ontdekte. Lombok's wilde en ongerepte natuur, gecombineerd met uitzonderlijke surfcondities, overtuigde haar van het potentieel van deze bestemming.", noteText: "Inspiratie", noteColor: "pink" },
    { year: "3", title: "Geboorte van het Concept", content: "Louise voegde zich enkele maanden later bij Camille in Indonesië. Met onze animatie-ervaring ontwikkelden we het idee van een surf camp voor volwassenen. Het doel: vakanties aanbieden die avontuur, surf ontdekking en ontspanning combineren, zonder organisatiestress.", noteText: "Idee", noteColor: "blue" },
    { year: "4", title: "Arriba Surf Camps Vandaag", content: "Onze formule richt zich op volwassenen die op zoek zijn naar avontuur, vriendschap en rust. We regelen alle organisatie zodat onze gasten volledig kunnen genieten van hun verblijf: surfen, Lombok verkennen en ontspannende momenten in een uitzonderlijke natuurlijke omgeving.", noteText: "Ervaring", noteColor: "yellow" },
    { year: "5", title: "Het Project Krijgt Vorm", content: "Na meer dan een jaar reflectie, planning en het perfectioneren van elk detail, is ons Arriba Surf Camps project klaar om tot leven te komen. We zoeken nu gepassioneerde investeerders die onze visie delen om dit unieke avontuur tot leven te brengen.", noteText: "Structuur", noteColor: "pink" },
    { year: "6", title: "Doe Mee Met Het Avontuur", content: "Als ons project je inspireert en je deel wilt uitmaken van dit prachtige avontuur, aarzel dan niet om contact met ons op te nemen. Samen, laten we onvergetelijke herinneringen creëren!", noteText: "Investeren", noteColor: "blue" }
  ] },
  team: { title: "Het Arriba Team", subtitle: "Ontmoet de gepassioneerde mensen die elk moment uniek maken", closingNote: "", members: [
  { id: 1, name: "Camille", role: "Operaties & Gastbeleving", photo: "/src/assets/gallery/camille-to-crop.jpeg", bio: "Ze coördineert de dagelijkse logistiek en zorgt dat elke gast zich thuis voelt.", stickyNote: "", noteColor: "yellow", rotation: -5 },
  { id: 2, name: "Louise", role: "Community & Beleving", photo: "/src/assets/gallery/louise-to-crop.jpeg", bio: "Ze bouwt de Arriba community uit en creëert de unieke groepsenergie.", stickyNote: "", noteColor: "pink", rotation: 6 }
  ], annotations: { bestTeam: "Beste team! 🎉", family: "Arriba Family ✨", legends: "LEGENDS!", memories: "Herinneringen maken 📸" } },
  gallery: { title: "Arriba Leven", subtitle: "Ontdek de magie...", loadMore: "Meer Momenten", shareTitle: "Deel Je Arriba Ervaring", shareSubtitle: "Tag ons @arribasurfcamp" },
  photoFilter: { categories: { all: "Alles", surf: "Surf Sessions", camp: "Camp Life", food: "Food", sunsets: "Sunsets", community: "Community" }, descriptions: { all: "Alle categorieën", surf: "Surf sessies", camp: "Camp leven", food: "Gastronomie", sunsets: "Zonsondergangen", community: "Community" } },
      navigation: {
        home: "Home",
  experience: "Arriba Ervaring",
  surfCamp: "Surf Camp",
  history: "Geschiedenis",
  team: "Team",
  life: "Arriba Leven",
  rooms: "Kamers",
  villa: "Villa",
        planning: "Planning",
        bookNow: "Boek Nu"
      },
  // homeRoomTypes removed (section deprecated)
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesië – Beleef het Ultieme Surf Avontuur"
      },
      booking: {
        title: "Boek Je Surf Avontuur",
        arrivalDate: "Aankomstdatum",
        departureDate: "Vertrekdatum",
        participants: "Deelnemers",
  roomType: "Kamertype",
        person: "Persoon",
        people: "Personen",
        searchBook: "ZOEKEN & BOEKEN",
        selectArrival: "Selecteer aankomstdatum",
        selectDeparture: "Selecteer vertrekdatum"
      },
      bookNowPage: {
        heroTitle: "Boek Je Arriba Avontuur",
  heroSubtitle: "Onvergetelijke 7 dagen all-in vanaf {{price}}",
        steps: { dates: "1. Kies je data", participants: "2. Deelnemers", roomType: "3. Kamertype", package: "4. Pakket", info: "5. Jouw gegevens", payment: "6. Betaling" },
        weeklyNote: "Wekelijkse verblijven (7 dagen / 6 nachten).",
        standardPackage: "Standaard Pakket",
        perPerson: "/ persoon",
        packageFeatures: ["✓ 7 dagen / 6 nachten","✓ Alle maaltijden","✓ Dagelijkse surflessen","✓ Yoga 3x/week","✓ Culturele activiteiten","✓ Luchthaventransfers"],
        includedBadge: "INBEGREPEN",
        confirmCta: "Boeking bevestigen",
        termsNote: "Door te bevestigen accepteer je onze algemene voorwaarden & flexibel annuleringsbeleid.",
  trustSignals: ["Veilige betaling","Flexibele annulering"],
        invalidStart: "Kies een zondag (verblijf zondag t/m zaterdag).",
        roomTypes: {
          mixed: { title: "Gemengde Kamer", description: "Gedeeld door mannen en vrouwen." },
          girls: { title: "Alleen Meisjes Kamer", description: "Alleen voor vrouwelijke reizigers." },
          boys: { title: "Alleen Jongens Kamer", description: "Alleen voor mannelijke reizigers." }
        }
      },
      paymentOptions: {
        method: { card: "Kaart", bank: "Overschrijving", later: "Later" },
        card: {
          title: "Betalen met Kaart",
          form: { cardholder: "Kaarthouder", number: "Kaartnummer" },
          comingSoon: "Beveiligde betaalmodule komt binnenkort (Stripe)."
        },
        secure: "VEILIG",
        secureDetail: "256-bit versleuteling",
        bank: { title: "Bankoverschrijving", iban: "FR76 XXXX XXXX XXXX", bic: "BIC XXXXXXXX", proof: "Stuur bewijs naar booking@arriba.com", note: "Verwerking 1-2 werkdagen" },
        laterTitle: "Nu boeken, later beslissen",
        later: "Reserveer je plek zonder directe betaling.",
        laterPoints: ["Bevestiging binnen 24u","Link voor aanbetaling wanneer klaar","Plek 72u gereserveerd"],
        breakdown: { title: "Betalingsoverzicht", package: "Pakket Totaal", deposit30: "30% Aanbetaling", balance: "Resterend Saldo", note: "Saldo te betalen 14 dagen voor aankomst." },
        timeline: { title: "Tijdlijn", steps: ["Boeking & aanbetaling","Bevestiging & welkomstpakket","Saldo betaling","Aankomst & avontuur"] },
        deposit: "Aanbetaling (30%):"
      },
      cards: {
      discover: "Ontdekken",
      arriba: "Arriba",
      team: "Team",
      gallery: "Galerij",
      rooms: "Kamers",
      villa: "Villa",
      planning: "Planning"
      },
      offers: {
        title: "Kies Je Surf Avontuur",
        subtitle: "Beleef het ultieme surf avontuur in Lombok met onze zorgvuldig samengestelde pakketten. Van beginners tot professionals, wij hebben de perfecte reis voor jou.",
        specialOffers: "SPECIALE AANBIEDINGEN",
        mostPopular: "MEEST POPULAIR",
        premium: "PREMIUM",
        exclusive: "EXCLUSIEF",
        discount: "KORTING",
        perPerson: "per persoon",
        bookNow: "Boek Nu",
        viewAll: "Bekijk Alle Pakketten",
        contactUs: "Neem Contact Op",
        limitedOffer: "🏄‍♂️ Beperkte Tijd Aanbieding - Boek Voor Maart 2025!",
  limitedDesc: "Bespaar tot 25% op alle surf pakketten. Perfecte golven, expert instructeurs, en onvergetelijke herinneringen wachten op je. Alle pakketten inclusief verzekering.",
        packages: {
          beginner: {
            name: "Beginner Pakket",
            duration: "7 Dagen",
            features: [
              "7 nachten accommodatie",
              "6 surf lessen met instructeur",
              "Surfboard & wetsuit inbegrepen",
              "Dagelijks ontbijt",
              "Luchthaven transfers",
              "Strand toegang",
              "Fotosessie"
            ]
          },
          intermediate: {
            name: "Gevorderd Pakket",
            duration: "10 Dagen",
            features: [
              "10 nachten luxe accommodatie",
              "8 gevorderde surf lessen",
              "Premium surfboard selectie",
              "Alle maaltijden inbegrepen",
              "Yoga sessies",
              "Eiland excursies",
              "Surf video analyse",
              "Certificaat voltooiing"
            ]
          },
          pro: {
            name: "Pro Surfer Retraite",
            duration: "14 Dagen",
            features: [
              "14 nachten premium villa",
              "Onbeperkte surf coaching",
              "Persoonlijke surf instructeur",
              "Alle maaltijden & dranken",
              "Spa behandelingen",
              "Privé strand toegang",
              "Drone surf beelden",
              "Competitie voorbereiding",
              "Netwerk evenementen"
            ]
          }
        }
      },
      surfcamp: {
        common: {
          amenitiesTitle: "Voorzieningen",
          capacityConfigTitle: "Capaciteit & Indeling",
          locationTitle: "Premium Locatie",
          locationBadge: "Locatie",
          uniqueRateTitle: "Enkel Tarief",
          weekTypeTitle: "Typische Week",
          photoPlanningPlaceholder: ""
        },
        rooms: {
          title: "De Kamers",
          subtitle: "Gedeelde villa accommodatie – comfort, ruimte en community",
          amenities: [
            "4-6 comfortabele bedden",
            "Airconditioning",
            "Privé badkamer",
            "Balkon met uitzicht",
            "Veilige lockers",
            "Internationale stopcontacten"
          ],
          secondaryPhotos: [
            "Stapelbedden 4-6 pax",
            "Balkon & boards",
            "Moderne badkamer",
            "Gemeenschappelijke lounge"
          ],
          pricing: {
            durationLine: "7 dagen / 6 nachten",
            allInclusiveLine: "All-in pakket (zie details)",
            excludesLine: "Exclusief vluchten & alcohol"
          }
        },
        villa: {
          title: "De Arriba Villa",
          subtitle: "Jouw uitvalsbasis op Lombok: ruimte, comfort en community",
          features: [
            "Privé zwembad",
            "Volledig uitgeruste keuken",
            "Hoge snelheid WiFi",
            "Beveiligde parking",
            "Overdekt terras",
            "Board opslag",
            "Dagelijkse schoonmaak"
          ],
          secondaryPhotos: [
            "Buiten chill zone",
            "Schaduw eetplek",
            "Tropische tuin",
            "Gemeenschappelijke living"
          ],
          capacity: [
            "Totale capaciteit: 28 personen",
            "Gedeelde kamers 4-6 personen",
            "Open gemeenschappelijke ruimtes",
            "Internationale & gezellige sfeer"
          ],
          location: [
            "🏖️ 5 min lopen naar Tajung Beach",
            "🏄‍♂️ 10 min naar top spots",
            "🍕 2 min naar restaurants & cafés",
            "✈️ 15 min van luchthaven"
          ],
          map: {
            popupTitle: "Shaya Cottage (Villa Arriba)",
            addressLines: ["Jalan Sekotong Raya", "Tajung, Lombok"]
          }
        },
        planning: {
          title: "Planning",
          subtitle: "Een gebalanceerde week tussen surf progressie, welzijn en lokale ontdekking",
          daysOrder: ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],
          days: {
            zondag: { label: "ZONDAG", activities: ["✈️ Aankomst & Check-in", "🌅 Sunset Welkom", "🍽️ Welkom Diner"] },
            maandag: { label: "MAANDAG", activities: ["🏄‍♂️ Surf Les (7u)", "🧘‍♀️ Yoga (17u)", "🎉 Community Tijd"] },
            dinsdag: { label: "DINSDAG", activities: ["🏄‍♂️ Surf Les (7u)", "👨‍🍳 Kookles (15u)", "🌅 Sunset Vrij"] },
            woensdag: { label: "WOENSDAG", activities: ["🏄‍♂️ Surf Les (7u)", "🤿 Snorkel Trip (14u)", "🎬 Movie Night (20u)"] },
            donderdag: { label: "DONDERDAG", activities: ["🏄‍♂️ Surf Les (7u)", "🙏 Balinese Offers (16u)", "🧘‍♀️ Yoga (18u)"] },
            vrijdag: { label: "VRIJDAG", activities: ["🏄‍♂️ Surf Les (7u)", "💪 Pilates (17u)", "🔥 Groep BBQ (19u)"] },
            zaterdag: { label: "ZATERDAG", activities: ["🏄‍♂️ Finale Surf Sessie", "🏝️ Ontdek Lombok", "👋 Farewell Party"] }
          },
          legends: [
            "🏄‍♂️ Dagelijkse surf inbegrepen",
            "🧘‍♀️ 3x Yoga/Pilates per week",
            "🎭 Culturele activiteiten",
            "🎉 Groepsmomenten"
          ],
          activityAlert: "Speciaal TREK weekend & ontdekking van de bergen van Lombok – 24 September. Boek je week."
        }
      },
      bookingSummary: {
        title: "Samenvatting",
        dates: "Data",
        participants: "Deelnemers",
        roomType: "Kamertype",
        weekPrice: "Weekprijs",
        total: "Totaal",
        inclusions: ["Alles inbegrepen behalve vluchten en alcoholische dranken","Bevestiging binnen 24u","30% aanbetaling om je plek te reserveren"]
      }
    }
  },
  id: {
    translation: {
      construction: {
        notice: "Situs ini masih dalam pembangunan – hanya untuk riset investor",
        close: "Tutup pemberitahuan"
      },
  heroExp: { title: "L'EXP ARRIBA", subtitle: "28 traveler, satu vila di Lombok, 7 hari imersi total", description: "Kamar bersama (4–6 tempat tidur) di jantung vila tropis dengan kolam renang privat dan area komunal terbuka. Kenyamanan modern, suasana hangat dan lokasi ideal: tempat untuk istirahat, terhubung dan menjalani penuh petualangan Surf Camp.", discover: "JELAJAHI" },
  team: { title: "Tim Arriba", subtitle: "Temui orang-orang penuh passion", closingNote: "", members: [
    { id: 1, name: "Camille", role: "Operasi & Pengalaman Tamu", photo: "/src/assets/gallery/camille-to-crop.jpeg", bio: "Mengatur logistik harian dan memastikan setiap tamu merasa di rumah.", stickyNote: "", noteColor: "yellow", rotation: -5 },
    { id: 2, name: "Louise", role: "Komunitas & Pengalaman", photo: "/src/assets/gallery/louise-to-crop.jpeg", bio: "Membangun komunitas Arriba dan menjaga energi kolektif yang khas.", stickyNote: "", noteColor: "pink", rotation: 6 }
  ], annotations: { bestTeam: "Tim terbaik! 🎉", family: "Arriba Family ✨", legends: "LEGENDS!", memories: "Mencipta kenangan 📸" } },
  history: { title: "Kisah Kami", subtitle: "Petualangan Arriba: dari ide ke surga selancar 🏄‍♂️", annotations: { start: "Kisah kami dimulai...", dreams: "Mimpi jadi nyata ✨", building: "Membangun surga!", family: "Keluarga bertambah 👨‍👩‍👧‍👦", adventures: "Petualangan tanpa akhir!" }, timeline: [
    { year: "1", title: "Asal Proyek", content: "Camille dan Louise bertemu sebagai pemimpin grup di kamp anak-anak Prancis. Pengalaman bersama dalam animasi grup ini menyatukan kami dan memberi kami keahlian solid dalam menciptakan pengalaman grup yang sukses.", noteText: "Pertemuan", noteColor: "yellow" },
    { year: "2", title: "Menemukan Indonesia", content: "Pada usia 18 tahun, Camille tinggal di Indonesia. Perjalanannya membawanya dari Sulawesi ke Bali, lalu ke Lombok dimana dia menemukan selancar. Alam liar dan murni Lombok, dikombinasi dengan kondisi selancar yang luar biasa, meyakinkannya akan potensi destinasi ini.", noteText: "Inspirasi", noteColor: "pink" },
    { year: "3", title: "Lahirnya Konsep", content: "Louise bergabung dengan Camille di Indonesia beberapa bulan kemudian. Dengan pengalaman animasi kami, kami mengembangkan ide surf camp untuk dewasa. Tujuannya: menawarkan liburan yang menggabungkan petualangan, penemuan selancar, dan relaksasi, tanpa stres organisasi.", noteText: "Ide", noteColor: "blue" },
    { year: "4", title: "Arriba Surf Camps Hari Ini", content: "Formula kami menargetkan dewasa yang mencari petualangan, persahabatan, dan kedamaian. Kami mengurus semua organisasi sehingga tamu dapat sepenuhnya menikmati masa tinggal: selancar, eksplorasi Lombok, dan momen relaksasi di lingkungan alam yang luar biasa.", noteText: "Pengalaman", noteColor: "yellow" },
    { year: "5", title: "Proyek Mengambil Bentuk", content: "Setelah lebih dari satu tahun refleksi, perencanaan, dan menyempurnakan setiap detail, proyek Arriba Surf Camps kami siap untuk hidup. Kami sekarang mencari investor yang passionate yang berbagi visi kami untuk mewujudkan petualangan unik ini.", noteText: "Struktur", noteColor: "pink" },
    { year: "6", title: "Bergabung dengan Petualangan", content: "Jika proyek kami menginspirasi Anda dan Anda ingin menjadi bagian dari petualangan indah ini, jangan ragu untuk menghubungi kami. Bersama, mari ciptakan kenangan yang tak terlupakan!", noteText: "Investasi", noteColor: "blue" }
  ] },
  gallery: { title: "Kehidupan Arriba", subtitle: "Temukan magi Arriba...", loadMore: "Lihat Lebih Banyak", shareTitle: "Bagikan Pengalaman Arriba", shareSubtitle: "Tag kami @arribasurfcamp" },
  photoFilter: { categories: { all: "Semua", surf: "Surf Sessions", camp: "Camp Life", food: "Food", sunsets: "Sunsets", community: "Community" }, descriptions: { all: "Semua kategori", surf: "Sesi selancar", camp: "Kehidupan camp", food: "Gastronomi", sunsets: "Matahari terbenam", community: "Komunitas" } },
      navigation: {
        home: "Beranda",
  experience: "Pengalaman Arriba",
  surfCamp: "Surf Camp",
  history: "Sejarah",
  team: "Tim",
  life: "Kehidupan Arriba",
        rooms: "Kamar",
        villa: "Villa",
        planning: "Jadwal",
        bookNow: "Pesan Sekarang"
      },
  // homeRoomTypes removed (section deprecated)
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesia – Rasakan Petualangan Selancar Terbaik"
      },
      booking: {
        title: "Pesan Petualangan Selancar Anda",
        arrivalDate: "Tanggal Kedatangan",
        departureDate: "Tanggal Keberangkatan",
        participants: "Peserta",
  roomType: "Tipe kamar",
        person: "Orang",
        people: "Orang",
        searchBook: "CARI & PESAN",
        selectArrival: "Pilih tanggal kedatangan",
        selectDeparture: "Pilih tanggal keberangkatan"
      },
      bookNowPage: {
        heroTitle: "Pesan Petualangan Arriba Anda",
  heroSubtitle: "7 hari tak terlupakan all-in mulai {{price}}",
        steps: { dates: "1. Pilih tanggal", participants: "2. Peserta", roomType: "3. Tipe kamar", package: "4. Paket", info: "5. Informasi Anda", payment: "6. Pembayaran" },
        weeklyNote: "Menginap mingguan (7 hari / 6 malam).",
        standardPackage: "Paket Standar",
        perPerson: "/ orang",
        packageFeatures: ["✓ 7 hari / 6 malam","✓ Semua makan","✓ Les selancar harian","✓ Yoga 3x/minggu","✓ Aktivitas budaya","✓ Antar jemput bandara"],
        includedBadge: "TERMASUK",
        confirmCta: "Konfirmasi pemesanan",
        termsNote: "Dengan mengkonfirmasi Anda menerima syarat umum & kebijakan pembatalan fleksibel.",
  trustSignals: ["Pembayaran aman","Pembatalan fleksibel"],
        invalidStart: "Silakan pilih hari Minggu (minggu Minggu sampai Sabtu).",
        roomTypes: {
          mixed: { title: "Kamar Campur", description: "Berbagi dengan perempuan & laki-laki." },
          girls: { title: "Kamar Khusus Perempuan", description: "Hanya untuk perempuan." },
          boys: { title: "Kamar Khusus Laki-laki", description: "Hanya untuk laki-laki." }
        }
      },
      cards: {
      discover: "Jelajahi",
      arriba: "Arriba",
      team: "Tim",
      gallery: "Galeri",
      rooms: "Kamar",
      villa: "Villa",
      planning: "Jadwal"
      },
      offers: {
        title: "Pilih Petualangan Selancar Anda",
        subtitle: "Rasakan petualangan selancar terbaik di Lombok dengan paket-paket yang dirancang khusus. Dari pemula hingga profesional, kami memiliki perjalanan sempurna untuk Anda.",
        specialOffers: "PENAWARAN KHUSUS",
        mostPopular: "PALING POPULER",
        premium: "PREMIUM",
        exclusive: "EKSKLUSIF",
        discount: "DISKON",
        perPerson: "per orang",
        bookNow: "Pesan Sekarang",
        viewAll: "Lihat Semua Paket",
        contactUs: "Hubungi Kami",
        limitedOffer: "🏄‍♂️ Penawaran Terbatas - Pesan Sebelum Maret 2025!",
  limitedDesc: "Hemat hingga 25% untuk semua paket selancar. Ombak sempurna, instruktur ahli, dan kenangan tak terlupakan menanti Anda. Semua paket termasuk asuransi.",
        packages: {
          beginner: {
            name: "Paket Pemula",
            duration: "7 Hari",
            features: [
              "7 malam akomodasi",
              "6 pelajaran selancar dengan instruktur",
              "Papan selancar & wetsuit disertakan",
              "Sarapan harian",
              "Transfer bandara",
              "Akses pantai",
              "Sesi fotografi"
            ]
          },
          intermediate: {
            name: "Paket Menengah",
            duration: "10 Hari",
            features: [
              "10 malam akomodasi mewah",
              "8 pelajaran selancar lanjutan",
              "Pilihan papan selancar premium",
              "Semua makanan disertakan",
              "Sesi yoga",
              "Wisata pulau",
              "Analisis video selancar",
              "Sertifikat penyelesaian"
            ]
          },
          pro: {
            name: "Retret Peselancar Pro",
            duration: "14 Hari",
            features: [
              "14 malam villa premium",
              "Pelatihan selancar tak terbatas",
              "Instruktur selancar pribadi",
              "Semua makanan & minuman",
              "Perawatan spa",
              "Akses pantai pribadi",
              "Rekaman drone selancar",
              "Persiapan kompetisi",
              "Acara networking"
            ]
          }
        }
      },
      surfcamp: {
        common: {
          amenitiesTitle: "Fasilitas",
          capacityConfigTitle: "Kapasitas & Tata Ruang",
          locationTitle: "Lokasi Premium",
          locationBadge: "Lokasi",
          uniqueRateTitle: "Tarif Tunggal",
          weekTypeTitle: "Minggu Tipikal",
          photoPlanningPlaceholder: ""
        },
        rooms: {
          title: "Kamar",
          subtitle: "Akomodasi villa bersama – nyaman, luas dan komunitas",
          amenities: [
            "4-6 tempat tidur nyaman",
            "AC",
            "Kamar mandi pribadi",
            "Balkon dengan pemandangan",
            "Loker aman",
            "Colokan internasional"
          ],
          secondaryPhotos: [
            "Tempat tidur tingkat 4-6 org",
            "Balkon & papan",
            "Kamar mandi modern",
            "Area komunal / lounge"
          ],
          pricing: {
            durationLine: "7 hari / 6 malam",
            allInclusiveLine: "Paket all inclusive (lihat detail)",
            excludesLine: "Kecuali penerbangan & minuman alkohol"
          }
        },
        villa: {
          title: "Villa Arriba",
          subtitle: "Base camp Anda di Lombok: ruang, kenyamanan & komunitas",
          features: [
            "Kolam renang pribadi",
            "Dapur lengkap",
            "WiFi kecepatan tinggi",
            "Parkir aman",
            "Teras tertutup",
            "Penyimpanan papan",
            "Layanan kebersihan harian"
          ],
          secondaryPhotos: [
            "Area santai luar",
            "Sudut makan teduh",
            "Taman tropis",
            "Ruang tamu bersama"
          ],
          capacity: [
            "Kapasitas total: 28 orang",
            "Kamar bersama 4-6 orang",
            "Ruang komunal terbuka",
            "Suasana internasional & ramah"
          ],
          location: [
            "🏖️ 5 mnt jalan ke Pantai Tajung",
            "🏄‍♂️ 10 mnt ke spot terbaik",
            "🍕 2 mnt ke resto & kafe",
            "✈️ 15 mnt dari bandara"
          ],
          map: {
            popupTitle: "Shaya Cottage (Villa Arriba)",
            addressLines: ["Jalan Sekotong Raya", "Tajung, Lombok"]
          }
        },
        planning: {
          title: "Jadwal",
          subtitle: "Minggu seimbang antara progres surf, kebugaran & eksplorasi lokal",
          daysOrder: ["minggu","senin","selasa","rabu","kamis","jumat","sabtu"],
          days: {
            minggu: { label: "MINGGU", activities: ["✈️ Kedatangan & Check-in", "🌅 Sunset Sambutan", "🍽️ Makan Malam Sambutan"] },
            senin: { label: "SENIN", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🧘‍♀️ Yoga (17.00)", "🎉 Waktu Komunitas"] },
            selasa: { label: "SELASA", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "👨‍🍳 Kelas Masak (15.00)", "🌅 Sunset Bebas"] },
            rabu: { label: "RABU", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🤿 Snorkeling (14.00)", "🎬 Malam Film (20.00)"] },
            kamis: { label: "KAMIS", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🙏 Persembahan Bali (16.00)", "🧘‍♀️ Yoga (18.00)"] },
            jumat: { label: "JUMAT", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "💪 Pilates (17.00)", "🔥 BBQ Grup (19.00)"] },
            sabtu: { label: "SABTU", activities: ["🏄‍♂️ Sesi Surf Terakhir", "🏝️ Jelajah Lombok", "👋 Pesta Perpisahan"] }
          },
          legends: [
            "🏄‍♂️ Surf harian termasuk",
            "🧘‍♀️ 3x Yoga/Pilates per minggu",
            "🎭 Aktivitas budaya",
            "🎉 Momen kelompok"
          ],
          activityAlert: "Weekend spesial TREK & eksplorasi pegunungan Lombok – 24 September. Pesan minggumu."
        }
      },
      bookingSummary: {
        title: "Ringkasan",
        dates: "Tanggal",
        participants: "Peserta",
        roomType: "Tipe Kamar",
        weekPrice: "Harga Minggu",
        total: "Total",
        inclusions: ["Semua termasuk kecuali penerbangan & minuman beralkohol","Konfirmasi dalam 24 jam","Deposit 30% untuk mengamankan tempat Anda"]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
