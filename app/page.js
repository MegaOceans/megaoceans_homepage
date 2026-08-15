import HomePage from "./client/HomePage";

const siteUrl = "https://megaoceans.com";

export const metadata = {
  title: "Custom Web & Mobile App Development Company",
  description:
    "MegaOceans designs and develops custom websites, mobile apps, e-commerce products, and scalable software for startups and growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "MegaOceans | Custom Web & Mobile App Development",
    description:
      "Custom websites, mobile apps, e-commerce products, and scalable software built for startups and growing businesses.",
    siteName: "MegaOceans",
    images: [
      {
        url: "/header.png",
        width: 1000,
        height: 666,
        alt: "MegaOceans custom software development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MegaOceans | Custom Web & Mobile App Development",
    description:
      "Custom websites, mobile apps, e-commerce products, and scalable software for growing businesses.",
    images: ["/header.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "MegaOceans",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      email: "ishan@megaoceans.com",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MegaOceans",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "MegaOceans",
      url: siteUrl,
      description:
        "Custom web development, mobile app development, UI/UX design, e-commerce development, and software consulting.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Worldwide",
      serviceType: [
        "Custom web development",
        "Mobile app development",
        "UI/UX design",
        "E-commerce development",
        "Software consulting",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
