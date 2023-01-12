import {useEffect} from "react";

export default function useClickOutside(element: HTMLElement | null, callback: () => void) {

    const onClick = (event: MouseEvent) => {
        if( event.target === element ) return;

        callback();
    }

    useEffect(() => {
        document.addEventListener('click', onClick)

        return () => {
            document.removeEventListener('click', onClick);
        }
    }, [ element, callback ]);
}
