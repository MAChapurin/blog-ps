import { FC } from 'react'
import { Comment } from '@/components'

import { CommentListProps } from './comment-list.types'

import styles from './comment-list.module.css'


export const CommentList: FC<CommentListProps> = async ({ comments }) => {
	return await (
		<ul className={styles.list} aria-label='Список комментариев'>
			{comments.map(comment => {
				const { name, body, email } = comment
				return (
					<li className={styles.item} key={comment.id}>
						<Comment name={name} body={body} email={email} />
					</li>
				)
			})}
		</ul>
	)
}
