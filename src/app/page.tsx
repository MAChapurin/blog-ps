import { Suspense } from 'react'
import { getPosts } from '@/api'
import { PostList } from '@/components'


export default async function Home() {
	const posts: Post[] = await getPosts()
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<main>
				<PostList posts={posts} />
			</main>
		</Suspense>
	)
}
