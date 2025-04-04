import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Author, Icon, LikeButton, TextDivider, TimeText } from '@/components'

import styles from './post-item.module.css'

export const PostItem: FC<Omit<Post, 'userId'>> = ({ body, title, id }) => {
	return (
		<article className={styles.item}>
			<Image
				title={`Изображение для поста ${title}`}
				className={styles.image}
				src={'/mini.jpg'}
				alt='image for post'
				width={300}
				height={200}
			/>
			<header className={styles.header}>
				<Author />
				<TextDivider />
				<TimeText dateTime='2025-01-01'>1 месяц назад</TimeText>
				<div className={styles.header__actions}>
					<LikeButton id={id.toString()} />
				</div>
			</header>
			<section className={styles.section}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{body}</p>
			</section>
			<footer className={styles.footer}>
				<TimeText dateTime='3m'>3 минуты</TimeText>
				<Link aria-label='Читать пост' className={styles.link} href={'/' + id}>
					Читать <Icon id='arrow' width={20} height={20} />
				</Link>
			</footer>
		</article>
	)
}
