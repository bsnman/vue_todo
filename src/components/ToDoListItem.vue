<template>
    <div class="d-flex align-center px-4 py-1"> 
        <div class="mr-2">
            <v-checkbox v-model="todo.completed" @change="onUpdateStatus" :loading="isUpdating" />
        </div>
        <div class="flex-grow-1">
            <div class="text-wrap mb-4" :class="{ lineThrough: todo.completed }">
                {{ todo.title }}
            </div>
            <div class="text-wrap caption" style="color: #afafaf">
                {{ todo.date }}
            </div>
        </div>
        <div class="d-flex">
            <v-btn class="mr-1" small :to="`/edit/${todo.id}`">
                <v-icon small >{{ icons.mdiPen }}</v-icon>
            </v-btn>
            <v-btn  color="error" small @click="onDeleteClick" :loading="isDeleting">
                <v-icon small >{{ icons.mdiTrashCan }}</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mdiTrashCan, mdiPen } from "@mdi/js"
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            icons: {
                mdiTrashCan,
                mdiPen
            },
            isDeleting: false,
            isUpdating: false,
        }
    },
    methods: {
        onDeleteClick() {
            this.isDeleting = true
            this.$emit("click:delete", this.todo)
        },
        onUpdateStatus() {
            this.isUpdating = true
            this.$emit("click:status", this.todo)
        }
    }
}
</script>

<style scoped>
.lineThrough {
    text-decoration: line-through;
}
</style>