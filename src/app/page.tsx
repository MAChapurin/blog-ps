// import { Suspense } from 'react'
import { getPosts } from '@/api'
import { PostList } from '@/components'
import { Pagination } from '@/components/pagination/pagination'
import Loading from './loading'
import { Suspense } from 'react'

import styles from './page.module.css'

export const revalidate = 60

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Home(props: {
	params: Params
	searchParams: SearchParams
}) {
	const params = await props.params
	const searchParams = await props.searchParams
	const posts: Post[] = await getPosts(searchParams?.page as string)
	console.log(params, searchParams)
	return (
		<Suspense fallback={<Loading />}>
			<main className={styles.main}>
				<PostList posts={posts} />
				{/* <Loading /> */}
				<Pagination />
			</main>
		</Suspense>
	)
}
