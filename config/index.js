const path = require('path')
import TerserPlugin from "terser-webpack-plugin"

const config = {
  projectName: "heartbeat-feeling-ui",
  date: "2023-6-22",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [
    "taro-plugin-compiler-optimization",
    [
      "@tarojs/plugin-html",
      {
        // 包含 `van-` 的类名选择器中的 px 单位不会被解析
        //  pxtransformBlackList: [/van-/]
      },
    ],
  ],
  // JS 代码压缩
  terser: {
    enable: true,
    config: {
      // 配置项同 https://github.com/terser/terser#minify-options
    },
  },
  // es5 代码压缩
  esbuild: {
    minify: {
      enable: true,
      config: {
        // 配置项同 https://github.com/privatenumber/esbuild-loader#minifyplugin
        target: "es5", // target 默认值为 es5
      },
    },
  },
  // CSS 代码压缩
  csso: {
    enable: true,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    },
  },
  alias: {
    "@": path.resolve(__dirname, "..", "src"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/assets": path.resolve(__dirname, "..", "src/assets"),
    "@/api": path.resolve(__dirname, "..", "src/api"),
    "@/project": path.resolve(__dirname, "..", "project.config.json"),
  },
  sass: {
    resource: [
      // sass 全局变量
      path.resolve(__dirname, "..", "src/styles/index.scss"),
    ]
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: "webpack5",
  devServer: {
    hot: true,
    // historyApiFallback: true,
    // disableHostCheck: true,
    host: "localhost",
    port: 9093,
    proxy: {
      "/api": {
        target: "https://xxx.com",
        // pathRewrite: {
        //   '^/appv3/api': ''
        // }
      },
      "/api1": {
        target: "https://xxx.com",
        pathRewrite: {
          "^/api1": "/",
        },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域
    },
  },
  // 小程序专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    // 自定义 Webpack 配置
    webpackChain(chain, webpack) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('@linaria/webpack-loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
      if (process.env.NODE_ENV !== "development") {
        chain.mode("production");
        chain.optimization.minimize(true);
        chain.plugin("terser").use(TerserPlugin, [
          {
            cache: true,
            extractComments: false,
            parallel: true,
            terserOptions: {
              output: {
                comments: false,
              },
              compress: {
                pure_funcs:
                  process.env.CONF_ENV === "prod" ? ["console.log"] : [], //过滤掉打印
              },
            },
          },
        ]);
      }
    },
  },
  // H5 端专用配置
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    // 自定义 Webpack 配置
    webpackChain(chain, webpack) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('@linaria/webpack-loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
      if (process.env.NODE_ENV !== "development") {
        chain.mode("production");
        chain.optimization.minimize(true);
        chain.plugin("terser").use(TerserPlugin, [
          {
            cache: true,
            extractComments: false,
            parallel: true,
            terserOptions: {
              output: {
                comments: false,
              },
              compress: {
                pure_funcs:
                  process.env.CONF_ENV === "prod" ? ["console.log"] : [], //过滤掉打印
              },
            },
          },
        ]);
      }
    },
  },
  rn: {
    appName: "taroDemo",
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
