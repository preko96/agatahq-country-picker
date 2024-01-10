'use client';
import React, {memo} from "react";
import {useCountries} from "@/hooks/useCountries";
import {CountryListManager} from "@/screens/main-page/components";


export const MainPage = memo(function MainPage() {
    const countries = useCountries();

    return (
        <div className="container mx-auto px-4">
            <CountryListManager countries={countries} />
        </div>
    )
})
