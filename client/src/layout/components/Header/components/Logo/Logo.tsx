import * as styles from './Logo.module.scss';

function Logo() {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logoParticle}></div>
            <div className={styles.logoParticle}></div>
            <div className={styles.logoParticle}></div>
            <div className={styles.logoParticle}></div>
            <div className={styles.logoParticle}></div>
        </div>
    );
}

export default Logo;
