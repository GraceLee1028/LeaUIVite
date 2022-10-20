import {defineConfig} from 'vite'
import vitejsPluginVue from '@vitejs/plugin-vue'
import viteJsPluginVueJsx from "@vitejs/plugin-vue-jsx"
export default defineConfig({
  plugins:[
    vitejsPluginVue(),
    viteJsPluginVueJsx()
  ]
})