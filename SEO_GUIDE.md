# SEO Optimization Guide

This document outlines the SEO optimizations implemented for the ANTESO Biomedical website.

## ✅ Implemented SEO Features

### 1. **Metadata & Meta Tags**
- Comprehensive title and description
- Keywords for better search visibility
- Author and publisher information
- Canonical URLs to prevent duplicate content
- Robots meta tags for search engine crawling

### 2. **Open Graph Tags**
- Optimized for social media sharing (Facebook, LinkedIn)
- Custom images and descriptions
- Proper locale settings (en_IN for India)

### 3. **Twitter Card Tags**
- Large image cards for better visibility
- Optimized titles and descriptions

### 4. **Structured Data (JSON-LD)**
- Schema.org MedicalBusiness markup
- Company information, address, contact details
- Service types and social media links
- Helps search engines understand your business

### 5. **Sitemap**
- Auto-generated sitemap at `/sitemap.xml`
- Includes all major pages with priorities
- Updated automatically when pages change

### 6. **Robots.txt**
- Located at `/robots.txt`
- Allows all search engines to crawl
- Points to sitemap location

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_URL=https://antesobiomedical.com
```

This is used for:
- Canonical URLs
- Open Graph images
- Structured data URLs
- Sitemap generation

## 📝 Next Steps for Better SEO

### 1. **Google Search Console**
- Add your website to Google Search Console
- Submit your sitemap
- Monitor search performance

### 2. **Google Analytics**
- Already integrated via Vercel Analytics
- Consider adding Google Analytics 4 for detailed insights

### 3. **Page-Specific Metadata**
- Add unique metadata to each page
- Create `metadata` exports in individual page files
- Use the title template: `%s | ANTESO Biomedical`

### 4. **Image Optimization**
- Add `alt` attributes to all images
- Use descriptive filenames
- Optimize image sizes

### 5. **Content Optimization**
- Use semantic HTML (h1, h2, h3 tags properly)
- Add internal linking between pages
- Create quality, keyword-rich content

### 6. **Performance**
- Optimize Core Web Vitals
- Use Next.js Image component
- Implement lazy loading

### 7. **Mobile Optimization**
- Already responsive
- Test mobile usability in Search Console

### 8. **Local SEO**
- Add Google Business Profile
- Get reviews
- Add location-specific content

## 🔍 Verification Codes

When you set up Google Search Console, Bing Webmaster Tools, etc., add verification codes to `app/layout.tsx`:

```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  bing: 'your-bing-verification-code',
},
```

## 📊 Monitoring

- **Google Search Console**: Track search performance
- **Google Analytics**: Monitor user behavior
- **PageSpeed Insights**: Check performance scores
- **Schema Markup Validator**: Validate structured data

## 🎯 Key SEO Keywords

The website is optimized for:
- Medical imaging equipment
- Diagnostic imaging solutions
- AERB certified
- Radiation safety verification
- CT Scan equipment
- X-Ray systems
- Mammography
- Quality assurance medical equipment
- Biomedical equipment
- Healthcare technology

## 📱 Social Media Integration

- Facebook: https://www.facebook.com/profile.php?id=100069402677347
- LinkedIn: https://www.linkedin.com/company/antesobiomedical/

These are included in structured data for better social signals.

