import {MouseEventHandler, RefObject} from "react";

import useEventListener from "./useEventListener";

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: MouseEventHandler,
    mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {

    useEventListener(mouseEvent, (event) => {
        const element = ref.current;

        if (!element || element.contains(event.target as HTMLElement)) return;


        handler(event);
    });

}