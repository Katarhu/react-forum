import {ChangeEvent, ChangeEventHandler, useCallback, useState} from 'react';

import {IValidatorKeys, useValidation} from './useValidation';

type InputValueType = string | number;

type InitialValue<T> = T | (() => T);

interface useInputReturn<T> {
    value: T,
    onBlur: () => void;
    onChange: (event: ChangeEvent) => void;
    touched: boolean;
    isValid: boolean;
    errors: string[];
}

export function useInput<T extends InputValueType>(
    initialValue: T,
    validators: IValidatorKeys,
): useInputReturn<T>

export function useInput<T  extends InputValueType>(initialValue: InitialValue<T>, validators: IValidatorKeys = {}) {
    const [value, setValue] = useState<T>(() => {
        if (typeof  initialValue === "function") {
            return initialValue();
        }

        return initialValue;
    });

    const [touched, setIsTouched] = useState(false);
    const { isValid, errors } = useValidation(value, validators);

    const onBlur = useCallback(() => {
        setIsTouched(true);
    }, []);

    const onChange: ChangeEventHandler = useCallback((event) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value as T);
    }, []);

    return {
        value,
        onBlur,
        onChange,
        touched,
        isValid,
        errors
    }
}
