<template>
	<view>
		<view class="">
			<view class="padding-sm bg-white">
				<text class="text-black">基地大门-1号设备</text>
			</view>
			<view class="grid col-1 flex justify-between relative">
				<!-- <view class="margin-bottom-sm" v-for="(item,index) in 1" :key="index">
					<view style="background:url(../../static/play.png) no-repeat;background-size:60upx 60upx;background-position: 50% 45%;background-color:rgba(0, 0, 0, 0.5);z-index: 1;height:400upx;">
						<image style="width: 100%;height:400upx;z-index: -1;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<text class="absolute text-white text-sm" style="left:44%;top:53%;">点击播放</text>
				 -->
				 <video id="myVideo" objectFit="fill" loop="true" style="width: 100%;" src="http://txcos.kelinteng.com/uploads/20191101/ylkjdemo.mp4"
				               page-gesture="true" controls></video>
			</view>
			<view class="">
				<view class="padding-sm solid-bottom margin-bottom-sm bg-white">
					<text class="text-black">历史回放</text>
				</view>
				<view class="grid col-3 flex justify-between ">
					<view class="margin-bottom-sm relative text-xs" v-for="(item,index) in 6" :key="index">
						<view class="margin-lr-sm" style="background:url(../../static/play.png) no-repeat;background-size:40upx 40upx;background-position: 50% 40%;background-color:rgba(0, 0, 0, 0.5);z-index: 1;height: 130upx;">
							<image style="width: 100%;height:130upx;z-index: -1;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
						</view>
						<text class="absolute text-white" style="left:34%;top:47%;">查看回放</text>
						<view class="bg-white margin-lr-sm radius-bottom">
							<view class="text-cut padding-tb-xs padding-left-xs">
								<text>2019-10-30</text>
							</view>
						</view>
					</view>
				</view>
				<view class="padding-sm solid-bottom margin-bottom-sm bg-white">
					<text class="text-black">设备切换</text>
				</view>
				<view class="grid col-3 flex justify-between ">
					<view class="margin-bottom-sm relative text-xs" v-for="(item,index) in 3" :key="index">
						<view class="margin-lr-sm" style="background:url(../../static/play.png) no-repeat;background-size:40upx 40upx;background-position: 50% 45%;background-color:rgba(0, 0, 0, 0.5);z-index: 1;height: 130upx;">
							<image style="width: 100%;height:130upx;z-index: -1;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
						</view>
						<view class="bg-white margin-lr-sm radius-bottom">
							<view class="text-cut padding-tb-xs padding-left-xs">
								<text>基地大门</text>
							</view>
						</view>
					</view>
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
			};
		},
		methods: {
		},
		onShow() {},
		onHide() {}
	}
</script>

<style>
</style>
