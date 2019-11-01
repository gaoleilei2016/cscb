<template>
	<view>
		<image src="../../static/jidi1.png" style="width: 100%;" mode="widthFix"></image>
		<image class="margin-top-sm" src="../../static/jidi2.png" style="width: 100%;" mode="widthFix"></image>
		<image @tap="navigator" class="margin-top-sm" src="../../static/jidi3.png" style="width: 100%;" mode="widthFix"></image>
		<image class="margin-top-sm" src="../../static/jidi4.png" style="width: 100%;" mode="widthFix"></image>
		<image class="margin-top-sm" src="../../static/jidi5.png" style="width: 100%;" mode="widthFix"></image>
		<image class="margin-top-sm" src="../../static/jidi6.png" style="width: 100%;" mode="widthFix"></image>
		<view class="bg-white">
			<image class="margin-top-sm " src="../../static/jidi7.png" style="width: 100%;" mode="widthFix"></image>
			<view class="cu-tabbar-height"></view>
		</view>
		<navigator url="yuding" style="box-shadow: 0 0 0 rgba(0, 0, 0, 0);margin-bottom: 100upx;" class="cu-bar foot flex justify-center">
			<button class="cu-btn round lg block bg-green" style="width: 90%;">立即预定</button>
		</navigator>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				roles:''
			}
		},
		onLoad(e) {
			this.roles=e.roles
			console.log(this.roles)
		},
		methods: {
			navigator(){
				uni.navigateTo({
					url:'play'
				})
			}
		},
	}
</script>

<style>
	
</style>
