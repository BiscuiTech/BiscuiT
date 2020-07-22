// Import built-in types for API routes
import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap'
import { createGzip } from 'zlib'
import { getAllPosts } from '../../lib/api'
import { locales } from '../../translations/config'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!res) return {}
  try {
    // Set response header
    res.setHeader('content-type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip')

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: 'https://biscui.tech',
    })

    const pipeline = smStream.pipe(createGzip())
    // Add any static entries here
    smStream.write({
      url: '/fr',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/en',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/fr/about',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/fr/contact',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/fr/uses',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/fr/blog',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/en/about',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/en/contact',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/en/uses',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    smStream.write({
      url: '/en/blog',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    })
    // E.g. we create a sitemap.xml for articles
    // Set articles change frequencey is weekly
    const blogs = await getAllPosts(['slug', 'date'])
    blogs.flatMap((blog: any) => {
      locales.map((locale) => {
        smStream.write({
          url: `/${locale}/blog/${blog.slug}`,
          lastmod: blog.date,
          changefreq: EnumChangefreq.WEEKLY,
        })
      })
    })
    smStream.end()

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline)
    // stream the response
    pipeline.pipe(res).on('error', (e) => {
      throw e
    })
  } catch (e) {
    res.status(500).end()
  }
}
