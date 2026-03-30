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
      friends: [
        {
          name: "GamerNoTitle",
          url:"https://bili33.top",
          avatar:"https://assets.bili33.top/img/AboutMe/logo-mini.png",
          description:"TECH OTAKUS SAVE THE WORLD"
        },
        {
          name: "Phrinky's Blog",
          url:"https://blog.rkk.moe",
          avatar:"https://blog.rkk.moe/images/profile.webp",
          description:"Ricky 的各种日常捏"
        },
        {
          name: "今朝酒",
          url:"https://www.kesazake.top/",
          avatar:"https://www.kesazake.top/assets/images/%E8%8A%B1%E3%82%88%E3%82%8A%E5%BC%BE%E4%B8%B8.avif",
          description:"你好，这里是今朝酒。"
        },
        {
          name: "時雨てる",
          url:"https://keqing.moe",
          avatar:"https://img.bili33.top/file/1774886086891_KeqingMoe.jpg",
          description:"心有所向，日复一日，必有精进"
        }
      ],
      labels: {
        latestPostsHeading: "- 木质调时刻",
        latestPostsMore: "品鉴",
        latestPostsEmptyPrefix: "暂时还没做好新的咖啡哦，先去"

      },
    }),
  ],
});
