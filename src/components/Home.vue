<template>
  <div class="home">
  	home
	<nav-tab></nav-tab>
  </div>
</template>

<script>
	import axios from 'axios'
	import NavTab from './NavTab'
export default {
  name: 'home',
  data () {
    return {
     
    }
    
  },
  mounted(){
	var that=this;
  axios.get("http://localhost:8080/mo_bile/index.php?act=index",
  	).then(function(res){
  	res.data.datas.list
//		console.log(res.data.datas.list)
  		}).catch(function(err){
				  console.log(err,2);
				});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
