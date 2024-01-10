import {DetailedCountryByContinent} from "@/types/country-types";
import countryByCapitalCity from 'country-json/src/country-by-capital-city.json';
import countryBySpokenLanguage from 'country-json/src/country-by-languages.json';
import countryByContinent from 'country-json/src/country-by-continent.json';

export function useCountries(): DetailedCountryByContinent[] {
    return countryByContinent.map(item => ({
        ...item,
        capitalCity: countryByCapitalCity.find(c => c.country === item.country)?.city ?? '',
        languages: countryBySpokenLanguage.find(c => c.country === item.country)?.languages ?? [],
    }));
}
