import Link from "next/link"
import { FC } from "react";
import { TextDivider } from "@/components";

import styles from './comment.module.css';


export const Comment: FC<Pick<Comment, 'name' | 'email' | 'body'>> = ({ name, email, body }) => {
  return (
    <div>
      <div className={styles.header}>
        <Link className={styles.author} href={'/'}>{name}</Link>
        <TextDivider />
        <a className={styles.email} href={`mailto:${email}`}>{email}</a>
      </div>
      <p className={styles.description}>
        {body}
      </p>
    </div>
  )
}