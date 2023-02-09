import React, {MouseEventHandler, RefObject, useCallback, useEffect} from "react";

export default function useClickOutside(elementRef: RefObject<HTMLElement | null>, callback: MouseEventHandler ) {

    const onClick = useCallback((event: React.MouseEvent) => {

        console.log("click")

        if( !elementRef.current || event.target === elementRef.current || elementRef.current.contains(event.target as HTMLElement)) return;

        callback(event);

    }, [elementRef, callback]);

    useEffect(() => {
        if( !elementRef.current ) {
            return document.removeEventListener('click', onClick as any);
        }

        document.addEventListener('click', onClick as any)

        return () => {
            document.removeEventListener('click', onClick as any);
        }
    }, [ elementRef, callback ]);
}
