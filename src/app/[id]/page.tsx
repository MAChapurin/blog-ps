import { getCommentsByPostId, getPostById } from '@/api'
import {
	Author,
	CommentForm,
	CommentList,
	LikeButton,
	TextDivider,
	TimeText
} from '@/components'
import Image from 'next/image'

import { Metadata } from 'next'
import { DetailPostPageProps, MetaProps } from './page.types'

import styles from './page.module.css'


export async function generateMetadata({
	params
}: MetaProps): Promise<Metadata> {

	const postId = (await params).id
	const post = await getPostById(postId)

	return {
		title: post.title,
		description: post.body
	}
}

export default async function DetailPostPage({ params }: DetailPostPageProps) {
	const postId = (await params).id
	const post = await getPostById(postId)
	const comments = await getCommentsByPostId(postId)

	return (
		<main className={styles.container}>
			<h1 className={styles.title + ' ' + styles.large}>{post.title}</h1>
			<div className={styles.header}>
				<Author />
				<TextDivider />
				<TimeText dateTime='2025-01-01'>1 месяц назад</TimeText>
				<TextDivider />
				<TimeText dateTime='3m'>3 минуты</TimeText>
				<TextDivider />
				<LikeButton id={postId} />
			</div>
			<Image
				className={styles.img}
				width={687}
				height={440}
				src={'/mini.jpg'}
				alt='image for post'
			/>
			<p className={styles.description}>
				{post.body} {post.body}
			</p>
			<h2 className={styles.title}>{post.title}</h2>
			<p className={styles.description}>{post.body}</p>

			<div className={styles.wrapper}>
				<span>Понравилось? Жми</span>
				<LikeButton rounded id={postId} />
			</div>
			<h2 className={styles.title}>Комментарии</h2>
			<CommentList comments={comments} />
			<CommentForm />
		</main>
	)
}
