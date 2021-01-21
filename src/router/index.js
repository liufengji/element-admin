import Vue from 'vue'
import Router from 'vue-router'

import CreateArticle from '../view/CreateArticle'
import ListArticle from '../view/ListArticle'
import EditArticle from '../view/EditArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:'/articles/index'
    },
    {
      path: '/articles/create',
      name: 'CreateArticle',
      component: CreateArticle
    },
    {
      path: '/articles/index',
      name: 'ListArticle',
      component: ListArticle
    },
    {
      path: '/articles/:id/edit',
      name: 'EditArticle',
      component: EditArticle
    }
  ]
})
