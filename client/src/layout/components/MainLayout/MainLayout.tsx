import {ReactNode} from "react";

import Sidebar from "../Sidebar/Sidebar";
import MainPanel from "../MainPanel/MainPanel";

import * as styles from "../../Layout.module.scss";


interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles.mainLayout}>
            <Sidebar />
            <main className={styles.mainContainer}>
                {children}
            </main>
            <MainPanel />
        </div>
    );
}

export default MainLayout;
