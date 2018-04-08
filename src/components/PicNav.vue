<template>
	<div class="bottom-nav">
		<div class="lnav">
					<a href="#/login">登录</a>
					<a href="#/register">注册</a>
					<a href="#">反馈</a>
					<a href="#">返回顶部</a>
		</div>
		<div class="Nav-pic">
				<a href="#">
					<i class="iconfont icon-App"></i>
					<span>客户端</span></a>
				<a href="#">
					<i class="iconfont icon-hongping"></i>
					<span>触屏版</span></a>
				<a href="#">
					<i class="iconfont icon-cloud-pc"></i>
					<span>电脑版</span></a>
		</div>
		<h6>Copyright © 2014-2016 汉购网hangowa.com版权所有</h6>		
		<p></p>
	</div>
</template>

<script>
	import Vue from 'vue'
const PicNav={
	  name: 'picNav',
	  data () {
	    return {
	     
	    }
	  },
 }
Vue.component('pic-nav',PicNav)
	export default PicNav
</script>

<style scoped lang="scss">
.bottom-nav{
	margin-top:0.07rem;
	background: #fff;
	width: 100%;
	.lnav{
		height:0.37rem;
		a{
			display: block;
			float: left;
			width: 25%;
			font-size: 0.12rem;
			color: #111;
			line-height: 0.37rem;
			text-align: center;
			border-bottom: solid 0.01rem #EEE;
		}
	}
	.Nav-pic{
		width: 2.67rem;
		height: 0.64rem;
		display: flex;
		margin: 0 auto;
		border-bottom: solid 0.01rem #EEE;		
		a{
			display: block;
			font-size:0.13rem;
			color: #666;
			width: 0.89rem;
			text-align: center;
			i{	
				display: block;
				margin: 0 auto;
				text-align: center;
				line-height: 0.32rem;
				width:0.32rem;
				height: 0.32rem;
				font-size: 0.24rem;
				border:  solid #CCC 1px;
				border-radius: 50%;
				margin-top: 0.07rem;
			}
		}
	}
	h6{
		font-size: 0.08rem;
		color: #555;
		width: 100%;
		text-align: center;
		font-weight: normal;
	}
	p{
		height: 0.48rem;
	}
}
	
</style>