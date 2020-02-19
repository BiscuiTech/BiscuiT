// Import built-in types for API routes
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!res) return {};
  try {
    // Set response header
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: 'https://biscui.tech',
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({ url: '/fr', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY });
    smStream.write({ url: '/en', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY });
    smStream.write({ url: '/who', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    //smStream.write({ url: '/what', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    //smStream.write({ url: '/how', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    smStream.write({ url: '/contact', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY });
    // E.g. we create a sitemap.xml for articles
    // Set articles change frequencey is weekly
    //const articles = await fetchArticles();
    /* articles.map(article => {
      smStream.write({
        url: `/article/${article.id}/${article.slug}`,
        lastmod: article.updatedAt,
        changefreq: EnumChangefreq.WEEKLY,
      });
    }); */
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on('error', e => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};
