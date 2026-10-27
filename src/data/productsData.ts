export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  applications: string[];
  features: string[];
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  bannerImage: string;
  productCount: string;
  items: ProductItem[];
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cooling-frp",
    name: "Cooling Solutions & FRP",
    shortDesc: "High-efficiency cooling towers, FRP fans, molded gratings & pultruded structural profiles.",
    iconName: "Snowflake",
    bannerImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    productCount: "12+ Products",
    items: [
      {
        id: "cooling-towers",
        name: "Industrial Cooling Towers",
        tagline: "Crossflow & Counterflow Heavy Duty Cooling Systems",
        description: "Engineered for maximum thermal dissipation in harsh Middle Eastern climates. Built with corrosion-resistant FRP casings and non-clogging distribution nozzles.",
        specs: ["Flow Rates: 50 to 5,000+ m³/h", "Casing: Premium Isophthalic FRP", "Temperature Resistance: Up to 85°C", "Certified: CTI STD-201 Standards"],
        applications: ["Petrochemical Refineries", "Power Generation Plants", "District Cooling Centers", "Fertilizer Manufacturing"],
        features: ["Low drift loss (<0.005%)", "Energy-saving aerofoil fans", "Minimal biological fouling"],
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
        category: "cooling-frp"
      },
      {
        id: "frp-fans",
        name: "Heavy-Duty FRP Axial Fans",
        tagline: "Aerodynamically Contoured Glass-Reinforced Blades",
        description: "Optimized blade pitch for highest static efficiency and silent airflow. Designed to resist chemical fumes, high humidity, and aggressive ambient dust.",
        specs: ["Diameter: 1.2m to 10m", "Hub: Cast Aluminum / Epoxy coated steel", "Balance: Dynamic ISO 1940 G2.5"],
        applications: ["Induced Draft Towers", "Air-cooled Heat Exchangers", "Ventilation Stacks"],
        features: ["Up to 30% power savings", "Corrosion and UV proof", "Adjustable pitch on site"],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        category: "cooling-frp"
      },
      {
        id: "frp-gratings",
        name: "FRP Molded & Pultruded Gratings",
        tagline: "Non-Conductive, Anti-Slip Industrial Flooring",
        description: "Superior strength-to-weight ratio alternative to galvanized steel. High resistance to acid, alkali, and marine atmospheres across KSA offshore & plant walkways.",
        specs: ["Mesh Size: 38x38mm / 50x50mm", "Resin Type: Vinyl Ester / Isophthalic", "Fire Rating: ASTM E-84 Class 1"],
        applications: ["Offshore Platforms", "Chemical Plant Walkways", "Trench Covers & Ramps"],
        features: ["Bi-directional load bearing", "Anti-skid quartz grit surface", "Zero maintenance required"],
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
        category: "cooling-frp"
      }
    ]
  },
  {
    id: "water-treatment",
    name: "Water Treatment Systems",
    shortDesc: "Industrial RO plants, demineralization, chemical dosing, and effluent recycling solutions.",
    iconName: "Droplets",
    bannerImage: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80",
    productCount: "8+ Systems",
    items: [
      {
        id: "ro-systems",
        name: "Industrial Reverse Osmosis (RO) Units",
        tagline: "High-Recovery Brackish & Seawater Desalination",
        description: "Custom turnkey RO skids providing process-grade pure water for boiler feed, cooling makeup, and heavy industrial consumption.",
        specs: ["Capacity: 10 to 10,000 m³/day", "TDS Handling: Up to 45,000 ppm", "Membranes: Dow FilmTec / Hydranautics"],
        applications: ["Refinery Boiler Feed", "Desalination Plants", "Food & Beverage Processing", "Municipal Reuse"],
        features: ["Fully automated PLC/SCADA integration", "Energy recovery turbines", "CIP clean-in-place skid included"],
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        category: "water-treatment"
      },
      {
        id: "chemical-dosing",
        name: "Automated Chemical Dosing Skids",
        tagline: "Precise Metering for Scale & Corrosion Prevention",
        description: "Multi-head dosing systems featuring smart digital flow controllers and hazardous-area certified metering pumps.",
        specs: ["Dosing Rate: 0.1 to 1,200 L/h", "Pressure: Up to 50 bar", "Wetted Parts: PTFE / PVDF / Hastelloy"],
        applications: ["Cooling Water Circuits", "Boiler Treatment", "Wastewater Neutralization"],
        features: ["Proportional pH/ORP tracking", "Leak-detection alarms", "Dual standby pump redundancy"],
        image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80",
        category: "water-treatment"
      }
    ]
  },
  {
    id: "chemicals",
    name: "Industrial Chemicals",
    shortDesc: "Specialty scale inhibitors, biocides, coagulants, and sustainable process chemicals.",
    iconName: "FlaskConical",
    bannerImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    productCount: "15+ Chemicals",
    items: [
      {
        id: "scale-inhibitors",
        name: "Broad-Spectrum Scale & Corrosion Inhibitors",
        tagline: "Advanced Phosphonate & Polymer Formulations",
        description: "Protects multi-metal cooling loops and steam boilers from calcium carbonate, sulfate fouling, and localized pitting.",
        specs: ["Form: Clear liquid", "Active Content: 40-50%", "Packaging: 200L drums / 1000L IBC totes"],
        applications: ["Open Recirculating Cooling Systems", "High-Pressure Boilers", "Geothermal Lines"],
        features: ["Thermal stability up to 220°C", "Phosphate-free eco-variants", "Compatible with chlorine biocides"],
        image: "https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?auto=format&fit=crop&w=800&q=80",
        category: "chemicals"
      },
      {
        id: "biocides",
        name: "Oxidizing & Non-Oxidizing Biocides",
        tagline: "Eradication of Biofilms & Legionella Strains",
        description: "Rapid kill efficacy against algae, fungi, and sulfate-reducing bacteria (SRB) common in Middle East process circuits.",
        specs: ["Efficacy: 99.99% microbial clearance", "Approvals: SASO & KSA Environmental certified"],
        applications: ["District Cooling Loops", "Oilfield Injection Water", "Paper & Pulp Mills"],
        features: ["Low foaming chemistry", "Biodegradable breakdown products", "Fast penetrating action"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        category: "chemicals"
      }
    ]
  },
  {
    id: "mechanical",
    name: "Mechanical & Precision Alloys",
    shortDesc: "High-pressure industrial valves, heavy slurry pumps, flanges, and specialty corrosion alloys.",
    iconName: "Wrench",
    bannerImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    productCount: "25+ Components",
    items: [
      {
        id: "valves-actuators",
        name: "Process Valves & Actuation Systems",
        tagline: "Gate, Globe, Check, Ball & Butterfly Valves",
        description: "Engineered to API 6D and ASME B16.34 standards with pneumatic and electric quarter-turn actuators for harsh duty cycles.",
        specs: ["Pressure: Class 150 to 2500", "Sizes: 1/2\" to 48\"", "Materials: WCB, CF8M, Super Duplex, Inconel"],
        applications: ["Oil & Gas Gathering", "Petrochemical Lines", "Steam Distribution", "Offshore Terminals"],
        features: ["Fire-safe API 607 compliant", "Zero-leakage fugitive emission gland seals", "Smart positioner feedback"],
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
        category: "mechanical"
      },
      {
        id: "pipe-fittings",
        name: "Alloy Pipe Fittings & Flanges",
        tagline: "Seamless Butt-Weld & Forged High-Pressure Fittings",
        description: "Fully trace-certified raw materials with Mill Test Certificates according to EN 10204 3.1 standards.",
        specs: ["Standards: ASTM A403, A815, B366", "Grades: SS316L, 904L, Hastelloy C276, Monel 400"],
        applications: ["Acidic Refining Streams", "Marine Subsea Lines", "Desalination Brine Headers"],
        features: ["100% PMI tested", "Strict ultrasonic examination", "Superior pitting resistance (PREN > 42)"],
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
        category: "mechanical"
      }
    ]
  },
  {
    id: "instrumentation",
    name: "Instrumentation & Electrical",
    shortDesc: "Digital process transmitters, ultrasonic flow meters, telemetry sensors, and control panels.",
    iconName: "Gauge",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    productCount: "18+ Instruments",
    items: [
      {
        id: "transmitters",
        name: "Smart Differential Pressure & Level Transmitters",
        tagline: "HART / Foundation Fieldbus Protocol Enabled",
        description: "Ultra-precise pressure measurement with piezoresistive sensors and diaphragm seals for aggressive media.",
        specs: ["Accuracy: ±0.04% of calibrated span", "Certification: ATEX / IECEx Zone 0/1", "Protection: IP67 / NEMA 4X"],
        applications: ["Tank Level Gauging", "Pipeline Pressure Monitoring", "Steam Flow Measurement"],
        features: ["Backlit LCD graphic display", "Remote zero/span calibration", "SIL 2/3 functional safety rated"],
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        category: "instrumentation"
      },
      {
        id: "flow-meters",
        name: "Electromagnetic & Ultrasonic Flow Meters",
        tagline: "Obstructionless High-Precision Liquid Measurement",
        description: "Ideal for conductive slurries, raw seawater, cooling water, and high-purity chemical liquids with zero head-loss.",
        specs: ["Pipe Sizes: DN15 to DN2000", "Liner: Hard Rubber / PTFE / PFA", "Accuracy: ±0.2%"],
        applications: ["Water Distribution Networks", "Chemical Blending", "Effluent Monitoring"],
        features: ["Bidirectional flow measurement", "Integrated datalogging", "Modbus / 4-20mA output"],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        category: "instrumentation"
      }
    ]
  },
  {
    id: "safety-ppe",
    name: "Safety & PPE Equipments",
    shortDesc: "Certified hazardous environment safety gear, multi-gas detectors, and personal protection equipment.",
    iconName: "ShieldCheck",
    bannerImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
    productCount: "14+ Equipment Lines",
    items: [
      {
        id: "gas-detection",
        name: "Wireless Multi-Gas Detection Monitors",
        tagline: "Real-Time LEL, H2S, CO, and O2 Monitoring",
        description: "Essential for confined space entry in petrochemical refineries, storage tanks, and municipal wastewater vaults.",
        specs: ["Sensors: 4-to-6 Gas Simultaneous", "Battery: 18-hour continuous run", "Rating: Class I, Div 1, Groups A, B, C, D"],
        applications: ["Refinery Turnarounds", "Confined Space Entry", "Hazmat Response Teams"],
        features: ["95dB audible & ultra-bright strobe alarm", "Man-down motion sensor", "Cloud telemetry sync"],
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
        category: "safety-ppe"
      },
      {
        id: "industrial-ppe",
        name: "Flame-Resistant Workwear & Arc Flash Suits",
        tagline: "NFPA 2112 & NFPA 70E Certified Protection",
        description: "Engineered breathable Nomex / Kevlar blend fabric keeping workers safe from flash fires and electrical arc blasts.",
        specs: ["Arc Rating: ATPV 8 to 40+ cal/cm²", "Standards: EN ISO 11612, SASO certified", "Sizes: S to 5XL"],
        applications: ["Substations & Switchgear", "Oil & Gas Drilling Rigs", "Smelters & Foundries"],
        features: ["Triple stitched stress seams", "High-visibility reflective striping", "Breathable comfort weave"],
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
        category: "safety-ppe"
      }
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "Al Bawani", logoSrc: "/img/albawani.jpg", tagline: "Leading General Contracting" },
  { name: "Ma'aden", logoSrc: "/img/logo-01.png", tagline: "Saudi Arabian Mining Company" },
  { name: "Industrial Partner 1", logoSrc: "/img/logo-04.png", tagline: "Industrial & Manufacturing" },
  { name: "Industrial Partner 2", logoSrc: "/img/logo-05.png", tagline: "Engineering & Operations" },
  { name: "Industrial Partner 3", logoSrc: "/img/logo-08.png", tagline: "Power & Infrastructure" },
  { name: "Industrial Partner 4", logoSrc: "/img/logo-10.png", tagline: "Water & Utilities" },
  { name: "Industrial Partner 5", logoSrc: "/img/logo-11.png", tagline: "Petrochemicals & Logistics" },
  { name: "Industrial Partner 6", logoSrc: "/img/logo-12.png", tagline: "Refining & Chemical Plants" },
  { name: "Industrial Partner 7", logoSrc: "/img/logo-13.png", tagline: "Heavy Manufacturing" },
  { name: "NEOM", logoSrc: "/img/neom.webp", tagline: "The Future of Sustainable Industry" },
  { name: "Saudi Binladin Group", logoSrc: "/img/saudi-binladin-group.png", tagline: "Kingdom Mega Infrastructure" },
];

export const STATS = [
  { value: "500+", label: "Industrial Clients in KSA", suffix: "" },
  { value: "98.8%", label: "On-Time Dispatch Rate", suffix: "" },
  { value: "1,200+", label: "Engineered Products Delivered", suffix: "" },
  { value: "15+", label: "Years of Engineering Excellence", suffix: "" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "Rigorous Quality Assurance",
    description: "Every valve, chemical batch, and FRP assembly comes with certified Mill Test Certificates (MTC) adhering to SASO, ASTM, and ISO 9001 standards."
  },
  {
    icon: "Truck",
    title: "Prompt Nationwide Delivery",
    description: "Strategic fulfillment hubs across Riyadh, Jeddah, Dammam, and Jubail ensuring minimal industrial downtime and rapid turnaround times."
  },
  {
    icon: "Handshake",
    title: "Strong Tier-1 Alliances",
    description: "Direct partnerships with international OEM manufacturers enable unbeatable factory pricing and prioritized lead times for major KSA projects."
  },
  {
    icon: "Cpu",
    title: "Custom Engineering Support",
    description: "Our in-house engineers provide sizing calculations, 3D CAD modeling, and thermal performance simulation tailored to client facility specs."
  },
  {
    icon: "Headphones",
    title: "Dedicated Technical Support",
    description: "24/7 technical assistance and field engineering support for commissioning, calibration, water testing, and routine maintenance."
  },
  {
    icon: "Award",
    title: "Vision 2030 Local Value",
    description: "Committed to the Kingdom's Vision 2030 industrial localization (IKTVA) initiatives, empowering Saudi supply chain resilience."
  }
];
