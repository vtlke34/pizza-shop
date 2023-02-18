import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className='container'>
            <div className={styles.notfound}>
                <h2 className={styles.title}>{'Страница не найдена :('}</h2>
            </div>
        </div>

    )
}

export default NotFound