import styles from './skeleton.module.css'

const SkeletonItem = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeleton__header} />
    <div className={styles.skeleton__subheader} />
    <div className={styles.skeleton__body} />
    <div className={styles.skeleton__footer} />
  </div>
)


export function Skeleton() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => <SkeletonItem key={index} />)}
    </div>
  )
}