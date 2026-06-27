export default function sitemap() {
  const baseUrl = "https://www.rawbin.in";
  const routes = ["", "/technology", "/about-us", "/science", "/roe-calculator"];
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
