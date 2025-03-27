import Link from 'next/link'
import { FC } from 'react'
import { TextDivider } from '@/components'

import styles from './comment.module.css'

export const Comment: FC<Pick<Comment, 'name' | 'email' | 'body'>> = ({
	name,
	email,
	body
}) => {
	return (
		<div aria-label='Комментарий'>
			<div className={styles.header}>
				<Link aria-label={`Перейти на страницу автора ${name}`} className={styles.author} href={'/'}>
					{name}
				</Link>
				<TextDivider />
				<a aria-label={`Написать автору ${name} на почту ${email}`} className={styles.email} href={`mailto:${email}`}>
					{email}
				</a>
			</div>
			<p className={styles.description}>{body}</p>
		</div>
	)
}
