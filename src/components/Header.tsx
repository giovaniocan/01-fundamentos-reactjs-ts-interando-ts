import styles from './Header.module.css';


import ignite_logo from '../assets/ignite-logo.svg';


export function Header(){
    return (
        <header className={styles.header}>
            <img src={ignite_logo} alt="ignite logo"/>
        

        </header>
        
    );
}
