import {createContext, MouseEventHandler, useContext} from "react";

interface IMenuContext {
    isOpen: boolean;
    handleClose: MouseEventHandler;
    handleOpen: MouseEventHandler;
    handleToggle: MouseEventHandler;
}


export const MenuContext = createContext({} as IMenuContext);

export const useMenu = () => {
    return useContext(MenuContext);
}