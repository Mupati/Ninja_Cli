import Vue from 'vue'
/*import App from './App.vue'
import Web from './Web.vue'*/
/*import Slot from './Slot.vue'*/
import Blog from './Blog.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'
/*import Devless from 'devless-sdk'*/
/*Vue.component('punch',Punchlines);*/
/*export const bus = new Vue();*/

Vue.use(VueResource);
Vue.use(VueRouter);
/*Vue.use(Devless);*/

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

/*<script src="http://localhost:4545/js/devless-sdk.js" class="devless-connection" devless-con-token="00c41647176ef85da6f9d75d88a6f343"  ></script>
*//*var constants = {
        "token": "00c41647176ef85da6f9d75d88a6f343",
        "domain": "http://localhost:4545"
    };
var SDK = new Devless(constants);
*/
//custom filter
Vue.filter('capitalize',function(value){
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
	/*var start = value.substr(0,1).toUpperCase();
	var end = value.substr(1).toLowerCase();
	return "".concat(start,end);*/
});


//custom directive
Vue.directive('rainbow',{
	bind(el, binding, vnode){
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
});

Vue.directive('theme',{
	bind(el, binding, vnode){
		if(binding.value == 'wide'){
			el.style.maxWidth = '1200px';
			el.style.margin = '0 auto';
		}else if (binding.value == 'narrow'){
			el.style.maxWidth = '560px';
			el.style.margin = '0 auto';

		}

		if(binding.arg == 'column'){
			el.style.background = '#ddd';
			el.style.padding = '20px';
		}
}
});



new Vue({
  el: '#app',
/*  render: h => h(App)*/
  /*render: h => h(Web)*/
/*  render: h => h(Slot)*/
	render: h => h(Blog),
	router: router

})

