import {memo, useState} from "react";
import {DetailedCountryByContinent} from "@/types/country-types";
import {CountryByContinentList} from "@/components/country-by-continent-list";

type CountryListManagerProps = {
    countries: DetailedCountryByContinent[];
};

export const CountryListManager = memo(function CountryListManager({countries}: CountryListManagerProps) {
    const [activeCountry, setActiveCountry] = useState<string | null>(null);

    return (
        <CountryByContinentList onClick={setActiveCountry} countries={countries} activeCountry={activeCountry} />
    )
})
