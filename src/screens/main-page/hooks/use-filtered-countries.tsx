import {DetailedCountryByContinent} from "@/types/country-types";
import {useCountries} from "@/hooks/useCountries";

export function useFilteredCountries(query: string): DetailedCountryByContinent[] {
    const countries = useCountries();
    const lowerCaseQuery = query.toLowerCase();

    return countries.filter(country =>
        country.country.toLowerCase().includes(lowerCaseQuery) ||
        country.capitalCity.toLowerCase().includes(lowerCaseQuery)
    );
}


