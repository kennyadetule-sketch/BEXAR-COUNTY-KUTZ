/*
 * CLIENT CONFIGURATION
 * For a new client, start here. Public business details and content are centralized below.
 */
const BUSINESS = {
  name: "BEXAR COUNTY KUTZ",
  tagline: "Fresh cuts. Clean details. San Antonio.",
  description: "A San Antonio barbershop offering haircuts, fades, tapers, beard trims and line-ups for adults and kids.",
  logoText: "BCK",
  primaryColor: "#b51f32",
  secondaryColor: "#123a63",
  accentColor: "#e8b94f",
  phone: "+12102672837",
  phoneDisplay: "(210) 267-2837",
  email: "bexarcountykuts@gmail.com",
  address: "5404 Military Dr W, San Antonio, TX 78242, United States",
  whatsapp: "12102672837",
  instagram: "https://www.instagram.com/bexarcountykutz?cplk=b3NkYTN0OXNxZzRl",
  facebook: "https://www.facebook.com/bckbarbershop",
  googleMaps: "https://www.google.com/maps/place/BEXAR+COUNTY+KUTZ/@29.3742758,-98.6098905,17z/data=!3m1!4b1!4m6!3m5!1s0x865c5bac63542b67:0xd5aac0de6cafae4a!8m2!3d29.3742758!4d-98.6098905!16s%2Fg%2F11b6p7mlkw",
  mapEmbed: "https://maps.google.com/maps?q=5404%20Military%20Dr%20W%2C%20San%20Antonio%2C%20TX%2078242&t=&z=15&ie=UTF8&iwloc=&output=embed",
  openingHours: {
    monday: "10 am–5 pm",
    tuesday: "10 am–8 pm",
    wednesday: "10 am–8 pm",
    thursday: "10 am–8 pm",
    friday: "10 am–8 pm",
    saturday: "10 am–7 pm",
    sunday: "11 am–4 pm"
  }
};

const SHOP_PHOTOS = {
  freshFades: "https://lh3.googleusercontent.com/grass-cs/AABkmLfA8QIQa-b6KYvSvt7BBrsEIMdxj6LOG5PlMmviPl6vLAj4TcI5knNwhsUWefeM8J19vcOQ95yu_cLl7BXYGjUiQE-AcFq_J4KqJIYGNyZ-sfwxLUuT4k3_W81sRyf2J_1qDlfdqg=w720-h405-k-no",
  beardDetailing: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SBEDqREDyHpkHENL4kclxsD-an6SYt_gABqX90sPj999m9UIVM2erJAxsps5U-1r2Dvue1WKFfmJulQv5g_i25aYnAdTX_kBWvvPY9vwE-0zb2J3UJ9rLB0qCsu3nXDIxNd0hn=w720-h720-k-no",
  tools: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TPjTGVM6eYzC8cPmzJGFPF0U2qzhvMwOOR1MAH6pnWRGv2rieLm2oaD8afYQPASrhOoHP7ckrFRTeMbu3Z_GfU5upv6Uxj06YydhpURAJJkBEZTodYvuCBuiOR1ZVfpqykB3qU=w720-h720-k-no",
  shop: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-cs7-rhqLOA49YaQoQbjzseu-wUp45mobuUb6W2GEH2P-9RTVkRhvRcN_V9Vt35-gtuGRHzJIONCE5lEEKd5al-4Xlts7gEBmcbOfY4G9UILC6HhSXt98YlbCX0pS-VYLvEkkNQ=w1080-h1080-k-no",
  finish: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sk0IgU1fZlQAcMQ03yzXJtjyJI4JpgPzizAflcKIinewp15ict-x-17vAB4jd2fc87SXuzY594s0kJ1heWPSiSgpTsvNvFAJcj33ln7rCTrEtEkwDWLCmwAwkGIbbsc4YMfEq8=w960-h540-k-no",
  staySharp: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R5d6agVSvidpz3W2FaxcgUM7Eo3DaJKDhjGnB2uQEvY3VaoAjNFNB-ULy7MfR1xbrsp_ayAt1crd_rOeTQZmRU0wqmM5zaf9z_dfa4Lo4IN8B2ZQhplslYiBcHAkwgwXZYjqNS=w720-h720-k-no",
  detail: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QJmBwwa0miDWcPO8J7oDuNAN4E0oF8Vcogxg-ByytW1TaJMx33S9pqk2hjnG2xw4p1EKtimgPUPLhIhQHbLmuokIUQ-3-DuHQoOB4-AL5sB7E_fJDod-JR5_JQUlFyJBU-UQ=w720-h720-k-no",
  homeFeature: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RZBoQ3EUoU7vYVr6-4MmNHC-_Nyue_P6ZZWaA0F3GR81L9PEr-FUtEwZiqoFlEGbeAXUsWzMByUS5BwAjCP9YSqamsuTtLRA11h-0ESDnUf5owTCIILebLzgyTjAlakSIwPrOc4g=w624-h832-k-no",
  haircuts: "https://lh3.googleusercontent.com/grass-cs/AABkmLfA8QIQa-b6KYvSvt7BBrsEIMdxj6LOG5PlMmviPl6vLAj4TcI5knNwhsUWefeM8J19vcOQ95yu_cLl7BXYGjUiQE-AcFq_J4KqJIYGNyZ-sfwxLUuT4k3_W81sRyf2J_1qDlfdqg=w720-h405-k-no",
  beard: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SBEDqREDyHpkHENL4kclxsD-an6SYt_gABqX90sPj999m9UIVM2erJAxsps5U-1r2Dvue1WKFfmJulQv5g_i25aYnAdTX_kBWvvPY9vwE-0zb2J3UJ9rLB0qCsu3nXDIxNd0hn=w720-h720-k-no",
  lineups: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RuKo1dlYi_zwppwE-u9OQtAqDD2QRuwVBON1Psbe_mdgJ2bRLLMAxyEc1cDyrym-HCEWb_J3q3dscpKRMEhLpsuWKszEnfw4QQNWDq6CM-tGGRRhFgk9Qoyh-xVv_dZY4rbv10dA=w720-h720-k-no",
  kids: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tg5gx2Xk5xcv-DGjdG0EkL2MpcU8T3GeFCZNRFj3yoediDyGshFnJARF3ZVt_FcsKqOY0mxqr3Iqn-SkHaP4wumRE31bbs9TOty8FVFJRWenirThq9KGr6Q7owyfF_q9cp9TAOJg=w720-h720-k-no"
};

const SERVICES = [
  { name: "Classic Haircut", category: "Haircuts", description: "A fresh, well-shaped haircut tailored to the look you ask for, from everyday styles to a more polished finish.", price: "Call for current pricing", duration: "Ask when booking", image: SHOP_PHOTOS.haircuts, alt: "BEXAR COUNTY KUTZ haircut photo" },
  { name: "Fades & Tapers", category: "Haircuts", description: "Clean blending and a defined finish for fades and tapers. Bring a reference photo or describe the shape you have in mind.", price: "Call for current pricing", duration: "Ask when booking", image: SHOP_PHOTOS.freshFades, alt: "Fresh fade haircut from the shop's photo collection" },
  { name: "Beard Trim & Shape", category: "Grooming", description: "Tidy up your beard with shaping and detail work that complements your haircut and face shape.", price: "Call for current pricing", duration: "Ask when booking", image: SHOP_PHOTOS.beard, alt: "Beard detailing photo from BEXAR COUNTY KUTZ" },
  { name: "Line-up & Edge-up", category: "Grooming", description: "Crisp finishing around the hairline and edges for a clean, defined look.", price: "Call for current pricing", duration: "Ask when booking", image: SHOP_PHOTOS.lineups, alt: "Line-up and detailing photo from BEXAR COUNTY KUTZ" },
  { name: "Kids' Haircut", category: "Family", description: "Haircuts for younger clients in a family-friendly barbershop setting. Call ahead with any questions about availability.", price: "Call for current pricing", duration: "Ask when booking", image: SHOP_PHOTOS.kids, alt: "Kids haircut photo from BEXAR COUNTY KUTZ" },
  { name: "Cut & Beard Combo", category: "Combos", description: "Ask about pairing a haircut with beard grooming for a coordinated, finished style.", price: "Call for current pricing", duration: "Ask when booking", image: SHOP_PHOTOS.finish, alt: "Finished haircut and grooming look" }
];

const GALLERY_IMAGES = [
  { src: SHOP_PHOTOS.freshFades, alt: "Fresh fade haircut from the BEXAR COUNTY KUTZ Google Maps photo collection", label: "Fresh fades" },
  { src: SHOP_PHOTOS.beardDetailing, alt: "Beard detailing from the BEXAR COUNTY KUTZ Google Maps photo collection", label: "Beard detailing" },
  { src: SHOP_PHOTOS.tools, alt: "Barber tools from the BEXAR COUNTY KUTZ Google Maps photo collection", label: "Tools of the trade" },
  { src: SHOP_PHOTOS.shop, alt: "Inside BEXAR COUNTY KUTZ", label: "In the shop" },
  { src: SHOP_PHOTOS.finish, alt: "Finished barbering look from BEXAR COUNTY KUTZ", label: "The finish" },
  { src: SHOP_PHOTOS.staySharp, alt: "Barbering photo from the BEXAR COUNTY KUTZ listing", label: "Stay sharp" },
  { src: SHOP_PHOTOS.detail, alt: "Close-up detail from the BEXAR COUNTY KUTZ photo collection", label: "Attention to detail" },
  { src: SHOP_PHOTOS.homeFeature, alt: "Barbering photograph from the BEXAR COUNTY KUTZ listing", label: "Your look. Your style. Our craft." }
];

const FAQS = [
  { q: "What services do you offer?", a: "The shop's public listings mention haircuts, fades and tapers, beard trims, edge-ups and line-ups, and specialty men's haircuts. Call to confirm the service you want and its current price." },
  { q: "Do I need an appointment?", a: "Public listings have described both walk-ins and appointments. Availability can change during busy periods, so call (210) 267-2837 before making a special trip." },
  { q: "What are your opening hours?", a: "The hours supplied for this website are Monday 10 am–5 pm, Tuesday through Friday 10 am–8 pm, Saturday 10 am–7 pm, and Sunday 11 am–4 pm. Holiday hours may differ; call ahead to confirm." },
  { q: "Where are you located?", a: "BEXAR COUNTY KUTZ is at 5404 Military Dr W, San Antonio, TX 78242, near the Lackland area. Use the Get Directions link for turn-by-turn navigation." },
  { q: "Do you accept walk-ins?", a: "The shop has publicly advertised walk-ins, but wait times and availability can vary. Call ahead if you are working to a tight schedule." },
  { q: "What payment methods do you accept?", a: "Current payment options have not been confirmed in the information available for this website. Please contact the shop directly before your visit." },
  { q: "How can I contact the shop?", a: "Call (210) 267-2837, email bexarcountykuts@gmail.com, or send a message through the shop's linked Facebook or Instagram page." },
  { q: "How much does a haircut cost?", a: "Prices can change and a complete current price list could not be verified. Call the shop for pricing for your preferred haircut or grooming service." }
];

/* These are review themes, not invented customer quotations. */
const REVIEWS = [
  { name: "Crystal Alvarez", rating: 5, text: "Thanks Chops always does a great cutting my children hair most definitely recommend and ask for Chops", source: "Summary of public review · Google listing" },
  { name: "Jose Alvarez", rating: 5, text: "The barbers are top notch only place to I take my kids to get haircuts plus they do beard trim and styling.", source: "Summary of public review · Google listing" },
  { name: "Vincent Gutierrez", rating: 5, text: "Marcelo was my barber had a very good experience with him haircuts come out very clean and sharp highly recommend Marcelo", source: "Summary of public review · Google listing" }
];
