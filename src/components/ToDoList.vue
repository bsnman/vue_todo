<template>
  <v-container>

    <v-card
        class="mx-auto"
        max-width="600"
        tile
      >
        <div class="d-flex pa-5 justify-space-between">
          <h2>To Do List</h2>

          <v-btn color="primary" to="/create">Create</v-btn>
        </div>
        <v-list>
          <transition-group name="list" tag="div">
            <template v-for="todo in sortedToDoList">
              <div :key="todo.id" class="pt-2">
                <ToDoListItem :todo="todo" @click:delete="onClickDelete" @click:status="onClickStatus" />
                
                <v-divider></v-divider>
              </div>
            </template>
          </transition-group>
        </v-list>
    </v-card>
  </v-container>
</template>

<script>
import ToDoListItem from "@/components/ToDoListItem"
import { mapActions, mapState } from "vuex"
import _ from "lodash"

  export default {
    components: {
      ToDoListItem
    },
    computed: {
      ...mapState(["toDoList", "isLoading"]),
      sortedToDoList() {
        return _.sortBy(this.toDoList, todo => todo.title.toLowerCase())
      }
    },
    methods: {
      ...mapActions(["deleteToDo", "updateToDo"]),
      async onClickDelete(todo) {
        await this.deleteToDo(todo.id)

        this.$toast.success("To Do deleted")
      },
      async onClickStatus(todo) {
        await this.updateToDo(todo)

        this.$toast.success("To Do change status")
      }
    }
  }
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>