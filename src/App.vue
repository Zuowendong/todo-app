<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
</script>

<template>
	<div class="main">
		<h1 class="main-header">待办清单</h1>
		<TodoList />
	</div>
</template>

<style scoped lang="scss">
.main {
	width: 100%;
	height: 100%;
	// background-color: #bae0ff;
	// border: 5px solid #faad14;
	box-sizing: border-box;
	border-radius: 50px;
	padding: 20px;
	&-header {
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
}
</style>
