import { getPostById } from "@/api"
import { Author, CommentList, Form, LikeBtn, TextDivider, TimeText } from "@/components"
import Image from "next/image"

import styles from './page.module.css'

export default async function DetailPostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)
  return (
    <main className={styles.container}>
      <h1 className={styles.title + ' ' + styles.large}>{post.title}</h1>
      <div className={styles.header}>
        <Author />
        <TextDivider />
        <TimeText dateTime="2025-01-01">1 месяц назад</TimeText>
        <TextDivider />
        <TimeText dateTime="3m">3 минуты</TimeText>
        <TextDivider />
        <LikeBtn />
      </div>
      <Image className={styles.img} width={687} height={440} src={'/mini.jpg'} alt="image for post" />
      <p className={styles.description}>{post.body} {post.body}</p>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.description}>{post.body}</p>

      <div className={styles.wrapper}>
        <span>Понравилось? Жми</span>
        <LikeBtn rounded />
      </div>
      <h2 className={styles.title}>Комментарии</h2>
      <CommentList postId={+params.id} />
      <Form />
    </main>
  )
}