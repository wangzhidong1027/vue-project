<template>
  <div class="login">
		<header>
			<span style="text-align: center;" ><a href="#" class="iconfont icon-shouye" ></a></span>
			<span style="font-size: 0.16rem;">登录</span>
			<span> <a href="#/register" style="color: #ED5564;">注册</a></span>
		</header>
		<div class="input-box">
			<p><span>账 户 </span><input type="text" placeholder="请输入用户名/已验证手机"/></p>
			<p style="border: none;"><span>密 码 </span><input type="possword"  placeholder="请输入登录密码"/></p>
		</div>
		<div class="remember-form">
        <input id="checkbox" type="checkbox" checked="" class="checkbox">
        <label for="checkbox">七天自动登录</label>
        <a class="forgot-password" href="#">忘记密码？</a>
		</div>
		<div class="form-btn">
			<a class="login-btn" href="#" >登 录</a>
		</div>
		<div class="jinont-login">
			<h5><span>合作账号登录</span></h5>
			<a class="iconfont icon-set"></a>
		</div>		
		<div class="copyright">Copyright © 2014-2016 汉购网hangowa.com版权所有</div>
		<nav-tab></nav-tab>
  </div>
</template>

<script>
import NavTab from './NavTab'
export default {
  name: 'login',
  data () {
    return {
     
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
	height: 100%;
	background: #F8F8F8;
	position: relative;
	header{
		height:0.39rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.14rem;
		line-height: 0.39rem;
		span{
			display: block;
			width:0.46rem;
		}
	}
	.input-box{
		background: #fff;
		padding: 0 0.1rem;
		p{
			height: 0.39rem;
			font-size: 0.14rem;
			color: #444;
			line-height: 0.39rem;
			padding:0 0.2rem ;
			border-bottom: solid #EEE 0.01rem;
			input{
				border: none;
				padding-left:0.1rem;
				outline: none;
			}
		}
	}	
		.remember-form{
			height: 0.18rem;
			font-size: 0.12rem;
			padding-top: 0.2rem;
			text-align: center;
			outline: none;
			label{
				color: #666;
				margin-right: 0.6rem;
			}
			a{
				color: #5D9CEC;;
			}
		}
	.form-btn{
		width: 100%;
		padding-top: 0.2rem;
		.login-btn{
			font-size: 0.14rem;
			display: block;
			margin:  0.2rem;
			height: 0.36rem;
			text-align: center;
			background: #eee;
			line-height: 0.36rem;
		}
	}
	.jinont-login{
		font-size: 0.12rem;
		color: #666;
		h5{
			height:0.23rem;
			border-bottom:solid #CCC 0.01rem;
			position: relative;
			width: 100%;
			text-align: center;
			span{
				display: block;
				width: 1.12rem;
				position: absolute;
				left: 1.06rem;
				top: 0.14rem;
				background: #F8F8F8;;
				font-weight: normal;				
			}
		}
		a{
			display: block;
			width: 0.39rem;
			height: 0.39rem;
			margin: 0.3rem auto;
			font-size: 0.39rem;
			
		}
	}
	.copyright{
		position: absolute;
		bottom: 0.48rem;
		font-size: 0.08rem;
		color: #555;
		width: 100%;
		text-align: center;
		}
	
}
</style>
