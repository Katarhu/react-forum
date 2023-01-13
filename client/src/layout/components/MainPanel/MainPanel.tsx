import MainPanelLinks from './components/MainPanelLinks/MainPanelLinks';

import * as styles from "./MainPanel.module.scss";


function MainPanel() {
    return (
        <aside className={styles.panelContainer}>
            <MainPanelLinks />
        </aside>
    );
}

export default MainPanel;
