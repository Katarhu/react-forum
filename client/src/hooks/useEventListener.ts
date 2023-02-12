import React, {RefObject, useEffect, useRef} from "react";


type ReactWindowEventMap = {
    [K in keyof WindowEventMap]: WindowEventMap[K] extends MouseEvent
        ? React.MouseEvent<Element, MouseEvent>
        : WindowEventMap[K];
};


function useEventListener<K extends keyof WindowEventMap>(
    eventName: K,
    handler: (event: ReactWindowEventMap[K]) => void,
    element?: undefined,
    options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<
    K extends keyof HTMLElementEventMap,
    T extends HTMLElement = HTMLDivElement,
>(
    eventName: K,
    handler: (event: HTMLElementEventMap[K]) => void,
    element: RefObject<T>,
    options?: boolean | AddEventListenerOptions,
): void;


function useEventListener<K extends keyof DocumentEventMap>(
    eventName: K,
    handler: (event: DocumentEventMap[K]) => void,
    element: RefObject<Document>,
    options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<
    E,
    KW extends keyof WindowEventMap,
    KH extends keyof HTMLElementEventMap,
    T extends HTMLElement | MediaQueryList | void = void,
>(
    eventName: KW | KH,
    handler: (
        event:
            | WindowEventMap[KW]
            | HTMLElementEventMap[KH]
            | Event,
    ) => void,
    element?: RefObject<T>,
    options?: boolean | AddEventListenerOptions,
) {

    const savedHandler = useRef(handler);

    useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const targetElement: T | Window = element?.current ?? window;

        if (!(targetElement && targetElement.addEventListener)) return;
        const listener: typeof handler = event => savedHandler.current(event);

        targetElement.addEventListener(eventName, listener, options)

        return () => {
            targetElement.removeEventListener(eventName, listener, options)
        }
    }, [eventName, element, options]);
}

export default useEventListener;