<block qq:if="{{vuex_user.system==1}}"><view><view class="u-p-40"><u-form class="vue-ref" vue-id="5720fd3c-1" model="{{design}}" data-ref="uForm" bind:__l="__l" vue-slots="{{['default']}}"><view class="u-p-b-20"><u-upload class="vue-ref" vue-id="{{('5720fd3c-2')+','+('5720fd3c-1')}}" action max-count="1" file-list="{{designId!='-1'?imgList:''}}" auto-upload="{{false}}" uploadText="上传刘海图片" width="230" height="230" maxSize="{{1*1024*1024}}" show-progress="{{false}}" size-type="{{['original']}}" source-type="{{['album']}}" multiple="{{true}}" del-icon="close" del-bg-color="#ff7c7c" del-color="#FFFFFF" limitType="{{['png','jpg','jpeg']}}" data-ref="uUpload" bind:__l="__l"></u-upload></view><view style="border-bottom:1rpx solid #F4F4F4;"><u-form-item vue-id="{{('5720fd3c-3')+','+('5720fd3c-1')}}" label="类型" border-bottom="{{false}}" bind:__l="__l" vue-slots="{{['default']}}"><u-radio-group bind:change="__e" bind:input="__e" vue-id="{{('5720fd3c-4')+','+('5720fd3c-3')}}" value="{{design.mode}}" data-event-opts="{{[['^change',[['radioGroupChange']]],['^input',[['__set_model',['$0','mode','$event',[]],['design']]]]]}}" bind:__l="__l" vue-slots="{{['default']}}"><u-radio vue-id="{{('5720fd3c-5')+','+('5720fd3c-4')}}" active-color="#fdc621" size="50" name="{{0}}" bind:__l="__l" vue-slots="{{['default']}}">免费</u-radio><u-radio vue-id="{{('5720fd3c-6')+','+('5720fd3c-4')}}" active-color="#fdc621" size="50" name="{{1}}" bind:__l="__l" vue-slots="{{['default']}}">收费</u-radio></u-radio-group></u-form-item></view></u-form><view class="u-p-t-40"><view class="btn" hover-class="hover-class" hover-stay-time="50" data-event-opts="{{[['tap',[['submit',['$event']]]]]}}" bindtap="__e">发 布</view></view></view></view></block>