(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/dynamic/dynamic"],{"0c61":function(e,n,t){"use strict";t.r(n);var o=t("1c31"),i=t("433b");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("952e");var c,u=t("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},"1bbc":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=t("b07d"),a="",c=getApp(),u=function(){t.e("components/u8AD/u8AD").then(function(){return resolve(t("aeea"))}.bind(null,t)).catch(t.oe)},r={data:function(){return{videos:[],tabHidden:!0,refreshStatus:!1,scrollTop:0,u8ad:{adData:{},ad:{banner:"banner",insert:"insert",fixed:"fixed"}}}},components:{u8Ad:u},props:{},onLoad:function(){a="";var n=this;e.showLoading({title:"正在拼命加载中..."}),i.getConfig((function(){n.setData({tabHidden:c.globalData.isShenHe}),o=1,c.globalData.isShenHe?(a="情侣壁纸",n.getTabVideo()):n.getRecommendVideo()})),getApp()},onShareAppMessage:function(){return{title:"精选高清手机壁纸，动态壁纸，头像",path:"pages/find/dynamic/dynamic"}},onShareTimeline:function(){return{title:"精选高清手机壁纸，动态壁纸，头像"}},methods:{fh:function(){e.navigateBack()},getRecommendVideo:function(){var n=this,t=this.videos;i.getRecommendVideo(o,(function(i){1==o&&(t=[],n.setData({scrollTop:0}));for(var a=0;a<i.length;a++)"1"!=i[a].is_ads&&t.push(i[a]);n.setData({videos:t,refreshStatus:!1}),e.stopPullDownRefresh(),e.hideLoading()}),(function(n){e.stopPullDownRefresh(),e.hideLoading()}))},getTabVideo:function(){var n=this,t=this.videos;console.log("tag="+a),i.getTabVideo(o,a,(function(i){1==o&&(t=[],n.setData({scrollTop:0}));for(var a=0;a<i.length;a++)"1"!=i[a].is_ads&&t.push(i[a]);n.setData({videos:t,refreshStatus:!1}),e.stopPullDownRefresh(),e.hideLoading()}),(function(n){e.stopPullDownRefresh(),e.hideLoading()}))},preview:function(n){var t=n.currentTarget.dataset.url;e.navigateTo({url:"../../dynamicdetail/dynamicdetail?url="+encodeURIComponent(t)})},searchTap:function(n){e.navigateTo({url:"../../searchvideo/searchvideo"})},dayTap:function(n){e.showLoading({title:"正在拼命加载中..."}),a="每日精选",o=1,this.getTabVideo()},chaoQingTap:function(n){e.showLoading({title:"正在拼命加载中..."}),a="60帧超清",o=1,this.getTabVideo()},QLTap:function(n){e.showLoading({title:"正在拼命加载中..."}),a="情侣壁纸",o=1,this.getTabVideo()},sx:function(n){a="每日精选",o=1,this.getTabVideo(),e.pageScrollTo({scrollTop:0,duration:300})},backTop:function(){e.pageScrollTo({scrollTop:0,duration:300})}}};n.default=r}).call(this,t("a821")["default"])},"1c31":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,"c3bd"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"433b":function(e,n,t){"use strict";t.r(n);var o=t("1bbc"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},"952e":function(e,n,t){"use strict";var o=t("e045"),i=t.n(o);i.a},e045:function(e,n,t){},f17c:function(e,n,t){"use strict";(function(e){t("ec1d");o(t("66fd"));var n=o(t("0c61"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("a821")["createPage"])}},[["f17c","common/runtime","common/vendor"]]]);