import styles from "./LoadingCircle.module.css"

export default function LoadingCircle(props){
    return(
        <div 
        className={styles.LoadingCircle}
        style={{display:props.loaded ? 'inline-block' : 'none'}} />
    )
}