const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0A0908"/>
  <path d="M16 46V18h8v19.8c0 7.1-3.8 10.2-9.1 10.2-1.5 0-2.8-.2-3.9-.6v-6.9c.8.3 1.7.5 2.8.5 1.4 0 2.2-.8 2.2-2.7V18h8v28h-8Z" fill="#D7B56D"/>
  <path d="M28 46 38.2 18h8.4L56 46h-8.3l-1.6-5.3h-8.8L35.7 46H28Zm11-11.5h5.5l-2.7-9.4L39 34.5Z" fill="#F8F2E8"/>
</svg>`;

export const dynamic = "force-static";

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml"
    }
  });
}
