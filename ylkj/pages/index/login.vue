<template>
	<view>
		<view class="text-lg text-bold bg-theme flex flex-direction align-center padding-top-xl" style="height: 500upx;">
			<image class="margin-top margin-bottom-xs" src="http://txcos.kelinteng.com/uploads/20191101/ylkj_logo.png" mode="aspectFit" style="width: 150upx;height: 150upx;"></image>
			<text>昱隆科技</text>
		</view>
		<view class="bg-white radius-lg padding margin-lr-sm" style="margin-top: -150upx;height: 70vh;">
			<view class="text-lg margin-lr-xl">
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" v-if="role == 'ncz'"> 农场主 登录 </tui-divider>
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" v-else-if="role == 'zfgljfw'"> 政府管理及服务 登录 </tui-divider>
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" v-else-if="role == 'sjfw'"> 商家服务 登录 </tui-divider>
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" v-else-if="role == 'hzdw'"> 合作单位 登录 </tui-divider>
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" v-else-if="role == 'ylkj'"> 昱隆科技 登录 </tui-divider>
				<tui-divider :size="30" dividerColor="#1EA558" color="#1EA558" v-else> 登录 </tui-divider>
				<view class="demo-tips">(演示期间可免账号密码登录)</view>
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
				role:'ncz',//用户角色:ncz 农场主，zfgljfw 政府管理及服务，sjfw 商家服务 ，hzdw 合作单位，ylkj 昱隆科技
			}
		},
		onLoad(e) {
			if(e.role != '' && e.role != undefined)
			{
				this.role=e.role
			}
		},
		onShow() {
			that=this;
		},
		methods: {
			navigator(){
				this.$api.msg("登录成功")
				setTimeout(function(){
					uni.reLaunch({
						url:'../home/home?role='+that.role
					})
				},1000)
			}
		},
	}
</script>

<style>
	.demo-tips{
		text-align: center;
		font-size: 0.6rem;
		color: #999;
	}
</style>
