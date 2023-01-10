import {useEffect, useState} from 'react';

export interface IValidatorKeys {
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    email?: boolean;
    password?: string | number;
}

export function useValidation(value: string | number, validators: IValidatorKeys) {
    const [errors, setErrors] = useState<string[]>([]);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const errors: string[] = [];

        for (let key in validators) {
            switch (key) {

                case 'required':
                    if ( !value.toString().length)
                        errors.push('This field is required');

                    break;

                case 'maxLength':
                    const maxLength = validators[key] ?? Number.MAX_SAFE_INTEGER;
                    if(value.toString().length >= maxLength)
                        errors.push(`Length should be less than: ${maxLength}`)

                    break

                case 'minLength':
                    let minLength = 0;

                    if (validators[key] == undefined) {
                        minLength = 0;
                    } else if (validators['minLength'] && validators['minLength'] < 0) {
                        minLength = 0;
                    } else {
                        minLength = <number>validators['minLength'];
                    }

                    if (value.toString().length <= minLength)
                        errors.push(`Length should be more than: ${minLength}`)

                    break;

                case 'email':
                    const regexp = /^\S+@\S+\.\S+$/;
                    if (!regexp.test(value.toString()))
                        errors.push('It should be valid email');

                    break;

                case 'password': {
                    if ( value !== validators[key] ) {
                        errors.push('Passwords should be equal');
                    }
                }
            }
        }

        setErrors(errors);
        setIsValid(!!!errors.length);

    }, [value, validators["password"]]);


    return {
        errors,
        isValid
    }
}
