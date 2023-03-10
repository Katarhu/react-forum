import InputError from "../components/InputError";

export default function getInputError(errors: string[], isTouched: boolean) {
    if( !errors.length || !isTouched ) return undefined;

    return <InputError errors={errors} />
}

