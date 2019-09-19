<style src="@/components/loader/index.css"></style>
<template>
	<div class="loading-box" :style="'background-color: rgba(255,255,255,'+opacity+')'" v-show="visible">
		<ul id="spinners">
			<li>
				<div :id="loadingSrt[loadingSrtAct].id" v-html="loadingSrt[loadingSrtAct].tm">
					
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				loadingSrtAct:5,
				opacity:.4,
				visible:true,
				loadingSrt:[
					{
                      id:'preloader_1',
                      tm:'<span></span><span></span><span></span><span></span><span></span>'
					},
					{
                      id:'preloader_2',
                      tm:'<span></span><span></span><span></span><span></span>'
					},
					{
                      id:'preloader_3',
                      tm:''
					},
					{
                      id:'preloader_4',
                      tm:'<span></span><span></span><span></span><span></span><span></span>'
					},
					{
                      id:'preloader5',
                      tm:''
					},
					{
                      id:'preloader6',
                      tm:'<span></span><span></span><span></span><span></span>'
					}
				]
			}
		}
	}
</script>