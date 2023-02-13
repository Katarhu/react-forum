import {useEffect, useRef} from "react";


export default function useOnMount(callback: () => void, dependencies: any[] = []) {
    const flag = useRef(false);

    useEffect(() => {
        if( !flag.current ) {
            callback();
            flag.current = true;
        }
    }, dependencies);
}
