import styles from './Button.module.css'

export default function Button(props) {
    return(
        <button 
        className={styles.Button} 
        style={{
            color: props.cor}} 
        >
            {props.texto}
        </button>
    )    
};
