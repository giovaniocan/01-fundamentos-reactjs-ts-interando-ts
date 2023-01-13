import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';


export function Sidebar() {
    return (

        <aside className={styles.sidebar}>

            <img  
            className={styles.cover} 
            src="https://img.freepik.com/vetores-gratis/fundo-preto-com-malha-de-baixo-poli-vermelho-brilhante_1017-20215.jpg?w=1480&t=st=1664498970~exp=1664499570~hmac=5a3580afd632f1e7e45ce00c05a0cc060f383fcfc54fa2e5be2c073322f4d53a" 
            />

            <div className={styles.profile}>
            <Avatar src="https://github.com/jvolima.png"/>
                <strong>Jv rei delas</strong>    
                <span>repelente</span>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div> 
        </aside>
    );
}