import {ChangeEvent, memo, useCallback} from "react";

type SearchBarProps = {
    value: string;
    onSearch(query: string): void;
}

export const SearchBar = memo(function SearchBar({ value, onSearch }: SearchBarProps) {
    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value)
    }, [onSearch])

    return (
        <div className="p-4 m-4 border border-gray-200 rounded">
            <input
                value={value}
                type="text"
                placeholder="Search countries..."
                onChange={handleOnChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
});


