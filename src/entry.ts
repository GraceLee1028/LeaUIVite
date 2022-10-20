import { App } from "vue";
import LeaButton from './components/button'
import LeaIcon from './components/icon/index.vue'
import LeaContainer from './components/container'
// 导出单独组件
export {LeaButton,LeaIcon,LeaContainer}
//
export default{
  install(app:App):void{
    app.component(LeaButton.name,LeaButton)
    app.component(LeaIcon.name,LeaIcon)
    app.component(LeaContainer.name,LeaContainer)
  }
}