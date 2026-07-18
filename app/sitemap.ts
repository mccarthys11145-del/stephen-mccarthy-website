import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/profile'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-18T00:00:00-04:00')
  const routes = ['', '/about', '/professional-record', '/media-press', '/testimonials', '/contact']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/professional-record' ? 0.9 : 0.7,
  }))
}
