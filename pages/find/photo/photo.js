(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/photo/photo"],{3712:function(t,n,c){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=null,e={data:function(){return{src:"",item:"",gglist:[]}},components:{},props:{},onLoad:function(n){t.createRewardedVideoAd&&((c=t.createRewardedVideoAd({adUnitId:"adunit-8b7aecba30b3f324"})).onError((function(t){})),c.onClose((function(t){t&&t.isEnded})));var e=n.src;if(null!=e&&this.setData({src:e}),null!=n.item){var o=JSON.parse(n.item);this.setData({item:o})}var i=this;t.request({url:"https://wag.qmniy.cn/api.php",data:{},header:{"content-type":"application/json"},success:function(t){console.log(t.data),i.setData({gglist:t.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return""!=this.src?{title:"你觉得这个头像怎么样？",path:"/pages/photo/photo?src="+this.src,imageUrl:this.src}:""!=this.item?{path:"/pages/photo/photo?item="+JSON.stringify(this.item)}:void 0},methods:{fh:function(){t.navigateBack()},saveImg:function(n){c&&c.show().catch((function(){c.load().then((function(){return c.show()})).catch((function(t){console.log("激励视频 广告显示失败")}))}));var e=n.currentTarget.dataset.avatar;null!=e&&(e=e.replace("http","https"));var o=n.currentTarget.dataset.card;null!=o&&(o=o.replace("http","https"));var i=n.currentTarget.dataset.src;null!=i&&(i=i.replace("http","https")),t.getSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?(null!=e&&null!=o&&(t.getImageInfo({src:e,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(n){t.showToast({title:"下载成功",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}}),t.getImageInfo({src:o,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(n){t.showToast({title:"下载成功",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})),null!=i&&t.getImageInfo({src:i,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(n){t.showToast({title:"下载成功",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})):t.authorize({scope:"scope.writePhotosAlbum",success:function(){null!=e&&null!=o&&(t.getImageInfo({src:e,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(n){t.showToast({title:"下载成功",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}}),t.getImageInfo({src:o,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(n){t.showToast({title:"下载成功",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})),null!=i&&t.getImageInfo({src:i,success:function(n){t.saveImageToPhotosAlbum({filePath:n.path,success:function(n){t.showToast({title:"下载成功",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})},fail:function(){t.showModal({title:"未授权",content:"请授权",showCancel:!0,cancelText:"取消",cancelColor:"",confirmText:"确定",confirmColor:"",success:function(t){},fail:function(t){},complete:function(t){}})}})}})},copy:function(n){var c=n.currentTarget.dataset.content;t.setClipboardData({data:c,success:function(n){t.showToast({title:"复制完成",icon:"success",image:"",duration:1e3,mask:!0,success:function(t){},fail:function(t){},complete:function(t){}})},fail:function(t){},complete:function(t){}})}}};n.default=e}).call(this,c("a821")["default"])},"5a96":function(t,n,c){"use strict";var e=c("5c65"),o=c.n(e);o.a},"5c65":function(t,n,c){},6245:function(t,n,c){"use strict";c.r(n);var e=c("dd89"),o=c("f8a7");for(var i in o)"default"!==i&&function(t){c.d(n,t,(function(){return o[t]}))}(i);c("5a96");var s,a=c("f0c5"),u=Object(a["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);n["default"]=u.exports},"9cc3":function(t,n,c){"use strict";(function(t){c("ec1d");e(c("66fd"));var n=e(c("6245"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=c,t(n.default)}).call(this,c("a821")["createPage"])},dd89:function(t,n,c){"use strict";var e;c.d(n,"b",(function(){return o})),c.d(n,"c",(function(){return i})),c.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},f8a7:function(t,n,c){"use strict";c.r(n);var e=c("3712"),o=c.n(e);for(var i in e)"default"!==i&&function(t){c.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a}},[["9cc3","common/runtime","common/vendor"]]]);