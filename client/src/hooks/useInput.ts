import React, {ChangeEvent, useCallback, useState} from 'react';

import {IValidatorKeys, useValidation} from './useValidation';

type InputValueType = string | number | never;

interface useInputReturn<T> {
    value: T,
    onBlur: () => void;
    onChange: (event: ChangeEvent) => void;
    touched: boolean;
    isValid: boolean;
    errors: string[];
}

export function useInput<T extends InputValueType = InputValueType>(initialValue: T, validators: IValidatorKeys = {}) {
    const [value, setValue] = useState<InputValueType>(initialValue);
    const [touched, setIsTouched] = useState(false);
    const { isValid, errors } = useValidation(value, validators);

    const onBlur = useCallback(() => {
        setIsTouched(true);
    }, []);

    const onChange = useCallback((event: ChangeEvent) => {
        setValue((event.target as HTMLInputElement).value);
    }, []);

    return {
        value,
        onBlur,
        onChange,
        touched,
        isValid,
        errors
    } as useInputReturn<T>
}
