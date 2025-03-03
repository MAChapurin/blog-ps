type PromisePageId = Promise<{ id: string }>

export type DetailPostPageProps = {
  params: PromisePageId
}

export type MetaProps = {
  params: PromisePageId
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
