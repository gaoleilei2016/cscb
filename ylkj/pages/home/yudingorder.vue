<template>
	<view>
		<view>
			<navigator :url="'ydresult?role='+role" style="box-shadow: 0 rgba(0, 0, 0, 0);" class="cu-bar foot flex justify-center" >
				<image src="../../static/预定表单.png" style="width: 100%;" mode="widthFix"></image>
				<view class="cu-tabbar-height"></view>
			</navigator>
		</view>
	</view>
</template>

<script>
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
			
		}
	}
</script>

<style>

</style>
