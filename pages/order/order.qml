<view><u-navbar vue-id="12761f2e-1" is-back="{{true}}" title="我的下载" title-width="325" title-color="#333333" title-size="28" border-bottom="{{false}}" bind:__l="__l"></u-navbar><view class="safe-area-inset-bottom u-skeleton"><view class="u-flex u-row-left u-flex-wrap u-p-l-40 u-p-t-20"><block qq:for="{{orderList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view data-event-opts="{{[['tap',[['detailClick',['$0'],[[['orderList','',index,'_id']]]]]]]}}" class="tab u-skeleton-fillet" bindtap="__e"><image style="width:215rpx;height:350rpx;" src="{{item.image}}" mode="aspectFill"></image></view></block></view></view><block qq:if="{{noData}}"><view class="u-flex u-flex-col u-col-center" style="width:100vw;height:50vh;padding-top:200rpx;background-color:#FFFFFF;"><view><image style="width:300rpx;height:300rpx;" src="/static/nodata.png"></image></view><view class="u-tips-color u-font-12 u-p-t-30">没有数据哦~</view></view></block><block qq:if="{{!noData}}"><view><u-loadmore vue-id="12761f2e-2" status="{{loadStatus}}" font-size="{{24}}" margin-top="{{30}}" margin-bottom="{{30}}" color="#B8B8B8" bind:__l="__l"></u-loadmore></view></block><view class="safe-area-inset-bottom"><view style="height:1px;"></view></view><u-skeleton vue-id="12761f2e-3" loading="{{skeletonLoad}}" animation="{{true}}" bgColor="#FFF" el-color="#F3F3F3" bind:__l="__l"></u-skeleton></view>