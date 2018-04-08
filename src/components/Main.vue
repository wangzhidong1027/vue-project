<template>
  <div class="main">
  	<div id="wrapper">
  		<div class="iscrill-1">
			 	<div class="M-header">	
				 	<div class="set">
							<span class="iconfont icon-set"></span>
							<span class="iconfont icon-shenglvehao"></span>			
					</div>
					<a class="my-img iconfont icon-account" href="#/login"></a>
					<a class="tologin" href="#/login">点击登录</a>
					<div class="h-bottom">
							<a href="#"><span class="iconfont icon-jushoucang"></span>商品收藏</a>
							<a href="#"><span class="iconfont icon-suishencaichan"></span>店铺收藏</a>
							<a href="#"><span class="iconfont icon-zuji"></span>我的足迹</a>
					</div>
				</div>
				<div class="content">
				<dl class="my-order">
					<dt>
						<a href="#">
								<span style='color:#111'><i class="iconfont icon-iconfuzhi"></i>我的订单</span>
								<span>查看全部订单 &nbsp;></span>
						</a>
					</dt>
					<dd><a href="#"><i class="iconfont icon-fukuan"></i>待付款</a></dd>
					<dd><a href="#"><i class="iconfont icon-daishouhuo"></i>待收货</a></dd>
					<dd><a href="#"><i class="iconfont icon-shouhuo"></i>待自提</a></dd>
					<dd><a href="#"><i class="iconfont icon-fukuan"></i>待评价</a></dd>
					<dd><a href="#"><i class="iconfont icon-iconfuzhi"></i>退款、退货</a></dd>
				</dl>
							<dl class="my-order">
					<dt>
						<a href="#">
								<span style='color:#111'><i class="iconfont icon-suishencaichan"></i >我的财产</span>
								<span>查看全部财产 &nbsp;></span>
						</a>
					</dt>
					<dd><a href="#"><i class="iconfont icon-fukuan"></i>预存款</a></dd>
					<dd><a href="#"><i class="iconfont icon-card"></i>充值卡</a></dd>
					<dd><a href="#"><i class="iconfont icon-daijinquan"></i>代金券</a></dd>
					<dd><a href="#"><i class="iconfont icon-hongbao"></i>红包</a></dd>
					<dd><a href="#"><i class="iconfont icon-my-jifen"></i>积分</a></dd>
				</dl>
				<p style="margin-top:0.07rem ;"><a href="#"><span><i class="iconfont icon-xiao"></i>我的分销管理</span><span> > </span></a></p>
				<p><a href="#"><span><i class="iconfont icon-shouhuodizhi"></i>收货地址管理</span><span> > </span></a></p>
				<p><a href="#"><span><i class="iconfont icon-set"></i>用户设置</span><span> > </span></a></p>
			</div>
  			<pic-nav></pic-nav>
  		</div>  		
  	</div>
  	<nav-tab></nav-tab>
  </div>
</template>

<script>
import NavTab from './NavTab'
import PicNav from './PicNav'
export default {
  name: 'main',
  data () {
    return {
     
    }
  },
  mounted(){
	var myscroll=new iScroll('wrapper',{bounce:false})
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/main.scss';
	
</style>
