import { Schema, model, Document } from 'mongoose';
import { IWorld } from '../interfaces/IWorld';

const WorldSchema = new Schema<IWorld>({
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    sharedCharacters: [{ type: String }],
    sharedEvents: [{ type: String }],
    sharedScenarios: [{ type: String }],
    history: { type: String },
    geography: {
        continents: [{
            name: { type: String },
            description: { type: String },
            countries: [{
                name: { type: String },
                description: { type: String },
                cities: [{
                    name: { type: String },
                    description: { type: String },
                    population: { type: Number },
                    landmarks: [{ type: String }]
                }]
            }]
        }],
        oceans: [{
            name: { type: String },
            description: { type: String },
            size: { type: String },
            depth: { type: String }
        }],
        seas: [{
            name: { type: String },
            description: { type: String },
            size: { type: String },
            depth: { type: String }
        }],
        rivers: [{
            name: { type: String },
            description: { type: String },
            length: { type: String },
            source: { type: String },
            mouth: { type: String }
        }],
        lakes: [{
            name: { type: String },
            description: { type: String },
            size: { type: String },
            depth: { type: String }
        }],
        mountains: [{
            name: { type: String },
            description: { type: String },
            height: { type: String },
            range: { type: String }
        }],
        forests: [{
            name: { type: String },
            description: { type: String },
            size: { type: String },
            type: { type: String }
        }],
        deserts: [{
            name: { type: String },
            description: { type: String },
            size: { type: String },
            climate: { type: String }
        }],
        landmarks: [{
            name: { type: String },
            description: { type: String },
            significance: { type: String }
        }],
        climate: { type: String },
        terrain: { type: String }
    },
    cultures: [{
        name: { type: String },
        description: { type: String },
        customs: [{ type: String }],
        languages: [{ type: String }],
        religions: [{ type: String }]
    }],
    politics: {
        governments: [{
            name: { type: String },
            type: { type: String },
            description: { type: String }
        }],
        alliances: [{ type: String }],
        conflicts: [{ type: String }]
    },
    economy: {
        resources: [{ type: String }],
        tradeRoutes: [{ type: String }],
        currencies: [{ type: String }]
    },
    technology: {
        level: { type: String },
        notableInventions: [{ type: String }]
    },
    magic: {
        systems: [{
            name: { type: String },
            rules: { type: String },
            limitations: { type: String },
            source: { type: String },
            types: [{ type: String }],
            spells: [{
                name: { type: String },
                description: { type: String },
                powerLevel: { type: String },
                castingTime: { type: String },
                duration: { type: String },
                components: [{ type: String }]
            }],
            artifacts: [{
                name: { type: String },
                description: { type: String },
                power: { type: String },
                history: { type: String }
            }],
            creatures: [{
                name: { type: String },
                description: { type: String },
                abilities: [{ type: String }],
                habitat: { type: String }
            }]
        }],
        notablePractitioners: [{
            name: { type: String },
            title: { type: String },
            biography: { type: String },
            abilities: [{ type: String }],
            affiliations: [{ type: String }]
        }],
        magicalLocations: [{
            name: { type: String },
            description: { type: String },
            significance: { type: String },
            power: { type: String }
        }],
        magicalEvents: [{
            name: { type: String },
            description: { type: String },
            date: { type: String },
            significance: { type: String }
        }]
    },
    fauna: [{
        name: { type: String },
        description: { type: String },
        habitat: { type: String }
    }],
    flora: [{
        name: { type: String },
        description: { type: String },
        habitat: { type: String }
    }],
    mythsAndLegends: [{
        name: { type: String },
        story: { type: String },
        significance: { type: String }
    }],
    notableLocations: [{
        name: { type: String },
        description: { type: String },
        significance: { type: String }
    }]
});

export const WorldModel = model<IWorld>('World', WorldSchema);