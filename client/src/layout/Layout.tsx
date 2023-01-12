import {ReactNode} from "react";
import Header from "./components/Header/Header";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;
