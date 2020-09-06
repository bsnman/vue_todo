<template>

    <v-card
        class="mx-auto"
        max-width="600"
        tile
      >
        <div class="pa-5">
            <h2 v-if="!todoId">Create to do list</h2>
            <h2 v-else>Update to do list</h2>

            <v-textarea
                :loading="isLoading"
                label="To Do Item"
                v-model="text"
            ></v-textarea>

            <div class="text-right">
                <v-btn to="/" class="mr-2">Back</v-btn>
                <v-btn @click="onAddClick" color="primary" :loading="isSaving">
                    <template v-if="!todoId">
                        Add
                    </template>
                    <template v-else>
                        Save
                    </template>
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
import moment from "moment"

export default {
    data() {
        return {
            text: "",
            isSaving: false,
            isLoading: false,
            todo: null
        }
    },
    computed: {
        todoId() {
            return this.$route.params.id
        }
    },
    created() {
        this.getToDo()
    },
    methods: {
        async getToDo() {
            if(this.todoId) {
                this.isLoading = true
                this.todo = await this.$store.dispatch("getToDo", this.todoId)
                this.text = this.todo.title
                this.isLoading = false
            }
        },
        async onAddClick() {
            const text = this.text.trim()
            console.log(text)

            if(!text) {
                this.$toast.warning("Cannot add empty todo")
                return
            }

            const data = {
                title: text,
                date: moment().format("L"),
                completed: false
            }

            this.isSaving = true

            try {
                if(!this.todoId) {
                    await this.$store.dispatch("addToDo", data)

                    this.$toast.success("To Do added")
                } else {
                    data.id = this.todo.id
                    data.completed = this.todo.completed
                    await this.$store.dispatch("updateToDo", data)

                    this.$toast.success("To Do updated")
                }

                this.$router.push("/")
            } catch {
                this.$toast.error("Cannot connect to server")
            } finally {
                this.isSaving = false
            }

        }
    }
}
</script>