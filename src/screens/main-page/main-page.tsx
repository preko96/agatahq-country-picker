'use client';
import React, {memo} from "react";
import {CountryListManager} from "@/screens/main-page/components";
import {SearchBar} from "@/components/search-bar";
import {useFilterableCountries} from "@/screens/main-page/hooks";


export const MainPage = memo(function MainPage() {
    const [countries, query, setQuery] = useFilterableCountries();

    return (
        <div className="container mx-auto px-4">
            <SearchBar value={query} onSearch={setQuery}/>
            <CountryListManager countries={countries} />
        </div>
    )
})
