import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { Author, Icon, LikeButton, TimeText } from "@/components"

import styles from './post-item.module.css'

export const PostItem: FC<Omit<Post, 'userId'>> = ({ body, title, id }) => {
  return (
    <article className={styles.item}>
      <Image className={styles.image} src={'/mini.jpg'} alt="image for post" width={300} height={300} />
      <header className={styles.header}>
        <Author />
        <div className={styles.textDivider}>.</div>
        <TimeText dateTime="2025-01-01">1 месяц назад</TimeText>
        <div className={styles.header__actions}>
          <LikeButton />
        </div>
      </header>
      <section className={styles.section}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.description}>
          {body}
        </p>
      </section>
      <footer className={styles.footer}>
        <TimeText dateTime="3m">3 минуты</TimeText>
        <Link className={styles.link} href={'/' + id}>Читать <Icon id="arrow" width={20} height={20} /></Link>
      </footer>
    </article>
  )
}