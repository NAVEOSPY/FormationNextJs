import { ChangeEvent, useState } from "react";

interface Props {
    callback: (newInputValue: string) => void;
}

export default function PokemonSearchBar({ callback }: Props) {
    const [value, setValue] = useState<string>("");

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        callback(event.target.value);
    };

    return (
        <div>
            <input onChange={onInputChange} value={value} />
        </div>
    );
}
