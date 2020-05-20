import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';

export default function (frontmatter?) {
  const router = useRouter()
  const { t, locale } = useTranslation()
  return {
    title: frontmatter?.title || t('ogTitle'),
    type: t('ogType'),
    image: t('ogImage'),
    url: `${process.env.NOW_URL}${router.pathname}`,
    audio: t('ogAudio'),
    description: frontmatter?.description || t('ogDescription'),
    determiner: t('ogDeterminer'),
    locale: locale,
    localeAlternate: t('ogLocaleAlternate'),
    siteName: t('ogSiteName'),
    video: t('ogVideo'),
  };
}
