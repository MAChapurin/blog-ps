import styles from './page.module.css'

const Skeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeleton__header} />
    <div className={styles.skeleton__subheader} />
    <div className={styles.skeleton__body} />
    <div className={styles.skeleton__footer} />
  </div>
)


export default function Loading() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)}
    </div>
  )
}