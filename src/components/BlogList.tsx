import React from 'react'
import useTranslation from '../hooks/useTranslation'
import { getCurrentPost } from '../lib/api'
import {
  languageNames,
  locales,
  translateLanguageNames,
} from '../translations/config'
import { Locale } from '../translations/types'
import LocaleLink from './LocaleLink'
import PageHeader, { SubHeader } from './styles/PageHeader'

export const ListItem = ({ post }: { post: any }) => {
  const { locale, t } = useTranslation()
  const isPostInCurrentLocale = Boolean(post[locale]?.slug)
  const filteredLocales = locales.filter((lang) => lang != locale)
  const otherLocales = Object.keys(post)
    // TODO: fix this
    // @ts-ignore
    .filter((el: Locale) => filteredLocales.includes(el))
    .filter((el) => el !== null)
    .map((el) => translateLanguageNames(locale, el))
  const currentPost = getCurrentPost(post, locale)

  return (
    <div className="mt-8 blogItem hover:bg-gray-900 py-2 px-4 rounded transition ease-in-out duration-150">
      <LocaleLink
        href={`/blog/${currentPost.slug}`}
        as={`/blog/${currentPost.slug}`}
      >
        <a className="block arrow-link">
          <h3 className="mt-2 text-2xl leading-7 tracking-normal font-semibold text-indigo-400 blogItem-hover">
            {currentPost.title}
          </h3>
          <p className="mt-3 text-sm leading-5 text-indigo-500">
            <time dateTime={currentPost.date}>{currentPost.date}</time>
          </p>
          <p className="text-base leading-6 text-gray-100">
            {currentPost.excerpt}
          </p>
          <span className="text-base leading-6 font-medium text-indigo-400 transition ease-in-out duration-150 blogItem-hover">
            {t('readFullBlog')}
          </span>
          {isPostInCurrentLocale ? (
            otherLocales.length > 0 ? (
              <span className="float-right text-base leading-6 font-medium text-indigo-400">
                <a className="yellow-link">{`${t(
                  'blogListItemAlsoAvailable'
                )} ${otherLocales}`}</a>
              </span>
            ) : (
              <span className="float-right text-base leading-6 font-medium text-indigo-400">
                <a className="yellow-link">{`${t(
                  'blogListItemOnlyAvailable'
                )} ${languageNames[locale]}`}</a>
              </span>
            )
          ) : otherLocales.length > 0 ? (
            <span className="float-right text-base leading-6 font-medium text-indigo-400">
              <a className="yellow-link">{`${t(
                'blogListItemOnlyAvailable'
              )} ${otherLocales}`}</a>
            </span>
          ) : (
            <span className="float-right text-base leading-6 font-medium text-indigo-400">
              {`${t('blogListItemNotAvailable')} ${languageNames[locale]}`}
            </span>
          )}
        </a>
      </LocaleLink>
    </div>
  )
}

const BlogList = ({ posts }: { posts: any }) => {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader>Articles</PageHeader>
      <SubHeader>{t('subHeader')}</SubHeader>
      <div className="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div className="mt-6 border-t-2 border-yellow-400 ">
            {posts.length > 0 &&
              posts.map((post: any, i: number) => (
                <ListItem post={post} key={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogList
