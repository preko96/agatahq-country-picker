'use client';
import {memo, useCallback} from "react";

import {DetailedCountryByContinent} from "@/types/country-types";
import {CountryByContinentListItem} from "@/components/country-by-continent-list/country-by-continent-list-Item";

type CountryByContinentListProps = {
    countries: DetailedCountryByContinent[];
    activeCountry: string | null;
    onClick(country: string): void;
}

export const CountryByContinentList = memo(function CountryByContinent({ countries, activeCountry, onClick }: CountryByContinentListProps) {
    const renderItem = useCallback((item: DetailedCountryByContinent) => {
        return (
            <CountryByContinentListItem key={item.country} isActive={activeCountry === item.country} onClick={onClick} {...item} />
        )
    }, [activeCountry, onClick])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map(renderItem)}
        </div>
    )
})


