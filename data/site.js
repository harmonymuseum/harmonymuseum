/* Site content — the file a volunteer edits. No code below this folder needs touching.
   Dates are YYYY-MM-DD. A closure banner shows ONLY between start and end, inclusive. */
window.SITE = {
  /* true while this is a preview: shows the "concept" footer and prototype notes.
     Set to false on launch day — nothing else needs to change. */
  prototype: false,

  /* How tours are reserved. "phone": every Book button becomes a call link.
     "online": buttons open the hosted booking service at onlineUrl (FareHarbor/Bookeo). */
  booking: {
    mode: "phone",
    onlineUrl: ""
  },

  /* Gift shop page. "off": on hold (2026-09-15) — a short "the shop is in the museum at 218 Mercer" page,
     no catalog, not in the nav. "list": show what's in the shop, buy in person.
     "cart": online ordering (needs Square and a volunteer who ships). */
  shop: { mode: "off" },

  /* Top menus. Each link is defined once in `links`: the words shown, then where it goes
     ("#name" jumps to a spot on the same page). `menus` lists, page by page, which links that
     page's top bar shows, in order. To add a new page to the menus: add one line to `links`,
     then add its name to each menu it belongs in. Changes show on the live site right away.
     (The home page's "Plan a visit" button is separate and stays as it is.) */
  links: {
    visit:        ["Visit", "visit.html"],
    properties:   ["Properties", "properties.html"],
    walkingTour:  ["Walking tour", "walkingtour.html"],
    rentals:      ["Rentals", "rental.html"],
    history:      ["History", "history.html"],
    calendar:     ["Calendar", "calendar.html"],
    news:         ["News", "news.html"],
    membership:   ["Membership", "membership.html"],
    donate:       ["Donate", "donate.html"],
    volunteer:    ["Volunteer", "get-involved.html"],
    getInvolved:  ["Get involved", "get-involved.html"],
    shop:         ["Shop", "shop.html"],
    contact:      ["Contact", "contact.html"],
    barn:         ["Barn", "#barn"],
    stewartHall:  ["Stewart Hall", "#stewart"],
    meetinghouse: ["Meetinghouse", "#church"],
    ask:          ["Ask", "#request"]
  },
  menus: {
    "about.html"        : ["visit", "properties", "history", "membership", "volunteer", "contact"],
    "calendar.html"     : ["visit", "news", "walkingTour", "rentals", "membership", "contact"],
    "contact.html"      : ["visit", "rentals", "history", "membership", "volunteer"],
    "donate.html"       : ["visit", "properties", "history", "membership", "volunteer", "contact"],
    "get-involved.html" : ["visit", "properties", "history", "membership", "donate", "contact"],
    "harmony-line.html" : ["visit", "properties", "walkingTour", "membership", "contact"],
    "history.html"      : ["visit", "properties", "walkingTour", "rentals", "membership", "contact"],
    "index.html"        : ["properties", "walkingTour", "rentals", "shop", "history", "getInvolved"],
    "membership.html"   : ["visit", "properties", "history", "donate", "volunteer", "contact"],
    "news.html"         : ["visit", "calendar", "properties", "history", "membership", "contact"],
    "properties.html"   : ["visit", "walkingTour", "rentals", "history", "membership", "contact"],
    "rental.html"       : ["barn", "stewartHall", "meetinghouse", "ask", "visit", "contact"],
    "shop.html"         : ["visit", "properties", "walkingTour", "membership", "contact"],
    "visit.html"        : ["properties", "walkingTour", "calendar", "contact"]
  },

  /* Newsletter is a members-only perk, sent the old-fashioned way (decided 2026-09-15).
     No public signup. Set formAction to a Kit form URL if that ever changes. */
  newsletter: { formAction: "", publicSignup: false },

  /* Contact and rental forms → Formspree (formspree.io; submissions are emailed and kept in
     its dashboard). Empty: "Send" opens the visitor's email app, addressed to contact.email. */
  forms: { contact: "https://formspree.io/f/mnppoagg", rental: "https://formspree.io/f/xjyypbap" },

  hours: {
    hoursShort: "1–4 p.m.",
    days: "Tuesday – Saturday",
    tourTimes: ["1:00", "2:30"],
    closedDays: [0, 1],            /* 0=Sunday, 1=Monday */
    note: "Inside the buildings by guided tour only — tours leave at 1:00 and 2:30. Grounds, walking tour and cemeteries are open any time.",
    capacityPerTour: null          /* museum hasn't set a number (2026-09-15); null = don't show one */
  },

  /* Closures are dated records. The old site's bug — a "reopening March 3, 2026"
     banner still up in August — cannot happen here: the first record below IS that
     banner, and it stopped rendering on March 3 with no one lifting a finger.
     Test any date with ?today=YYYY-MM-DD in the URL. */
  closures: [
    {
      start: "2025-11-20", end: "2026-03-02",
      message: "The museum is closed for the season — reopening March 3, 2026. Walking tour and grounds remain open."
    },
    /* Confirmed 2026-10-27: closed Nov 26–27 for Thanksgiving. */
    {
      start: "2026-11-26", end: "2026-11-27",
      message: "Closed November 26 – 27 for Thanksgiving. Reopening Saturday, November 28."
    },
    /* Confirmed 2026-09-15: closed Dec 24–26. */
    {
      start: "2026-12-24", end: "2026-12-26",
      message: "Closed December 24 – 26 for Christmas. Reopening Tuesday, December 29."
    },
    /* Confirmed 2026-11-12: closed January through March 2027; tours by appointment. */
    {
      start: "2027-01-01", end: "2027-03-31",
      message: "The museum is closed January – March. Tours by appointment only — call (724) 452-7341. Walking tour and grounds remain open."
    }
  ],

  /* Door prices — the board's new schedule, confirmed 2026-09-15. */
  admission: [
    ["Ages 5 and under", "Free"],
    ["Ages 6–17", "$5"],
    ["Ages 18–64", "$10"],
    ["Ages 65 and up", "$8"],
    ["Veterans", "$8"],
    ["Members", "Free"]
  ],

  contact: {
    address: "218 Mercer Street, Harmony, PA 16037",
    phone: "(724) 452-7341",
    phoneHref: "tel:+17244527341",
    email: "hmuseum@zoominternet.net",
    instagram: "historicharmonymuseum",
    directions: "I-79 exits 87–88 · 30 miles north of Pittsburgh"
  },

  /* Ways to pay. Zeffy account under hmuseum@zoominternet.net (links added 2026-10-30).
     Pages show the Zeffy button plus phone + mail-a-check instructions.
     Empty = the pages show phone + mail instructions only. */
  giving: {
    provider: "Zeffy",
    membershipUrl: "https://www.zeffy.com/en-US/ticketing/historic-harmony-incs-memberships",
    donateUrl: "https://www.zeffy.com/en-US/donation-form/support-historic-harmony-inc",
    /* All new memberships currently end on this date (museum, 2026-10-30). Shown under
       the prices on the Membership page. Empty = no line shown. */
    membershipThrough: "December 31, 2027",
    checksTo: "Historic Harmony, Inc., 218 Mercer Street, Harmony, PA 16037",
    replyDays: "3 business days"
  },

  /* Featured post — an Instagram reel/post shown on the homepage. Swap the URL to
     feature a newer one; leave the array empty to hide the section. Loads
     Instagram's embed only when a visitor clicks Watch. */
  featured: [
    {
      url: "https://www.instagram.com/reel/DdMpdPUywxb/",
      by: "@412onthemove",
      date: "2026-09-12",
      title: "Come along on a guided tour",
      blurb: "Pittsburgh's 412 On The Move filmed the guided tour in September 2026 — the 1809 warehouse, the wine cellar, the Ziegler Log House and the Wagner/Bentel Haus in three minutes."
    }
  ],

  /* Homepage spotlight — a band under the big photo that promotes one big event.
     It shows ONLY between start and end (inclusive), then disappears by itself.
     Leave the array empty for no band. Test with ?today=YYYY-MM-DD.
     Optional: tickets (an outside ticket page) — becomes the red button; link turns into the plain one. */
  spotlight: [
    {
      start: "2026-10-01", end: "2026-11-15",
      label: "Saturday & Sunday, November 14 – 15",
      title: "Weihnachtsmarkt — the German Christmas Market",
      text: "Glühwein, music and holiday shopping in the town the Harmonists built. Admission benefits the museum. Tickets on Eventbrite or at the gate.",
      link: "news.html#weihnachtsmarkt",
      linkText: "Market details",
      tickets: "https://www.eventbrite.com/e/christmas-market-tickets-2001402543885"
    }
  ],

  /* Online prices — only shown when booking.mode is "online" (decision deferred 2026-09-15).
     Same as the door until the museum decides otherwise. */
  onlinePricing: [
    ["Ages 18–64", "$10"],
    ["Ages 65 and up / veterans", "$8"],
    ["Ages 6–17", "$5"],
    ["5 and under", "Free"]
  ],

  /* Events — one line each, shown on the calendar and the news page.
     Optional: link (a page with details), where, note, tickets (an outside ticket page). */
  events: [
    { date: "2026-11-14", time: "10 a.m. – 6 p.m.", title: "Weihnachtsmarkt — German Christmas Market",
      where: "Downtown Harmony", link: "news.html#weihnachtsmarkt", note: "Adults $10 · children 12 to 17, seniors 65+ and veterans $5 · children under 12 free",
      tickets: "https://www.eventbrite.com/e/christmas-market-tickets-2001402543885" },
    { date: "2026-11-15", time: "12 – 4 p.m.", title: "Weihnachtsmarkt — German Christmas Market, day two",
      where: "Downtown Harmony", link: "news.html#weihnachtsmarkt", note: "Adults $10 · children 12 to 17, seniors 65+ and veterans $5 · children under 12 free",
      tickets: "https://www.eventbrite.com/e/christmas-market-tickets-2001402543885" },
    { date: "2026-12-31", title: "Silvester — New Year's Eve, German style",
      note: "Details to be announced" }
  ],

  /* Rental venues and fees — confirmed by the museum 2026-09-15. A refundable security
     deposit is REQUIRED for every rental and is charged when the contract is signed. */
  venues: [
    { key: "barn",    name: "1805 Harmonist Barn",   cap: "260 auditorium · 200 seated",
      fee: "$600", deposit: "$600", window: "Friday to Monday",
      size: "42 × 64 ft, four bays · outside restroom" },
    { key: "stewart", name: "Stewart Hall",          cap: "120 dining · full kitchen · wine cellar add-on",
      fee: "$350", deposit: "$350", window: "8 a.m. to 11 p.m.",
      size: "30 × 46 ft main floor + 22 × 15 ft stage · 2 accessible restrooms · full kitchen",
      extra: "The 1809 wine cellar (42 × 18 ft) is reached through Stewart Hall and can be added to a Stewart Hall rental only, for an additional $100 rental fee." },
    { key: "church",  name: "1825 Mennonite Meetinghouse", cap: "130–150 on original benches",
      fee: "$200", deposit: "$200", window: "8 a.m. to 8 p.m.",
      size: "30 × 28 ft main room + 11 × 16 ft annex · pulpit platform · restroom facility provided by you" }
  ],
  /* Booked/held dates. A volunteer adds a line when a contract is signed; the
     calendar and the rental page both read from here.  e.g.
     { venue: "barn", date: "2027-06-12", status: "booked" }  */
  venueHolds: []
};
