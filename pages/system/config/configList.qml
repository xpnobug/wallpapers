<block qq:if="{{vuex_user.system==1}}"><view><view class="u-p-l-20 u-p-r-20"><block qq:for="{{configList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block qq:if="{{item.key!='access_token'}}"><view class="tab u-m-t-20"><view class="u-p-l-30 u-p-r-30 u-p-t-30 u-p-b-30 border-bottom u-flex u-row-between"><view class="title">{{item.name}}</view><view class="yes">{{item.key}}</view></view><view class="u-font-12 u-tips-color u-p-l-30 u-p-r-30 u-p-t-15 u-p-b-15 u-flex u-row-between"><view style="width:80%;">{{"当前："+item.val}}</view><view><block qq:if="{{item.val===true||item.val===false}}"><view><u-switch vue-id="{{'5ea54d60-1-'+index}}" size="28" active-color="#f1c929" inactive-color="#F8F8F8" value="{{item.val}}" data-event-opts="{{[['^change',[['switchChange',['$0',index],[[['configList','',index,'_id']]]]]],['^input',[['__set_model',['$0','val','$event',[]],[[['configList','',index]]]]]]]}}" bind:change="__e" bind:input="__e" bind:__l="__l"></u-switch></view></block><block qq:else><view data-event-opts="{{[['tap',[['sheetClick',['$0',index],[[['configList','',index,'_id']]]]]]]}}" class="u-flex u-row-right" bindtap="__e"><view class="u-p-r-10">操作</view><view class="arror-right"></view></view></block></view></view></view></block></block></view><block qq:if="{{noData}}"><view class="u-flex u-flex-col u-col-center" style="width:100vw;height:50vh;padding-top:200rpx;"><view><image style="width:300rpx;height:300rpx;" src="/static/nodata.png"></image></view><view class="u-tips-color u-font-12 u-p-t-30">没有数据哦~</view></view></block><view data-event-opts="{{[['tap',[['addClick',['$event']]]]]}}" class="add" bindtap="__e"><image src="/static/icon/add.png"></image></view><view class="safe-area-inset-bottom"><view style="height:10px;"></view></view><u-modal vue-id="5ea54d60-2" title="配置" show-cancel-button="{{true}}" confirm-text="保存" confirm-color="#fcc600" content="content" async-close="{{true}}" negative-top="280" value="{{editShow}}" data-event-opts="{{[['^confirm',[['editChange']]],['^input',[['__set_model',['','editShow','$event',[]]]]]]}}" bind:confirm="__e" bind:input="__e" bind:__l="__l" vue-slots="{{['default']}}"><view class="u-p-40"><view><u-input bind:input="__e" vue-id="{{('5ea54d60-3')+','+('5ea54d60-2')}}" border="{{true}}" border-color="#F7F7F7" clearable="{{false}}" height="{{80}}" disabled="{{true}}" placeholder="填写配置的说明" value="{{config.name}}" data-event-opts="{{[['^input',[['__set_model',['$0','name','$event',[]],['config']]]]]}}" bind:__l="__l"></u-input></view><view class="u-p-t-15"><u-input bind:input="__e" vue-id="{{('5ea54d60-4')+','+('5ea54d60-2')}}" border="{{true}}" border-color="#F7F7F7" clearable="{{false}}" height="{{80}}" placeholder="填写配置的值" value="{{config.val}}" data-event-opts="{{[['^input',[['__set_model',['$0','val','$event',[]],['config']]]]]}}" bind:__l="__l"></u-input></view></view></u-modal><u-action-sheet vue-id="5ea54d60-5" list="{{sheetList}}" safe-area-inset-bottom="{{true}}" value="{{sheetShow}}" data-event-opts="{{[['^click',[['sheetChange']]],['^input',[['__set_model',['','sheetShow','$event',[]]]]]]}}" bind:click="__e" bind:input="__e" bind:__l="__l"></u-action-sheet></view></block>