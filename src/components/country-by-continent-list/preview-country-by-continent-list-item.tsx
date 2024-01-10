import {PreviewCountryByContinent} from "@/types/country-types";
import {memo, ReactNode, useCallback} from "react";

export type PreviewCountryByContinentListItemProps = PreviewCountryByContinent & {
    children?: ReactNode;
    onClick(country: string): void;
};
export const PreviewCountryByContinentListItemProps = memo(function PreviewCountryByContinentListItemProps({ continent, country, children, onClick }: PreviewCountryByContinentListItemProps) {
    const handleOnClick = useCallback(() => {
        onClick(country)
    }, [country, onClick])

    return (
        <div className="p-4 m-4 border border-gray-200 rounded shadow-sm" onClick={handleOnClick}>
            <h1 className="text-lg font-semibold text-gray-700">Country By Continent</h1>
            <p className="text-md text-gray-600">Continent: <span className="text-gray-800 font-medium">{continent}</span></p>
            <p className="text-md text-gray-600">Country: <span className="text-gray-800 font-medium">{country}</span></p>
            {children}
        </div>
    )
})
