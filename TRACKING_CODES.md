# Specialized Plastic Surgery - Tracking & Analytics Codes
> Extracted from live site (specializedplasticsurgery.com) on 2026-03-11
> To be implemented on the new site before going live

---

## Google Tag Manager (GTM)
- **Container ID:** `GTM-WSF5XFK7`

## Google Tag (Site Kit)
- **Config ID:** `GT-KD7KFQZQ`
- **Developer ID:** `dZTNiMT`

## Google Analytics 4 (GA4)
- **Measurement ID 1:** `G-RVC12S0KBR`
- **Measurement ID 2:** `G-HWVLVQWE07`

## Google Ads Conversion Tracking
- **Conversion ID:** `AW-16819763825`
- **Conversion Labels:**
  - `kGULCP6esKMaEPH0pNQ-` (Contact Us)
  - `iZRnCKabrKMaEPH0pNQ-` (Contact Us, value: $1.00 USD)
  - `wm56CMfTlLwaEPH0pNQ-`
- **Conversion Event:** `ads_conversion_Contact_Us_1`

## Google Search Console
- No `<meta name="google-site-verification">` tag found on live site
- Verification may be via DNS record or HTML file upload (check Google Search Console dashboard)

## Sitemap
- Current: `https://specializedplasticsurgery.com/sitemap_index.xml`

## Other Tracking
- No Facebook Pixel / Meta Pixel found
- No HotJar found
- No Bing / Yandex / Pinterest verification tags found

---

## Implementation Notes

When going live, add the GTM container to `<head>` and `<body>` in the Next.js layout:

### Head snippet (goes in layout.tsx `<head>`):
```html
<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-WSF5XFK7"></script>
```

### Body snippet (goes right after `<body>`):
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSF5XFK7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### gtag.js snippet:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GT-KD7KFQZQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GT-KD7KFQZQ');
  gtag('config', 'G-RVC12S0KBR');
  gtag('config', 'G-HWVLVQWE07');
  gtag('config', 'AW-16819763825');
</script>
```

### Google Ads Conversion Events (fire on form submissions):
```js
gtag('event', 'conversion', {
  send_to: 'AW-16819763825/kGULCP6esKMaEPH0pNQ-'
});
```
