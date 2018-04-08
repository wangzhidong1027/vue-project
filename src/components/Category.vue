<template>
  <div class="category">
		
		<nav-tab></nav-tab>
  </div>
</template>

<script>
	import axios from 'axios'
	import NavTab from './NavTab'
export default {
  name: 'category',
  data () {
    return {
     
    }
  },
  mounted(){
	var that=this;
  axios.get("http://localhost:8080/mo_bile/index.php?act=goods_class",
  ).then(function(res){
		console.log(res.data.datas)
  		}).catch(function(err){
//				  console.log(err,2);
				});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
