<template>
	<view>

	</view>
</template>

<script>
	import {bannerFun} from "../../api/home.js";
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			bannerFun();
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
