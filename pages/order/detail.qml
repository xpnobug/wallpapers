<view><u-navbar vue-id="57d45316-1" is-back="{{true}}" title=" " title-width="325" title-color="#333333" title-size="28" background="{{navbarBackground}}" border-bottom="{{false}}" bind:__l="__l"></u-navbar><view class="bg"></view><view class="top u-p-l-40 u-p-t-10"><view class="title">下载成功</view><view class="f_title u-p-t-10 u-p-l-5">壁纸/头像已下载成功</view></view><view class="kapian u-m-40"><view class="bg-white u-flex u-row-center u-p-t-30" style="border-radius:24rpx 24rpx 0 0;"><view class="tab"><image style="width:215rpx;height:350rpx;" src="{{order.image}}" mode="aspectFill" data-event-opts="{{[['tap',[['previewImage',['$0'],['order.image']]]]]}}" bindtap="__e"></image><view data-event-opts="{{[['tap',[['downClick',['$0'],['order.image']]]]]}}" class="down" bindtap="__e"><view class="u-flex u-row-center u-col-center"><u-icon vue-id="57d45316-2" name="/static/icon/duihuan.png" size="{{42}}" bind:__l="__l"></u-icon></view></view></view></view><image style="width:100%;height:32rpx;display:block;" src="../../static/tabs.png"></image><view class="bg-white u-p-l-40 u-p-r-40 u-p-t-20 u-p-b-20"><view class="u-flex u-row-between u-p-t-20 u-p-b-20"><view>扣除积分</view><view class="u-tips-color u-font-12">{{order.integral+"积分"}}</view></view><view class="u-flex u-row-between u-p-t-20 u-p-b-20"><view>下载时间</view><view class="u-tips-color u-font-12">{{$root.g0}}</view></view></view><image style="width:100%;height:32rpx;display:block;" src="../../static/tabs.png"></image><view class="zhuyi bg-white u-p-l-40 u-p-r-40 u-p-b-40 u-p-t-20" style="border-radius:0 0 24rpx 24rpx;"><view class="u-main-color u-text-center u-p-b-10">注意事项</view><view class="u-tips-color u-font-12">下载成功时将同步扣除所需积分。</view><view class="u-tips-color u-font-12">下载成功后将自动保存图片到相册。</view><view class="u-tips-color u-font-12">需要自行将图片设置为壁纸或者头像。</view><view class="u-tips-color u-font-12">下载过的图片再次下载不扣除积分。</view></view></view><models data-custom-hidden="{{!(adShow)}}" vue-id="57d45316-3" authorize="{{false}}" ad="{{true}}" title="已成功保存到相册，别忘了分享给朋友哦！" btnText="分享给好友" closeText="暂时不用" data-event-opts="{{[['^save',[['e0']]],['^close',[['e1']]]]}}" bind:save="__e" bind:close="__e" bind:__l="__l"></models></view>