import { browser } from '$app/environment'
import '$lib/i18n'
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = async ({ url }) => {
  if (browser) {
    locale.set(window.navigator.language)
  }
  await waitLocale()
  return { url: url.pathname }
}
