import {useEffect, useRef, useState} from "react";


export default function useOnUnmount(callback: () => void, dependencies: any[] = []) {
    const flag = useRef<any>(false);

    useEffect(() => {
        return () => {
            // console.log(flag.current)
            // console.log("second")
            console.log(flag)
            if( flag.current ) {
                console.log("second");
                console.log(flag.current())
                flag.current();
            }

            flag.current = callback;
        }
    }, [])

    useEffect(() => {
        flag.current = false;

        return () => { flag.current = callback }
    }, [callback])

}
