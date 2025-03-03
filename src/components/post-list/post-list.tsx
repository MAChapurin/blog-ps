import { PostItem } from '@/components'

import { PostListProps } from './post-list.types'

import styles from './post-list.module.css'



export const PostList: React.FC<PostListProps> = ({ posts }) => {
	return (
		<ul className={styles.list}>
			{posts.map(post => (
				<li key={post.id}>
					<PostItem
						body={post.body + post.body}
						title={post.title}
						id={post.id}
					/>
				</li>
			))}
		</ul>
	)
}
