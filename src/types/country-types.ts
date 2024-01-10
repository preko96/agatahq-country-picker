export type PreviewCountryByContinent = {
    continent: string;
    country: string;
}

export type DetailedCountryByContinent = PreviewCountryByContinent & {
    capitalCity: string;
    languages: string[];
}
