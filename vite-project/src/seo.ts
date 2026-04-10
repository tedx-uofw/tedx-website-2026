export const seoByPath = {
  "/": {
    title: "TEDxUofW 2026: Imprints | University of Washington",
    description:
      "TEDxUofW 2026: Imprints brings speakers, performances, and bold ideas to the University of Washington in Seattle on April 19, 2026.",
    path: "/",
    image: "/imprints-images/imprinted_1.png",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "TEDxUofW 2026: Imprints",
      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-04-19T10:30:00-07:00",
      endDate: "2026-04-19T15:45:00-07:00",
      location: {
        "@type": "Place",
        name: "Kane Hall",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4069 Spokane Ln NE",
          addressLocality: "Seattle",
          addressRegion: "WA",
          postalCode: "98105",
          addressCountry: "US",
        },
      },
      image: ["https://tedxuofw.com/imprints-images/imprinted_1.png"],
      description:
        "TEDxUofW 2026: Imprints brings speakers, performances, and bold ideas to the University of Washington in Seattle.",
      organizer: {
        "@type": "Organization",
        name: "TEDxUofW",
        url: "https://tedxuofw.com",
      },
    },
  },
  "/speakers": {
    title: "Speakers | TEDxUofW 2026",
    description:
      "Meet the TEDxUofW 2026 speakers presenting ideas on accessibility, creativity, forgiveness, digital identity, and community.",
    path: "/speakers",
    image: "/speakers/cara-hale-alter.webp",
  },
  "/team": {
    title: "Team | TEDxUofW 2026",
    description:
      "Meet the student team behind TEDxUofW 2026, from design and web development to logistics, marketing, finance, and speaker selection.",
    path: "/team",
    image: "/team-images/timothy-hoang.webp",
  },
  "/sponsors": {
    title: "Sponsors | TEDxUofW 2026",
    description:
      "See the sponsors supporting TEDxUofW 2026 and helping bring the Imprints conference to the University of Washington community.",
    path: "/sponsors",
    image: "/sponsors-images/dlg.webp",
  },
  "/about": {
    title: "About | TEDxUofW 2026",
    description:
      "Learn about TEDxUofW, the student-run University of Washington conference that brings TED-style talks and meaningful conversations to campus.",
    path: "/about",
    image: "/aboutpage-images/Image1.webp",
  },
} as const;
