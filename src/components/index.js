
import LoaderComponet from './loader/index.vue'

let Loader = {}

Loader.install = function(Vue,opts){
    let option = {
    	loadingSrtAct:5,
    	opacity:.4,
    	duration:30000,
    	autoClose:false
    }

   for(let key in opts){
     	option[key] = opts[key];
     }

    Vue.prototype.$loader = function(opt){
        if(typeof opt == 'object'){
        	for(let key in opt){
		     	option[key] = opt[key];
		     }
        }
      let LoaderController = Vue.extend(LoaderComponet);

      let instance = new LoaderController().$mount(document.createElement("div"));

      instance.loadingSrtAct = option.loadingSrtAct
      instance.opacity = option.opacity
      let lo = document.querySelector(".loading-box")
      if(lo != null){
      	document.body.removeChild(lo);
      }
      document.body.appendChild(instance.$el);
       
      setTimeout(()=>{
      	 if(option.autoClose){
      	 	document.body.removeChild(instance.$el);
      	 }         
      },option.duration);

    }
    Vue.prototype.$loader["show"] = function(opt){
    	Vue.prototype.$loader(opt)
    }
    Vue.prototype.$loader["close"] = function(opt){
    	let lo = document.querySelector(".loading-box")
    	document.body.removeChild(lo);
    }

}


// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Loader);
}

export default Loader;