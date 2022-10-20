# 1.准备vite的开发环境
## 1.pnpm的使用

  ```
  # 全局安装
  npm i pnpm -g
  # 查看源
  pnpm config get registry
  # 切换至淘宝源
  pnpm config set registry https://registry.npmmirror.com/

  # 使用
  pnpm install 包名
  # 默认写入dependencies
  pnpm add 包名
  # -D 写入devDependencies
  pnpm add  -D
  # -g 全局安装
  pnpm add -g
  ```
## 2. 生成package.json

```
mkdir LEA-UI-VITE
cd LEA-UI-VITE
pnpm init
```
## 3.安装vite【当前版本@3.1.8】

```
pnpm add -D vite
```
## 4.添加index.html页面,代码如下

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
    <title>组件库开发</title>
    <link rel="shortcut icon" href="./favicon.ico">
  </head>
  <body>
    <div id="app">主页</div>
  </body>
</html>
```
## 5.启动【npx是Npm5.2新增的命令】

```
npx vite
```
## 6.添加文件

> src【目录】>main.ts【文件】
> 在index.html中引入main.ts,通过module
```
<body>
    <div id="app">主页</div>
    <script type="module" src="./src/main.ts"></script>
  </body>
```
## 7. 在package.json里面加上启动脚本【让其可以npm run dev启动项目】

```
"scripts":{
  "dev":"vite"
}
```
# 2.开发vue组件
## 1. 安装vue【当前版本3.2.41，pnpm i vue@"3.2.41"】

```
pnpm i vue
```
## 2. 添加components【目录】>button【目录】>index.ts文件

```
import { defineComponent,h} from 'vue'
  
export default defineComponent({
  name:'LeaButton',
  render(){
    return h('button',null,'LeaButton')
  }
})
```
## 3.在main.ts里面加上如下代码

```
import { createApp } from "vue";
import LeaButton from './components/button';

createApp(LeaButton).mount('#app')
```

## 4. 启动
```
npm run dev
```

# 3. 提供vue3单文件组件支持，根目录新建vite.config.js文件
## 3.1 安装插件
```
# 安装插件[当前版本：3.1.2]
pnpm i @vitejs/plugin-vue -D

# 在vite.config.ts文件填写
import vitejsPluginVue from '@vitejs/plugin-vue'
export default defineConfig({
   plugins: [
      vitejsPluginVue()
   ],
})

```

## 3.2 在之前的components目录下新建icon目录，新建index.vue项目;
- index.vue代码
```
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name:'LeaIcon',
  
})
</script>
<template>
  <span>icon</span>
</template>
<style>
</style>

```
## 3.3 在main.ts文件中加入如下代码
```
import { createApp } from "vue";

//该语句报错，找不到该模块【解决方法3.3.1】
import LeaIcon from './components/icon/index.vue';

createApp(LeaIcon).mount('#app')
```
### 3.3.1 解决找不到该模块的问题
```
# 在[src]目录下，新建shims-vue.d.ts声明文件【声明文件以.d.ts】,代码如下
declare module "*.vue"{
  import { DefineComponent } from "vue";
  const component:DefineComponent<{},{},any>;
  export default component;
}
```

# 4. 支持JSX语法，配置在vite.config.js文件
## 安装和配置
```
# 安装[当前版本：2.0.1]
pnpm i @vitejs/plugin-vue-jsx -D

# 配置在vite.config.js文件
import viteJsPluginVueJsx from "@vitejs/plugin-vue-jsx"
export default defineConfig({
  plugins:[
    viteJsPluginVueJsx()
  ]
})
# 在components目录下，新建组件 container目录>index.jsx【想要支持ts:则为index.tsx】；代码如下：
import {defineComponent} from "vue";
export default defineComponent({
  name:'LeaContainer',
  render(){
    return <section>container</section>
  }
})
# 如果是index.tsx，jsx语法会报错，此时配置tsconfig.json文件即可
{
    "compilerOptions": {
        "declaration": true, /* 生成相关的 '.d.ts' 文件。 */
        "declarationDir": "./dist/types", /* '.d.ts' 文件输出目录 */
        "jsx": "preserve",
    },
    "include": [
        "./**/*.*",
        "./shims-vue.d.ts",
    ],
    "exclude": [
        "node_modules"
    ],
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": "true"
}

# 在main.ts上引入组件
import { createApp } from "vue";
import LeaContainer from './components/container/index'
createApp(LeaContainer).mount('#app')
```



