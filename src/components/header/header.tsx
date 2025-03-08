'use client'
import { Logo, Profile } from '@/components'

import styles from './header.module.css'
import { createContext } from 'react';

const githubLink = 'https://github.com/MAChapurin/blog-ps'

export const AppContext = createContext({ githubLink });

export const Header: React.FC = () => {

	return (
		<AppContext.Provider value={{ githubLink }}>
			<header className={styles.header}>
				<Logo />
				<Profile />
			</header>
		</AppContext.Provider>
	)
}
