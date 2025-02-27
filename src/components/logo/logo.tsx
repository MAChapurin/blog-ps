import Link from 'next/link'

import styles from './logo.module.css'

export const Logo: React.FC = () => {
	return (
		<Link className={styles.logo} href={'/'}>
			.my_blog
		</Link>
	)
}
