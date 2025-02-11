import { Document } from 'mongoose';

export interface IWorld extends Document {
    name: string;
    author: string;
    description: string;
    sharedCharacters: string[]; 
    sharedEvents: string[];
    sharedScenarios: string[];
    history: string; // História do mundo
    geography: {
        continents: {
            name: string;
            description: string;
            countries: {
                name: string;
                description: string;
                cities: {
                    name: string;
                    description: string;
                    population: number;
                    landmarks: string[];
                }[];
            }[];
        }[];
        oceans: {
            name: string;
            description: string;
            size: string;
            depth: string;
        }[];
        seas: {
            name: string;
            description: string;
            size: string;
            depth: string;
        }[];
        rivers: {
            name: string;
            description: string;
            length: string;
            source: string;
            mouth: string;
        }[];
        lakes: {
            name: string;
            description: string;
            size: string;
            depth: string;
        }[];
        mountains: {
            name: string;
            description: string;
            height: string;
            range: string;
        }[];
        forests: {
            name: string;
            description: string;
            size: string;
            type: string;
        }[];
        deserts: {
            name: string;
            description: string;
            size: string;
            climate: string;
        }[];
        landmarks: {
            name: string;
            description: string;
            significance: string;
        }[];
        climate: string;
        terrain: string;
    };
    cultures: {
        name: string;
        description: string;
        customs: string[];
        languages: string[];
        religions: string[];
    }[];
    politics: {
        governments: {
            name: string;
            type: string;
            description: string;
        }[];
        alliances: string[];
        conflicts: string[];
    };
    economy: {
        resources: string[];
        tradeRoutes: string[];
        currencies: string[];
    };
    technology: {
        level: string;
        notableInventions: string[];
    };
    magic: {
        systems: {
            name: string;
            rules: string;
            limitations: string;
            source: string; // Fonte da magia (ex: mana, elementos, divindades)
            types: string[]; // Tipos de magia (ex: elemental, necromancia, ilusão)
            spells: {
                name: string;
                description: string;
                powerLevel: string;
                castingTime: string;
                duration: string;
                components: string[]; // Componentes necessários (ex: verbal, somático, material)
            }[];
            artifacts: {
                name: string;
                description: string;
                power: string;
                history: string;
            }[];
            creatures: {
                name: string;
                description: string;
                abilities: string[];
                habitat: string;
            }[];
        }[];
        notablePractitioners: {
            name: string;
            title: string;
            biography: string;
            abilities: string[];
            affiliations: string[];
        }[];
        magicalLocations: {
            name: string;
            description: string;
            significance: string;
            power: string;
        }[];
        magicalEvents: {
            name: string;
            description: string;
            date: string;
            significance: string;
        }[];
    };
    fauna: {
        name: string;
        description: string;
        habitat: string;
    }[];
    flora: {
        name: string;
        description: string;
        habitat: string;
    }[];
    mythsAndLegends: {
        name: string;
        story: string;
        significance: string;
    }[];
    notableLocations: {
        name: string;
        description: string;
        significance: string;
    }[];
}