<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0705":function(e,t,n){"use strict";n.r(t);var a=n("e0e6"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},1977:function(e,t,n){"use strict";n.r(t);var a=n("efd0"),r=n("0705");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("493a");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"77e5870f",null,!1,a["a"],o);t["default"]=c.exports},"493a":function(e,t,n){"use strict";var a=n("a11e"),r=n.n(a);r.a},9971:function(e,t,n){"use strict";(function(e){n("ec1d");a(n("66fd"));var t=a(n("1977"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("a821")["createPage"])},a11e:function(e,t,n){},e0e6:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,r,i,o){try{var u=e[i](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function u(e){o(i,a,r,u,c,"next",e)}function c(e){o(i,a,r,u,c,"throw",e)}u(void 0)}))}}var c=null;wx.createInterstitialAd&&(c=wx.createInterstitialAd({adUnitId:"adunit-4e164272962ed757"}),c.onLoad((function(){})),c.onError((function(e){})),c.onClose((function(){}))),c&&c.show().catch((function(e){console.error(e)}));var s={};s=e.getMenuButtonBoundingClientRect();var d=function(){n.e("components/fooBar/fooBar").then(function(){return resolve(n("220e"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/model/model").then(function(){return resolve(n("4dee"))}.bind(null,n)).catch(n.oe)},f={components:{fooBar:d,models:l},data:function(){return{menuButtonInfo:s,loadShow:!0,scrollTop:0,bannerList:[],indexList:[],indesList:[],hotList:[],coverList:[],cateStatic:"new",cateList:[{type:"new",name:"最新",more:""},{type:"hot",name:"精选",more:""},{type:"小姐姐",name:"小姐姐",more:"tags"},{type:"动漫卡通",name:"动漫卡通",more:"category"}],pageIndex:0,loadStatus:"loadmore",rolldistance:"",adFlag:!0,backShow:!1}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var i,o,u,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.userId,o=t.detailId,u=t.index,e.hideTabBar(),i&&e.setStorageSync("userId",i),o&&e.navigateTo({url:"/pages/detail/detail?id="+o+"&index="+u}),c=n,a.next=7,c.getBannerList();case 7:return a.next=9,c.getindexList();case 9:return a.next=11,c.getindesList();case 11:return a.next=13,c.getHotList();case 13:return a.next=15,c.getList(c.cateStatic);case 15:c.$nextTick((function(){var t=e.createSelectorQuery().in(c);t.select(".query").boundingClientRect((function(e){e.top&&(c.homeTop=e.top)})).exec()})),c.loadShow=!1;case 17:case"end":return a.stop()}}),a)})))()},methods:{toIndex:function(t){var n=this;return u(r.default.mark((function a(){var i;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=n,i.index=t,1==t?e.switchTab({url:"/pages/center/center"}):2==t?e.switchTab({url:"/pages/find/find"}):3==t&&e.switchTab({url:"/pages/user/user"});case 3:case"end":return a.stop()}}),a)})))()},getBannerList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_banner",pageIndex:1,pageSize:10,order:{name:"sort",type:"desc"}}});case 3:i=t.sent,n.bannerList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},getindexList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_index",pageIndex:1,pageSize:4,order:{name:"sort",type:"desc"}}});case 3:i=t.sent,n.indexList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},getindesList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_index1",pageIndex:1,pageSize:4,order:{name:"sort",type:"desc"}}});case 3:i=t.sent,n.indesList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},getHotList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:{status:1},order:{name:"view",type:"desc"},pageIndex:1,pageSize:20}});case 3:i=t.sent,n.hotList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},cateClick:function(e,t,n){var a=this;e!=a.cateStatic&&(n&&(a.rolldistance=n),a.cateStatic=e,a.getList(e,t,1))},getList:function(t,n,i){var o=this;return u(r.default.mark((function u(){var c,s,d,l,f;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(c=o,s=c.coverList,1==i&&(e.showLoading({mask:!0,title:"正在拼命加载中..."}),s=[],c.pageIndex=0),c.pageIndex=c.pageIndex+1,c.loadStatus="loading",!n){r.next=18;break}if("tags"!==n){r.next=12;break}return r.next=9,a.callFunction({name:"query_list",data:{dbName:"wx_cover",tags:t,pageIndex:c.pageIndex,pageSize:5}});case 9:d=r.sent,r.next=16;break;case 12:if("category"!==n){r.next=16;break}return r.next=15,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:{status:1,category_name:t},order:{name:"time",type:"desc"},pageIndex:c.pageIndex,pageSize:5}});case 15:d=r.sent;case 16:r.next=23;break;case 18:return l={status:1},f={},"new"==t?f={name:"time",type:"desc"}:"hot"==t&&(f={name:"view",type:"desc"}),r.next=22,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:l,order:f,pageIndex:c.pageIndex,pageSize:5}});case 22:d=r.sent;case 23:e.hideLoading(),d.result.hasMore?c.loadStatus="loadmore":c.loadStatus="nomore",c.coverList=s.concat(d.result.data);case 26:case"end":return r.stop()}}),u)})))()},search:function(){e.navigateTo({url:"/pages/search/search"})},backTop:function(){e.pageScrollTo({scrollTop:0,duration:300})},bannerClick:function(t){var n=this.bannerList[t].type;1===n&&e.navigateToMiniProgram({appId:this.bannerList[t].appid,path:this.bannerList[t].path}),0===n&&e.navigateTo({url:this.bannerList[t].url})},detail:function(t,n,a){var r=JSON.stringify(a);e.navigateTo({url:"/pages/detail/detail?id="+t+"&index="+n+"&images="+r})},listClick:function(t,n,a){e.navigateTo({url:"/pages/list/list?type="+t+"&pid="+n+"&id="+a})},adLoad:function(){this.adFlag=!0},adError:function(e){this.adFlag=!1},adClose:function(){this.adFlag=!1}},onReachBottom:function(){var e=this;return u(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,"nomore"!=n.loadStatus){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.getList(n.cateStatic);case 5:case"end":return t.stop()}}),t)})))()},onPageScroll:function(e){this.scrollTop=e.scrollTop,e.scrollTop>1e3?this.backShow=!0:this.backShow=!1},onShareAppMessage:function(e){return{title:"精选手机壁纸、动漫二次元壁纸、Anime、Safe for Work",path:"/pages/index/index?userId="+this.vuex_user._id,imageUrl:"../../static/fenxiang.png"}},onShareTimeline:function(e){return{title:"精选手机壁纸、动漫二次元壁纸、Anime、Safe for Work",path:"/pages/index/index",imageUrl:"../../static/fenxiang.png"}}};t.default=f}).call(this,n("a821")["default"],n("a9ff")["default"])},efd0:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"c3bd"))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"3aa0"))},uSection:function(){return n.e("uview-ui/components/u-section/u-section").then(n.bind(null,"88f5"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"9c66"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]}},[["9971","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0705":function(e,t,n){"use strict";n.r(t);var a=n("e0e6"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},1977:function(e,t,n){"use strict";n.r(t);var a=n("2978"),r=n("0705");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("a932");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"361b7193",null,!1,a["a"],o);t["default"]=c.exports},2978:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"c3bd"))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"3aa0"))},uSection:function(){return n.e("uview-ui/components/u-section/u-section").then(n.bind(null,"88f5"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"9c66"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"40ab":function(e,t,n){},9971:function(e,t,n){"use strict";(function(e){n("ec1d");a(n("66fd"));var t=a(n("1977"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("a821")["createPage"])},a932:function(e,t,n){"use strict";var a=n("40ab"),r=n.n(a);r.a},e0e6:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,r,i,o){try{var u=e[i](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function u(e){o(i,a,r,u,c,"next",e)}function c(e){o(i,a,r,u,c,"throw",e)}u(void 0)}))}}var c=null;wx.createInterstitialAd&&(c=wx.createInterstitialAd({adUnitId:"adunit-4e164272962ed757"}),c.onLoad((function(){})),c.onError((function(e){})),c.onClose((function(){}))),c&&c.show().catch((function(e){console.error(e)}));var s={};s=e.getMenuButtonBoundingClientRect();var d=function(){n.e("components/fooBar/fooBar").then(function(){return resolve(n("220e"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/model/model").then(function(){return resolve(n("4dee"))}.bind(null,n)).catch(n.oe)},f={components:{fooBar:d,models:l},data:function(){return{menuButtonInfo:s,loadShow:!0,scrollTop:0,bannerList:[],indexList:[],indesList:[],hotList:[],coverList:[],cateStatic:"new",cateList:[{type:"new",name:"最新",more:""},{type:"hot",name:"精选",more:""},{type:"小姐姐",name:"小姐姐",more:"tags"},{type:"动漫卡通",name:"动漫卡通",more:"category"}],pageIndex:0,loadStatus:"loadmore",rolldistance:"",adFlag:!0,backShow:!1}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var i,o,u,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.userId,o=t.detailId,u=t.index,e.hideTabBar(),i&&e.setStorageSync("userId",i),o&&e.navigateTo({url:"/pages/detail/detail?id="+o+"&index="+u}),c=n,a.next=7,c.getBannerList();case 7:return a.next=9,c.getindexList();case 9:return a.next=11,c.getindesList();case 11:return a.next=13,c.getHotList();case 13:return a.next=15,c.getList(c.cateStatic);case 15:c.$nextTick((function(){var t=e.createSelectorQuery().in(c);t.select(".query").boundingClientRect((function(e){e.top&&(c.homeTop=e.top)})).exec()})),c.loadShow=!1;case 17:case"end":return a.stop()}}),a)})))()},methods:{toIndex:function(t){var n=this;return u(r.default.mark((function a(){var i;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=n,i.index=t,1==t?e.switchTab({url:"/pages/center/center"}):2==t?e.switchTab({url:"/pages/find/find"}):3==t&&e.switchTab({url:"/pages/user/user"});case 3:case"end":return a.stop()}}),a)})))()},getBannerList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_banner",pageIndex:1,pageSize:10,order:{name:"sort",type:"desc"}}});case 3:i=t.sent,n.bannerList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},getindexList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_index",pageIndex:1,pageSize:4,order:{name:"sort",type:"desc"}}});case 3:i=t.sent,n.indexList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},getindesList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_index1",pageIndex:1,pageSize:4,order:{name:"sort",type:"desc"}}});case 3:i=t.sent,n.indesList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},getHotList:function(){var e=this;return u(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:{status:1},order:{name:"view",type:"desc"},pageIndex:1,pageSize:20}});case 3:i=t.sent,n.hotList=i.result.data;case 5:case"end":return t.stop()}}),t)})))()},cateClick:function(e,t,n){var a=this;e!=a.cateStatic&&(n&&(a.rolldistance=n),a.cateStatic=e,a.getList(e,t,1))},getList:function(t,n,i){var o=this;return u(r.default.mark((function u(){var c,s,d,l,f;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(c=o,s=c.coverList,1==i&&(e.showLoading({mask:!0,title:"正在拼命加载中..."}),s=[],c.pageIndex=0),c.pageIndex=c.pageIndex+1,c.loadStatus="loading",!n){r.next=18;break}if("tags"!==n){r.next=12;break}return r.next=9,a.callFunction({name:"query_list",data:{dbName:"wx_cover",tags:t,pageIndex:c.pageIndex,pageSize:5}});case 9:d=r.sent,r.next=16;break;case 12:if("category"!==n){r.next=16;break}return r.next=15,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:{status:1,category_name:t},order:{name:"time",type:"desc"},pageIndex:c.pageIndex,pageSize:5}});case 15:d=r.sent;case 16:r.next=23;break;case 18:return l={status:1},f={},"new"==t?f={name:"time",type:"desc"}:"hot"==t&&(f={name:"view",type:"desc"}),r.next=22,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:l,order:f,pageIndex:c.pageIndex,pageSize:5}});case 22:d=r.sent;case 23:e.hideLoading(),d.result.hasMore?c.loadStatus="loadmore":c.loadStatus="nomore",c.coverList=s.concat(d.result.data);case 26:case"end":return r.stop()}}),u)})))()},search:function(){e.navigateTo({url:"/pages/search/search"})},backTop:function(){e.pageScrollTo({scrollTop:0,duration:300})},bannerClick:function(t){var n=this.bannerList[t].type;1===n&&e.navigateToMiniProgram({appId:this.bannerList[t].appid,path:this.bannerList[t].path}),0===n&&e.navigateTo({url:this.bannerList[t].url})},detail:function(t,n,a){var r=JSON.stringify(a);e.navigateTo({url:"/pages/detail/detail?id="+t+"&index="+n+"&images="+r})},listClick:function(t,n,a){e.navigateTo({url:"/pages/list/list?type="+t+"&pid="+n+"&id="+a})},adLoad:function(){this.adFlag=!0},adError:function(e){this.adFlag=!1},adClose:function(){this.adFlag=!1}},onReachBottom:function(){var e=this;return u(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,"nomore"!=n.loadStatus){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.getList(n.cateStatic);case 5:case"end":return t.stop()}}),t)})))()},onPageScroll:function(e){this.scrollTop=e.scrollTop,e.scrollTop>1e3?this.backShow=!0:this.backShow=!1},onShareAppMessage:function(e){return{title:"精选手机壁纸、动漫二次元壁纸、Anime、Safe for Work",path:"/pages/index/index?userId="+this.vuex_user._id,imageUrl:"../../static/fenxiang.png"}},onShareTimeline:function(e){return{title:"精选手机壁纸、动漫二次元壁纸、Anime、Safe for Work",path:"/pages/index/index",imageUrl:"../../static/fenxiang.png"}}};t.default=f}).call(this,n("a821")["default"],n("a9ff")["default"])}},[["9971","common/runtime","common/vendor"]]]);
>>>>>>> 7842511533f8e44d1c955adad31d6c25d8ec0481
