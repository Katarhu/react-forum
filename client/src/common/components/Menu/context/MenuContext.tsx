import {createContext, MouseEventHandler, ReactNode, useContext, useState} from "react";

interface MenuContextProviderProps {
    children: ReactNode;
}

interface IMenuContext {
    isOpen: boolean;
    handleClose: MouseEventHandler;
    handleOpen: MouseEventHandler;
    handleToggle: MouseEventHandler;
}


const MenuContext = createContext({} as IMenuContext);

export const useMenu = () => {
    return useContext(MenuContext);
}

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen: MouseEventHandler = (event) => {
        event.stopPropagation();
        setIsOpen(true);
    }

    const handleClose: MouseEventHandler = (event) => {
        event.stopPropagation();
        setIsOpen(false);
    }

    const handleToggle: MouseEventHandler = (event) => {
        event.stopPropagation();
        setIsOpen(prev => !prev)
    }

    return (
        <MenuContext.Provider value={{
            isOpen,
            handleOpen,
            handleClose,
            handleToggle,
        }}>
            {children}
        </MenuContext.Provider>
    )
}