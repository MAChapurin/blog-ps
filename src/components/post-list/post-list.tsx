'use client'

import { PostItem } from '@/components'
import { motion } from "motion/react"

import { PostListProps } from './post-list.types'

import styles from './post-list.module.css'


const variants = {
	hidden: {
		translateY: 100,
		opacity: 0
	},
	visible: {
		translateY: 0,
		opacity: 1,
	},
	settings: {
		duration: 0.3,
		type: 'spring',
		stiffness: 300,
	}
}


export const PostList: React.FC<PostListProps> = ({ posts }) => {
	return (
		<ul className={styles.list} aria-label='Список постов'>
			{posts.map((post, index) => (
				<motion.li
					variants={variants}
					key={post.id}
					initial={'hidden'}
					whileInView={'visible'}
					transition={{ ...variants.settings, delay: 0.1 * index }}
					viewport={{ once: true }}
				>
					<PostItem
						body={post.body + post.body}
						title={post.title}
						id={post.id}
					/>
				</motion.li>
			))}
		</ul>
	)
}
