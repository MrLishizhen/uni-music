<template>
	<view class='search-box'>
		<view class='search' @tap='searchTap' v-if='inputShow'>
			<icon :type="value" size="16" />
			<text class='searchText'>
				搜索
			</text>
		</view>
		<view class='search' @tap='searchTap' v-if='!inputShow'>
			<icon :type="value" size="16" class='icons'/>
			<input type="text" class='searchInput' :placeholder="placeholder">
		</view>
	</view>
</template>

<script>
	/*
	inputShow表示仅仅是单纯的搜索样式还是真正的搜索
	placeholder表示搜索框显示的样式
	*/
	export default {
		data() {
			return {
				value: "search",
			}
		},
		props:["inputShow","placeholder"],
		methods: {
			searchTap() {
				//准备写跳转搜索
			}
		}
	}
</script>

<style>
	.search-box {
		height: 60upx;
		background-color: #efefef;
		padding: 15upx 30upx;
	}

	.search{
		width: 100%;
		height: 100%;
		background-color: #fff;
		border-radius: 30upx;
		display:flex;
		justify-content: center;
		align-items: center;
	}

	.searchText {
		margin-left:10upx;
		font-size: 24upx;
	}
	.icons{
		flex-shrink: 0;
		margin-left:10upx
	}
	.searchInput{
		flex-grow: 1;
	}
</style>
