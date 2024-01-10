import {DetailedCountryByContinent} from "@/types/country-types";
import {memo} from "react";
import {
    PreviewCountryByContinentListItemProps
} from "@/components/country-by-continent-list/preview-country-by-continent-list-item";

export type DetailedCountryByContinentListItemProps = PreviewCountryByContinentListItemProps & DetailedCountryByContinent;

export const DetailedCountryByContinentListItem = memo(function ExpandedCountryByContinentListItem({ languages, capitalCity, ...otherProps }: DetailedCountryByContinentListItemProps) {
    return (
        <PreviewCountryByContinentListItemProps {...otherProps}>
            <p className="text-md text-gray-600">Capital City: <span className="text-gray-800 font-medium">{capitalCity}</span></p>
            <p className="text-md text-gray-600">Languages: <span className="text-gray-800 font-medium">{languages.join(", ")}</span></p>
        </PreviewCountryByContinentListItemProps>
    )
})
