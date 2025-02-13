import { PostItem } from '@/components'
import styles from './post-list.module.css'

interface PostListProps {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts
        .map(post =>
          <li className={styles.item} key={post.id}>
            <PostItem body={post.body + post.body} title={post.title} id={post.id} />
          </li>
        )
      }
    </ul>
  )
}