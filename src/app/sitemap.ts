import type { MetadataRoute } from "next";

const siteUrl = "https://www.doobarosstech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/products", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
