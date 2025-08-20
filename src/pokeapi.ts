export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        
        try {
            const response = await fetch(url);
            const locations: ShallowLocations = await response.json();
            return locations;
        } catch (err) {
            throw new Error(`Error fetching locations: ${err}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = locationName || `${PokeAPI.baseURL}/location-area/${locationName}`;

        try {
            const response = await fetch(url);
            const location: Location = await response.json();
            return location;
        } catch (err) {
            throw new Error(`Error fecthing location: ${err}`);
        }
    }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};