export async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../app/articles/${articleFilename}`
  )

  return {
    slug: articleFilename.replace(/(\/content)?\.mdx$/, ''),
    ...meta,
    component,
  }
}