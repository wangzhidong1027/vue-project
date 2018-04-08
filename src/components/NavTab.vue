<template>
  <footer class="navtab">
  	<router-link to="/home"><span class="iconfont icon-shouye"></span><b>首页</b></router-link>
  	<router-link to="/findmore"><span class="iconfont icon-shouye"></span><b>发现</b></router-link>
  	<router-link to="/category"><span class="iconfont icon-shouye"></span><b>类目</b></router-link>
  	<router-link to="/main"><span class="iconfont icon-shouye"></span><b>我的商城</b></router-link>
  </footer>
</template>
<script>
	import Vue from 'vue'
	const NavTab={
	  name: 'navtab',
	  data () {
	    return {
	     	
	    }
	  }
	}
	Vue.component('nav-tab',NavTab)
	export default NavTab
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">	
	.navtab{
		width: 100%;
		height: 0.48rem;
		position: absolute;
		bottom: 0rem;
		display: flex;
		background: rgba(85,85,85,0.95);
		opacity: 0.85;
	}
	a{
		width: 25%;
		flex-grow: 1;
		flex-shrink: 1;
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		align-items: center;		
		text-decoration: none;	
		color: #fff;	
	}
	b{
		font-weight: normal;
		font-size: 0.12rem;
		margin-top:-0.05rem;
	}
	span{	
		font-size: 0.20rem;
		opacity: 0.5;
		font-weight: normal;
	}

</style>
