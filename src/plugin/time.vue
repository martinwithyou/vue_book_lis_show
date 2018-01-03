<template>
	<div>
	<h1>timer</h1>
	<h1>{{timeStamp}}</h1>
	<h1>{{timer}}</h1>
	</div>
</template>

<script>
	export default{
		data(){
		   return{
			timeStamp:"",
			timer:''
		   }
	    },
	    mounted(){
	    	this.alert();
	    },
	    methods:{
		 alert(){
		 	
		 	var a = new Date();
		 	
		 	this.timeStamp=a;
		 	
//		 	setInterval(()=>{
//		 		var a = new Date();
//		 	    this.timeStamp=a;
//		 	    
////		 	    setInterval(()=>{
////		 	    	var b= new Date();
////		 	    	this.timer=b;
////		 	    },1)
//		 	    
//		 	    
//		 	},1)
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
	h1{
		color:red;
	}
</style>