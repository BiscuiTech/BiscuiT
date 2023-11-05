<script>
	import { _ } from 'svelte-i18n';

	export let post;

	/*   const { locale, t } = useTranslation()
  const isPostInCurrentLocale = Boolean(post[locale]?.slug)
  const filteredLocales = locales.filter((lang) => lang != locale)
  const otherLocales = Object.keys(post)
    // TODO: fix this
    // @ts-ignore
    .filter((el: Locale) => filteredLocales.includes(el))
    .filter((el) => el !== null)
    .map((el) => translateLanguageNames(locale, el))
  const currentPost = getCurrentPost(post, locale) */
</script>

<div class="mt-8 blogItem hover:bg-gray-900 py-2 px-4 rounded transition ease-in-out duration-150">
	<a href={`/blog/${post.slug}`} class="block arrow-link">
		<h3
			class="mt-2 text-2xl leading-7 tracking-normal font-semibold text-indigo-400 blogItem-hover"
		>
			{post.title}
		</h3>
		<p class="mt-3 text-sm leading-5 text-indigo-500">
			<time dateTime={post.publishedOn}>{post.publishedOn}</time>
		</p>
		<p class="text-base leading-6 text-gray-100">
			{post.excerpt}
		</p>
			<span
				class="text-base leading-6 font-medium text-indigo-400 transition ease-in-out duration-150 blogItem-hover"
			>
				{$_('home.readFullBlog')}
			</span>
		<!-- {isPostInCurrentLocale ? (
            otherLocales.length > 0 ? (
              <span class="float-right text-base leading-6 font-medium text-indigo-400">
                <a class="yellow-link">{`${t(
                  'blogListItemAlsoAvailable'
                )} ${otherLocales}`}</a>
              </span>
            ) : (
              <span class="float-right text-base leading-6 font-medium text-indigo-400">
                <a class="yellow-link">{`${t(
                  'blogListItemOnlyAvailable'
                )} ${languageNames[locale]}`}</a>
              </span>
            )
          ) : otherLocales.length > 0 ? (
            <span class="float-right text-base leading-6 font-medium text-indigo-400">
              <a class="yellow-link">{`${t(
                'blogListItemOnlyAvailable'
              )} ${otherLocales}`}</a>
            </span>
          ) : (
            <span class="float-right text-base leading-6 font-medium text-indigo-400">
              {`${t('blogListItemNotAvailable')} ${languageNames[locale]}`}
            </span>
          )} -->
	</a>
</div>
