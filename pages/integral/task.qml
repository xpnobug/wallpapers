<view><view hidden="{{!(!loadShow)}}"><u-navbar vue-id="86e8beae-1" is-back="{{true}}" title="积分任务" title-width="325" title-color="#333333" title-size="28" border-bottom="{{false}}" bind:__l="__l"></u-navbar><view class="top"><view class="icon u-flex u-row-center u-col-center u-p-t-20"><image src="../../static/icon/jinbi.png"></image></view><view class="kapian u-flex-col u-row-center u-col-center u-p-t-30"><view class="price">{{userIntegral}}</view><view class="shuom u-font-12 u-tips-color u-p-t-10">当前可用积分</view></view></view><view class="u-p-l-40 u-p-r-40"><view class="u-font-18 u-m-t-80 u-m-b-30 title">积分任务</view><view class="safe-area-inset-bottom"><view class="tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30"><view class="u-flex u-row-left u-col-center"><view class="icon u-flex u-row-center u-col-center"><u-icon vue-id="86e8beae-2" name="/static/icon/user2.png" size="46" bind:__l="__l"></u-icon></view><view class="u-p-l-20 u-p-t-10"><view>每日签到</view><view class="u-font-12 u-light-color">{{"+"+signIntegral+"积分/天"}}</view></view></view><view class="btn" hover-class="hover-class" hover-stay-time="50" data-event-opts="{{[['tap',[['signClick',['$event']]]]]}}" bindtap="__e">去签到</view></view><view class="tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30"><view class="u-flex u-row-left u-col-center"><view class="icon u-flex u-row-center u-col-center"><u-icon vue-id="86e8beae-3" name="/static/icon/user1.png" size="46" bind:__l="__l"></u-icon></view><view class="u-p-l-20 u-p-t-10"><view>邀请好友</view><view class="u-font-12 u-light-color">{{"+"+inviteIntegral+"积分/位"}}</view></view></view><view class="btn" hover-class="hover-class" hover-stay-time="50">去邀请<button style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;" open-type="share"></button></view></view><block qq:if="{{adUnitId}}"><view class="tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30"><view class="u-flex u-row-left u-col-center"><view class="icon u-flex u-row-center u-col-center"><u-icon vue-id="86e8beae-4" name="/static/icon/video.png" size="46" bind:__l="__l"></u-icon></view><view class="u-p-l-20 u-p-t-10"><view>看广告</view><view class="u-font-12 u-light-color">{{"+"+adIntegral+"积分/次"}}</view></view></view><view class="btn" hover-class="hover-class" hover-stay-time="50" data-event-opts="{{[['tap',[['adClick',['$event']]]]]}}" bindtap="__e">去观看</view></view></block><view class="u-font-12 u-light-color u-text-center u-p-t-40">更多任务敬请期待~</view></view><ad unit-id="adunit-8f852f6b8fb762d7" ad-type="video" ad-theme="white"></ad></view></view><view hidden="{{!(loadShow)}}" class="loading_page"><image src="/static/loading/loading.gif"></image></view></view>