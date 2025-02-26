import { FC } from 'react'
import { Comment } from '@/components'

import styles from './comment-list.module.css'

interface CommentListProps {
  comments: Comment[]
}

export const CommentList: FC<CommentListProps> = async ({ comments }) => {
  return await (
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
  )
}