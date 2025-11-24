import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",     // allow everything
    },
    sitemap: "https://www.aminishaorganics.com/sitemap.xml",
  };
}
