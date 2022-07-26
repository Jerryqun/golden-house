/**
 * https://fe.ecool.fun/topic/0b096e94-b846-448b-ae4b-b4f500e96bf1?orderBy=updateTime&order=desc&tagId=20
 */

//1、选择合适的图片格式
//2、使用雪碧图
var path = require("path");
var SpritesmithPlugin = require("webpack-spritesmith");

module.exports = {
  // ...
  plugins: [
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, "src/ico"),
        glob: "*.png",
      },
      target: {
        image: path.resolve(__dirname, "src/spritesmith-generated/sprite.png"),
        css: path.resolve(__dirname, "src/spritesmith-generated/sprite.styl"),
      },
      apiOptions: {
        cssImageRef: "~sprite.png",
      },
    }),
  ],
};

//3、使用 iconfont
//4、使用 base64 格式
module.exports = {
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)(?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10240,
          name: utils.assetsPath("img/[name].[hash:7].[ext]"),
        },
      },
    ],
  },
};
//5、使用 css 代替图片
//6、使用 CDN 图片
//7、图片懒加载
//8、图片预加载
//9、渐进式图片
//10、压缩图片
module.exports = {
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)(?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10240, // 10kb
          name: utils.assetsPath("img/[name].[hash:7].[ext]"),
        },
      },
    ],
  },
};

/**
 * 选择合适的图片格式和压缩大图，可从根源上截图大图加载过慢的问题。
使用雪碧图，iconfont，base64，css 代替图片等可减少图片 http 请求，提高页面加载速度。
使用 CDN 图片可达到分流的效果，减少服务券压力。
图片懒加载，预加载，渐进式图片等可不同程度减少白屏时间，提高产品体验。
 */
