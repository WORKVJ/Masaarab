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

export interface DepartmentMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface Category {
  id: string;
  name: string;
  departmentCode: string;
  tagline: string;
  shortDesc: string;
  iconName: string;
  bannerImage: string;
  productCount: string;
  leadStandards: string[];
  keyCapabilities: string[];
  metrics: DepartmentMetric[];
  fulfillmentLocation: string;
  items: ProductItem[];
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cooling-solution",
    name: "Cooling solution",
    departmentCode: "DEPT-01 / THERMAL",
    tagline: "Industrial Evaporative Cooling Towers, FRP Fans & Structural Pultrusion",
    shortDesc: "High-efficiency crossflow and counterflow cooling towers, heavy-duty aerofoil FRP axial fans, and non-conductive pultruded gratings engineered for high ambient Saudi heat and corrosive marine atmospheres.",
    iconName: "Snowflake",
    bannerImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    productCount: "4 Core Lines",
    leadStandards: ["CTI STD-201 Certified", "ASTM D4092", "SASO Approved", "ISO 9001:2015"],
    fulfillmentLocation: "Riyadh & Jubail Industrial Central Hubs",
    metrics: [
      { label: "Flow Capacity", value: "50 to 5,000+ m³/h", detail: "Custom multi-cell configurations" },
      { label: "Thermal Delta-T", value: "Up to 35°C ΔT", detail: "Optimized wet-bulb approach" },
      { label: "Energy Savings", value: "Up to 30%", detail: "Aerodynamic FRP aerofoil blades" },
      { label: "Design Lifespan", value: "25+ Years", detail: "Isophthalic & vinyl ester resins" }
    ],
    keyCapabilities: [
      "CTI STD-201 thermal performance certified cooling towers for petrochemicals and district cooling",
      "Corrosion-resistant FRP casings and non-clogging pressurized distribution nozzles",
      "Dynamically balanced aerofoil axial fan assemblies compliant with ISO 1940 G2.5",
      "ASTM E-84 Class 1 fire-rated anti-slip quartz-grit molded & pultruded industrial gratings"
    ],
    items: [
      {
        id: "cooling-towers",
        name: "Industrial Cooling Towers",
        tagline: "Crossflow & Counterflow Heavy Duty Cooling Systems",
        description: "Engineered for maximum thermal dissipation in harsh Middle Eastern climates (ambient temperatures reaching 55°C). Built with premium corrosion-resistant isophthalic FRP casings and non-clogging distribution nozzles.",
        specs: [
          "Flow Rates: 50 to 5,000+ m³/h",
          "Casing: Premium Isophthalic FRP",
          "Temperature Resistance: Up to 85°C",
          "Standard: CTI STD-201 & SASO Compliant"
        ],
        applications: [
          "Petrochemical Refineries",
          "Power Generation Plants",
          "District Cooling Centers",
          "Fertilizer Manufacturing"
        ],
        features: [
          "Ultra-low drift loss (<0.005%) preserving water makeup",
          "Aerofoil high-efficiency energy-saving fans",
          "Non-clogging target nozzles for uniform water distribution"
        ],
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
        category: "cooling-solution"
      },
      {
        id: "frp-fans",
        name: "Heavy-Duty FRP Axial Fans",
        tagline: "Aerodynamically Contoured Glass-Reinforced Blades",
        description: "Optimized blade pitch for highest static pressure and silent airflow. Designed to resist aggressive chemical fumes, high humidity, and abrasive ambient desert sandstorms.",
        specs: [
          "Diameter: 1.2m to 10.0m",
          "Hub Material: Cast Aluminum / Epoxy Coated Steel",
          "Balancing: Dynamic ISO 1940 G2.5",
          "Blade Profile: NACA Aerofoil High-Lift Design"
        ],
        applications: [
          "Induced Draft Cooling Towers",
          "Air-Cooled Heat Exchangers (ACHE)",
          "Ventilation & Gas Stacks"
        ],
        features: [
          "Delivers up to 30% electrical power savings",
          "100% UV resistant and immune to chemical corrosion",
          "Adjustable pitch blades for precise airflow calibration"
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        category: "cooling-solution"
      },
      {
        id: "frp-gratings",
        name: "FRP Molded & Pultruded Gratings",
        tagline: "Non-Conductive, Anti-Slip Industrial Flooring & Walkways",
        description: "Superior strength-to-weight ratio alternative to galvanized steel. High resistance to acids, alkalis, and marine atmospheres across KSA offshore platforms, chemical plants, and cooling tower access platforms.",
        specs: [
          "Mesh Pattern: 38x38mm / 50x50mm",
          "Resin Matrix: Vinyl Ester / Isophthalic Polyester",
          "Fire Retardance: ASTM E-84 Class 1 (Flame Spread < 25)",
          "Surface Finish: Anti-Skid Quartz Grit Embedded"
        ],
        applications: [
          "Offshore Oil & Gas Rigs",
          "Chemical Plant Walkways & Catwalks",
          "Trench Covers & Cooling Tower Decks"
        ],
        features: [
          "Bi-directional structural load-bearing capacity",
          "Zero electrical and thermal conductivity for safety",
          "Virtually maintenance-free with 25+ year design lifespan"
        ],
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
        category: "cooling-solution"
      },
      {
        id: "drift-eliminators",
        name: "High-Efficiency Drift Eliminators & PVC Fills",
        tagline: "Cellular Film Fills & Low-Loss Water Recovery Modules",
        description: "High-performance cellular drift eliminator packs engineered to capture airborne droplets from discharging airstreams, reducing cooling water consumption and chemical loss.",
        specs: [
          "Drift Loss: <0.005% of circulating water rate",
          "Fill Material: Virgin Rigid PVC / Polypropylene (PP)",
          "Operating Temp: Up to 65°C (PVC) / 85°C (PP)",
          "Module Thickness: 130mm to 150mm"
        ],
        applications: [
          "Crossflow & Counterflow Towers",
          "Evaporative Condensers",
          "Scrubbers & Air Washers"
        ],
        features: [
          "Substantially reduces makeup water volume & biological mist",
          "UV-stabilized engineered thermoplastic construction",
          "Snap-fit modular design for rapid maintenance turnarounds"
        ],
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        category: "cooling-solution"
      }
    ]
  },
  {
    id: "chemical-solution",
    name: "Chemical solution",
    departmentCode: "DEPT-02 / CHEMICAL",
    tagline: "Advanced Specialty Water Treatment & Process Chemistry Formulations",
    shortDesc: "Specialty scale inhibitors, broad-spectrum biocides, industrial coagulants, and reverse osmosis membrane cleaners formulated to protect critical heat exchangers, boilers, and water loops.",
    iconName: "FlaskConical",
    bannerImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    productCount: "4 Core Lines",
    leadStandards: ["SASO Certified", "NSF/ANSI Standard 60", "KSA Environmental Agency", "ISO 14001:2015"],
    fulfillmentLocation: "Dammam & Jeddah Chemical Distribution Terminals",
    metrics: [
      { label: "Microbial Clearance", value: "99.99% Kill Rate", detail: "Eradicates biofilms & Legionella" },
      { label: "Thermal Stability", value: "Up to 220°C", detail: "High-pressure boiler & loop rating" },
      { label: "Eco Variant", value: "Phosphate-Free", detail: "Compliant with KSA environmental rules" },
      { label: "Batch Purity", value: "99.8% Assay", detail: "With certified Certificate of Analysis" }
    ],
    keyCapabilities: [
      "Advanced phosphonate and polymeric scale inhibitors halting calcium carbonate and sulfate fouling",
      "Dual-action oxidizing and non-oxidizing biocides eradicating microbial slime and SRB bacteria",
      "High-charge organic coagulants and flocculants accelerating sludge dewatering and clarification",
      "Turnkey RO antiscalants and acidic/alkaline CIP chemicals maximizing membrane recovery"
    ],
    items: [
      {
        id: "scale-inhibitors",
        name: "Broad-Spectrum Scale & Corrosion Inhibitors",
        tagline: "Advanced Phosphonate & Polymeric Formulations",
        description: "Multi-metal protection for cooling water loops, boilers, and heat exchangers. Prevents hard scale crystallization (CaCO3, CaSO4, BaSO4) and neutralizes pitting corrosion on carbon steel, copper, and stainless alloys.",
        specs: [
          "Physical Form: Clear Amber Liquid",
          "Active Content: 40% - 50% Active Polymer",
          "Thermal Limit: Stable up to 220°C",
          "Packaging: 200L Poly Drums / 1,000L IBC Totes"
        ],
        applications: [
          "Open Recirculating Cooling Circuits",
          "High-Pressure Steam Boilers",
          "Geothermal & Desalination Brine Headers"
        ],
        features: [
          "Effective at low dosage rates (5 - 30 ppm)",
          "Eco-friendly phosphate-free variants available",
          "High halogen stability in chlorinated cooling systems"
        ],
        image: "https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?auto=format&fit=crop&w=800&q=80",
        category: "chemical-solution"
      },
      {
        id: "biocides",
        name: "Oxidizing & Non-Oxidizing Industrial Biocides",
        tagline: "Eradication of Biofilms & Legionella Pneumophila Strains",
        description: "Fast-acting microbicides designed to penetrate dense sessile biofilms and eliminate sulfate-reducing bacteria (SRB), algae, and fungi common in Middle Eastern warm cooling circuits.",
        specs: [
          "Efficacy: 99.99% microbial eradication",
          "Regulatory: SASO & KSA Environmental Protection certified",
          "Formulation: Isothiazolinone, Glutaraldehyde & DBNPA",
          "pH Effective Range: 6.0 to 9.5"
        ],
        applications: [
          "District Cooling Networks",
          "Oilfield Water Injection",
          "Industrial Effluent & Recycled Water Skids"
        ],
        features: [
          "Low-foaming non-corrosive chemical chemistry",
          "Biodegradable breakdown products protecting discharge points",
          "Rapid contact kill prevents biological corrosion under deposit"
        ],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        category: "chemical-solution"
      },
      {
        id: "coagulants-flocculants",
        name: "Industrial Coagulants & Polymer Flocculants",
        tagline: "Rapid Clarification & High-Charge Sludge Dewatering",
        description: "Poly-aluminum chloride (PAC), coagulant blends, and high-molecular-weight cationic/anionic polyacrylamides engineered for solid-liquid separation in heavy industrial wastewater and raw water clarification.",
        specs: [
          "Types: Cationic, Anionic & Non-Ionic Polyelectrolytes",
          "Molecular Weight: Ultra-High (12 to 25 Million Da)",
          "Turbidity Reduction: < 1.0 NTU effluent quality",
          "Packaging: 25kg moisture-proof bags / 1000L totes"
        ],
        applications: [
          "Refinery Effluent Treatment Plants (ETP)",
          "Mining Slurry Dewatering",
          "Municipal & Industrial Water Clarifiers"
        ],
        features: [
          "Forms rapid, dense flocs that settle up to 4x faster",
          "Minimizes chemical sludge generation volume",
          "Effective across wide pH variations"
        ],
        image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80",
        category: "chemical-solution"
      },
      {
        id: "ro-membrane-chemicals",
        name: "Turnkey RO Membrane Antiscalants & CIP Cleaners",
        tagline: "High-Recovery Desalination & Silica Control Chemistry",
        description: "Specialized reverse osmosis antiscalants engineered for high-salinity Arabian Gulf seawater and brackish groundwater, controlling colloidal silica and prolonging membrane runtime between CIP cleanings.",
        specs: [
          "Silica Dispersion: Up to 250 ppm SiO2",
          "Certifications: NSF/ANSI Standard 60 Drinking Water Approval",
          "Recovery Booster: Increases recovery rate to 85%+",
          "Compatible Membranes: Dow FilmTec, Hydranautics, Toray"
        ],
        applications: [
          "SWRO Desalination Plants",
          "Boiler Makeup Demineralization",
          "Zero Liquid Discharge (ZLD) Systems"
        ],
        features: [
          "Eliminates need for hazardous acid dosing in many feeds",
          "Acidic cleaners remove metal hydroxides and carbonates",
          "Alkaline cleaners dissolve organic foulants and biological slime"
        ],
        image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
        category: "chemical-solution"
      }
    ]
  },
  {
    id: "safety-solution",
    name: "Safety solution",
    departmentCode: "DEPT-03 / LIFE SAFETY",
    tagline: "Certified Hazardous Environment PPE, Gas Detection & Emergency Systems",
    shortDesc: "Complete industrial workforce protection systems certified to NFPA, ATEX, and OSHA standards, including wireless multi-gas detectors, arc flash suits, emergency deluge showers, and SCBA breathing systems.",
    iconName: "ShieldCheck",
    bannerImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
    productCount: "4 Core Lines",
    leadStandards: ["NFPA 2112 / NFPA 70E", "ATEX / IECEx Zone 0/1", "ANSI Z358.1 Compliant", "EN ISO 11612"],
    fulfillmentLocation: "Riyadh, Dammam & Yanbu Safety Fulfillment Centers",
    metrics: [
      { label: "Gas Detection", value: "4-to-6 Gas Sync", detail: "Real-time wireless telemetry" },
      { label: "Arc Flash Rating", value: "Up to 40+ cal/cm²", detail: "NFPA 70E Category 4 tested" },
      { label: "Emergency Deluge", value: "20 GPM / 15 Min", detail: "ANSI Z358.1 solar-shielded" },
      { label: "Breathing Air", value: "300 Bar Composite", detail: "EN 137 Type 2 SCBA packs" }
    ],
    keyCapabilities: [
      "Real-time multi-gas detection with wireless LEL, H2S, CO, and O2 telemetry and man-down alarms",
      "NFPA 2112 & 70E certified flame-resistant workwear and 40 cal arc flash protective suits",
      "ANSI Z358.1 freeze-protected and solar-shielded safety showers and emergency eyewashes",
      "Industrial positive-pressure SCBA escape systems and certified fall arrest safety rigging"
    ],
    items: [
      {
        id: "gas-detection",
        name: "Wireless Multi-Gas Detection Monitors",
        tagline: "Real-Time LEL, H2S, CO, and O2 Confined Space Monitoring",
        description: "Essential for confined space entry in petrochemical refineries, storage tanks, and municipal wastewater vaults. Features wireless mesh telemetry, automated datalogging, and loud strobe alarms.",
        specs: [
          "Sensors: 4-to-6 Gas Simultaneous (LEL, H2S, CO, O2, SO2)",
          "Battery Life: 18-hour continuous runtime",
          "Hazardous Rating: ATEX / IECEx Zone 0, Class I Div 1",
          "Ingress Protection: IP68 Water & Dust Resistant"
        ],
        applications: [
          "Refinery Turnaround Operations",
          "Confined Space Vessel Entry",
          "Hazmat Emergency Response Teams"
        ],
        features: [
          "Ultra-bright 360-degree LED visual strobe & 95dB audible horn",
          "Built-in man-down motion sensor with remote panic alert",
          "Real-time cloud telemetry synchronization for safety directors"
        ],
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
        category: "safety-solution"
      },
      {
        id: "industrial-ppe",
        name: "Flame-Resistant Workwear & Arc Flash Suits",
        tagline: "NFPA 2112 & NFPA 70E Certified Multi-Hazard Protection",
        description: "Engineered Nomex / Kevlar blend fabric keeping electrical and petrochemical workers safe from high-energy arc flash explosions and flash fires. Ergonomically tailored for breathable comfort in Saudi heat.",
        specs: [
          "Arc Rating: ATPV 8 to 40+ cal/cm² (CAT 2 to CAT 4)",
          "Standards: NFPA 2112, NFPA 70E, ASTM F1506, SASO certified",
          "Available Sizes: S to 5XL with customized corporate embroidery",
          "Weight: Lightweight 6.5 oz/yd² breathable weave"
        ],
        applications: [
          "High-Voltage Substations & Switchgear",
          "Oil & Gas Drilling Rigs & Flow Stations",
          "Smelters, Foundries & Petrochemical Plants"
        ],
        features: [
          "Triple-stitched Kevlar stress seams prevent seam failure",
          "3M Scotchlite flame-resistant high-visibility reflective striping",
          "Inherently flame-resistant fabric that never washes or wears out"
        ],
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
        category: "safety-solution"
      },
      {
        id: "emergency-showers",
        name: "Emergency Eye Wash & Safety Deluge Showers",
        tagline: "ANSI Z358.1 Compliant Solar-Shielded Emergency Stations",
        description: "Heavy-duty stainless steel combination shower and eye/face wash stations designed for aggressive outdoor industrial sites. Includes insulated thermal jackets and solar radiation shields to prevent water scalding.",
        specs: [
          "Flow Rate: 20 GPM (Shower) / 3 GPM (Eye Wash) at 30 PSI",
          "Piping Material: Grade 316 Stainless Steel / Schedule 40",
          "Activation: Stainless Steel Pull Rod & Foot Treadle Pedal",
          "Standard: ANSI Z358.1 & EN 15154-1/2 Certified"
        ],
        applications: [
          "Chemical Storage & Unloading Bays",
          "Acid & Caustic Dosing Facilities",
          "Battery Rooms & Petrochemical Terminals"
        ],
        features: [
          "Solar-shielded header tanks preventing scorching water in summer",
          "High-visibility safety yellow epoxy coating and hazard signage",
          "Dual aerated spray heads with flip-top protective dust covers"
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        category: "safety-solution"
      },
      {
        id: "scba-fall-arrest",
        name: "Self-Contained Breathing Apparatus (SCBA) & Fall Rigging",
        tagline: "Positive Pressure Air Packs & Heavy Industrial Fall Protection",
        description: "Certified respiratory life-support systems with 300-bar carbon composite cylinders, paired with full-body safety harnesses, shock-absorbing lanyards, and self-retracting lifelines for working at heights.",
        specs: [
          "Cylinder: 6.8L / 300 Bar Carbon Composite (45-min duration)",
          "Standards: EN 137 Type 2, NIOSH Approved, OSHA 1910.134",
          "Harness Rating: ANSI Z359.11 420-lb capacity",
          "Facepiece: Panoramic Anti-Fog Polycarbonate Visor"
        ],
        applications: [
          "Hazardous H2S Sour Gas Exploration",
          "Tower Climbing & Structural Maintenance",
          "Industrial Fire Brigades & Rescue Teams"
        ],
        features: [
          "Ergonomic padded backplate distributing weight to hips",
          "Integrated mechanical pneumatic whistle low-pressure warning",
          "Dual-point dorsal and sternal D-rings with quick-connect buckles"
        ],
        image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        category: "safety-solution"
      }
    ]
  },
  {
    id: "mro-solutions",
    name: "MRO Solutions",
    departmentCode: "DEPT-04 / MRO",
    tagline: "Maintenance, Repair & Operations: Process Valves, Exotic Alloys, Pumps & Telemetry",
    shortDesc: "Turnkey industrial MRO solutions comprising API 6D process valves, high-pressure alloy pipe fittings, heavy-duty slurry pumps, and precision digital instrumentation with full Mill Test Certificates.",
    iconName: "Wrench",
    bannerImage: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80",
    productCount: "4 Core Lines",
    leadStandards: ["API 6D & API 607", "ASME B16.34 / B16.5", "EN 10204 3.1 MTC", "ATEX / SIL 2/3"],
    fulfillmentLocation: "Al Khobar, Jubail & Yanbu Fast-Track Warehouses",
    metrics: [
      { label: "Pressure Class", value: "Class 150 to 2500", detail: "ANSI / ASME high-pressure ratings" },
      { label: "Nominal Sizes", value: "1/2\" to 48\" DN", detail: "Comprehensive dimensional range" },
      { label: "Pitting Resistance", value: "PREN > 42", detail: "Super Duplex & Inconel grades" },
      { label: "MTC Guarantee", value: "100% Traceable", detail: "Certified EN 10204 3.1 & PMI" }
    ],
    keyCapabilities: [
      "API 6D process valves (gate, globe, check, ball, butterfly) with pneumatic/electric automated actuation",
      "Seamless butt-weld fittings and forged flanges in SS316L, Duplex, Inconel, and Monel alloys",
      "Severe-duty centrifugal slurry and process chemical pumps with mechanical cartridge seal systems",
      "Smart digital pressure transmitters and ultrasonic flow meters enabled with HART and Modbus protocols"
    ],
    items: [
      {
        id: "valves-actuators",
        name: "Process Valves & Actuation Systems",
        tagline: "Gate, Globe, Check, Ball & High-Performance Butterfly Valves",
        description: "Engineered to API 6D and ASME B16.34 standards with pneumatic rack-and-pinion and electric quarter-turn actuators for harsh continuous duty cycles in oil, gas, steam, and chemical pipelines.",
        specs: [
          "Pressure Classes: ASME Class 150 to 2500",
          "Sizes: 1/2\" to 48\" (DN15 to DN1200)",
          "Body Metallurgy: WCB, CF8M, Super Duplex, Inconel 625",
          "Fire Safety: Certified to API 607 / ISO 10497"
        ],
        applications: [
          "Oil & Gas Wellhead Gathering",
          "Petrochemical Refineries & Cracking Units",
          "Steam Distribution & High-Pressure Headers",
          "Offshore Marine Pipelines"
        ],
        features: [
          "Fugitive emission gland seals compliant with ISO 15848-1",
          "Zero-leakage bi-directional bubble-tight shutoff",
          "Smart positioner feedback supporting 4-20mA & Foundation Fieldbus"
        ],
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
        category: "mro-solutions"
      },
      {
        id: "pipe-fittings",
        name: "Alloy Pipe Fittings & High-Pressure Flanges",
        tagline: "Seamless Butt-Weld & Forged High-Pressure Fittings",
        description: "Fully trace-certified raw materials with Mill Test Certificates according to EN 10204 3.1 standards. Complete inventory of elbows, tees, reducers, weld-neck, blind, and slip-on flanges.",
        specs: [
          "Standards: ASTM A403, A815, B366, ASME B16.9 / B16.5",
          "Alloy Grades: SS316L, 904L, Super Duplex 2507, Hastelloy C276, Monel 400",
          "Schedule: SCH 10S to SCH XXS",
          "Testing: 100% Positive Material Identification (PMI) & Ultrasonic"
        ],
        applications: [
          "Acidic Refining Streams & Alkylation",
          "Marine Subsea Piping & Offshore Topsides",
          "Desalination High-Salinity Brine Discharge"
        ],
        features: [
          "Superior resistance to chloride stress corrosion cracking (PREN > 42)",
          "Precision CNC machined weld bevels for automated orbital welding",
          "Full raw material heat traceability stamped on each component"
        ],
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
        category: "mro-solutions"
      },
      {
        id: "pumps-rotating",
        name: "Heavy-Duty Slurry & Chemical Process Pumps",
        tagline: "Centrifugal & Positive Displacement Severe Service Pumps",
        description: "Built for transferring aggressive slurries, abrasive lime milk, high-viscosity chemicals, and cooling circulation water. Equipped with heavy-duty cast iron / high-chrome wet ends and cartridge mechanical seals.",
        specs: [
          "Discharge Size: 25mm to 450mm (1\" to 18\")",
          "Flow Rate: Up to 4,000 m³/h",
          "Head: Up to 120 meters",
          "Design Standard: API 610 / ISO 5199 Compliant"
        ],
        applications: [
          "Mineral Processing & Tailings Slurry",
          "Chemical Plant Caustic & Acid Transfer",
          "Cooling Water & Auxiliary Condensate"
        ],
        features: [
          "Replaceable high-chrome (27% Cr) wear-resistant liners",
          "Heavy-duty grease-lubricated oversized bearing assemblies",
          "Cartridge mechanical seals with Plan 53A/54 barrier fluid systems"
        ],
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        category: "mro-solutions"
      },
      {
        id: "instrumentation",
        name: "Smart Process Transmitters & Telemetry Meters",
        tagline: "Digital Pressure, Level & Ultrasonic Flow Instrumentation",
        description: "Ultra-precise industrial measurement instruments featuring piezoresistive sensors, diaphragm seals, and ultrasonic transit-time meters for monitoring mission-critical fluid lines.",
        specs: [
          "Accuracy: ±0.04% of calibrated span",
          "Certifications: ATEX / IECEx Zone 0/1, SIL 2/3 Certified",
          "Protocols: HART 7, Foundation Fieldbus, Modbus RTU",
          "Enclosure: Heavy-Duty IP67 / NEMA 4X Die-Cast Aluminum"
        ],
        applications: [
          "Storage Tank Hydrostatic Level Gauging",
          "Pipeline Custody Transfer & Pressure Monitoring",
          "Cooling Loop & Steam Flow Measurement"
        ],
        features: [
          "High-contrast backlit LCD graphic display with trend bargraph",
          "Remote zero and span calibration without interrupting loop",
          "Advanced diagnostics detecting plugged impulse lines"
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        category: "mro-solutions"
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
