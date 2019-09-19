## zsd-vue-cssload

> loading


```
# 使用 
npm i zsd-vue-cssload 

# 在 main.js 中引入或则在需要的地方引入 
import loading from 'zsd-vue-cssload'  

import 'zsd-vue-cssload/dist/zsd-components.min.css'  

Vue.use(loading)  

# 详细使用说明：  
this.$loader.show({  
	loadingSrtAct:5,   //1--5  5中类型  
    opacity:.2,        //背景透明度  
    autoClose:false,   //是否自动关闭  
    duration:3000      //自动关闭延迟时间  
    })  

# 关闭加载
this.$loader.close()    
```

## 浏览器兼容性  

使用css3属性，仅在谷歌浏览器编辑完成测试。



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](https://github.com/zhusd/cssload.git).
