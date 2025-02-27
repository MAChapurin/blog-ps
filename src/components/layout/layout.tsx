import { Header } from '@/components'

import styles from './layout.module.css'

export const Layout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	)
}
