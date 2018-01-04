<template>
	<div class="list">

    <div class="home_head">	
		<heads></heads>
	</div>
<!------------------------------->
<mt-swipe :auto="4000" class="s_outter">
  <mt-swipe-item>
  	<img src="../img/book1.png">
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="../img/book2.png">
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="../img/book3.png">
  </mt-swipe-item>
</mt-swipe>
<!------------------------------->
	<img src="../img/ww.jpg">
	<p>作者ID：{{id}}</p>
	<p>作者姓名：{{name}}</p>
	<p>作者密码：{{password}}</p>
	<p>作者职业：{{profession}}</p>
<!------------------------------->
<hr/>

<mt-spinner type="double-bounce" color="#26a2ff"></mt-spinner>
<p>未完待续。。。</p>
<!--<mt-spinner type="snake" color="#26a2ff"></mt-spinner>
<mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
<mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>-->
<!------------------------------->
<!------------------------------->
<!--<hr/>
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>-->
<!------------------------------->
<!------------------------------->
<!--<hr/>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>-->

<!-- tab-container -->
<!--<hr/>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container>-->
<!------------------------------->

<!-------------------------------->

<!-------------------------------->
	</div>
</template>

<script>
	import heads from '../base/listhead'
    import axios from "axios"
	export default{
		components:{
	  	   heads
	   },
		data(){
		   return{
			 id:"",
			 name:"",
			 password:"",
			 profession:"",
			 active:"tab-container1",
			 selected:true
		   }
	    },
	    mounted(){
	    	this.getData();
	    },
	    methods:{
		 getData(){
		 	axios.get("http://localhost:3000/all").then((res)=>{
              console.log(res.data.res[0]);
              this.id=res.data.res[0].id;
              this.name=res.data.res[0].name;
              this.password=res.data.res[0].password;
              this.profession=res.data.res[0].profession;
              
            },error=>{
              console.log(error);
            })
		 },
		  handleChange(index) {
    
         }
	    }
	}
</script>

<style>
.s_outter{
	height:200px;
	border-bottom:1px solid #d9d9d9;
	padding-top:10px;
}
.item_a{
	background-color: #0000FF;

}
img{
	margin-top:20px;
}
.list{
	width:100%;
	height:600px;
	background-color:#ffffff;
	color:#666666;
	text-align:center;
	line-height: 100px;
	overflow: auto;
	font-size: 36px;
}
.home_head{
	background:#1C88D3;
	text-align:center;
	line-height: 80px;
	font-weight: 700;
	font-size:25px;
	height:80px;
	width:100%;
	color:#ffffff;
}
p{
	font-size:16px;
	line-height:30px;
}
</style>