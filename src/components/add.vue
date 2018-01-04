<template>
	<div  class="add">
		
    <div class="home_head">	
		<heads></heads>
	</div>
	<br/>
	<br/>
	<label>name</label>
	<input v-model="name" class="input"/>
	<br/>
	<br/>
	<label>price</label>
	<input v-model="price" class="input"/>
	<br/>
	<br/>
	<label>info</label>
	<input v-model="info" class="input"/>
	<br/>
	<br/>
	<button class="sub" @click="sub">submit</button>
	<button class="sub" @click="axios">axios</button>
	
	<div class="outter" v-show="bg">
		<div class="inner">
			<span  class="close_icon" @click="close_this_show">x</span>
			<span class="tip_icon">恭喜你，提交成功</span>
		</div>
	</div>
	
	</div>
</template>

<script>
	import axios from 'axios'
	import heads from '../base/addhead'
	export default{
		components:{
	  	   heads
	   },
		data(){
		   return{
			name:'',
			price:'',
			info:'',
			bg:false
		   }
	    },
	    methods:{
	    close_this_show(){
	    	this.bg=false;
	    },
	    axios(){
	    	var obj={};
		 	obj.price=this.price;
		 	obj.info=this.info;
		 	obj.name=this.name;
		 	
	    	axios.post("http://192.168.65.1:3000/works",obj).then((res)=>{
              console.log(res.data);
              this.datas=res.data;
            },error=>{
              console.log(error);
            })
	    	
	    },
		sub(){
		 	var obj={};
		 	obj.price=this.price;
		 	obj.info=this.info;
		 	obj.name=this.name;
		 	console.log(obj);
		 	
		 	this.$http.post("http://192.168.65.1:3000/works",obj,{emulateJSON: true})
            .then(
              (response)=>{
              	//alert('vue success')
                console.log(response); 
                this.price='';
                this.info='';
                this.name='';
                this.bg=true;
                
              },
              (error)=>{
                console.log(error);
              }
            );

		}
	  }
	}
</script>

<style>
	.tip_icon{
		display: inline-block;
		margin-top:80px;
		margin-left:100px;
	}
	.close_icon{
		width:50px;
		height:50px;
		color:#666666;
		position:absolute;
		top:100;
		right:0;
		border:2px solid #ffffff;
		text-align: center;
		line-height: 50px;
	}
	.close_icon:hover{
		box-shadow: 0px 0px 5px #1C88D3;
	}
	.inner{
		width:100%;
		height:200px;
		margin-top:200px;
		background-color: rgba(255,255,255,0.8);
		color:#666666;
		font-size:20px;
		font-size:700;
		
	}
	.outter{
		width:100%;
		height:100%;
		position: absolute;
		top:0;
		background: rgba(0,0,0,0.5);
	}
	.sub{
		width:300px;
		height:50px;
		float:right;
		margin-right:20px;
		border-radius:10px;
		font-size:20px;
		font-weight: 700;
	}
	.add{
	width:100%;
	height:600px;
	color:#666666;
	}
.home_head{
	background:#1C88D3;
	color:#ffffff;
	text-align:center;
	line-height: 80px;
	font-weight: 700;
	font-size:25px;
	height:80px;
	width:100%;
}
input{
	width:80%;
	height:50px;
	border:1px solid #f2f2f2;
	border-radius: 5px;
	float:right;
	margin-right:20px;
	margin-top:20px;
	box-shadow: 0px 0px 5px #737373;
}
label{
	display:inline-block;
	height:80px;
	line-height: 80px;
	padding-left:5px;
	font-size:16px;
}
</style>