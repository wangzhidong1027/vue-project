<template>
	<div id="detail">		
		<div id="goodImg">
			<img src="http://www.hangowa.com/data/upload/shop/store/goods/60/2016/60_05292388258008943_360.jpg" alt="" />
		</div>
		<div id="wrapper">
			<div class='good'>
				<div class="top">
					<span class="iconfont icon-xiangzuojiantou"></span>
					<span class="iconfont icon-shenglvehao"></span>			
				</div>
				<div class="good-title">
					<p class="good-name">dasd</p>
					<p class="good-jingle">sd,;,</p>
					<h5>¥: <span class="good-price">das</span></h5>
				</div>
				<div class="logistics">
					<h6>送至 </h6>
					<p>
						<span class="address"> 北京 <b>有货</b></span>
						<span class="freight"></span>
					</p>
				</div>
				<div class="like">
					已选<span>默认</span>
				</div>
				<p class="pingjia">商品评价 <span>好评率 <b>100%</b></span></p>
				<div class="store" id="store">
					<p class="stoer-name">dsadas</p>
					<p class="stoer-tittle">
						<span>描述相符5.0</span>
						<span>服务态度5.0</span>
						<span>发货速度5.0</span>
					</p>
				</div>
				<div class="good-commend">
					<p>店铺推荐</p>
					<div class="commend-list">
						<a href="">
							<dl>
								<dt><img src="" alt="" /></dt>
								<dd>的实打实大萨达的速度撒发顺丰</dd>
								<dd>¥<span>99988</span></dd>
							</dl>
						</a>
						<a href="">
							<dl>
								<dt><img src="" alt="" /></dt>
								<dd>的实打实大萨达的速度撒发顺丰</dd>
								<dd>¥<span>99988</span></dd>
							</dl>
						</a>
					</div>
				</div>
				<a class="more">查看商品信息</a>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name: 'detail',
		data () {
		    return {
		     	id:""
		    }
		},
		mounted(){
			var that=this;
			this.id=this.$route.params.Id
			var url = 'http://localhost:8080/mo_bile/index.php?act=goods&op=goods_detail&goods_id='+that.id+'&key=919a6b49f305e7466b93ce004adeed65'
			axios.get(url,
		  	).then(function(res){
				console.log(res.data)
		  		}).catch(function(err){
						  console.log(err,2);
					});
			var myscroll=new iScroll('wrapper',{bounce:false})	
		}		
	}
</script>

<style scoped lang="scss">
#detail{
	background:#F8F8F8;
	width: 100%;
	height: 100%;
	overflow: hidden;
	#goodImg{
		width:100%;
		img{
			display: block;
			width: 100%;
			margin: 0;
			padding: 0;			
		}
	}
	#wrapper{
		overflow: hidden;
	.good{
		background: #eee;
		position: absolute;
		width: 100%;
		overflow: hidden;
		.top{
			width: 100%;
			height: 0.39rem;
			position: absolute;
			top:-3.2rem;
			display: flex;
			justify-content: space-between;
			span{
				margin: 0.1rem 0.2rem;
				display: block;
				border-radius: 50%;
				width: 0.2rem;
				height: 0.2rem;
				line-height: 0.22rem;
				border: 0.01rem solid #666;
				text-align: center;
			}
		}
		.good-title{
			padding-top: 0.1rem;
			border-top: 0.01rem solid #eee;
			background: #fff;
			p{
				font-size: 0.14rem;
				line-height: 0.17rem;
				padding: 0 0.2rem;
			}
			h5{
				color: red;
				font-size: 0.16rem;
				padding: 0 0.2rem;
				font-weight: normal;
				span{

				}
			}
		}
		.logistics{
			background: #fff;
			padding-top: 0.1rem;
			border-bottom: 0.01rem solid #eee;
			h6{
				padding-left:0.2rem;
				font-size: 0.14rem;
				float: left;
				font-weight: normal;
				padding-right: 0.1rem;
			}
			span{
				float: left;
				font-size: 0.14rem;
				b{
					font-weight: normal;	
				}			
			}
		}
		.logistics:after{
			content: "";display: block;
			height: 0;
			clear: both;
			overflow: hidden;
		}
		.like{
			background: #fff;
			font-size: 0.14rem;
			padding-left: 0.2rem;
			line-height: 0.38rem;
			height: 0.38rem;
			span{
				flex: left;
				margin-left: 0.07rem;
				border: 0.01rem solid #777;
				display: inline-block;
				width: 0.4rem;
				text-align: center;
				line-height: 0.16rem;
				margin-top: 0.1rem;
			}
		}
		.pingjia{
			font-size: 0.14rem;
			background: #fff;
			margin-top: 0.2rem;
			padding-left: 0.2rem;
			height: 0.38rem;
			line-height: 0.38rem;
			span{
				color: red;
				padding-left: 0.1rem;
			}
		}
		#store{
			background: #fff;
			font-size: 0.16rem;	
			padding: 0 0.2rem;
			margin-top: 0.2rem;				
			.stoer-name{
				height: 0.33rem;
				line-height: 0.33rem;						
			}
			.stoer-tittle{
				height: 0.33rem;
				line-height: 0.33rem;
				display: flex;
				justify-content: space-between;
				font-size: 0.14rem;
			}
		}
		.good-commend{
			background: #fff;
			margin-top: 0.2rem;
			font-size: 0.16rem;
			line-height: 0.34rem;
			p{
				padding-left: 0.2rem;
			}
			.commend-list{
				display: flex;
				justify-content: space-around;
				a{
					width: 20%;
					display: block;
					dl{
						flex-direction: column;
						dt{
							img{
								width: 100%;
								border:0.01rem solid #eee;
							}
							
						}
						dd{
							font-size: 0.14rem;
							line-height: 0.14rem;
							height: 0.28rem;
							overflow: hidden;
							color: #777;
						}
					}
				}
				
			}
			
		}	
		.more{
				display: block;
				font-size: 0.14rem;
				width: 100%;
				text-align: center;
				color: #999;
				height: 1rem;
				line-height:0.4rem;
			}
		}
	}
}
</style>