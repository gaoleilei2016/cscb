<template>
	<view>
		<view class="text-lg text-bold bg-theme flex flex-direction align-center padding-top-xl" style="height: 500upx;">
			<image class="margin-top margin-bottom-xs" src="../../static/jidi6.png" mode="aspectFit" style="width: 150upx;height: 150upx;"></image>
			<text>昱隆科技</text>
		</view>
		<view class="bg-white radius-lg padding margin-lr-sm" style="margin-top: -150upx;height: 70vh;">
			<view class="text-lg margin-lr-xl">
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" > 登录 </tui-divider>
			</view>
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<input class="padding-left" placeholder-class="text-center" :adjust-position="false" type="text" placeholder="请输入账号" confirm-type="search"></input>
				</view>
			</view>
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<input class="padding-left" placeholder-class="text-center" :adjust-position="false" type="text" placeholder="请输入密码" confirm-type="search"></input>
				</view>
			</view>
			<view @tap="navigator()" class="cu-bar search bg-white margin-top-xl">
				<view class="search-form round">
					<button style="width: 100%;" class="cu-btn bg-theme block round lg">登录</button></input>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	import tuiDivider from "@/components/divider/divider"
	export default {
		components:{
			tuiDivider
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigator(){
				this.$api.msg("登录成功")
				setTimeout(function(){
					uni.reLaunch({
						url:'../home/details?roles=owner'
					})
				},1000)
			}
		},
	}
</script>

<style>
	
</style>
