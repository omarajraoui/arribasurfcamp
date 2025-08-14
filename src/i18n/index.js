import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      heroExp: {
        title: "L'EXP ARRIBA",
        subtitle: "Live the ultimate surf adventure in Indonesia",
        description: "Since 2018, Arriba Surf Camp has been redefining the surf camp experience. Between crystal clear waters, a passionate community and secret spots, discover why our riders return year after year.",
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
          { year: "2018", title: "The Dream Begins", content: "It all started with a simple dream: to share the magic of Indonesian waves. Our founder, who fell in love with these crystal waters during a solo trip, knew he had to create something special here.", noteText: "First Indo trip - Mind blown! 🤯", noteColor: "yellow" },
          { year: "2019", title: "First Wave", content: "The search for the perfect spot took us across the archipelago. After months of exploration, we found our little corner of paradise – isolated, authentic, with perfect waves all year.", noteText: "Secret location found! 📍", noteColor: "pink" },
          { year: "2020", title: "Construction Begins", content: "Despite global challenges, we started building with the help of the local community. Every bamboo, every stone was chosen with love to create a camp that respects the environment.", noteText: "Bamboo by bamboo... 🎋", noteColor: "blue" },
          { year: "2021", title: "Opening!", content: "The first surfers arrived and the magic happened instantly. Seeing their smiles after a perfect session confirmed our dream became reality.", noteText: "First guests = First family ❤️", noteColor: "yellow" },
          { year: "2022-2024", title: "Growing Family", content: "Season after season, our family grows. Every surfer leaves with a piece of Arriba and leaves us a piece of their story. That’s the Arriba spirit.", noteText: "Endless summer vibes! ☀️", noteColor: "pink" }
        ]
      },
      team: {
        title: "The Arriba Team",
        subtitle: "Meet the passionate people who make every moment unique",
        closingNote: "Each member of our team brings their own magic to the Arriba experience. Together we create memories that last a lifetime! ❤️",
        members: [
          { id: 1, name: "Karim El Hamdani", role: "Founder & Lead Guide", photo: "/api/placeholder/300/300", bio: "Surf passionate for 15 years, Karim created Arriba to share his passion with the world.", stickyNote: "The boss! 🤙", noteColor: "yellow", rotation: -5 },
          { id: 2, name: "Sofia Benali", role: "Surf Instructor", photo: "/api/placeholder/300/300", bio: "National surf champion, Sofia turns beginners into real surfers with patience and expertise.", stickyNote: "Surf Queen! 🏄‍♀️", noteColor: "pink", rotation: 8 },
          { id: 3, name: "Ahmed Tazi", role: "Cultural Guide", photo: "/api/placeholder/300/300", bio: "Native from the region, Ahmed helps you discover hidden secrets and authenticity.", stickyNote: "Stories! 📚", noteColor: "blue", rotation: -3 },
          { id: 4, name: "Lisa Martinez", role: "Camp Coordinator", photo: "/api/placeholder/300/300", bio: "Exceptional organizer, Lisa ensures every detail of your stay is perfect.", stickyNote: "Perfectionist ✨", noteColor: "green", rotation: 6 },
          { id: 5, name: "Youssef Alami", role: "Chef & Nutritionist", photo: "/api/placeholder/300/300", bio: "Creator of culinary delights, Youssef nourishes body and soul with local creations.", stickyNote: "Food Master! 🍽️", noteColor: "orange", rotation: -7 },
          { id: 6, name: "Emma Thompson", role: "Official Photographer", photo: "/api/placeholder/300/300", bio: "Capturer of magical moments, Emma immortalizes your adventures with a unique artistic eye.", stickyNote: "Smile! 📸", noteColor: "purple", rotation: 4 }
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
        experience: "L'Exp Arriba",
        surfCamp: "Le Surf Camp",
        history: "L'Histoire",
        team: "L'Équipe",
        life: "La Vie Arriba",
        rooms: "Les Chambres",
        villa: "La Villa",
        planning: "Le Planning",
        bookNow: "Book Now"
      },
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesia – Experience the Ultimate Surf Adventure"
      },
      booking: {
        title: "Book Your Surf Adventure",
        arrivalDate: "Arrival Date",
        departureDate: "Departure Date",
        participants: "Participants",
        person: "Person",
        people: "People",
        searchBook: "SEARCH & BOOK",
        selectArrival: "Select arrival date",
        selectDeparture: "Select departure date"
      },
      cards: {
        discover: "Discover",
        arriba: "Arriba",
        team: "L'Équipe",
        gallery: "Galerie",
        rooms: "Chambres",
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
        limitedDesc: "Save up to 25% on all surf packages. Perfect waves, expert instructors, and unforgettable memories await. All packages include insurance and 24/7 support.",
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
          photoPlanningPlaceholder: "Hand-drawn planning visual coming soon"
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
          daysOrder: ["monday","tuesday","wednesday","thursday","friday","weekend"],
          days: {
            monday: { label: "MONDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "🧘‍♀️ Yoga (5pm)", "🎉 Welcome Dinner"] },
            tuesday: { label: "TUESDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "👨‍🍳 Cooking Class (3pm)", "🌅 Sunset Free Time"] },
            wednesday: { label: "WEDNESDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "🤿 Snorkeling Trip (2pm)", "🎬 Movie Night (8pm)"] },
            thursday: { label: "THURSDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "🙏 Balinese Offerings (4pm)", "🧘‍♀️ Yoga (6pm)"] },
            friday: { label: "FRIDAY", activities: ["🏄‍♂️ Surf Lesson (7am)", "💪 Pilates (5pm)", "🔥 Group BBQ (7pm)"] },
            weekend: { label: "WEEKEND", activities: ["🏄‍♂️ Surf Lesson (7am)", "🏝️ Explore Lombok", "👋 Farewell Party"] }
          },
          legends: [
            "🏄‍♂️ Daily included surf",
            "🧘‍♀️ 3x Yoga/Pilates per week",
            "🎭 Cultural activities",
            "🎉 Group moments"
          ]
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
        heroSubtitle: "Unforgettable 7 days all inclusive at 500€",
        steps: { dates: "1. Choose your dates", participants: "2. Participants", package: "3. Package", info: "4. Your information", payment: "5. Payment" },
        weeklyNote: "Weekly stays (7 days / 6 nights).",
        standardPackage: "Standard Package",
        perPerson: "/ person",
        packageFeatures: ["✓ 7 days / 6 nights","✓ All meals","✓ Daily surf lessons","✓ Yoga 3x/week","✓ Cultural activities","✓ Airport transfers"],
        includedBadge: "INCLUDED",
        confirmCta: "Confirm booking",
        termsNote: "By confirming you accept our general terms & flexible cancellation policy.",
  trustSignals: ["Secure payment","Support 24/7","Flexible cancellation"],
  invalidStart: "Please choose a Sunday (weekly stays run Sunday → Saturday)."
      },
      personalInfoForm: { firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone / WhatsApp", infoNote: "We will use this information only for your booking." },
      paymentOptions: {
        method: { card: "Card", bank: "Bank Transfer", later: "Later" },
        cardModule: "Card payment module (Stripe) coming soon 🔐",
        bank: { title: "Bank transfer", iban: "IBAN: FR76 XXXX XXXX XXXX", bic: "BIC: XXXXXXXX", proof: "Send proof to booking@arriba.com" },
        later: "Book now, pay later (validation within 48h).",
        deposit: "Deposit (30%):"
      },
      bookingSummary: {
        title: "Summary",
        dates: "Dates",
        participants: "Participants",
        weekPrice: "Week price",
        total: "Total",
        inclusions: ["All inclusive except flights & alcoholic drinks","Confirmation within 24h","30% deposit to secure your spot"]
      }
    }
  },
  fr: {
    translation: {
      heroExp: {
        title: "L'EXP ARRIBA",
        subtitle: "Vivez l'aventure surf ultime en Indonésie",
        description: "Depuis 2018, Arriba Surf Camp redéfinit l'expérience du surf camp. Entre eaux cristallines, communauté passionnée et spots secrets, découvrez pourquoi nos riders reviennent année après année.",
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
          { year: "2018", title: "Le Rêve Commence", content: "Tout a commencé avec un rêve simple : partager la magie des vagues indonésiennes. Notre fondateur, tombé amoureux de ces eaux cristallines lors d'un voyage solo, a su qu'il devait créer quelque chose de spécial ici.", noteText: "Premier voyage en Indo - Mind blown! 🤯", noteColor: "yellow" },
          { year: "2019", title: "Première Vague", content: "La recherche du spot parfait nous a menés aux quatre coins de l'archipel. Après des mois d'exploration, nous avons trouvé notre petit coin de paradis - isolé, authentique, avec des vagues parfaites toute l'année.", noteText: "Location secrète trouvée! 📍", noteColor: "pink" },
          { year: "2020", title: "Construction Begins", content: "Malgré les défis mondiaux, nous avons commencé la construction avec l'aide de la communauté locale. Chaque bambou, chaque pierre a été choisi avec amour pour créer un camp qui respecte l'environnement.", noteText: "Bambou par bambou... 🎋", noteColor: "blue" },
          { year: "2021", title: "Ouverture!", content: "Les premiers surfeurs ont débarqué et la magie a opéré instantanément. Voir leurs sourires après une session parfaite, c'était la confirmation que notre rêve était devenu réalité.", noteText: "First guests = First family ❤️", noteColor: "yellow" },
          { year: "2022-2024", title: "Growing Family", content: "De saison en saison, notre famille s'agrandit. Chaque surfeur qui repart emporte un morceau d'Arriba avec lui, et nous laisse un morceau de son histoire. C'est ça, l'esprit Arriba.", noteText: "Endless summer vibes! ☀️", noteColor: "pink" }
        ]
      },
      team: {
        title: "L'Équipe Arriba",
        subtitle: "Rencontrez les passionnés qui rendent chaque moment unique",
        closingNote: "Chaque membre de notre équipe apporte sa propre magie à l'expérience Arriba. Ensemble, nous créons des souvenirs qui durent toute une vie! ❤️",
        members: [
          { id: 1, name: "Karim El Hamdani", role: "Fondateur & Guide Principal", photo: "/api/placeholder/300/300", bio: "Passionné de surf depuis 15 ans, Karim a créé Arriba pour partager sa passion avec le monde entier.", stickyNote: "Le boss! 🤙", noteColor: "yellow", rotation: -5 },
          { id: 2, name: "Sofia Benali", role: "Instructrice de Surf", photo: "/api/placeholder/300/300", bio: "Championne nationale de surf, Sofia transforme les débutants en vrais surfeurs avec patience et expertise.", stickyNote: "Surf Queen! 🏄‍♀️", noteColor: "pink", rotation: 8 },
          { id: 3, name: "Ahmed Tazi", role: "Guide Culturel", photo: "/api/placeholder/300/300", bio: "Natif de la région, Ahmed vous fera découvrir les secrets cachés et l'authenticité du Maroc.", stickyNote: "Stories! 📚", noteColor: "blue", rotation: -3 },
          { id: 4, name: "Lisa Martinez", role: "Coordinatrice Camp", photo: "/api/placeholder/300/300", bio: "Organisatrice hors pair, Lisa s'assure que chaque détail de votre séjour soit parfait.", stickyNote: "Perfectionniste ✨", noteColor: "green", rotation: 6 },
          { id: 5, name: "Youssef Alami", role: "Chef & Nutritionniste", photo: "/api/placeholder/300/300", bio: "Créateur de délices culinaires, Youssef nourrit les corps et les âmes avec ses créations locales.", stickyNote: "Food Master! 🍽️", noteColor: "orange", rotation: -7 },
          { id: 6, name: "Emma Thompson", role: "Photographe Officielle", photo: "/api/placeholder/300/300", bio: "Captureuse de moments magiques, Emma immortalise vos aventures avec un œil artistique unique.", stickyNote: "Smile! 📸", noteColor: "purple", rotation: 4 }
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
        subtitle: "Découvrez la magie d'Arriba à travers les yeux de notre communauté. Chaque photo raconte une histoire, chaque moment devient souvenir.",
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
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonésie – Vivez l'Aventure Surf Ultime"
      },
      booking: {
        title: "Réservez Votre Aventure Surf",
        arrivalDate: "Date d'Arrivée",
        departureDate: "Date de Départ",
        participants: "Participants",
        person: "Personne",
        people: "Personnes",
        searchBook: "RECHERCHER & RÉSERVER",
        selectArrival: "Sélectionner la date d'arrivée",
        selectDeparture: "Sélectionner la date de départ"
      },
      cards: {
        discover: "Découvrir",
        arriba: "Arriba",
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
        limitedDesc: "Économisez jusqu'à 25% sur tous les forfaits surf. Vagues parfaites, instructeurs experts, et souvenirs inoubliables vous attendent. Tous les forfaits incluent l'assurance et le support 24/7.",
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
          photoPlanningPlaceholder: "Visuel planning manuscrit à venir"
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
          daysOrder: ["monday","tuesday","wednesday","thursday","friday","weekend"],
          days: {
            monday: { label: "LUNDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "🧘‍♀️ Yoga (17h)", "🎉 Welcome Dinner"] },
            tuesday: { label: "MARDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "👨‍🍳 Cours Cuisine (15h)", "🌅 Sunset Libre"] },
            wednesday: { label: "MERCREDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "🤿 Snorkeling Trip (14h)", "🎬 Movie Night (20h)"] },
            thursday: { label: "JEUDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "🙏 Offrandes Balinaises (16h)", "🧘‍♀️ Yoga (18h)"] },
            friday: { label: "VENDREDI", activities: ["🏄‍♂️ Surf Lesson (7h)", "💪 Pilates (17h)", "🔥 BBQ Groupe (19h)"] },
            weekend: { label: "WEEKEND", activities: ["🏄‍♂️ Surf Lesson (7h)", "🏝️ Explore Lombok", "👋 Farewell Party"] }
          },
          legends: [
            "🏄‍♂️ Surf quotidien inclus",
            "🧘‍♀️ 3x Yoga/Pilates/semaine",
            "🎭 Activités culturelles",
            "🎉 Moments de groupe"
          ]
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
        heroSubtitle: "7 jours inoubliables à 500€ tout compris",
        steps: { dates: "1. Choisissez vos dates", participants: "2. Nombre de participants", package: "3. Formule", info: "4. Vos informations", payment: "5. Paiement" },
        weeklyNote: "Séjours hebdomadaires (7 jours / 6 nuits).",
        standardPackage: "Formule Standard",
        perPerson: "/ personne",
        packageFeatures: ["✓ 7 jours / 6 nuits","✓ Tous les repas","✓ Cours de surf quotidiens","✓ Yoga 3x/semaine","✓ Activités culturelles","✓ Transferts aéroport"],
        includedBadge: "INCLUS",
        confirmCta: "Confirmer la réservation",
        termsNote: "En confirmant vous acceptez nos conditions générales & politique d'annulation flexible.",
        trustSignals: ["Paiement sécurisé","Support 24/7","Annulation flexible"],
        invalidStart: "Veuillez choisir un dimanche (séjour du dimanche au samedi)."
      },
      personalInfoForm: { firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone / WhatsApp", infoNote: "Nous utiliserons ces informations uniquement pour votre réservation." },
      paymentOptions: {
        method: { card: "Carte", bank: "Virement", later: "Plus tard" },
        cardModule: "Module paiement carte (Stripe) à intégrer 🔐",
        bank: { title: "Virement bancaire", iban: "IBAN: FR76 XXXX XXXX XXXX", bic: "BIC: XXXXXXXX", proof: "Envoyez le justificatif à booking@arriba.com" },
        later: "Réservez maintenant, payez plus tard (validation sous 48h).",
        deposit: "Acompte (30%):"
      },
      bookingSummary: {
        title: "Résumé",
        dates: "Dates",
        participants: "Participants",
        weekPrice: "Prix semaine",
        total: "Total",
        inclusions: ["Tout inclus sauf vols & boissons alcoolisées","Confirmation sous 24h","Acompte 30% pour bloquer votre place"]
      }
    }
  },
  es: {
    translation: {
      heroExp: {
        title: "L'EXP ARRIBA",
        subtitle: "Vive la aventura de surf definitiva en Indonesia",
        description: "Desde 2018, Arriba Surf Camp redefine la experiencia surf camp. Entre aguas cristalinas, comunidad apasionada y spots secretos, descubre por qué nuestros riders regresan año tras año.",
        discover: "DESCUBRIR"
      },
      history: {
        title: "Nuestra Historia",
        subtitle: "La aventura Arriba: de una idea al paraíso del surf 🏄‍♂️",
        annotations: { start: "Nuestra historia comienza...", dreams: "Los sueños se hacen realidad ✨", building: "Construyendo el paraíso!", family: "La familia crece 👨‍👩‍👧‍👦", adventures: "Aventuras infinitas!" },
        timeline: [
          { year: "2018", title: "El Sueño Empieza", content: "Todo comenzó con un sueño simple: compartir la magia de las olas indonesias.", noteText: "Primer viaje a Indo! 🤯", noteColor: "yellow" },
          { year: "2019", title: "Primera Ola", content: "Buscando el spot perfecto encontramos nuestro rincón de paraíso.", noteText: "Spot secreto encontrado! 📍", noteColor: "pink" },
          { year: "2020", title: "Construcción", content: "Empezamos la construcción con ayuda de la comunidad local.", noteText: "Bambú a bambú... 🎋", noteColor: "blue" },
          { year: "2021", title: "Apertura!", content: "Los primeros surfers llegaron y la magia ocurrió.", noteText: "Primeros huéspedes ❤️", noteColor: "yellow" },
          { year: "2022-2024", title: "Familia Creciendo", content: "Cada surfer deja un pedazo de historia.", noteText: "Verano sin fin ☀️", noteColor: "pink" }
        ]
      },
      team: {
        title: "El Equipo Arriba",
        subtitle: "Conoce a los apasionados que hacen cada momento único",
        closingNote: "Cada miembro aporta su magia. Juntos creamos recuerdos para toda la vida! ❤️",
        members: [],
        annotations: { bestTeam: "Mejor equipo! 🎉", family: "Arriba Family ✨", legends: "LEGENDA!", memories: "Creando recuerdos 📸" }
      },
      gallery: { title: "La Vida Arriba", subtitle: "Descubre la magia de Arriba...", loadMore: "Ver Más Momentos", shareTitle: "Comparte Tu Experiencia Arriba", shareSubtitle: "Etiquétanos @arribasurfcamp para aparecer!" },
      photoFilter: { categories: { all: "Todo", surf: "Surf Sessions", camp: "Camp Life", food: "Food", sunsets: "Sunsets", community: "Community" }, descriptions: { all: "Todas las categorías", surf: "Sesiones de surf", camp: "Vida en el camp", food: "Gastronomía", sunsets: "Atardeceres", community: "Comunidad" } },
      navigation: {
        home: "Inicio",
        experience: "L'Exp Arriba",
        surfCamp: "Le Surf Camp",
        history: "L'Histoire",
        team: "L'Équipe",
        life: "La Vie Arriba",
        rooms: "Las Habitaciones",
        villa: "La Villa",
        planning: "Planificación",
        bookNow: "Reservar"
      },
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesia – Experimenta la Aventura de Surf Definitiva"
      },
      booking: {
        title: "Reserva Tu Aventura de Surf",
        arrivalDate: "Fecha de Llegada",
        departureDate: "Fecha de Salida",
        participants: "Participantes",
        person: "Persona",
        people: "Personas",
        searchBook: "BUSCAR & RESERVAR",
        selectArrival: "Seleccionar fecha de llegada",
        selectDeparture: "Seleccionar fecha de salida"
      },
      bookNowPage: {
        heroTitle: "Reserva Tu Aventura Arriba",
        heroSubtitle: "7 días inolvidables todo incluido por 500€",
        steps: { dates: "1. Elige tus fechas", participants: "2. Participantes", package: "3. Paquete", info: "4. Tus datos", payment: "5. Pago" },
        weeklyNote: "Estancias semanales (7 días / 6 noches).",
        standardPackage: "Paquete Estándar",
        perPerson: "/ persona",
        packageFeatures: ["✓ 7 días / 6 noches","✓ Todas las comidas","✓ Clases de surf diarias","✓ Yoga 3x/semana","✓ Actividades culturales","✓ Transfers aeropuerto"],
        includedBadge: "INCLUIDO",
        confirmCta: "Confirmar reserva",
        termsNote: "Al confirmar aceptas nuestros términos y política flexible de cancelación.",
        trustSignals: ["Pago seguro","Soporte 24/7","Cancelación flexible"],
        invalidStart: "Por favor elige un domingo (estancia de domingo a sábado)."
      },
      cards: {
        discover: "Descubrir",
        arriba: "Arriba",
        team: "L'Équipe",
        gallery: "Galería",
        rooms: "Habitaciones",
        villa: "Villa",
        planning: "Planning"
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
        limitedDesc: "Ahorra hasta 25% en todos los paquetes de surf. Olas perfectas, instructores expertos, y recuerdos inolvidables te esperan. Todos los paquetes incluyen seguro y soporte 24/7.",
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
          photoPlanningPlaceholder: "Planificación dibujada a mano próximamente"
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
          daysOrder: ["monday","tuesday","wednesday","thursday","friday","weekend"],
          days: {
            monday: { label: "LUNES", activities: ["🏄‍♂️ Clase Surf (7h)", "🧘‍♀️ Yoga (17h)", "🎉 Cena Bienvenida"] },
            tuesday: { label: "MARTES", activities: ["🏄‍♂️ Clase Surf (7h)", "👨‍🍳 Clase Cocina (15h)", "🌅 Tiempo Libre Sunset"] },
            wednesday: { label: "MIÉRCOLES", activities: ["🏄‍♂️ Clase Surf (7h)", "🤿 Snorkel (14h)", "🎬 Noche Cine (20h)"] },
            thursday: { label: "JUEVES", activities: ["🏄‍♂️ Clase Surf (7h)", "🙏 Ofrendas Balinesas (16h)", "🧘‍♀️ Yoga (18h)"] },
            friday: { label: "VIERNES", activities: ["🏄‍♂️ Clase Surf (7h)", "💪 Pilates (17h)", "🔥 BBQ Grupo (19h)"] },
            weekend: { label: "FIN DE SEMANA", activities: ["🏄‍♂️ Clase Surf (7h)", "🏝️ Explorar Lombok", "👋 Fiesta Despedida"] }
          },
          legends: [
            "🏄‍♂️ Surf diario incluido",
            "🧘‍♀️ 3x Yoga/Pilates por semana",
            "🎭 Actividades culturales",
            "🎉 Momentos de grupo"
          ]
        }
      }
    }
  },
  nl: {
    translation: {
  heroExp: { title: "L'EXP ARRIBA", subtitle: "Beleef het ultieme surf avontuur in Indonesië", description: "Sinds 2018 herdefinieert Arriba Surf Camp de surf camp ervaring.", discover: "ONTDEK" },
  history: { title: "Ons Verhaal", subtitle: "Het Arriba avontuur: van idee tot surf paradijs 🏄‍♂️", annotations: { start: "Ons verhaal begint...", dreams: "Dromen worden realiteit ✨", building: "Paradijs bouwen!", family: "Familie groeit 👨‍👩‍👧‍👦", adventures: "Eindeloze avonturen!" }, timeline: [] },
  team: { title: "Het Arriba Team", subtitle: "Ontmoet de gepassioneerde mensen", closingNote: "Elk lid brengt magie.", members: [], annotations: { bestTeam: "Beste team! 🎉", family: "Arriba Family ✨", legends: "LEGENDS!", memories: "Herinneringen maken 📸" } },
  gallery: { title: "Arriba Leven", subtitle: "Ontdek de magie...", loadMore: "Meer Momenten", shareTitle: "Deel Je Arriba Ervaring", shareSubtitle: "Tag ons @arribasurfcamp" },
  photoFilter: { categories: { all: "Alles", surf: "Surf Sessions", camp: "Camp Life", food: "Food", sunsets: "Sunsets", community: "Community" }, descriptions: { all: "Alle categorieën", surf: "Surf sessies", camp: "Camp leven", food: "Gastronomie", sunsets: "Zonsondergangen", community: "Community" } },
      navigation: {
        home: "Home",
        experience: "L'Exp Arriba",
        surfCamp: "Le Surf Camp",
        history: "L'Histoire",
        team: "L'Équipe",
        life: "La Vie Arriba",
        rooms: "De Kamers",
        villa: "De Villa",
        planning: "Planning",
        bookNow: "Boek Nu"
      },
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesië – Beleef het Ultieme Surf Avontuur"
      },
      booking: {
        title: "Boek Je Surf Avontuur",
        arrivalDate: "Aankomstdatum",
        departureDate: "Vertrekdatum",
        participants: "Deelnemers",
        person: "Persoon",
        people: "Personen",
        searchBook: "ZOEKEN & BOEKEN",
        selectArrival: "Selecteer aankomstdatum",
        selectDeparture: "Selecteer vertrekdatum"
      },
      bookNowPage: {
        heroTitle: "Boek Je Arriba Avontuur",
        heroSubtitle: "Onvergetelijke 7 dagen all-in voor 500€",
        steps: { dates: "1. Kies je data", participants: "2. Deelnemers", package: "3. Pakket", info: "4. Jouw gegevens", payment: "5. Betaling" },
        weeklyNote: "Wekelijkse verblijven (7 dagen / 6 nachten).",
        standardPackage: "Standaard Pakket",
        perPerson: "/ persoon",
        packageFeatures: ["✓ 7 dagen / 6 nachten","✓ Alle maaltijden","✓ Dagelijkse surflessen","✓ Yoga 3x/week","✓ Culturele activiteiten","✓ Luchthaventransfers"],
        includedBadge: "INBEGREPEN",
        confirmCta: "Boeking bevestigen",
        termsNote: "Door te bevestigen accepteer je onze algemene voorwaarden & flexibel annuleringsbeleid.",
        trustSignals: ["Veilige betaling","24/7 Support","Flexibele annulering"],
        invalidStart: "Kies een zondag (verblijf zondag t/m zaterdag)."
      },
      cards: {
        discover: "Ontdekken",
        arriba: "Arriba",
        team: "L'Équipe",
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
        limitedDesc: "Bespaar tot 25% op alle surf pakketten. Perfecte golven, expert instructeurs, en onvergetelijke herinneringen wachten op je. Alle pakketten inclusief verzekering en 24/7 ondersteuning.",
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
          photoPlanningPlaceholder: "Handgetekende planning binnenkort"
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
          daysOrder: ["monday","tuesday","wednesday","thursday","friday","weekend"],
          days: {
            monday: { label: "MAANDAG", activities: ["🏄‍♂️ Surf Les (7u)", "🧘‍♀️ Yoga (17u)", "🎉 Welcome Dinner"] },
            tuesday: { label: "DINSDAG", activities: ["🏄‍♂️ Surf Les (7u)", "👨‍🍳 Kookles (15u)", "🌅 Sunset Vrij"] },
            wednesday: { label: "WOENSDAG", activities: ["🏄‍♂️ Surf Les (7u)", "🤿 Snorkel Trip (14u)", "🎬 Movie Night (20u)"] },
            thursday: { label: "DONDERDAG", activities: ["🏄‍♂️ Surf Les (7u)", "🙏 Balinese Offers (16u)", "🧘‍♀️ Yoga (18u)"] },
            friday: { label: "VRIJDAG", activities: ["🏄‍♂️ Surf Les (7u)", "💪 Pilates (17u)", "🔥 Groep BBQ (19u)"] },
            weekend: { label: "WEEKEND", activities: ["🏄‍♂️ Surf Les (7u)", "🏝️ Ontdek Lombok", "👋 Farewell Party"] }
          },
          legends: [
            "🏄‍♂️ Dagelijkse surf inbegrepen",
            "🧘‍♀️ 3x Yoga/Pilates per week",
            "🎭 Culturele activiteiten",
            "🎉 Groepsmomenten"
          ]
        }
      }
    }
  },
  id: {
    translation: {
  heroExp: { title: "L'EXP ARRIBA", subtitle: "Rasakan petualangan surf terbaik di Indonesia", description: "Sejak 2018, Arriba Surf Camp mendefinisikan ulang pengalaman surf camp.", discover: "JELAJAHI" },
  history: { title: "Kisah Kami", subtitle: "Petualangan Arriba: dari ide ke surga selancar 🏄‍♂️", annotations: { start: "Kisah kami dimulai...", dreams: "Mimpi jadi nyata ✨", building: "Membangun surga!", family: "Keluarga bertambah 👨‍👩‍👧‍👦", adventures: "Petualangan tanpa akhir!" }, timeline: [] },
  team: { title: "Tim Arriba", subtitle: "Temui orang-orang penuh passion", closingNote: "Setiap anggota membawa magi mereka.", members: [], annotations: { bestTeam: "Tim terbaik! 🎉", family: "Arriba Family ✨", legends: "LEGENDS!", memories: "Mencipta kenangan 📸" } },
  gallery: { title: "Kehidupan Arriba", subtitle: "Temukan magi Arriba...", loadMore: "Lihat Lebih Banyak", shareTitle: "Bagikan Pengalaman Arriba", shareSubtitle: "Tag kami @arribasurfcamp" },
  photoFilter: { categories: { all: "Semua", surf: "Surf Sessions", camp: "Camp Life", food: "Food", sunsets: "Sunsets", community: "Community" }, descriptions: { all: "Semua kategori", surf: "Sesi selancar", camp: "Kehidupan camp", food: "Gastronomi", sunsets: "Matahari terbenam", community: "Komunitas" } },
      navigation: {
        home: "Beranda",
        experience: "L'Exp Arriba",
        surfCamp: "Le Surf Camp",
        history: "L'Histoire",
        team: "L'Équipe",
        life: "La Vie Arriba",
        rooms: "Kamar",
        villa: "Villa",
        planning: "Jadwal",
        bookNow: "Pesan Sekarang"
      },
      hero: {
        title: "ARRIBA SURF CAMP",
        subtitle: "Lombok, Indonesia – Rasakan Petualangan Selancar Terbaik"
      },
      booking: {
        title: "Pesan Petualangan Selancar Anda",
        arrivalDate: "Tanggal Kedatangan",
        departureDate: "Tanggal Keberangkatan",
        participants: "Peserta",
        person: "Orang",
        people: "Orang",
        searchBook: "CARI & PESAN",
        selectArrival: "Pilih tanggal kedatangan",
        selectDeparture: "Pilih tanggal keberangkatan"
      },
      bookNowPage: {
        heroTitle: "Pesan Petualangan Arriba Anda",
        heroSubtitle: "7 hari tak terlupakan all-in 500€",
        steps: { dates: "1. Pilih tanggal", participants: "2. Peserta", package: "3. Paket", info: "4. Informasi Anda", payment: "5. Pembayaran" },
        weeklyNote: "Menginap mingguan (7 hari / 6 malam).",
        standardPackage: "Paket Standar",
        perPerson: "/ orang",
        packageFeatures: ["✓ 7 hari / 6 malam","✓ Semua makan","✓ Les selancar harian","✓ Yoga 3x/minggu","✓ Aktivitas budaya","✓ Antar jemput bandara"],
        includedBadge: "TERMASUK",
        confirmCta: "Konfirmasi pemesanan",
        termsNote: "Dengan mengkonfirmasi Anda menerima syarat umum & kebijakan pembatalan fleksibel.",
        trustSignals: ["Pembayaran aman","Dukungan 24/7","Pembatalan fleksibel"],
        invalidStart: "Silakan pilih hari Minggu (minggu Minggu sampai Sabtu)."
      },
      cards: {
        discover: "Jelajahi",
        arriba: "Arriba",
        team: "L'Équipe",
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
        limitedDesc: "Hemat hingga 25% untuk semua paket selancar. Ombak sempurna, instruktur ahli, dan kenangan tak terlupakan menanti Anda. Semua paket termasuk asuransi dan dukungan 24/7.",
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
          photoPlanningPlaceholder: "Visual planning tulisan tangan segera hadir"
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
          daysOrder: ["monday","tuesday","wednesday","thursday","friday","weekend"],
          days: {
            monday: { label: "SENIN", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🧘‍♀️ Yoga (17.00)", "🎉 Makan Malam Sambutan"] },
            tuesday: { label: "SELASA", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "👨‍🍳 Kelas Masak (15.00)", "🌅 Waktu Bebas Sunset"] },
            wednesday: { label: "RABU", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🤿 Snorkeling (14.00)", "🎬 Malam Film (20.00)"] },
            thursday: { label: "KAMIS", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🙏 Persembahan Bali (16.00)", "🧘‍♀️ Yoga (18.00)"] },
            friday: { label: "JUMAT", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "💪 Pilates (17.00)", "🔥 BBQ Grup (19.00)"] },
            weekend: { label: "AKHIR PEKAN", activities: ["🏄‍♂️ Pelajaran Surf (07.00)", "🏝️ Jelajah Lombok", "👋 Pesta Perpisahan"] }
          },
          legends: [
            "🏄‍♂️ Surf harian termasuk",
            "🧘‍♀️ 3x Yoga/Pilates per minggu",
            "🎭 Aktivitas budaya",
            "🎉 Momen kelompok"
          ]
        }
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
