<template>
	<view class='head'>
		<view class='status_bar'></view>
		<view class='head-box'>
			<view class='head-left'>
				<solt name='left'></solt>
			</view>
			<view class='head-title'>
				<text v-text='text'>音乐馆</text>
			</view>
			<view class='head-right'>
				<solt name='right'></solt>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:["text"],
		methods: {
			
		}
	}
</script>

<style>
	.head {
		width:100%;
		background-color: #efefef;
	}
	
	.status_bar {
		height:60upx;
		width: 100%;
		
	}
	.head-box{
		height:90upx;
		display:flex;
		
	}
	.head-title{
		flex-grow: 1;
		height:100%;
		text-align: center;
		line-height: 90upx;
	}
	.head-left,.head-right{
		flex-shrink: 0;
		width: 90upx;
		height:100%;
		
	}
</style>
