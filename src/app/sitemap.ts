import { MetadataRoute } from 'next';
import { domainUrl } from '../../global_cyphr_config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = domainUrl;

    const routes = [
        '',
        '/pages/aboutus',
        '/pages/careers',
        '/pages/contactus',
        '/pages/discoveredu',
        '/pages/legal',
        '/pages/refer_case',
        '/pages/search',
        '/pages/careers/jobdisc/{id}',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const services = [
        'consult',
        'geospatial',
        'social-intel',
        'brand-defence',
    ].map((slug) => ({
        url: `${baseUrl}/pages/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const industries = [
        'insurance',
        'employer',
        'law',
        'academia',
    ].map((slug) => ({
        url: `${baseUrl}/pages/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));




    return [...routes, ...services, ...industries];
}
