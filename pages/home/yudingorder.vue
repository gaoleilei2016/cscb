<template>
	<view>
		<view class="text-lg text-bold bg-theme flex flex-direction align-center padding-top-xl" style="height: 500upx;">
			
		</view>
		<view class="bg-white radius-lg padding margin-lr-lg" style="margin-top: -400upx;">
			<view class="text-lg margin-lr-xl margin-tb text-center text-green">
				<text>海南琼中科学蔬菜培养基地</text>
			</view>
			<view class="cu-bar search bg-white">
				<text>产品：</text>
				<view @tap="getProductList" class="search-form round text-lg flex justify-between ">
					<text class="margin-left">{{name}}</text>
					<text class="text-xxl"><text class="cuIcon-triangledownfill"></text></text>
				</view>
			</view>
			<view class="cu-bar search bg-white ">
				<text class="text-green">价格：</text>
				<view class="search-form round">
					<input class="padding-left" disabled="true" :adjust-position="false" type="text" placeholder="￥1.86元/公斤" confirm-type="search"></input>
				</view>
			</view>
			<view class="cu-bar search bg-white">
				<text class="text-green">数量：</text>
				<uni-number-box :min="1" :max="9" :value="1" /></input>
				<text class="text-green">(公斤)</text>
			</view>
			<view class="cu-bar search bg-white">
				<text class="text-green">定金：</text>
				<view class="search-form round">
					<input class="padding-left"  :adjust-position="false" type="text" placeholder="请输入您预缴的定金" confirm-type="search"></input>
				</view>
			</view>
			<view class="cu-bar search bg-white">
				<text class="text-green">姓名：</text>
				<view class="search-form round">
					<input class="padding-left"  :adjust-position="false" type="text" placeholder="请输入预定人姓名" confirm-type="search"></input>
				</view>
			</view>
			<view class="cu-bar search bg-white">
				<text class="text-green">电话：</text>
				<view class="search-form round">
					<input class="padding-left"  :adjust-position="false" type="text" placeholder="请输入预定电话" confirm-type="search"></input>
				</view>
			</view>
			<view class="cu-bar search bg-white">
				<text class="text-green">地址：</text>
				<view class="search-form round">
					<input class="padding-left"  :adjust-position="false" type="text" placeholder="请输入您的收货地址" confirm-type="search"></input>
				</view>
			</view>
			<view @tap="navigator()" class="cu-bar search bg-white margin-top-xl">
				<view class="search-form round">
					<button style="width: 100%;" class="cu-btn bg-theme block round lg">支付定金</button></input>
				</view>
			</view>
		</view>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm1" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	var that;
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			uniNumberBox,
			mpvuePicker
		},
		data() {
			return {
				themeColor: '#007AFF',
				mode: '',
				pickerSingleArray: [
					{label: '荔枝',value:1},{label: '苹果',value:2},
					{label: '香蕉',value:3},{label: '火龙果',value:4},
					{label: '梨',value:5},{label: '草莓',value:6},
					{label: '猕猴桃',value:7},{label: '榴莲',value:8},
					{label: '青桔',value:9},{label: '柚子',value:10}
				],
				pickerValueArray:[],
				deepLength: 1,
				pickerValueDefault: [0],
				name:''
			}
		},
		onLoad(e) {
			this.name=this.pickerSingleArray[0].label
		},
		onShow() {
			that=this;
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			onConfirm1(e) {
				this.name =e.label
			},
			getProductList() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			navigator(){
				
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
