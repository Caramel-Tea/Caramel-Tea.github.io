import { defineConfig } from "astro/config";
import komorebi from "komorebi-theme";

export default defineConfig({
  site: 'https://Caramel-Tea.github.io',
  integrations: [
    komorebi({
      title: "焦茶咖啡厅",
      tagline: "Caramel Tea",
      home: {
        eyebrow: "Hava a Cup of Tea?",
        title: "Hi",
        description: "欢迎来到焦茶染香的回忆咖啡厅！",
      },
      labels: {
        latestPostsHeading: "- 木质调时刻",
        latestPostsMore: "品鉴",
        latestPostsEmptyPrefix: "暂时还没做好新的咖啡哦，先去"

      },
    }),
  ],
});
