<template>
	<view class="">
		<view>
			<image src="http://txcos.kelinteng.com/uploads/20191101/yuding1.png" style="width: 100%;" mode="widthFix"></image>
			<view class="cu-tabbar-height"></view>
		</view>
		<navigator :url="'yudingorder?role='+role" style="box-shadow: 0 rgba(0, 0, 0, 0);" class="cu-bar foot flex justify-center" >
			<image src="../../static/yuding2.png" style="width: 100%;" mode="widthFix"></image>
		</navigator>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				role:'sjfw',
			};
		},
		onLoad(e) {
			this.role=e.role
			console.log(this.role)
		},
		methods: {
		},
	}
</script>

<style>
</style>
