<block qq:if="{{vuex_user.system==1}}"><view><view class="u-p-40"><u-form class="vue-ref" vue-id="01a83708-1" model="{{category}}" data-ref="uForm" bind:__l="__l" vue-slots="{{['default']}}"><view class="u-flex u-row-left u-col-top u-p-b-20"><u-upload class="vue-ref" vue-id="{{('01a83708-2')+','+('01a83708-1')}}" action max-count="1" file-list="{{categoryId!='-1'?imgList:''}}" auto-upload="{{false}}" uploadText="上传封面图" width="400" height="197" maxSize="{{1024*100}}" show-progress="{{false}}" size-type="{{['compressed']}}" source-type="{{['album']}}" multiple="{{false}}" del-icon="close" del-bg-color="#ff7c7c" del-color="#FFFFFF" limitType="{{['png','jpg','jpeg']}}" data-ref="uUpload" bind:__l="__l"></u-upload><view class="u-p-l-20 u-p-t-20"><view class="u-font-12">注意事项：</view><view class="u-font-12 u-tips-color u-p-t-15">比例：500 x 250</view><view class="u-font-12 u-tips-color u-p-t-15">大小：200kb</view></view></view><view style="border-bottom:1rpx solid #F4F4F4;border-top:1rpx solid #F4F4F4;"><u-form-item vue-id="{{('01a83708-3')+','+('01a83708-1')}}" label="名称" border-bottom="{{false}}" bind:__l="__l" vue-slots="{{['default']}}"><u-input bind:input="__e" vue-id="{{('01a83708-4')+','+('01a83708-3')}}" clearable="{{false}}" placeholder="填写分类名称" value="{{category.name}}" data-event-opts="{{[['^input',[['__set_model',['$0','name','$event',[]],['category']]]]]}}" bind:__l="__l"></u-input></u-form-item></view><view style="border-bottom:1rpx solid #F4F4F4;border-top:1rpx solid #F4F4F4;"><u-form-item vue-id="{{('01a83708-5')+','+('01a83708-1')}}" label="排序" border-bottom="{{false}}" bind:__l="__l" vue-slots="{{['default']}}"><u-input bind:input="__e" vue-id="{{('01a83708-6')+','+('01a83708-5')}}" type="number" height="{{40}}" clearable="{{false}}" placeholder="排序，数字越大越靠前" value="{{category.sort}}" data-event-opts="{{[['^input',[['__set_model',['$0','sort','$event',[]],['category']]]]]}}" bind:__l="__l"></u-input></u-form-item></view></u-form><view class="u-p-t-40"><view class="btn" hover-class="hover-class" hover-stay-time="50" data-event-opts="{{[['tap',[['submit',['$event']]]]]}}" bindtap="__e">保 存</view></view></view></view></block>