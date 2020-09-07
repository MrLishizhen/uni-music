<template>
	<view>
		<page-head :text='title'></page-head>
		<searchBox :inputShow='inputShow'></searchBox>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputShow:true,
				title:"音乐俱乐部"
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
