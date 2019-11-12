<template>
	<view>
		<view class="">
			<view class="padding-sm bg-white">
				<text class="text-black text-bold">基地大门-1号设备</text>
			</view>
			<view class="grid col-1 flex justify-between relative">
				 <video id="myVideo" poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" objectFit="fill" loop="true" style="width: 100%;" src="http://txcos.kelinteng.com/uploads/20191101/ylkjdemo.mp4"
				               page-gesture="true" controls></video>
			</view>
			<view class="">
				<view class="padding-sm solid bg-white">
					<text class="text-black text-bold">历史回放</text>
				</view>
				<view class="grid col-3 flex bg-white justify-between padding">
					<view @tap="navigator" class="relative radius text-sm" v-for="(item,index) in 6" style="height:190upx;width:210upx;" :key="index">
						<image class="radius" style="width:100%;height:140upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
						<view class="absolute radius" style="height:140upx;right: 0;bottom: 0; left: 0; top: 0;background-color:rgba(0, 0, 0, 0.3);">
							<view class="flex flex-direction align-center justify-center" style="width:100%;height:100%; ">
								<image style="width: 40upx;height: 40upx;" src="../../static/play.png" mode=""></image>
								<text class="text-white">查看回放</text>
							</view>
						</view>
						<view>2019-10-31</view>
					</view>
				</view>
				<view class="padding-sm solid-bottom bg-white margin-top-sm">
					<text class="text-black text-bold">设备切换</text>
				</view>
				<view class="padding bg-white">
					<scroll-view scroll-x="true" style="white-space: nowrap;">
						<view class="padding-tb-xs flex" >
							<view @tap="navigator()" v-for="(item,index) in 10" :key="index" class="relative radius margin-right-sm" style="height:170upx;min-width:230upx;">
								<image class="radius" style="width:100%;height:140upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
								<view class="absolute radius" style="height:140upx;right: 0;bottom: 0; left: 0; top: 0;background-color:rgba(0, 0, 0, 0.3);">
									<image class="absolute" style="width: 40upx;height: 40upx;left: 50%;top:50%;margin-left: -20upx;margin-top: -20upx; " src="../../static/play.png" mode=""></image>
								</view>
								<view>基地大门</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				role:'ncz',
			};
		},
		onLoad(e) {
			this.role=e.role
			console.log(this.role)
		},
		methods: {
			navigator(){
				uni.navigateTo({
					url:'play?role='+this.role
				})
			}
		},
		onShow() {},
		onHide() {}
	}
</script>

<style>
</style>
