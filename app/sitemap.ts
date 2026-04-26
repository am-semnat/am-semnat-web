import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = [
  "",
  "/aplicatie",
  "/dezvoltatori",
  "/comparatie/eidromania",
  "/preturi",
  "/cum-construim",
  "/contact",
  "/legal/confidentialitate",
  "/legal/termeni",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
