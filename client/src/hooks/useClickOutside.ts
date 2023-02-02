import {Ref, RefObject, useCallback, useEffect} from "react";

export default function useClickOutside(elementRef: RefObject<HTMLElement | null>, callback: () => void) {

    const onClick = useCallback((event: MouseEvent) => {

        if( !elementRef.current || event.target === elementRef.current || elementRef.current.contains(event.target as HTMLElement)) return;

        callback();
    }, [elementRef, callback])

    useEffect(() => {
        document.addEventListener('click', onClick)

        return () => {
            document.removeEventListener('click', onClick);
        }
    }, [ elementRef, callback ]);
}
