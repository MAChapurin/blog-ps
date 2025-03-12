'use client'

import clsx from 'clsx'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

import styles from './pagination.module.css'
import { Icon } from '../icon/icon'

export function Pagination() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const PER_PAGE = 17

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const onDecrementPage = () => {
    const newPageNumber = page ? +page - 1 : 1
    router.push(pathname + '?' + createQueryString('page', `${newPageNumber}`))
  }

  const onIncrementPage = () => {
    const newPageNumber = page ? +page + 1 : PER_PAGE //сюда не попадем из-за дизаблед
    router.push(pathname + '?' + createQueryString('page', `${newPageNumber}`))
  }

  const onClick = (value: string) => {
    router.push(pathname + '?' + createQueryString('page', `${value}`))
  }

  return (
    <div className={styles.container}>
      <button
        onClick={onDecrementPage}
        disabled={!page || page === '1'}
        className={styles.prev}>
        <Icon id='arrow' width={20} height={20} />
        <span className={styles.hidden}>
          Предыдущая страница
        </span>
      </button>
      <button className={clsx(styles.link, {
        [styles.active]: Number(page) === 1 || !page
      })} onClick={() => onClick('1')}>
        1
      </button>
      <div className={clsx(styles.leftPoints, styles.hidden, {
        [styles.show]: Number(page) >= 6
      })} >...</div>
      {Array.from({ length: PER_PAGE - 2 }).map((_, index) => {
        const value = index + 2
        return (
          <button
            onClick={() => onClick(String(value))}
            className={clsx(styles.link,
              {
                [styles.active]: Number(page) === value || (!page && value === 1),
                [styles.hidden]: value !== 1 && value !== PER_PAGE && ((value >= Number(page) + 2) || value <= Number(page) - 2),
                [styles.show]: (Number(page) >= 13 && value >= 13) || (Number(page) < 6 && value < 6)
              })}
            key={index}>
            {value}
          </button>
        )
      })}
      <div className={clsx(styles.rightPoints, styles.hidden, {
        [styles.show]: Number(page) <= 12
      })} >...</div>
      <button className={clsx(styles.link, {
        [styles.active]: Number(page) === PER_PAGE
      })} onClick={() => onClick(String(PER_PAGE))}>
        {PER_PAGE}
      </button>
      <button
        onClick={onIncrementPage}
        disabled={Number(page) >= PER_PAGE}
        className={styles.next}>
        <span className={styles.hidden}>
          Следующая страница
        </span>
        <Icon id='arrow' width={20} height={20} />
      </button>
    </div>
  )
}