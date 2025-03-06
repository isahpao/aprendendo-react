
import React from 'react';
import styles from './CorETexto.module.css';


const CorETexto = ({ cor, mensagem }) => {
    return(
        <div>
            <p className={styles[cor]}> {mensagem} </p>
        </div>

    );
};
    

export default CorETexto;
