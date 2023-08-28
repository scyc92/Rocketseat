import styles from './Sidebar.module.css';
import { PencilLine }from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>

            <img className={styles.cover}
                src='https://images.unsplash.com/photo-1691544931894-52f012e69000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=50' 
            />
            <div className={styles.profile}>
              <Avatar src='https://github.com/scyc92.png' />  
              <strong>Samuel Chung</strong>
              <span>Treinamento React JS </span>  
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}