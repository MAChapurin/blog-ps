import { Logo, Profile } from '@/components'

import styles from './header.module.css'

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Profile />
		</header>
	)
}
