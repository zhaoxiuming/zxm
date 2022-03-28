//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) //安装一个依赖vue的插件
//1.定义组件
// import MyHome from '../components/MyHome'
import SouSuo from '../components/SouSuo'
import FaXian from '../components/FaXian'
import PaiHang from '../components/PaiHang'

import RB from '@/views/ReBang'
import WB from '@/views/WenBang'
import YB from '@/views/YaoBang'
import TB from '@/views/TongBang'
//2.配置路由映射
let routes = [
    // {path:"/home",component:MyHome,name:"MyHome"},
    {path:"/",component:FaXian,name:"FaXian"},
    {path:"/SouSuo",component:SouSuo,name:"SouSuo"},
    {
        path:"/PaiHang",component:PaiHang,name:"PaiHang",
        children:[
            {path:"/PaiHang/RB",component:RB,name:"RB"},
            {path:"/PaiHang/WB",component:WB,name:"WB"},
            {path:"/PaiHang/YB",component:YB,name:"YB"},
            {path:"/PaiHang/TB",component:TB,name:"TB"},
        ]
    },
]
// /表示的是项目的根目录  home是path值 随便写
//3.实例化路由
let router = new VueRouter({
    routes
})
export default router
