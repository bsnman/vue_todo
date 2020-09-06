import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoList: [],
    isLoading: false,
  },
  mutations: {
    setList(state, data) {
      state.toDoList = data
    },
    setListLoader(state, data) {
      state.isLoading = data
    },
    addList(state, data) {
      const index = state.toDoList.findIndex(todo => todo.id === data.id)

      if(index >= 0) {
        state.toDoList.splice(index, 1, data)
      } else {
        state.toDoList.push(data)
      }
    },
    updateToDo(state, data) {
      const index = state.toDoList.findIndex(todo => todo.id === data.id)

      if(index >= 0) {
        state.toDoList.splice(index, 1, data)
      }
    },
    removeToDo(state, id) {
      const index = state.toDoList.findIndex(todo => todo.id === id)

      if(index >= 0) {
        state.toDoList.splice(index, 1)
      }
    }
  },
  actions: {
    async getToDoList({ commit }) {
      const url = `${process.env.VUE_APP_API}/tasks`

      try {
        commit("setListLoader", true)

        const res = await axios.get(url)

        commit("setList", res.data)

        return res.data
      } finally {
        commit("setListLoader", false)
      }
    },
    async getToDo(context, id) {
      const url = `${process.env.VUE_APP_API}/tasks/${id}`

      const res = await axios.get(url)

      return res.data
    },
    async addToDo({ commit }, data) {
      const url = `${process.env.VUE_APP_API}/tasks`

      const res = await axios.post(url, data)

      commit("addList", res.data)

      return res.data
    },
    async updateToDo({ commit }, todo) {
      const url = `${process.env.VUE_APP_API}/tasks/${todo.id}`

      const res = await axios.put(url, todo)

      commit("updateToDo", res.data)

      return res.data
    },
    async deleteToDo({ commit }, id) {
      const url = `${process.env.VUE_APP_API}/tasks/${id}`

      const res = await axios.delete(url)

      commit("removeToDo", id)

      return res.data
    }
  },
  modules: {
  }
})
