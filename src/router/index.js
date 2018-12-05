import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router);

/* Layout */
import Layout from 'components/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },

  {
    path: '/',
    component: () => _import('login/index'),
    redirect: '/login',
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },


  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
  //     {
  //       path: 'post',
  //       name: 'Post',
  //       component: _import('table/index'),
  //       meta: { title: '发送', icon: 'table' }
  //     },
      {
        path: 'all',
        name: 'All',
        component: _import('table/all'),
        meta: { title: '发', icon: 'table' }
      },
      {
        path: 'user',
        name: 'User',
        component: _import('table/userInfo'),
        meta: { title: '个人信息', icon: 'table' },
        hidden:true
      },
      {
        path: 'edit',
        name: 'Edit',
        component: _import('table/edit'),
        meta: { title: '发消息', icon: 'table' },
        hidden:true
      },
      {
        path: 'read',
        name: 'Read',
        component: _import('table/read'),
        meta: { title: '已读', icon: 'table' },
        hidden:true
      },
      {
        path: 'noRead',
        name: 'NoRead',
        component: _import('table/noRead'),
        meta: { title: '未读', icon: 'table' },
        hidden:true
      },
      {
        path: 'res',
        name: 'Res',
        component: _import('table/res'),
        meta: { title: '读消息', icon: 'table' },
        hidden:true
      },
      {
        path: 'msg',
        name: 'Msg',
        component: _import('table/msg'),
        meta: { title: '详情', icon: 'table' },
        hidden:true
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

