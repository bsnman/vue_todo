import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoList from "@/components/ToDoList"
import ToDoListForm from "@/components/ToDoListForm"

const routes = [
    {
        path: '/', 
        component: ToDoList,
    },
    {
        path: '/create', 
        component: ToDoListForm,
    },
    {
        path: '/edit/:id/', 
        component: ToDoListForm,
    }
]

  const router = new VueRouter({
    routes,
  })

  Vue.use(VueRouter)

  export default router
  