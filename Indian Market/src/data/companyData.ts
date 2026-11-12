import type { 
  ServiceItem, 
  CapabilityItem, 
  ExecutionStage, 
  WhyUsPoint, 
  ApproachStep, 
  PresenceRegion, 
  ProjectItem, 
  HeldProgramItem, 
  ClientPartnerItem 
} from '../types';

export const companyProfile = {
  name: "Indian Market Events & Promotion",
  shortName: "Indian Market",
  established: "2018",
  domain: "indianmarketevents.com",
  websiteUrl: "https://indianmarketevents.com",
  tagline: "Turning Ideas into Impact",
  primaryPositioning: "Brand Activation | Events | Branding",
  additionalPositioning: "Pan-India Execution | People | Production",
  experienceYears: "8+ Years",
  coreMessage: "We turn briefs into well-managed experiences—combining creative thinking, operational discipline and local execution.",
  overview: "Indian Market Events & Promotion was established in 2018 and delivers event management and marketing solutions for brands, institutions and corporate teams. The company provides integrated delivery, covering the complete process from concept and coordination to production, manpower and execution through one connected workflow. The company has Pan-India capability supported by a flexible team and manpower network designed to support campaigns across multiple locations.",
  contact: {
    founderAndDirector: "Pratik Medhane",
    designation: "Founder & Event Director",
    founderPhoto: "/photos/founder.jpg",
    phone: "8788972147",
    formattedPhone: "+91 87889 72147",
    email: "indianmarket.pratik@gmail.com",
    website: "indianmarketevents.com",
    websiteUrl: "https://indianmarketevents.com",
    officeAddress: "Plot No. 26, Shahu Nagar, Near ITI Bridge, Nashik-422008",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422008",
    gstin: "27DFYPM1970M2ZF"
  }
};

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Brand Activation",
    description: "Bring brands to life through audience-first experiences.",
    icon: "Sparkles",
    features: [
      "Interactive Consumer Zones",
      "Experiential Sampling Setups",
      "Mall & Retail Activations",
      "Audience Engagement Modules"
    ]
  },
  {
    number: "02",
    title: "Brand Promotion",
    description: "Build awareness and encourage meaningful interaction.",
    icon: "Megaphone",
    features: [
      "On-Ground Field Promotions",
      "Canter & Mobile Van Drives",
      "Direct Consumer Outreach",
      "Market Visibility Campaigns"
    ]
  },
  {
    number: "03",
    title: "Corporate Events",
    description: "Plan and deliver polished business experiences.",
    icon: "Briefcase",
    features: [
      "Conferences & Annual Meets",
      "Product Launches & Unveils",
      "Employee Engagement Days",
      "Executive Seminars & Forums"
    ]
  },
  {
    number: "04",
    title: "CSR Campaigns",
    description: "Coordinate purposeful outreach and community engagement.",
    icon: "HeartHandshake",
    features: [
      "Community Awareness Drives",
      "Green & Plantation Campaigns",
      "Health & Educational Outreach",
      "Social Impact Initiatives"
    ]
  },
  {
    number: "05",
    title: "School Contact Programs",
    description: "Connect with students, educators and institutions.",
    icon: "GraduationCap",
    features: [
      "Inter-School Talent Platforms",
      "Educational Quizzes & Contests",
      "Teacher & Student Engagement",
      "Campus Activation Drives"
    ]
  },
  {
    number: "06",
    title: "Event Production",
    description: "Manage production elements, setup and event-day requirements.",
    icon: "Layers",
    features: [
      "Stage Fabrication & Backdrops",
      "Sound, Lighting & Audio-Visuals",
      "Branding Collateral & Signage",
      "Logistics & Site Management"
    ]
  },
  {
    number: "07",
    title: "Manpower Solutions",
    description: "Deploy coordinated teams for on-ground activities.",
    icon: "Users",
    features: [
      "Trained Brand Promoters",
      "Event Hosts, Emcees & Anchors",
      "Field Supervisors & Crew",
      "Technical Support Staff"
    ]
  }
];

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "activate",
    tag: "EXPERIENCE",
    title: "ACTIVATE",
    description: "Sampling, engagement zones and interactive brand experiences.",
    icon: "Zap"
  },
  {
    id: "promote",
    tag: "OUTREACH",
    title: "PROMOTE",
    description: "Field promotions, visibility drives and audience outreach.",
    icon: "TrendingUp"
  },
  {
    id: "gather",
    tag: "CONVENE",
    title: "GATHER",
    description: "Corporate meets, launches, conferences and employee events.",
    icon: "Building2"
  },
  {
    id: "engage",
    tag: "COMMUNITY",
    title: "ENGAGE",
    description: "CSR initiatives and school-focused contact programs.",
    icon: "Heart"
  },
  {
    id: "produce",
    tag: "FABRICATE",
    title: "PRODUCE",
    description: "Event infrastructure, branding, fabrication and logistics.",
    icon: "Hammer"
  },
  {
    id: "mobilise",
    tag: "TEAMS",
    title: "MOBILISE",
    description: "Trained on-ground teams, supervisors and campaign support.",
    icon: "UserCheck"
  }
];

export const executionStages: ExecutionStage[] = [
  {
    stage: "PLAN",
    stepNumber: "STAGE 01",
    title: "Event Planning & Scheduling",
    description: "Comprehensive scope definition, location scouting, milestone scheduling and resource allocation aligned with the campaign objective.",
    deliverables: ["Campaign Roadmap", "Site Audits & Permissions", "Detailed Run of Show"]
  },
  {
    stage: "SOURCE",
    stepNumber: "STAGE 02",
    title: "Pan-India Manpower & Vendors",
    description: "Mobilizing vetted local manpower, specialist audio-visual partners and fabrication resources through our established regional network.",
    deliverables: ["Trained Brand Ambassadors", "Vetted Production Vendors", "Logistics Routing"]
  },
  {
    stage: "BUILD",
    stepNumber: "STAGE 03",
    title: "Branding, Production & Logistics",
    description: "Turnkey fabrication of stage sets, display kiosks, print collateral and sound-and-light integration with strict quality oversight.",
    deliverables: ["Quality Checked Fabrication", "AV Systems & Rigging", "Merchandise & Collateral"]
  },
  {
    stage: "ACTIVATE",
    stepNumber: "STAGE 04",
    title: "On-Ground Execution & Supervision",
    description: "Dedicated project leads managing live crowd flow, program cues, brand messaging and immediate on-site problem resolution.",
    deliverables: ["Experienced Supervisors", "Real-Time Quality Control", "Engaged Audiences"]
  },
  {
    stage: "REPORT",
    stepNumber: "STAGE 05",
    title: "Campaign Tracking & Reporting",
    description: "Systematic data collection, on-ground photo documentation, audience interaction tallies and campaign post-mortems.",
    deliverables: ["Post-Event Dossier", "Photo & Video Archives", "Campaign Learnings & Metrics"]
  }
];

export const whyWorkWithUsData: WhyUsPoint[] = [
  {
    badge: "EXPERIENCE",
    title: "8+ Years of Experience",
    description: "Extensive background across brand activation, corporate gatherings, educational outreach and live production since 2018."
  },
  {
    badge: "REACH",
    title: "PAN-INDIA Execution Capability",
    description: "Proven capacity to execute campaigns across metropolitan hubs, secondary towns and regional districts through connected logistics."
  },
  {
    badge: "TALENT",
    title: "Experienced Team & Manpower Network",
    description: "Vetted on-ground promoters, experienced event supervisors and local teams ready to deploy on short turnarounds."
  },
  {
    badge: "WORKFLOW",
    title: "End-to-End Campaign Delivery",
    description: "Unified accountability covering initial brief, vendor sourcing, fabrication, live operations and post-event reporting."
  },
  {
    badge: "RELATIONSHIPS",
    title: "Media & Corporate Network",
    description: "Trusted delivery record collaborating with major media conglomerates, educational bodies and leading consumer brands."
  },
  {
    badge: "RELIABILITY",
    title: "On-Ground Management Discipline",
    description: "Rigorous attention to timelines, brand guidelines, audience safety and seamless on-site coordination."
  }
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    phase: "PHASE 01",
    title: "BRIEF",
    description: "Understand goals, audience and scope through detailed intake and stakeholder alignment."
  },
  {
    number: "02",
    phase: "PHASE 02",
    title: "STRATEGY",
    description: "Shape the concept and delivery plan, defining spatial layout, messaging and operational requirements."
  },
  {
    number: "03",
    phase: "PHASE 03",
    title: "PLANNING",
    description: "Align people, partners, timelines and assets to guarantee synchronized on-ground execution."
  },
  {
    number: "04",
    phase: "PHASE 04",
    title: "EXECUTION",
    description: "Manage setup and live operations with dedicated supervisors overseeing every cue and consumer touchpoint."
  },
  {
    number: "05",
    phase: "PHASE 05",
    title: "REPORTING",
    description: "Document delivery and campaign learnings with verified photographs, data tallies and qualitative feedback."
  }
];

export const presenceData: PresenceRegion[] = [
  {
    id: "maharashtra",
    state: "MAHARASHTRA",
    status: "Core Presence",
    description: "Headquartered in Nashik with deep execution depth across the state, managing high-density campaigns, media properties and community initiatives.",
    keyCenters: "Nashik (Head Office), Mumbai, Pune, Nagpur, Aurangabad"
  },
  {
    id: "gujarat",
    state: "GUJARAT",
    status: "Regional Coverage",
    description: "Active regional execution partner for brand activations, retail promotion drives, school contact programs and corporate conferences.",
    keyCenters: "Ahmedabad, Surat, Vadodara, Rajkot"
  },
  {
    id: "karnataka",
    state: "KARNATAKA",
    status: "Regional Coverage",
    description: "Regional capability supporting institutional programs, corporate meets and consumer engagement across southern business hubs.",
    keyCenters: "Bengaluru, Mysuru, Hubballi"
  },
  {
    id: "pan-india",
    state: "PAN-INDIA",
    status: "Project-Based Reach",
    description: "Multi-city campaign delivery across northern, southern, western and eastern territories supported by flexible logistics and local manpower networks.",
    keyCenters: "Multi-State Campaign Deployments Across Tier-1, Tier-2 & Tier-3 Cities"
  }
];

export const clientPartnersData: ClientPartnerItem[] = [
  { 
    name: "Maharashtra Times", 
    category: "Media & Publication",
    logo: "/logos/MTM.png"
  },
  { 
    name: "The Times of India", 
    category: "Media & Publication",
    logo: "/logos/TOI.png"
  },
  { 
    name: "Krayon", 
    category: "Experiential & Agency Partner",
    logo: "/logos/Krayon.png"
  },
  { 
    name: "Impact Communications", 
    category: "Communications & Media",
    logo: "/logos/IC.png"
  }
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "padwa-pahat-jalgaon",
    title: "HDFC Bank & Maharashtra Times – Padwa Pahat",
    client: "HDFC Bank & Maharashtra Times",
    logo: "/logos/hdfc.png",
    category: "Experiential Marketing",
    subtitle: "पाडवा पहाट – Festive Treats Diwali Morning Musical Concert in Jalgaon",
    concept: "A signature Diwali morning cultural extravaganza, 'पाडवा पहाट' (Padwa Pahat – परिवर्तनाची पहाट), organized in Jalgaon in association with HDFC Bank (under their nationwide 'Festive Treats' campaign) and Maharashtra Times. The event celebrates the auspicious occasion of Diwali Padwa through an enchanting dawn musical concert featuring traditional Indian classical, devotional, and semi-classical melodies, creating an inspiring community gathering for families and citizens.",
    description: "Indian Market Events & Promotion delivered comprehensive end-to-end event management, acoustic production, stage fabrication, and on-ground coordination for the grand Padwa Pahat celebrations held yesterday in Jalgaon. The morning gathering commenced with live musical renditions by celebrated classical and devotional vocalists accompanied by harmonium, tabla, pakhawaj, keyboard, and strings. The event also featured the high-profile unveiling of the special Maharashtra Times Diwali festive magazine by distinguished guests and community leaders, coupled with HDFC Bank Festive Treats promotional visibility and seamless guest hospitality for a packed hall of community attendees in traditional festive attire.",
    outcome: "Convened a packed auditorium of music aficionados, families, and community members for an unforgettable Diwali dawn celebration in Jalgaon, achieved widespread brand engagement and celebratory resonance for HDFC Bank's Festive Treats campaign, and orchestrated a prestigious launch platform for the Maharashtra Times festive publication with immaculate stage, sound, and event production.",
    highlights: [
      "Held yesterday at Jalgaon in association with HDFC Bank (Festive Treats)",
      "Co-organized in association with Maharashtra Times, The Times of India & Rotary Club of Jalgaon West",
      "Live classical, abhang, and festive musical renditions by an accomplished ensemble of musicians",
      "Formal stage unveiling of the Maharashtra Times Diwali festive edition by honored guests",
      "End-to-end turnkey event management: thematic stage backdrop, acoustic sound, lighting, and hospitality"
    ],
    year: "2026",
    date: "Held Yesterday (Diwali Padwa) • Jalgaon",
    location: "Jalgaon, Maharashtra",
    image: "/photos/padwa1.jpeg",
    images: [
      "/photos/padwa1.jpeg",
      "/photos/padwa2.jpeg",
      "/photos/padwa3.jpeg",
      "/photos/padwa4.jpeg",
      "/photos/padwa5.jpeg",
      "/photos/padwa6.jpeg"
    ]
  },
  {
    id: "cancer-awareness-program",
    title: "Cancer Awareness Program",
    client: "सार्वजनिक आरोग्य विभाग (महाराष्ट्र शासन)",
    logo: "/logos/arogya.png",
    category: "CSR / Community Engagement",
    subtitle: "Know. Detect. Protect. – Cancer Awareness & Early Detection Drive for ASHA Workers",
    concept: "A large-scale public health and preventive oncology initiative jointly organized with the Public Health Department (सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन) and The Times of India (Bennett & Coleman). The program empowers grassroots healthcare providers and ASHA health volunteers (आशा स्वयंसेविका) with vital clinical knowledge on early cancer symptoms, self-examination, screening protocols, and community outreach methodologies.",
    description: "Indian Market Events & Promotion planned, managed, and executed the end-to-end event production, audio-visual rigging, and logistics for this massive cancer awareness symposium. With hundreds of ASHA health workers attending in their signature pink uniforms, the setup included professional stage design with thematic floral arrangements, formal lamp lighting (दीप प्रज्वलन) ceremony with medical dignitaries, guest felicitation protocols, multi-tier audio-visual projection systems, comprehensive auditorium crowd management, and impactful outdoor awareness branding and informational signage. The drive is actively ongoing across multiple cities to expand grassroots cancer detection and community health screening networks.",
    outcome: "Successfully mobilized and trained hundreds of frontline ASHA healthcare workers in early cancer detection and public awareness techniques, established seamless institutional collaboration between government health departments and leading media houses, and delivered an impeccably executed multi-city awareness campaign that bridges medical expertise with grassroots community health.",
    highlights: [
      "Ongoing public health initiative actively conducted across multiple cities",
      "Specialized cancer awareness and early detection training for grassroots ASHA volunteers",
      "Joint initiative of Maharashtra Public Health Dept & The Times of India",
      "Grand auditorium convention featuring medical keynotes, formal lamp lighting & expert panels",
      "End-to-end event management: stage fabrication, AV systems, hospitality, and event collaterals"
    ],
    year: "2026 (Ongoing)",
    date: "Ongoing Campaign • Multiple Cities",
    location: "Ongoing Across Multiple Cities",
    image: "/photos/cancer1.jpeg",
    images: [
      "/photos/cancer1.jpeg",
      "/photos/cancer2.jpeg",
      "/photos/cancer3.jpeg",
      "/photos/cancer4.jpeg",
      "/photos/cancer5.jpeg",
      "/photos/cancer6.jpeg",
      "/photos/cancer7.jpeg",
      "/photos/cancer8.jpeg"
    ]
  },
  {
    id: "sun-pharma-cpr",
    title: "Sun Pharma – CALS CPR Lifesaving Initiative",
    client: "Sun Pharma",
    logo: "/logos/sunpharma.png",
    category: "CSR / Community Engagement",
    subtitle: "CALS Initiative – Making India HeartSTRONG! CPR Training Camp",
    concept: "A nationwide public health and community lifesaving initiative by Sun Pharma under the CALS Initiative (CPR As a Life Skill Initiative) in association with SATS Academy, empowering citizens with vital hands-on Cardiopulmonary Resuscitation (CPR) skills to save lives during sudden cardiac arrest.",
    description: "Indian Market Events & Promotion manages and executes on-ground CPR training camps across high-footfall public parks, residential hubs, educational grounds, and community centers in multiple cities. The program features interactive live demonstrations by certified life-support trainers, practical hands-on CPR training on adult and child mannequins using cprCUBE PRO feedback systems, emergency response protocols, and direct public engagement to build widespread community preparedness.",
    outcome: "Trained hundreds of community members and residents in life-saving CPR techniques, raised widespread awareness on sudden cardiac arrest response, and delivered highly organized outdoor engagement setups across key residential and public park locations across multiple cities.",
    highlights: [
      "Ongoing public lifesaving initiative conducted across multiple cities",
      "Hands-on training on CPR mannequins with certified life-support trainers",
      "Sun Pharma's 'Making India HeartSTRONG!' & CALS Initiative partnership",
      "Engaging diverse community groups, morning walkers, youth, and families"
    ],
    year: "2026 (Ongoing)",
    date: "Ongoing Drive • Multiple Cities",
    location: "Ongoing Across Multiple Cities",
    image: "/photos/cpr3.jpeg",
    images: [
      "/photos/cpr3.jpeg",
      "/photos/cpr1.jpeg",
      "/photos/cpr2.jpeg",
      "/photos/cpr4.jpeg"
    ]
  },
  {
    id: "hp-minitek",
    title: "HP – HP miniTEK Conference",
    client: "HP",
    logo: "/logos/hp.png",
    category: "Corporate Events",
    subtitle: "HP miniTEK Conference – Industry Meet & Enterprise Tech Summit",
    concept: "An executive technology conference and enterprise summit bringing together industry leaders, technology partners, and corporate delegates to explore hybrid compute architecture and on-device AI integration.",
    description: "Indian Market Events & Promotion delivered comprehensive end-to-end event management and live production for the HP miniTEK Conference, coordinating the Industry Meet on 25th October and the primary HP Event on 27th October. The conference featured keynote presentations, technical breakout discussions on hybrid compute ecosystems, premium ballroom stage design, audio-visual rigging, and executive hospitality coordination.",
    outcome: "Successfully convened industry delegates and corporate technology leaders, reinforced HP's market leadership in hybrid compute and AI device architectures, and delivered a seamless conference experience across both event days.",
    highlights: [
      "Industry Meet conducted on 25th October & HP Event on 27th October",
      "Executive keynotes on hybrid compute architecture and on-device AI",
      "End-to-end conference management, AV staging, and guest coordination",
      "Engaged top enterprise IT delegates and industry leadership"
    ],
    year: "2026",
    date: "Industry Meet: 25th Oct • HP Event: 27th Oct",
    location: "Four Points by Sheraton",
    image: "/photos/hp1.jpeg",
    images: [
      "/photos/hp1.jpeg",
      "/photos/hp4.jpeg",
      "/photos/hp2.jpeg",
      "/photos/hp3.jpeg"
    ]
  },
  {
    id: "mt-helpline",
    title: "Maharashtra Times – MT Helpline",
    client: "Maharashtra Times",
    logo: "/logos/mt.png",
    category: "CSR / Community Engagement",
    subtitle: "Awarding students with prize Money students who score highest marks",
    description: "A professionally executed Maharashtra Times (MT) Helpline event featuring a panel discussion and audience engagement. The event brought together speakers and attendees on a common platform to exchange ideas, share insights, and encourage meaningful interaction.",
    outcome: "Created a platform for knowledge sharing and public engagement, facilitated interaction between speakers and the audience, enhanced brand visibility through event branding and on-stage promotions, and delivered a well-organized event experience with professional stage and seating arrangements.",
    highlights: [
      "Awarding students with prize money for scoring highest marks",
      "Panel discussion and interactive audience engagement",
      "Enhanced brand visibility through event branding and on-stage promotions",
      "Delivered a well-organized event experience across 6 cities"
    ],
    year: "2026",
    location: "6 Cities",
    image: "/photos/mt-photo.jpg",
    images: [
      "/photos/mt-photo.jpg"
    ]
  },
  {
    id: "meg-scholars",
    title: "MEG Scholars Academy – My Bappa & My Colours",
    client: "MEG Scholars Academy",
    logo: "/logos/mega.png",
    category: "School Engagement Activities",
    subtitle: "My Bappa & My Colours – A Creative Celebration",
    description: "An engaging children’s event organized by MEG Scholars Academy in association with Maharashtra Times, celebrating Ganesh Chaturthi through art, creativity, and interactive activities. The event brought together children, parents, and educators in a festive and inspiring environment.",
    outcome: "Encouraged children’s creativity, artistic expression, and cultural participation while strengthening community engagement and enhancing brand visibility for the participating organizations.",
    highlights: [
      "Celebrated Ganesh Chaturthi through art, creativity, and interactive activities",
      "Brought together children, parents, and educators in a festive environment",
      "Strengthened community engagement and brand visibility in Mumbai"
    ],
    year: "2026",
    location: "Mumbai",
    image: "/photos/Mega1.jpg",
    images: [
      "/photos/Mega1.jpg",
      "/photos/mega2.jpg",
      "/photos/mega3.jpg",
      "/photos/mega4.jpg",
      "/photos/mega5.jpg",
      "/photos/megA7.jpg",
      "/photos/mega8.jpg"
    ]
  },
  {
    id: "sony-yay-break-time",
    title: "Sony YAY! – Break Time",
    client: "Sony YAY!",
    logo: "/logos/sony yay.png",
    category: "School Engagement Activities",
    subtitle: "School Engagement Activity",
    concept: "Engage children through fun activities and entertainment while promoting positive values and teamwork.",
    description: "A nationwide engagement initiative designed around fun activities and entertainment for children, promoting positive values, friendship, teamwork, and positive behaviour in school environments through structured school outreach.",
    outcome: "Strengthened Sony YAY!’s engagement with children by delivering fun, value-driven experiences that reinforced friendship, teamwork, and positive behavior.",
    highlights: [
      "Nationwide school engagement through fun activities and entertainment",
      "Promoted positive values, friendship, and collaborative teamwork",
      "Direct brand affinity built across schools and students reached"
    ],
    year: "2025",
    location: "Multi-City",
    image: "/photos/sony1.jpg",
    images: [
      "/photos/sony1.jpg",
      "/photos/sony2.jpg",
      "/photos/sony3.jpg",
      "/photos/sony4.jpg",
      "/photos/sony5.jpg"
    ]
  },
  {
    id: "toi-icons-education",
    title: "The Times of India – ICONS of Education",
    client: "The Times of India",
    logo: "/logos/eduaction.png",
    category: "Award Ceremonies",
    subtitle: "The Times of India ICONS of Education 2026",
    concept: "An education-focused recognition and networking event celebrating excellence, innovation, and contributions in the education sector. The platform brings together education leaders, institutional representatives, and industry partners to recognize achievements and encourage collaboration.",
    description: "Organized by Indian Market Events & Promotion in association with The Times of India and Maharashtra Times, the event featured an official stage program, distinguished guests, and prominent education-sector branding.",
    outcome: "Recognized contributions and achievements in the education sector, created networking opportunities among educators, institutions, and industry representatives, and strengthened brand visibility and credibility.",
    highlights: [
      "Official stage program honoring academic leaders and educators",
      "Created networking opportunities among institutions and industry partners",
      "Prominent education-sector branding and credibility in Nagpur"
    ],
    year: "2026",
    location: "Nagpur",
    image: "/photos/edu1.jpg",
    images: [
      "/photos/edu1.jpg",
      "/photos/edu2.jpg",
      "/photos/edu3.jpg",
      "/photos/edu4.jpg",
      "/photos/edu5.jpg"
    ]
  },
  {
    id: "toi-icons-healthcare",
    title: "The Times of India – ICONS of Healthcare",
    client: "The Times of India",
    logo: "/logos/healthcare.png",
    category: "Award Ceremonies",
    subtitle: "The Times of India – ICONS of Healthcare 2026",
    concept: "A healthcare recognition platform designed to celebrate excellence, dedication, and outstanding contributions by healthcare professionals, hospitals, and medical institutions.",
    description: "An award ceremony organized under The Times of India banner, bringing together healthcare professionals and industry representatives to recognize their achievements and contributions to the healthcare sector.",
    outcome: "Recognized outstanding contributions and achievements in healthcare, created networking opportunities among healthcare professionals and institutions, and celebrated excellence and continued innovation.",
    highlights: [
      "Award ceremony recognizing medical leaders and hospital institutions",
      "Platform celebrating excellence and dedication in clinical care",
      "Enhanced brand visibility and credibility for event partners in Nashik"
    ],
    year: "2026",
    location: "Nashik",
    image: "/events/toi-icons-healthcare-main.jpeg",
    images: [
      "/events/toi-icons-healthcare-main.jpeg",
      "/events/toi-icons-healthcare-photo1.jpeg",
      "/events/toi-icons-healthcare-photo2.jpeg",
      "/events/toi-icons-healthcare-photo3.jpeg",
      "/events/toi-icons-healthcare-photo4.jpeg",
      "/events/toi-icons-healthcare-photo5.jpeg",
      "/events/toi-icons-healthcare-photo6.jpeg",
      "/events/toi-icons-healthcare-showcase.jpg"
    ]
  },
  {
    id: "mt-plant-campus",
    title: "Maharashtra Times – Plant Campus",
    client: "Maharashtra Times",
    logo: "/logos/planet.png",
    category: "CSR / Community Engagement",
    subtitle: "Acharya Pralhad Keshav Atre Rangmandir – Educational Awareness Seminar",
    concept: "An educational awareness initiative conducted in collaboration with Planet Campus, focusing on student development, knowledge sharing, and guidance on important educational and career-related topics.",
    description: "Indian Market Events & Promotion organized a seminar featuring expert speakers and a panel discussion at Acharya Pralhad Keshav Atre Rangmandir, Kalyan. The event brought together students and attendees for an informative and engaging learning experience.",
    outcome: "Promoted educational awareness and knowledge sharing, created opportunities for interaction between speakers and attendees, and encouraged student participation and informed decision-making.",
    highlights: [
      "Seminar featuring expert speakers and panel discussion in Kalyan",
      "Guidance on important educational and career-related topics",
      "Organized in collaboration with Planet Campus across 2+ cities"
    ],
    year: "2026",
    location: "2+ Cities (Kalyan)",
    image: "/photos/pla1.jpg",
    images: [
      "/photos/pla1.jpg",
      "/photos/pla2.jpg",
      "/photos/pla3.jpg",
      "/photos/pla4.jpg"
    ]
  },
  {
    id: "pentel-write-and-shine",
    title: "Pentel – Pentel Write & Shine",
    client: "Pentel",
    logo: "/logos/pentel.png",
    category: "Product Marketing",
    subtitle: "Pentel Write & Shine – Student Engagement Initiative",
    concept: "An interactive school engagement program designed to encourage creativity, improve writing experiences, and promote student participation through educational activities and stationery products.",
    description: "Indian Market Events & Promotion facilitated student engagement activities in schools, featuring interactive learning sessions, product demonstrations, and student recognition in collaboration with Pentel.",
    outcome: "Encouraged creativity and active student participation, introduced students to Pentel writing and stationery products, and created direct brand engagement through school-based activities.",
    highlights: [
      "Interactive learning sessions and writing experience workshops",
      "Product demonstrations and student recognition with Pentel stationery",
      "Direct school-level brand engagement across 2+ cities"
    ],
    year: "2025",
    location: "2+ Cities",
    image: "/photos/pen1.jpg",
    images: [
      "/photos/pen1.jpg",
      "/photos/pen2.jpg",
      "/photos/pen3.jpg",
      "/photos/pen4.png",
      "/photos/pen5.jpg"
    ]
  },
  {
    id: "smart-bazaar-cooking",
    title: "Smart Bazaar – Women's Culinary Showcase",
    client: "Smart Bazaar",
    logo: "/logos/bazar.png",
    category: "Competitions",
    subtitle: "Smart Bazaar – Women’s Culinary Showcase",
    concept: "A brand engagement initiative celebrating women’s culinary skills, traditional food, and local culture through an interactive experience at Smart Bazaar.",
    description: "Indian Market Events & Promotion organized an engaging in-store activation featuring a culinary showcase, highlighting homemade food and women’s participation while creating an interactive shopping experience for visitors.",
    outcome: "Encouraged customer engagement through an interactive in-store experience, showcased women’s culinary talent and traditional food culture, and enhanced Smart Bazaar’s brand visibility and customer interaction.",
    highlights: [
      "In-store culinary competition celebrating women's culinary talent",
      "Traditional food showcase connecting brand with local shoppers",
      "Interactive live cooking stations and retail customer engagement in Nagpur"
    ],
    year: "2025",
    location: "Nagpur",
    image: "/photos/bazar1.jpg",
    images: [
      "/photos/bazar1.jpg",
      "/photos/bazar2.jpg",
      "/photos/bazar3.jpg",
      "/photos/bazar4.jpg",
      "/photos/bazar5.jpg",
      "/photos/bazar6.jpg"
    ]
  },
  {
    id: "times-power-women",
    title: "The Times of India – Times Power Women",
    client: "The Times of India",
    logo: "/logos/women.png",
    category: "Corporate Events",
    subtitle: "Times Power Women 2026",
    concept: "A recognition platform celebrating women achievers, their leadership, professional accomplishments, and contributions to society across diverse fields.",
    description: "Indian Market Events & Promotion organized Times Power Women 2026 in association with Times of India and Maharashtra Times, bringing together inspiring women for a celebration of their achievements, recognition, and empowerment.",
    outcome: "Recognized and celebrated the accomplishments of women achievers, created a platform for networking and sharing inspiring journeys, and promoted women’s empowerment, leadership, and professional excellence.",
    highlights: [
      "Gala celebration honoring women achievers, leaders, and entrepreneurs",
      "Organized in association with Times of India and Maharashtra Times",
      "High-profile stage production, media coverage, and networking in Nashik"
    ],
    year: "2026",
    location: "Nashik",
    image: "/photos/women1.jpg",
    images: [
      "/photos/women1.jpg",
      "/photos/women2.jpg",
      "/photos/women3.jpg"
    ]
  },
  {
    id: "sony-liv-qoty",
    title: "Sony LIV – Quizer of the Year (QOTY)",
    client: "Sony LIV",
    logo: "/logos/liv.jpg",
    category: "Competitions",
    subtitle: "QOTY – Quiz of the Year 2023",
    concept: "An interactive educational quiz initiative designed to enhance students’ general knowledge, logical thinking, and learning engagement through competitive quiz activities.",
    description: "Indian Market Events & Promotion organized the QOTY quiz program in schools, engaging students through knowledge-based questions, interactive sessions, and participation-driven activities.",
    outcome: "Encouraged students to develop knowledge and critical-thinking skills, promoted active learning through friendly competition, and increased student participation and engagement in educational activities.",
    highlights: [
      "QOTY quiz program conducted across school campuses",
      "Knowledge-based questions and logical thinking challenges",
      "Interactive stage quiz finals and student engagement in Nashik"
    ],
    year: "2023",
    location: "Nashik",
    image: "/photos/liv1.jpg",
    images: [
      "/photos/liv1.jpg",
      "/photos/liv2.png",
      "/photos/liv3.jpg"
    ]
  },
  {
    id: "classmate-learning",
    title: "Classmate – Student Engagement & Learning",
    client: "Classmate (ITC)",
    logo: "/logos/class.png",
    category: "School Engagement Activities",
    subtitle: "Classmate – Student Engagement & Learning Initiative",
    concept: "An educational engagement program designed to encourage active learning, knowledge development, and student participation through classroom-based activities and assessments.",
    description: "Indian Market Events & Promotion conducted the Classmate initiative in schools, engaging students through interactive classroom activities, writing exercises, and participation-based learning experiences.",
    outcome: "Encouraged active learning and classroom participation, promoted writing, creativity, and knowledge development, and created direct engagement with students and educators.",
    highlights: [
      "Interactive classroom activities, writing exercises, and assessments",
      "Direct student and educator engagement across 4 schools",
      "Promoted creativity, handwriting development, and brand affinity"
    ],
    year: "2024",
    location: "4 Schools",
    image: "/photos/class1.jpg",
    images: [
      "/photos/class1.jpg",
      "/photos/class2.jpg",
      "/photos/class3.png",
      "/photos/class4.jpg",
      "/photos/class5.jpg"
    ]
  },
  {
    id: "mt-community-outreach",
    title: "Maharashtra Times – Community Outreach",
    client: "Maharashtra Times",
    logo: "/logos/maha.png",
    category: "Experiential Marketing",
    subtitle: "Maharashtra Times – Community Outreach & Brand Activation",
    description: "Indian Market Events & Promotion conducted an outdoor activation in Nashik, featuring branded promotional setups and a dedicated engagement counter to connect with local residents and promote Maharashtra Times.",
    outcome: "Increased brand visibility in high-footfall public areas, encouraged direct interaction with local residents, strengthened brand awareness, and created opportunities to connect the publication with potential readers.",
    highlights: [
      "High-footfall outdoor brand activation in Nashik",
      "Dedicated promotional counter and direct public engagement",
      "Strengthened regional publication awareness and community bonding"
    ],
    year: "2025",
    location: "Nashik",
    image: "/photos/mah1.jpg",
    images: [
      "/photos/mah1.jpg",
      "/photos/mah2.jpg",
      "/photos/mah3.jpg",
      "/photos/mah4.jpg",
      "/photos/mah5.jpg"
    ]
  },
  {
    id: "spell-bee-spellionaire",
    title: "Spell Bee – BEE SPELLIONAIRE",
    client: "Spell Bee",
    logo: "/logos/spell.jpg",
    category: "Competitions",
    subtitle: "BEE SPELLIONAIRE – Spelling Competition in Schools",
    description: "Indian Market Events & Promotion conducted a school-based activation featuring the Bee Spellionaire educational campaign. Students participated in engaging learning activities supported by promotional displays and educational books.",
    outcome: "Encouraged vocabulary development and spelling skills, promoted reading habits and interactive learning among students, and increased student engagement through an educational campaign.",
    highlights: [
      "Engaged 300+ students across 3+ schools in 3 cities",
      "Promoted vocabulary development, reading habits, and spelling proficiency",
      "Promotional displays and educational book integration"
    ],
    year: "2025",
    location: "3 Cities (3+ Schools, 300+ Students)",
    image: "/photos/spell1.jpg",
    images: [
      "/photos/spell1.jpg",
      "/photos/spell2.jpg",
      "/photos/spell3.jpg",
      "/photos/spell4.jpg",
      "/photos/spell5.jpg",
      "/photos/spell6.jpg"
    ]
  },
  {
    id: "dell-aarambh",
    title: "Dell – Dell Aarambh (ICT Skills)",
    client: "Dell",
    logo: "/logos/dellchamps.png",
    category: "School Engagement Activities",
    subtitle: "Dell Aarambh – ICT Skills for Education",
    description: "Indian Market Events & Promotion organized an educational workshop featuring presentations, demonstrations, and interactive learning sessions to help educators understand and adopt technology-enabled teaching methods.",
    outcome: "Improved awareness of digital teaching tools and ICT-based learning, encouraged technology adoption in classroom education, provided educators with practical insights into digital learning methods, and strengthened brand engagement.",
    highlights: [
      "Educational workshop for teachers on technology-enabled teaching",
      "Demonstrations of ICT-based learning tools and digital classroom methods",
      "Strengthened engagement between educators and Dell in Nashik"
    ],
    year: "2025",
    location: "Nashik",
    image: "/photos/dell1.jpg",
    images: [
      "/photos/dell1.jpg",
      "/photos/dell2.jpg",
      "/photos/dell3.jpg",
      "/photos/dell4.jpg",
      "/photos/dell5.jpg"
    ]
  },
  {
    id: "power-brands-nashik",
    title: "Times of India – Power Brands of Nashik",
    client: "The Times of India & Maharashtra Times",
    logo: "/logos/brand.png",
    category: "Award Ceremonies",
    subtitle: "Times of India – Maharashtra Excellence & Recognition Awards",
    description: "Indian Market Events & Promotion organized a prestigious award ceremony featuring keynote addresses, panel discussions, and felicitation of distinguished personalities. The event provided a professional platform for recognition, networking, and knowledge sharing.",
    outcome: "Recognized the achievements and contributions of distinguished individuals, created networking opportunities among industry leaders and professionals, and delivered a professionally managed award ceremony with stage production and guest coordination.",
    highlights: [
      "Prestigious recognition awards for leading brands and achievers in Nashik",
      "Keynote addresses, panel discussions, and formal felicitation",
      "Delivered professional stage production and guest coordination"
    ],
    year: "2025",
    location: "Nashik",
    image: "/photos/brand1.jpg",
    images: [
      "/photos/brand1.jpg",
      "/photos/brand2.jpg",
      "/photos/brand3.jpg",
      "/photos/brand4.jpg"
    ]
  },
  {
    id: "nbt-help-a-star",
    title: "Navbharat Times – Help a Star, Aage Badhayein",
    client: "Navbharat Times (NBT)",
    logo: "/logos/nbt.png",
    category: "CSR / Community Engagement",
    subtitle: "Help a Star, Aage Badhayein",
    description: "Indian Market Events & Promotion organized an event in association with Navbharat Times (NBT), featuring interactive discussions, guest speakers, and audience engagement to inspire participants and promote the initiative’s objectives.",
    outcome: "Created a platform for knowledge sharing and audience interaction, encouraged inspiration, motivation, and community participation, and strengthened brand visibility for Navbharat Times and event partners.",
    highlights: [
      "Interactive discussions and guest speakers inspiring community members",
      "Social impact initiative empowering students and underprivileged stars",
      "Stage setup, event branding, and guest coordination in Nashik"
    ],
    year: "2026",
    location: "Nashik",
    image: "/photos/nbt1.png",
    images: [
      "/photos/nbt1.png",
      "/photos/nbt2.jpg",
      "/photos/nbt3.jpg"
    ]
  },
  {
    id: "times-of-yoga",
    title: "The Times of India – The Times of Yoga",
    client: "The Times of India",
    logo: "/logos/yoga.png",
    category: "CSR / Community Engagement",
    subtitle: "The Times of Yoga – Wellness & Mindfulness Initiative",
    description: "Indian Market Events & Promotion organized The Times of Yoga in association with The Times of India, bringing together students and participants for a large-scale group yoga session in an open-air setting.",
    outcome: "Promoted awareness of yoga, fitness, and holistic well-being, encouraged community participation in healthy lifestyle practices, created an engaging wellness experience, and enhanced brand visibility.",
    highlights: [
      "Large-scale open-air group yoga session across 4+ cities",
      "Promoted fitness, mindfulness, and healthy lifestyle practices",
      "Engaged hundreds of school students, teachers, and citizens"
    ],
    year: "2026",
    location: "4+ Cities",
    image: "/photos/yoga1.jpg",
    images: [
      "/photos/yoga1.jpg",
      "/photos/yoga2.jpg",
      "/photos/yoga3.jpg",
      "/photos/yoga4.jpg",
      "/photos/yoga5.jpg",
      "/photos/yoga6.jpg"
    ]
  },
  {
    id: "akshdeep-vision",
    title: "Akshdeep – Vision on Wheels",
    client: "Akshdeep & The Times of India",
    logo: "/logos/eye.png",
    category: "CSR / Community Engagement",
    subtitle: "Vision on Wheels – Mobile Eye Care Initiative",
    description: "Indian Market Events & Promotion facilitated the Akshdeep Vision on Wheels initiative in association with The Times of India. The event featured a mobile eye-care unit, live demonstrations, and an interactive session to raise awareness about vision screening and eye health.",
    outcome: "Promoted awareness of eye health and preventive vision care, demonstrated mobile eye-screening facilities and equipment, encouraged community participation, and enhanced brand visibility for Akshdeep, DigiNetra, and The Times of India.",
    highlights: [
      "Mobile eye-care unit with live diagnostic demonstrations",
      "Preventive vision screening sessions for local community members",
      "Community healthcare activation in Nashik with Times of India"
    ],
    year: "2026",
    location: "Nashik",
    image: "/photos/eye1.jpg",
    images: [
      "/photos/eye1.jpg",
      "/photos/eye2.jpg",
      "/photos/eye3.jpg",
      "/photos/eye4.jpg",
      "/photos/eye5.jpg",
      "/photos/eye8.jpg"
    ]
  },
  {
    id: "kya-zamana-tha",
    title: "Maharashtra Times – Kya Zamana Tha",
    client: "Maharashtra Times & HDFC Bank",
    logo: "/logos/age.png",
    category: "Corporate Events",
    subtitle: "Kya Zamana Tha – A Celebration of Nostalgia",
    description: "Indian Market Events & Promotion organized Kya Zamana Tha in association with Maharashtra Times and HDFC Bank. The event featured an interactive gathering with guest speakers and audience participation, creating an engaging atmosphere for attendees to revisit cherished memories.",
    outcome: "Encouraged audience participation and intergenerational interaction, created an engaging platform for nostalgia, entertainment, and community bonding, and delivered a memorable experience through coordinated event setup and audience engagement.",
    highlights: [
      "Interactive nostalgic celebration with music, dancing, and memories",
      "Community bonding and senior citizen entertainment in Latur",
      "Delivered memorable experience with coordinated stage setup and guest care"
    ],
    year: "2026",
    location: "Latur",
    image: "/photos/age1.jpg",
    images: [
      "/photos/age1.jpg",
      "/photos/age2.jpg",
      "/photos/age3.jpg",
      "/photos/age4.jpg",
      "/photos/age5.jpg",
      "/photos/age6.jpg",
      "/photos/age7.jpg",
      "/photos/age8.jpg",
      "/photos/age9.jpg"
    ]
  }
];

export const heldProgramsList: HeldProgramItem[] = [
  { name: "Padwa Pahat", logo: "/logos/hdfc.png", projectId: "padwa-pahat-jalgaon", category: "Diwali Morning Cultural IP", clientOrOrganizer: "HDFC Bank & Maharashtra Times", highlight: "Held Yesterday at Jalgaon (Festive Treats)" },
  { name: "Cancer Awareness Program", logo: "/logos/arogya.png", projectId: "cancer-awareness-program", category: "Public Health & Cancer Awareness", clientOrOrganizer: "सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन", highlight: "Ongoing in Multiple Cities (ASHA Workers Drive)" },
  { name: "Sun Pharma CPR Program", logo: "/logos/sunpharma.png", projectId: "sun-pharma-cpr", category: "CSR Lifesaving CPR Drive", clientOrOrganizer: "Sun Pharma", highlight: "CALS CPR Training (Ongoing in Multiple Cities)" },
  { name: "HP", logo: "/logos/hp.png", projectId: "hp-minitek", category: "Corporate Technology Summit", clientOrOrganizer: "HP", highlight: "HP miniTEK Conference (25th & 27th Oct)" },
  { name: "MT Helpline", logo: "/logos/mt.png", projectId: "mt-helpline", category: "Student Merit Financial Award", clientOrOrganizer: "Maharashtra Times", highlight: "Awarding Prize Money to Top Scorers (6 Cities)" },
  { name: "MEG Scholars Academy", logo: "/logos/mega.png", projectId: "meg-scholars", category: "Creative Children Celebration", clientOrOrganizer: "MEG Scholars & MT", highlight: "My Bappa & My Colours (Mumbai)" },
  { name: "Sony YAY! Break Time", logo: "/logos/sony yay.png", projectId: "sony-yay-break-time", category: "School Engagement Activity", clientOrOrganizer: "Sony YAY!", highlight: "Fun & Values Children Engagement" },
  { name: "Icons of Education", logo: "/logos/eduaction.png", projectId: "toi-icons-education", category: "Award Ceremony for Teachers", clientOrOrganizer: "The Times of India", highlight: "The Times of India ICONS of Education 2026 (Nagpur)" },
  { name: "Icons of Healthcare", logo: "/logos/healthcare.png", projectId: "toi-icons-healthcare", category: "Award Ceremony for Doctors", clientOrOrganizer: "The Times of India", highlight: "The Times of India ICONS of Healthcare 2026 (Nashik)" },
  { name: "Planet Campus", logo: "/logos/planet.png", projectId: "mt-plant-campus", category: "Educational Awareness Seminar", clientOrOrganizer: "Maharashtra Times & Planet Campus", highlight: "Educational Awareness Seminar (2+ Cities)" },
  { name: "Pentel Write & Shine", logo: "/logos/pentel.png", projectId: "pentel-write-and-shine", category: "Product Marketing Activation", clientOrOrganizer: "Pentel", highlight: "Interactive School Learning Sessions (2+ Cities)" },
  { name: "Women Bazar", logo: "/logos/bazar.png", projectId: "smart-bazaar-cooking", category: "Women's Culinary Showcase", clientOrOrganizer: "Smart Bazaar", highlight: "Culinary Contest & Retail Engagement (Nagpur)" },
  { name: "Times Power Women", logo: "/logos/women.png", projectId: "times-power-women", category: "Women Achievers Celebration", clientOrOrganizer: "The Times of India", highlight: "Times Power Women 2026 (Nashik)" },
  { name: "Quizer of the Year", logo: "/logos/liv.jpg", projectId: "sony-liv-qoty", category: "School Quiz Competition", clientOrOrganizer: "Sony LIV", highlight: "QOTY - Quiz of the Year 2023 (Nashik)" },
  { name: "Classmate", logo: "/logos/class.png", projectId: "classmate-learning", category: "Student Learning & Engagement", clientOrOrganizer: "Classmate (ITC)", highlight: "Active Classroom Learning Across 4 Schools" },
  { name: "Maharashtra Times", logo: "/logos/maha.png", projectId: "mt-community-outreach", category: "Community Outreach & Activation", clientOrOrganizer: "Maharashtra Times", highlight: "High-Footfall Outdoor Activation (Nashik)" },
  { name: "Spell Bee", logo: "/logos/spell.jpg", projectId: "spell-bee-spellionaire", category: "Bee Spellionaire Competition", clientOrOrganizer: "Spell Bee", highlight: "300+ Students Engaged Across 3 Cities" },
  { name: "Dell Aarambh", logo: "/logos/dellchamps.png", projectId: "dell-aarambh", category: "ICT Skills for Education", clientOrOrganizer: "Dell", highlight: "Teacher Enablement Workshops (Nashik)" },
  { name: "Power Brands of Nashik", logo: "/logos/brand.png", projectId: "power-brands-nashik", category: "Maharashtra Excellence Awards", clientOrOrganizer: "The Times of India", highlight: "Maharashtra Excellence & Recognition Awards (Nashik)" },
  { name: "Help a Star, Aage Badhayein", logo: "/logos/nbt.png", projectId: "nbt-help-a-star", category: "Community Inspiration Initiative", clientOrOrganizer: "Navbharat Times (NBT)", highlight: "Motivational Platform & Audience Engagement (Nashik)" },
  { name: "The Times of Yoga", logo: "/logos/yoga.png", projectId: "times-of-yoga", category: "Wellness & Mindfulness Initiative", clientOrOrganizer: "The Times of India", highlight: "Large-Scale Group Yoga Sessions (4+ Cities)" },
  { name: "Vision on Wheels", logo: "/logos/eye.png", projectId: "akshdeep-vision", category: "Mobile Eye Care Initiative", clientOrOrganizer: "Akshdeep & Times of India", highlight: "Preventive Vision Screening On-Ground (Nashik)" },
  { name: "Kya Zamana Tha", logo: "/logos/age.png", projectId: "kya-zamana-tha", category: "Celebration of Nostalgia", clientOrOrganizer: "Maharashtra Times & HDFC Bank", highlight: "Senior Citizen Entertainment & Bonding (Latur)" },
  { name: "Google", logo: "/logos/google.jpg", category: "Technology & Digital", clientOrOrganizer: "Google" },
  { name: "Castrol", logo: "/logos/castol.png", category: "Automotive & Lubricants", clientOrOrganizer: "Castrol" },
  { name: "IPL Fanpark", logo: "/logos/ipl.png", category: "Sports & Live Entertainment", clientOrOrganizer: "IPL Fanpark" },
  { name: "Cadbury", logo: "/logos/cadbary.png", category: "FMCG & Confectionery", clientOrOrganizer: "Cadbury" },
  { name: "Colgate", logo: "/logos/cologate.png", category: "Oral Care & FMCG", clientOrOrganizer: "Colgate" },
  { name: "MuscleBlaze", logo: "/logos/mb.png", category: "Fitness & Nutrition", clientOrOrganizer: "MuscleBlaze" },
  { name: "CEAT Tyres", logo: "/logos/tyre.png", category: "Automotive & Tyres", clientOrOrganizer: "CEAT Tyres" },
  { name: "Zepto", logo: "/logos/zepto.png", category: "Quick Commerce", clientOrOrganizer: "Zepto" },
  { name: "Radio City", logo: "/logos/radio.png", category: "Broadcast & Radio", clientOrOrganizer: "Radio City" }
];
