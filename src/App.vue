<template>
  <div id="app"> 	
    <router-view></router-view>
  	
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html,body{
	font-size: 31.25vw;
	height: 100%;
	width: 100%;
	overflow: hidden;
}
#app{
	width: 100%;
	height: 100%;
	overflow:hidden;
}
</style>
