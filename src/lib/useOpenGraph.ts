import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation'
import { defaultDescription, defaultOGImage, defaultOGURL } from '../../config'

function useOpenGraph(post?) {
  const router = useRouter()
  const { t, locale } = useTranslation()
  return {
    title: post?.title || t('ogTitle'),
    type: t('ogType'),
    image: t('ogImage'),
    url: `${process.env.NOW_URL || defaultOGURL}${router.asPath}`,
    // audio: t("ogAudio"),
    description: post?.excerpt || t('ogDescription'),
    determiner: t('ogDeterminer'),
    locale: locale,
    localeAlternate: t('ogLocaleAlternate'),
    siteName: t('ogSiteName'),
    // video: t("ogVideo"),
  }
}

export default useOpenGraph
