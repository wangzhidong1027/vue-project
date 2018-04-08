<template>
  <div class="register">
		<header>
			<span style="text-align: center;" ><a href="#" class="iconfont icon-shouye" ></a></span>
			<span style="font-size: 0.16rem;">注册</span>
			<span> <a href="#/login" style="color: #ED5564;">登录</a></span>
		</header>
		<div class="user-reg">
			<p><a href="#" style="	border-bottom:solid 0.02rem #ED5564; color: #ed5564;">普通注册</a></p>
			<p><a href="#">手机注册</a></p>
		</div>
			<div class="input-box">
			<p><span>&nbsp;用 户 名 </span><input type="text" placeholder="请输入6-20个字符"/></p>
			<p><span>设置密码 </span><input type="possword"  placeholder="请输入6-20位密码"/></p>
			<p><span>确认密码 </span><input type="possword"  placeholder="请再次输入密码"/></p>
			<p style="border: none;"><span>邮&nbsp;&nbsp;&nbsp;&nbsp; 箱 </span><input type="text" placeholder="请输入常用邮箱地址"/></p>
		</div>
		<div class="remember-form">
        <input id="checkbox" type="checkbox" checked="" class="checkbox">
        <label for="checkbox">同意</label>
        <a class="reg-cms" href="document.html" target="_blank">用户注册协议</a>
		</div>
		<div class="form-btn">
			<a class="register-btn" href="#" >注册</a>
		</div>
			
		<div class="copyright">Copyright © 2014-2016 汉购网hangowa.com版权所有</div>
		<nav-tab></nav-tab>
  </div>
</template>

<script>
	import NavTab from './NavTab'
export default {
  name: 'register',
  data () {
    return {
     
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register{
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
	.user-reg{
		display: flex;
		justify-content: space-between;
		height:0.39rem;
		background: #fff;
		p{
			width:50%;
			text-align: center;
			a{
				font-size: 0.12rem;
				display: block;
				height: 0.38rem;
				line-height: 0.45rem;
				color: #111;
				width: 0.6rem;
				margin: 0 auto;
			 
			}
		}
	}
	.input-box{
		background: #fff;
		padding: 0 0.1rem;
		margin-top: 0.15rem;
		p{
			height: 0.39rem;
			font-size: 0.12rem;
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
		padding-left: 0.4rem;
		.checkbox{
			border: none;
			background: #48CFAE;
			border-radius: 50%;
			width: 0.1rem;
			height: 0.1rem;
		}
		a{
			color: #4B89DC;
		}
	}
	.form-btn{
		width: 100%;
		height:0.36rem;
		margin-top: 0.2rem;
		.register-btn{
			font-size: 0.16rem;
			display: block;
			margin: 0 0.2rem;
			height: 0.36rem;
			text-align: center;
			background: #eee;
			line-height: 0.36rem;
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
