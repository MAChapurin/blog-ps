import Link from "next/link";
import { FC } from "react";

import styles from './author.module.css';

interface AuthorProps {
  href?: string
  author?: string
}

export const Author: FC<AuthorProps> = ({ href = '/', author = 'Front-end' }) => {
  return (
    <Link className={styles.author} href={href}>{author}</Link>
  )
}