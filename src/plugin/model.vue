<template>
	<div>
	<h1>modal</h1>
	<button @click="alert" class="btn">button</button>
	</div>
</template>

<script>
	export default{
		data(){
		   return{
			
		   }
	    },
	    methods:{
		 alert(){
		 	alert("11111")
		 }
	    },
	    components:{
	  	
	    }
	}
</script>

<style scoped>
	.btn{
		width:100px;
		height:30px;
		border:2px solid #333333;
		background-color: #ffffff;
		margin:50px;
		border-radius: 5px;
	}
</style>