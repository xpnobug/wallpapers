(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"655f":function(e,n,t){"use strict";t.r(n);var a=t("f64e"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a},"8e1e":function(e,n,t){"use strict";var a=t("bdba"),r=t.n(a);r.a},bda9:function(e,n,t){"use strict";(function(e){t("ec1d");a(t("66fd"));var n=a(t("fe8f"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("a821")["createPage"])},bdba:function(e,n,t){},cc53:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var a={uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,"c3bd"))}},r=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){n.stopPropagation(),n.preventDefault(),e.a=!1},e.e1=function(n){e.a=!1},e.e2=function(n){e.loginShow=!1},e.e3=function(n){e.downShow=!1},e.e4=function(n){e.signShow=!1},e.e5=function(n){e.adShow=!1},e.e6=function(n){e.adShow=!1})},i=[]},f64e:function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,n,t,a,r,i,s){try{var u=e[i](s),o=u.value}catch(c){return void t(c)}u.done?n(o):Promise.resolve(o).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function u(e){s(i,a,r,u,o,"next",e)}function o(e){s(i,a,r,u,o,"throw",e)}u(void 0)}))}}var o=null,c=e.getSystemInfoSync().windowWidth,l=e.getSystemInfoSync().windowHeight,d=function(){t.e("components/model/model").then(function(){return resolve(t("4dee"))}.bind(null,t)).catch(t.oe)},f={components:{models:d},data:function(){return{loadFlag:!0,loginShow:!1,detail:{},time:"",date:"",adIntegral:0,downShow:!1,downIntegral:0,downTitle:"",downBtn:"",adShow:!1,isColl:!1,isZan:!1,zanStatus:!0,collStatus:!0,cssTran:!1,indexCurrent:1,activeCurrent:0,signShow:!1,signTitle:"",w:c,h:l}},onLoad:function(e){var n=this;return u(r.default.mark((function t(){var a,i,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,i=e.index,s=e.images,u=n,t.next=4,u.getDate();case 4:if(u.indexCurrent=parseInt(i)+1,u.activeCurrent=parseInt(i),!s){t.next=13;break}return u.detail.images=JSON.parse(s),u.detail._id=a,t.next=11,u.addView(a);case 11:t.next=15;break;case 13:return t.next=15,u.getDetail(a);case 15:return t.next=17,u.getConfig();case 17:u.vuex_user&&(u.getIsZan(),u.getIsColl(),u.getUser()),u.adLoad(),u.loadFlag=!1;case 20:case"end":return t.stop()}}),t)})))()},methods:{getDate:function(){var e=this;return u(r.default.mark((function n(){var t,a,i,s,u,o,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=new Date,t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),s=t.getHours(),u=t.getMinutes(),t.getSeconds(),o=a+"月"+i+"日",c=[s,u].map(e.formatNumber).join(":"),console.log(o),console.log(c),e.setData({date:o,time:c});case 2:case"end":return n.stop()}}),n)})))()},formatNumber:function(e){return(e=e.toString())[1]?e:"0"+e},getDetail:function(n){var t=this;return u(r.default.mark((function i(){var s,u;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t,r.next=3,a.callFunction({name:"query_map",data:{dbName:s.vuex_isShenHe?"wx_cover_shenhe":"wx_cover",id:n}});case 3:if(u=r.sent,s.detail=u.result,s.detail){r.next=9;break}return e.showToast({title:"壁纸不存在",icon:"none",duration:1500}),setTimeout((function(){e.navigateBack()}),1500),r.abrupt("return");case 9:s.addView(n);case 10:case"end":return r.stop()}}),i)})))()},getConfig:function(){var e=this;return u(r.default.mark((function n(){var t,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e,n.next=3,a.callFunction({name:"config_map",data:{keys:["downIntegral","adIntegral"]}});case 3:i=n.sent,i.result.success&&(t.downIntegral=parseInt(i.result.data[0]),t.adIntegral=parseInt(i.result.data[1]));case 5:case"end":return n.stop()}}),n)})))()},getIsZan:function(){var e=this;return u(r.default.mark((function n(){var t,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e,n.next=3,a.callFunction({name:"query_count",data:{dbName:t.vuex_isShenHe?"wx_cover_shenhe":"wx_cover",filter:{_id:t.detail._id,"zan.user_id":t.vuex_user._id}}});case 3:i=n.sent,t.zanStatus=!1,i.result>0&&(t.isZan=!0);case 6:case"end":return n.stop()}}),n)})))()},getIsColl:function(){var e=this;return u(r.default.mark((function n(){var t,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e,n.next=3,a.callFunction({name:"query_count",data:{dbName:t.vuex_isShenHe?"wx_cover_shenhe":"wx_cover",filter:{_id:t.detail._id,"coll.user_id":t.vuex_user._id}}});case 3:i=n.sent,t.collStatus=!1,i.result>0&&(t.isColl=!0);case 6:case"end":return n.stop()}}),n)})))()},winClick:function(){var n=this;return u(r.default.mark((function t(){var i,s,u,o,c,l,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=n,i.vuex_user){t.next=4;break}return i.loginShow=!0,t.abrupt("return");case 4:if(!(i.downIntegral>0)){t.next=18;break}if(s=i.vuex_user.integral,!(s<i.downIntegral)){t.next=10;break}return i.downShow=!0,i.downTitle="<p style='font-weight: 550;font-size: 16px;'>下载需要 "+i.downIntegral+" 积分</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>"+s+"</span>积分，无法下载当前作品，快去赚积分吧~</p>",t.abrupt("return");case 10:return e.showLoading({mask:!0,title:"保存中..."}),t.next=13,a.callFunction({name:"place_order",data:{userId:i.vuex_user._id,coverId:i.detail._id,integral:i.downIntegral,index:i.indexCurrent-1}});case 13:u=t.sent,console.log("query",u),u.result.success?(i.getUser(),o=i.detail.images[i.indexCurrent-1],c=o.substring(o.lastIndexOf(".")+1),l=(new Date).valueOf(),e.downloadFile({url:o,filePath:wx.env.USER_DATA_PATH+"/"+l+"."+c,success:function(n){var t=n.filePath;e.saveImageToPhotosAlbum({filePath:t,success:function(n){e.hideLoading(),i.adShow=!0},fail:function(n){n.errMsg&&e.showModal({title:"提示",content:"无权限，请打开下载权限后再试！",showCancel:!1,success:function(n){n.confirm&&e.openSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?e.saveImageToPhotosAlbum({filePath:t,success:function(n){e.hideLoading(),i.adShow=!0}}):e.showModal({title:"温馨提示",content:"授权失败，请稍后重新获取",showCancel:!1})}})}}),e.hideLoading()}})},fail:function(e){console.log(e)}})):e.showToast({mask:!0,icon:"none",title:u.result.msg,duration:1e3}),t.next=22;break;case 18:o=i.detail.images[i.indexCurrent-1],c=o.substring(o.lastIndexOf(".")+1),d=(new Date).valueOf(),e.downloadFile({url:o,filePath:wx.env.USER_DATA_PATH+"/"+d+"."+c,success:function(n){var t=n.filePath;e.saveImageToPhotosAlbum({filePath:t,success:function(n){e.hideLoading(),i.adShow=!0},fail:function(n){n.errMsg&&e.showModal({title:"提示",content:"无权限，请打开下载权限后再试！",showCancel:!1,success:function(n){n.confirm&&e.openSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?e.saveImageToPhotosAlbum({filePath:t,success:function(n){e.hideLoading(),i.adShow=!0}}):e.showModal({title:"温馨提示",content:"授权失败，请稍后重新获取",showCancel:!1})}})}}),e.hideLoading()}})},fail:function(e){console.log(e)}});case 22:case"end":return t.stop()}}),t)})))()},backClick:function(){e.navigateBack()},collectClick:function(){var n=this;return u(r.default.mark((function t(){var i,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=n,i.vuex_user){t.next=4;break}return i.loginShow=!0,t.abrupt("return");case 4:if(!i.collStatus){t.next=7;break}return e.showToast({icon:"none",title:"太快啦，歇一会再试试",mask:!0,duration:1e3}),t.abrupt("return");case 7:return i.collStatus=!0,i.isColl=!i.isColl,t.next=11,a.callFunction({name:"zan_and_coll",data:{dbName:i.vuex_isShenHe?"wx_cover_shenhe":"wx_cover",type:"coll",userId:i.vuex_user._id,filter:{_id:i.detail._id,"coll.user_id":i.vuex_user._id}}});case 11:s=t.sent,s.result.success||(e.showToast({mask:!0,icon:"none",title:s.result.msg,duration:2e3}),i.isColl=!i.isColl),setTimeout((function(){i.collStatus=!1}),5e3);case 14:case"end":return t.stop()}}),t)})))()},zanClick:function(n){var t=this;return u(r.default.mark((function i(){var s,u;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s=t,s.vuex_user){r.next=4;break}return s.loginShow=!0,r.abrupt("return");case 4:if((new Date).getTime(),!n){r.next=9;break}e.showToast({icon:"none",title:"你已经点过赞啦~",mask:!0,duration:1e3}),r.next=18;break;case 9:if(!s.zanStatus){r.next=12;break}return e.showToast({icon:"none",title:"太快啦，歇一会再试试",mask:!0,duration:1e3}),r.abrupt("return");case 12:return s.zanStatus=!0,s.isZan=!s.isZan,r.next=16,a.callFunction({name:"zan_and_coll",data:{dbName:s.vuex_isShenHe?"wx_cover_shenhe":"wx_cover",type:"zan",userId:s.vuex_user._id,filter:{_id:s.detail._id,"zan.user_id":s.vuex_user._id}}});case 16:u=r.sent,u.result.success||(e.showToast({mask:!0,icon:"none",title:u.result.msg,duration:2e3}),s.isZan=!s.isZan);case 18:setTimeout((function(){s.zanStatus=!1}),5e3);case 19:case"end":return r.stop()}}),i)})))()},cssClick:function(){this.cssTran=!this.cssTran},swiperChange:function(e){this.indexCurrent=e.detail.current+1},addView:function(e){return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.callFunction({name:"view_raise",data:{coverId:e}});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))()},adClick:function(){var e=this;e.vuex_user?o&&o.show().catch((function(e){o.load().then((function(){return o.show()}))})):e.loginShow=!0},adLoad:function(){var e=this;wx.createRewardedVideoAd&&(o=wx.createRewardedVideoAd({adUnitId:"{{ qqexcitation }}"}),o.onError((function(e){console.log("videoAd onError",res)})),o.onClose((function(n){e.downShow=!1,n&&n.isEnded||void 0===n?e.vuex_user&&e.userIntegral():console.log("中途退出")})))},userIntegral:function(){var n=this;return u(r.default.mark((function t(){var i,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=n,e.showLoading({mask:!0,title:"正在拼命加载中..."}),t.next=4,a.callFunction({name:"user_integral",data:{userId:i.vuex_user._id}});case 4:s=t.sent,e.hideLoading(),s.result.success&&(i.getUser(),i.signTitle="<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>"+s.result.integral+"</span>积分</p>",i.signShow=!0);case 7:case"end":return t.stop()}}),t)})))()},getUser:function(){var e=this;return u(r.default.mark((function n(){var t,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e,n.next=3,a.callFunction({name:"query_map",data:{dbName:"wx_user",id:t.vuex_user._id}});case 3:i=n.sent,t.$u.vuex("vuex_user",i.result);case 5:case"end":return n.stop()}}),n)})))()},getUserInfo:function(){var n=this;e.getUserInfo({success:function(e){console.log(e),n.name=e.userInfo.nickName,n.avatar=e.userInfo.avatarUrl,n.wxlogin()},fail:function(){console.log("获取用户信息失败")}})},wxlogin:function(){var n=this;return u(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=n,e.showLoading({title:"登录中..."}),e.login({provider:"weixin",success:function(e){var n=e.code;a.wxloginres(n)}});case 3:case"end":return t.stop()}}),t)})))()},wxloginres:function(n){var t=this;return u(r.default.mark((function i(){var s,u,o,c;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t,u=e.getStorageSync("userId"),o="qq",r.next=5,a.callFunction({name:"user_authorize",data:{name:s.name,avatar:s.avatar,mptype:o,code:n,userId:u}});case 5:c=r.sent,c.result.success?(s.$u.vuex("vuex_user",c.result.data),s.getIsZan(),s.getIsColl(),e.showToast({icon:"none",mask:!0,title:"登录成功",duration:1500}),e.removeStorageSync("userId")):e.showToast({icon:"none",mask:!0,title:c.result.msg,duration:1500}),s.loginShow=!1;case 8:case"end":return r.stop()}}),i)})))()}},onShareAppMessage:function(e){var n=this;return setTimeout((function(){n.adShow=!1}),2e3),{title:"送你一张超级好看的壁纸~",imageUrl:n.detail.images[n.indexCurrent-1],path:"/pages/index/index?userId="+n.vuex_user._id+"&detailId="+n.detail._id+"&index="+(n.indexCurrent-1)}},onShareTimeline:function(e){return{title:"表，我的聊天背景都是在这找的~",path:"/pages/index/index",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ed8ec0e-de90-4ed2-8830-c36512ae8fc0/793331ab-9a2a-4236-a7d4-1d19bdff6ae8.png"}}};n.default=f}).call(this,t("a821")["default"],t("a9ff")["default"])},fe8f:function(e,n,t){"use strict";t.r(n);var a=t("cc53"),r=t("655f");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("8e1e");var s,u=t("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);n["default"]=o.exports}},[["bda9","common/runtime","common/vendor"]]]);