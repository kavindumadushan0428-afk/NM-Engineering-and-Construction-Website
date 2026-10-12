// Shared data for N&M Engineering Services & Construction

export const projects = [
  {
    id: 1,
    title: "Modern Tropical Home",
    status: "Completed",
    location: "Rambukkana",
    description:
      "A contemporary tropical home designed around natural ventilation and comfort.",
    image: "/Image/Projects/project-1.webp",
    category: "New Build",
  },
  {
    id: 2,
    title: "Two-Storey Residence",
    status: "Completed",
    location: "Kegalle",
    description:
      "A practical two-storey family home designed to fit a compact plot.",
    image: "/Image/Projects/project-2.webp",
    category: "New Build",
  },
  {
    id: 3,
    title: "Compact Family Home",
    status: "Ongoing",
    location: "Kegalle Area",
    description:
      "A smart, space-efficient home designed around the family's lifestyle.",
    image: "/Image/Projects/project-3.webp",
    category: "New Build",
  },
  {
    id: 4,
    title: "Hillside Expansion",
    location: "Mawanella",
    category: "Renovation",
    status: "Ongoing",
    description:
      "A hillside structural expansion integrating an elevated panoramic viewing deck with the existing framework.",
    image: "/Image/Projects/project-1.webp",
  },
  {
    id: 5,
    title: "Luxury Estate Villa",
    location: "Kandy",
    category: "Design & Build",
    status: "Ongoing",
    description:
      "An estate villa featuring expansive glass facades and an infinity edge pool.",
    image: "/Image/Projects/project-2.webp",
  },
  {
    id: 6,
    title: "Urban Commercial Complex",
    location: "Colombo",
    category: "Commercial",
    status: "Completed",
    description:
      "A multi-story commercial hub designed around sustainability and smart energy management.",
    image: "/Image/Projects/project-3.webp",
  },
];

export const services = [
  {
    id: 1,
    slug: "design-build",
    title: "Design & Build",
    shortDesc: "Complete end-to-end project support from planning to handover.",
    fullDesc:
      "Our comprehensive Design & Build package ensures a seamless transition from your initial ideas directly into hard architecture. We handle the architectural drafting, structural engineering, council approvals, and the complete on-site construction, providing a single point of accountability throughout the entire lifecycle of your home.",
    features: [
      "Architectural Drafting",
      "Structural Engineering",
      "Full Construction Pipeline",
      "Single-point Accountability",
    ],
    icon: "design",
    image: "/Image/Services/D&B.webp",
  },
  {
    id: 2,
    slug: "house-plans",
    title: "House Plans",
    shortDesc:
      "Practical plans designed around your land, lifestyle and budget.",
    fullDesc:
      "Great construction starts with grounded, practical plans. We focus heavily on space-efficiency, natural light, and structural integrity. Whether working with massive estate lots or compact urban spaces, our floor plans are meticulously designed to maximize utility and perfectly match your family's daily lifestyle.",
    features: [
      "Custom Layout Planning",
      "Space Utilization Optimization",
      "Vastu/Fengshui Compliance Available",
      "Council Approval Packages",
    ],
    icon: "build",
    image: "/Image/Services/Plan.webp",
  },
  {
    id: 3,
    slug: "3d-visualization",
    title: "3D Visualization",
    shortDesc: "Realistic 3D views to help you understand your future space.",
    fullDesc:
      "Remove the guesswork before breaking ground. Our 3D visualization services allow you to virtually walk through your future home. We render accurate exterior facades, interior layouts, lighting simulations, and material finishes so you can make confident decisions before purchasing any physical materials.",
    features: [
      "Photorealistic Rendering",
      "Material & Lighting Simulation",
      "Virtual Walkthroughs",
      "Exterior & Interior Perspectives",
    ],
    icon: "3d",
    image: "/Image/Services/3D.webp",
  },
  {
    id: 4,
    slug: "renovation",
    title: "Renovation",
    shortDesc: "Upgrade and improve existing homes and spaces.",
    fullDesc:
      "Need to modernize an aging space or add another wing to your home? We execute complex structural renovations and vertical/horizontal extensions. We specialize in safely integrating modern architectural frameworks with existing foundational structures without compromising the integrity of your home.",
    features: [
      "Vertical Extensions",
      "Structural Reinforcement",
      "Interior Modernization",
      "Space Repurposing",
    ],
    icon: "renovation",
    image: "/Image/Services/Renovation.webp",
  },
  {
    id: 5,
    slug: "boq-estimation",
    title: "BOQ & Estimation",
    shortDesc: "Clear quantities and cost estimates for better planning.",
    fullDesc:
      "Financial predictability is critical in construction. We provide completely transparent, highly accurate Bills of Quantities (BOQ) and meticulous cost estimations. Knowing the exact volume of materials and projected labor costs protects you from unexpected expenses and helps secure bank approvals easily.",
    features: [
      "Material Quantification",
      "Labor Cost Projection",
      "Bank Loan Documentation",
      "Transparent Budgeting",
    ],
    icon: "boq",
    image: "/Image/Services/BOQ.webp",
  },
  {
    id: 6,
    slug: "landscaping",
    title: "Landscaping",
    shortDesc: "Complete the space around your home.",
    fullDesc:
      "A well-designed home extends beyond its walls. We help plan practical outdoor spaces that complement the home and make better use of the surrounding environment, ensuring a cohesive architectural flow.",
    features: [
      "Garden Planning",
      "Outdoor Space Optimization",
      "Hardscaping Concepts",
      "Property Cohesion",
    ],
    icon: "design",
    image: "/Image/Services/Landscaping.webp",
  },
];

export const values = [
  {
    title: "Honest Communication",
    description:
      "We keep things clear, simple and transparent from start to finish. You always know what's happening with your project.",
    icon: "chat",
  },
  {
    title: "Practical Design",
    description:
      "Good design should look nice and be easy to build. We focus on designs that work in real life, not just on paper.",
    icon: "design",
  },
  {
    title: "Quality Workmanship",
    description:
      "We take pride in doing things properly, with care and responsibility at every step of the construction process.",
    icon: "quality",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We listen to your ideas, needs, and budget.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "We create practical designs and a clear plan.",
  },
  {
    number: "03",
    title: "Estimate",
    description: "We provide a transparent estimate and scope.",
  },
  {
    number: "04",
    title: "Build",
    description: "We build with care, quality, and regular updates.",
  },
  {
    number: "05",
    title: "Handover",
    description: "We hand over a space you'll be proud to live in.",
  },
];
