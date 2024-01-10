import {useState} from "react";
import {useFilteredCountries} from "@/screens/main-page/hooks/use-filtered-countries";

export function useFilterableCountries() {
    const [query, setQuery] = useState("");

    const countries = useFilteredCountries(query);

    return [
        countries,
        query,
        setQuery
    ] as const;
}
