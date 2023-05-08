<template>
	<div class="todo-box">
		<div class="todo-box-add">
			<n-input v-model:value="todoValue" round placeholder="请输入待办事项" @keyup.enter="handleAdd" />
			<n-button class="todo-box-add-btn" type="info" @click="handleAdd"> 添加 </n-button>
		</div>
		<div class="todo-box-items">
			<TodoItem :todo-items="todoItems" @on-remove="handleRemove" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TodoItems } from "../types/todo";
import TodoItem from "./TodoItem.vue";

let todoItems = ref<TodoItems>([]);
let todoValue = ref<string>("");
function handleAdd() {
	if (!todoValue.value) return;
	todoItems.value.push({
		name: todoValue.value,
		completed: false,
	});
	todoValue.value = "";
}
function handleRemove(index: number) {
	todoItems.value.splice(index, 1);
}
</script>

<style scoped lang="scss">
.todo-box {
	width: 100%;
	&-mod {
		margin: 10px 0;
	}
	&-add {
		display: flex;
		align-items: center;
		&-btn {
			margin-left: 20px;
		}
	}
	&-items {
	}
}
</style>
