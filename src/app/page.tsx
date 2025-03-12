import { getPosts } from '@/api'
import { Pagination, PostList, Skeleton } from '@/components'
import { Suspense } from 'react'

import styles from './page.module.css'


export default async function Home(props: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const searchParams = await props.searchParams
	const posts: Post[] = await getPosts(searchParams?.page as string)
	if (posts.length === 0) {
		return (
			<main className={styles.main}>
				<p className={styles.text}>Не удалось найти список постов</p>
			</main>
		)
	}
	return (
		<Suspense fallback={<Skeleton />}>
			<main className={styles.main}>
				<PostList posts={posts} />
				<Pagination />
			</main>
		</Suspense>
	)
}
