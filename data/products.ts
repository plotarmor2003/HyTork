
export interface Product {
    id: string;
    title: string;
    category: string;
    modalCategory: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    specs: string[];
}

export const productsData: Product[] = [
    {
        id: 'atom',
        title: 'ATM 80',
        category: 'MOBILITY',
        modalCategory: 'MOBILITY - B2B & B2C',
        image: '/atom.JPG',
        shortDescription: 'Compact micro-mobility vehicle for efficient material handling in warehouses and industrial facilities.',
        longDescription: 'ATOM is a compact and agile micro-mobility vehicle designed for efficient material handling in tight spaces such as warehouses and industrial facilities. It combines a mid-mounted differential motor with a lightweight chassis to deliver excellent maneuverability and operational safety.',
        features: [
            'Drive Mode: Walk-E for safe pedestrian-paced operation',
            'Mid-Motor with differential for superior maneuverability',
            'Compact dimensions ideal for tight warehouse spaces',
            'NMC battery chemistry for reliable performance',
            'Lightweight design with 75 kg kerb weight',
            'Zero-emission operation for sustainable logistics'
        ],
        specs: [
            'Dimensions (L×B×H): 1000×800×1000 mm',
            'Powertrain: Mid-Motor with differential',
            'Rated Torque: 7.3 Nm',
            'Peak Torque: 13.2 Nm',
            'Battery Capacity: 1.0 kWh (NMC)',
            'Range: 110 km',
            'Top Speed: 5 km/h',
            'Payload Capacity: 350 kg',
            'Kerb Weight: 75 kg',
            'Gradeability with GVW: 2%',
            'Gradeability with Kerb Weight: 7%'
        ]
    },
    {
        id: 'atomxl',
        title: 'ATM 120',
        category: 'MOBILITY',
        modalCategory: 'MOBILITY - B2B & B2C',
        image: '/atom_xl.jpg',
        shortDescription: 'Extended wheelbase variant with higher payload capacity for heavy-duty industrial logistics.',
        longDescription: 'ATOM XL extends the ATOM lineup with a longer wheelbase and higher payload capacity, ideal for heavy-duty industrial logistics. It offers both Walk-E and Drive modes, providing versatility for different operational requirements.',
        features: [
            'Dual Drive Modes: Walk-E and Drive for operational flexibility',
            'Extended wheelbase (1400 mm) for enhanced stability',
            'Higher payload capacity of 500 kg',
            'Mid-Motor with differential drivetrain',
            'Double battery capacity for extended range',
            'Superior gradeability for challenging terrain'
        ],
        specs: [
            'Dimensions (L×B×H): 1400×800×1000 mm',
            'Powertrain: Mid-Motor with differential',
            'Rated Torque: 10.37 Nm',
            'Peak Torque: 32.7 Nm',
            'Battery Capacity: 2.0 kWh (NMC)',
            'Range: 160 km',
            'Top Speed: 5 km/h',
            'Payload Capacity: 500 kg',
            'Kerb Weight: 85 kg',
            'Gradeability with GVW: 7%',
            'Gradeability with Kerb Weight: 15%'
        ]
    },
    {
        id: 'atomixl',
        title: 'i-ATM',
        category: 'MOBILITY',
        modalCategory: 'MOBILITY - B2B (Autonomous)',
        image: '/atom_ixl.jpg',
        shortDescription: 'Autonomous variant with vision-based lane follower system for self-driving operations.',
        longDescription: 'ATOM-iXL is an autonomous variant equipped with a vision-based lane follower system. It enables self-driving operation within controlled environments, ensuring efficiency and safety without human intervention.',
        features: [
            'Autonomous Drive Mode with vision-based navigation',
            'Lane follower system for controlled environment operation',
            'Self-driving capability without human intervention',
            'Enhanced battery capacity for extended autonomous operations',
            'B2B focused for industrial automation',
            'Maximum range of 180 km on single charge'
        ],
        specs: [
            'Dimensions (L×B×H): 1000×800×1000 mm',
            'Powertrain: Mid-Motor with differential',
            'Rated Torque: 7.3 Nm',
            'Peak Torque: 13.2 Nm',
            'Battery Capacity: 2.0 kWh (NMC)',
            'Range: 180 km',
            'Top Speed: 5 km/h',
            'Payload Capacity: 350 kg',
            'Kerb Weight: 75 kg',
            'Drive Mode: Autonomous with vision-based system'
        ]
    },
    {
        id: 'cylion',
        title: 'Cylion Battery Pack',
        category: 'POWER SYSTEMS',
        modalCategory: 'POWER SYSTEMS',
        image: '/cyclion.jpg',
        shortDescription: 'Compact cylindrical battery pack with natural cooling for e-bikes and small electric vehicles.',
        longDescription: 'Cylion is a compact cylindrical battery pack engineered with natural cooling for e-bikes and small electric vehicles. It offers high energy density and superior thermal stability in a sleek, modular form factor.',
        features: [
            'Natural cooling system for optimal thermal management',
            'Compact cylindrical design for easy integration',
            'High energy density in small form factor',
            'NMC chemistry for reliable performance',
            'Modular design for versatile applications',
            'Ideal for e-bikes and small electric vehicles'
        ],
        specs: [
            'Battery Capacity: 0.5 kWh',
            'Chemistry: NMC (Nickel Manganese Cobalt)',
            'Dimensions (D×L): 100×300 mm',
            'Cooling System: Natural cooling',
            'Form Factor: Cylindrical',
            'Applications: E-bikes and small EVs'
        ]
    },
    {
        id: 'beltdrive',
        title: 'Belt Drive System',
        category: 'DRIVE SYSTEMS',
        modalCategory: 'DRIVE SYSTEMS',
        image: '/Belt_Drive.jpg',
        shortDescription: 'Maintenance-free drive system enhancing cycling efficiency by 34% compared to chain drives.',
        longDescription: 'This lightweight, maintenance-free belt drive system enhances cycling efficiency by 34% compared to conventional chain drives. Built for all-weather durability, it ensures smooth and silent power transmission.',
        features: [
            'Efficiency improvement of 34% over chain drives',
            'Maintenance-free operation',
            'All-weather durability and reliability',
            'Silent and smooth power transmission',
            'Lightweight design at only 700 grams',
            'Long service life with assured 5,000 km durability'
        ],
        specs: [
            'Ratio: 2.20',
            'Pulley Weight: 700 grams',
            'Assured Durability: 5,000 km',
            'Efficiency Gain: 34% over chain drives',
            'Operation: Maintenance-free',
            'Weather Resistance: All-weather capable'
        ]
    },
    {
        id: 'universaltool',
        title: 'Universal Belt Tool',
        category: 'TOOLS',
        modalCategory: 'TOOLS',
        image: '/universal_tool.jpg',
        shortDescription: 'Versatile tool for automotive engine belt installation and removal.',
        longDescription: 'The Universal Belt Tool simplifies belt installation and removal for automotive engines. It is a versatile tool designed to improve servicing convenience and safety.',
        features: [
            'Simplifies belt installation process',
            'Easy belt removal mechanism',
            'Designed for automotive engine applications',
            'Improves servicing convenience',
            'Enhanced safety during belt operations',
            'Professional-grade construction'
        ],
        specs: [
            'Application: Automotive engine belt wrapping and unwrapping',
            'Type: Universal belt tool',
            'Function: Installation and removal',
            'Use Case: Engine belt servicing',
            'Category: Automotive maintenance tool'
        ]
    }
];
