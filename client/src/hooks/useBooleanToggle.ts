import {useCallback, useState} from "react";


export default function useBooleanToggle(initialState: boolean | (() => boolean)) {
    const [isValue, setIsValue] = useState(() => {
        if (typeof initialState === 'function') return initialState();
        return initialState;
    });

    const toggle = useCallback(() => {
        setIsValue(prev => !prev);
    }, [])

    return [isValue, toggle] as const;
}