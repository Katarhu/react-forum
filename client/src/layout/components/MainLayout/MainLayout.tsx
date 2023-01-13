import {ReactNode} from "react";

import Sidebar from "../Sidebar/Sidebar";
import MainPanel from "../MainPanel/MainPanel";

import * as styles from "../../Layout.module.scss";


interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <main className={styles.mainLayout}>
            <Sidebar />
            {children}
            <MainPanel />
        </main>
    );
}

export default MainLayout;
