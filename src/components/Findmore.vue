<template>
  <div class="findmore">
	 	<div class="header">
				<span class="iconfont icon-xiangzuojiantou"></span>
				<span>发现</span>
				<span class="iconfont icon-shenglvehao"></span>			
		</div>
		<div id="wrapper">

		<div class="list" >
			<div class="swapper">
				
			</div>
			<h4>专题精选</h4>
			<div class="classfly">
				<p class="small">
					<a href="#"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314836019389148.jpg" alt="" /></a>
					<a href="#"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314836019389148.jpg" alt="" /></a>
					<a href="#"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314836019389148.jpg" alt="" /></a>
				</p>
				<p class="big">
					<a href="#"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393790488027.jpg" alt="" /></a>
					<a href="#"><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393790488027.jpg" alt="" /></a>
				</p>	
			</div>
			<h3>精选专题商品</h3>
			<ul good-list>
				<li v-for="item in dataList">
					<router-link :to="{name:'Detail',params:{Id:item.goods_id }}">
						<img :src=item.goods_image alt="" />
						<p>{{item.goods_name}}</p>
						<h6>¥<span>{{item.goods_promotion_price}}</span></h6>
					</router-link>
				</li>
			</ul>
			<pic-nav></pic-nav>
			</div>
					
		</div>
		<nav-tab></nav-tab>
  </div>
</template>

<script>
	import axios from 'axios'
	import NavTab from './NavTab'
	import PicNav from './PicNav'
	import router from '../router'
	import Detail from './Detail'
export default {
  name: 'findmore',
  router,
  data () {
    return {
     	dataList:''
    }
  },
  methods:{
  	goodlist(){
  	
  	}
 },
 mounted(){
	var that=this;
  axios.get("http://localhost:8080/mo_bile/index.php?act=index&op=special&special_id=1",
  ).then(function(res){
  			that.dataList=res.data.datas.list[4].goods.item	
	  		setTimeout(function(){
					var myscroll=new iScroll('wrapper',{bounce:false})	
				},1000)	
			}).catch(function(err){
				  console.log(err,2);
			});					
			
	},
	uptaded(){
			
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.findmore{
	height: 100%;
	position: relative;
	.header{
		width: 100%;
		height: 0.59rem;
		font-size: 0.18rem;
		background: #e7e7e9;
		line-height: 0.59rem;
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 100%;
		z-index:999;
		span{
			display: block;
			padding: 0 0.1rem;
		}
	}
	#wrapper{
	    height: 100%;
	    position: relative;	
	    width: 100%;
		.list{
			position: absolute;
			width: 100%;
			padding-top: 0.59rem;
			background:#e7e7e9 ;
			.swapper{
				height: 1.3rem;
				width: 100%;
				margin-bottom:0.1rem;
			}
			h4{
				height: 0.16rem;
				font-size: 0.14rem;			
				padding-bottom: 0.1rem;
				padding-left: 0.2rem;
				background: #fff;			
			}
			.small{
				width: 100%;
				display: flex;
				justify-content: space-between;
				a{
					display: block;		
					img{
						display: block;
						width: 100%;
						height: auto;
					}
				}
			}
			.big{
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
			a{
				display: block;		
					img{
						display: block;
						width: 100%;
						height: auto;
					}
				
			}
			h3{
				font-size: 0.16rem;
				text-align: center;
				background: #fff;
				height: 0.26rem;
				line-height: 0.26rem;
				margin-top:0.1rem;
				font-weight: normal;
				color: #111;
			}
			ul{
				width: 100%;
				background: #fff;
				li{
					width: 50%;
					float: left;
					img{
						margin: 0.05rem;
					}
					p{
						height: 0.32rem;
						margin: 0 0.2rem;
						font-size: 0.14rem;
						overflow: hidden;
						line-height: 0.15rem;
						color: #111;
					}
					h6{
						height: 0.2rem;
						font-size: 0.14rem;
						margin: 0 0.2rem;
						margin-top: 0.1rem;
						color: #DB4453;
					}
				}
			}
		}
		ul:after{
			content: '';
			display: block;
			height: 0;
			clear: both;
			overflow: hidden;
		}
	}
}
</style>
