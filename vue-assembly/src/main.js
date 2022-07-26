import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import XLSX from 'xlsx'
//echars
import * as echarts from 'echarts';
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
//注册 API地址
import api from "@/api/api";

Vue.prototype.$api = api;

// 注册防抖
// import * as utils from '../common/utils.js';
//这样才行，我也不知道为什么，反正就是需要多一个 * as
// Vue.use(utils)//引用这个utils
// Vue.prototype.$utils = utils //全局请求方法
// console.log(echarts);
// import { createLogger } from 'vuex';
//axios
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(XLSX)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
//引入自定义element样式
import './html/css/element.css'



// 自定义表格组件
import dm_table from '@/components/dm_table.vue'
Vue.component("dm_table", dm_table);//全局自定义组件
//时间控件组件  单月查询
import dm_time_month from '@/components/dm_time_month.vue'
Vue.component("dm_time_month", dm_time_month);
// 单日查询
import dm_time_day from '@/components/dm_time_day.vue'
Vue.component("dm_time_day", dm_time_day);
// 日区间查询
import dm_time_day_section from '@/components/dm_time_day_section.vue'
Vue.component("dm_time_day_section", dm_time_day_section);
//button样式组件
import dm_button from '@/components/dm_button.vue'
Vue.component("dm_button", dm_button);
//tab切换组件
import dm_tab from '@/components/dm_tab.vue'
Vue.component("dm_tab", dm_tab);
//表格标题图标
import dm_icon from '@/components/dm_icon.vue'
Vue.component("dm_icon", dm_icon);

//左侧bar
import dm_bar from '@/components/dm_bar.vue'
Vue.component("dm_bar", dm_bar);
//添加修改弹窗
import dm_meng from '@/components/dm_meng.vue'
Vue.component("dm_meng", dm_meng);
//布局
import dm_flex from '@/components/dm_flex.vue'
Vue.component("dm_flex", dm_flex);
import dm_slot from '@/components/dm_slot.vue'
Vue.component("dm_slot", dm_slot);
//s=下拉选单
import dm_option from '@/components/dm_option.vue'
Vue.component("dm_option", dm_option);
//排序
import dm_sort from '@/components/dm_sort.vue'
Vue.component("dm_sort", dm_sort);
// 新版表格样式
import dm_newtable from '@/components/dm_newtable.vue'
Vue.component("dm_newtable", dm_newtable);
//加密
import md5 from 'js-md5';

Vue.prototype.$md5 = md5;

import sha256 from 'js-sha256';

Vue.prototype.$sha256 = sha256;

import base64 from 'js-base64';

Vue.prototype.$base64 = base64;






import DataTableComp from "@/components/DataTableComp";
import DataTableRow from "@/components/DataTableRow";

Vue.component("data-table-thead", DataTableComp); //数据表格组件
Vue.component("data-table-row", DataTableRow); //数据表格行组件


Vue.filter('dataFormt', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d}`;
  // return `${ y } -${ m } -${ d } ${ hh }:${ mm }:${ ss }`
})


import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)

//监听页面 浏览器更换宽度 页面刷新自适应
// function onResize() {
//   location.reload();
// }
// window.addEventListener('resize', onResize);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
