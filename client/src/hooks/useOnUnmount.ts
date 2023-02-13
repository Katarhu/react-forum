import {useEffect, useRef} from "react";


export default function useOnUnmount(callback: () => void) {
    const flag = useRef<boolean>(false);
    const callbackRef = useRef<typeof callback>(callback);

    useEffect(() => {
        return () => {
            if( flag.current ) {
                callbackRef.current();
            }

            flag.current = true;
        }
    }, [])

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

}
