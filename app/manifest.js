export default function manifest() {
  return {
    name: "MegaOceans",
    short_name: "MegaOceans",
    description: "Custom web, mobile app, and software development.",
    start_url: "/",
    display: "standalone",
    background_color: "#001220",
    theme_color: "#001220",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
