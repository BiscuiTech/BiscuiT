import React from 'react'
import PageHeader, { SubHeader } from './styles/PageHeader'
import useTranslation from '../hooks/useTranslation'
import Link from 'next/link'



const noBlogs = {
  fr: "Aucun blogue pour l'instant. Revenez plus tard!",
  en: "No blogs for now. Come back later!",
}

const ListItem = ({ title, date, exceprt, locale, path, t }) => (
  <div className="mt-8 blogItem hover:border-gray-700 border-4 border-transparent py-2 px-4 rounded transition ease-in-out duration-150">
    <Link
      href={`/[lang]/blog/${path}`} as={`/${locale}/blog/${path}`}
    >
      <a className="block">
        <h3 className="mt-2 text-2xl leading-7 tracking-normal font-semibold text-indigo-400 blogItem-hover">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-5 text-indigo-500">
          <time dateTime={date}>{date}</time>
        </p>
        <p className="text-base leading-6 text-gray-100">
          {exceprt}
        </p>
        <span className="text-base leading-6 font-medium text-indigo-400 transition ease-in-out duration-150 blogItem-hover">{t('readFullBlog')} →</span>
      </a>
      {/* </Link>
    <Link href={`/[lang]/blog/${path}`} as={`/${locale}/blog/${path}`}> */}
      {/* <a className="text-base leading-6 font-medium text-indigo-500 transition ease-in-out duration-150">
        {t('readFullBlog')} →
              </a> */}

    </Link>
  </div>
)

const BlogList = ({ posts }) => {
  const { t, locale } = useTranslation()
  return (
    <>
      <PageHeader>Articles</PageHeader>
      <SubHeader>{t('subHeader')}</SubHeader>
      <div className="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          {/* <div className="contaier flex justify-center">
            <input aria-label="Email address" type="email" required className="appearance-none w-full px-4 py-2 border border-gray-300 text-base leading-6 rounded-md text-gray-100 bg-white placeholder-gray-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out lg:max-w-sm bg-gray-900 border-gray-900" placeholder={t('searchBar')} />
          </div> */}
          <div className="mt-6 border-t-2 border-yellow-400 ">
            {posts.length > 0 && posts.map((post, i) => (
              <ListItem
                date={post.frontmatter.date}
                exceprt={post.frontmatter.exceprt}
                path={post.slug}
                locale={locale}
                t={t}
                title={post.frontmatter.title}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogList