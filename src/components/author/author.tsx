import Link from 'next/link'
import { FC } from 'react'

import { AuthorProps } from './author.types'

import styles from './author.module.css'


export const Author: FC<AuthorProps> = ({
	href = '/',
	author = 'Front-end'
}) => {
	return (
		<Link aria-label={`Перейти на страницу автора ${author}`} className={styles.author} href={href}>
			{author}
		</Link>
	)
}
