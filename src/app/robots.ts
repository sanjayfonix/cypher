import { MetadataRoute } from 'next';
import { domainUrl } from '../../global_cyphr_config';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${domainUrl}/sitemap.xml`,
    };
}
