<template>
	<div v-for="(item, index) in props.todoItems" :key="index" :tabindex="index" class="todo-item">
		<span :class="[item.completed ? 'todo-item-completed' : '']">{{ item.name }}</span>
		<n-button
			class="todo-item-btn"
			tertiary
			:type="item.completed ? 'warning' : 'success'"
			@click="handleCompleted(item)"
		>
			{{ item.completed ? "待办" : "完成" }}
		</n-button>
		<n-button class="todo-item-btn" tertiary type="error" @click="handleRemove(index)"> 删除 </n-button>
	</div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { TodoItem, TodoItems } from "../types/todo";

const props = defineProps({
	todoItems: { type: Array as PropType<TodoItems>, default: (): TodoItems => [] },
});
const emits = defineEmits(["onRemove"]);

function handleCompleted(raw: TodoItem) {
	raw.completed = !raw.completed;
}
function handleRemove(index: number) {
	emits("onRemove", index);
}
</script>

<style scoped lang="scss">
.todo-item {
	line-height: 40px;
	box-sizing: border-box;
	padding-left: 10px;
	font-size: 16px;
	display: grid;
	grid-template-columns: auto 80px 80px;
	column-gap: 10px;
	align-items: center;
	border-bottom: 1px solid rgb(226, 220, 220);
	&-completed {
		text-decoration: line-through;
		color: #ccc;
	}
}
</style>
