
//声明文件【以.d.ts为后缀】
/**
 * declare module Module_Name {
* }
 */
//该声明文件解决.vue引入问题
declare module "*.vue"{
  import { DefineComponent } from "vue";
  const component:DefineComponent<{},{},any>;
  export default component;
}