import { FC, Suspense } from 'react'
import styles from './comment-list.module.css'
import { getCommentsByPostId } from '@/api'
import { Comment } from '../comment/comment'

interface CommentListProps {
  postId: number
}

export const CommentList: FC<CommentListProps> = async ({ postId }) => {
  const comments = await getCommentsByPostId(postId)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul className={styles.list}>
        {comments.map((comment) => {
          const { name, body, email } = comment;
          return (
            <li className={styles.item} key={comment.id}>
              <Comment name={name} body={body} email={email} />
            </li>
          )
        })}
      </ul>
    </Suspense>
  )
}