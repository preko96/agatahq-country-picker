'use client';
import {memo} from "react";
import {
    DetailedCountryByContinentListItem, DetailedCountryByContinentListItemProps
} from "@/components/country-by-continent-list/detailed-country-by-continent-list-item";
import {
    PreviewCountryByContinentListItemProps
} from "@/components/country-by-continent-list/preview-country-by-continent-list-item";


export type CountryByContinentListItemProps = DetailedCountryByContinentListItemProps & {
    isActive: boolean;
}

export const CountryByContinentListItem = memo(function CountryByContinentListItemProps({isActive, ...otherProps}: CountryByContinentListItemProps) {
    return isActive ? <DetailedCountryByContinentListItem {...otherProps} /> : <PreviewCountryByContinentListItemProps {...otherProps} />
})
