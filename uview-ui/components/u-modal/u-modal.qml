<view class="data-v-cfc16b10"><u-popup vue-id="3626e936-1" zoom="{{zoom}}" mode="center" popup="{{false}}" z-index="{{uZIndex}}" length="{{width}}" mask-close-able="{{maskCloseAble}}" border-radius="{{borderRadius}}" negative-top="{{negativeTop}}" value="{{value}}" data-event-opts="{{[['^close',[['popupClose']]],['^input',[['__set_model',['','value','$event',[]]]]]]}}" bind:close="__e" bind:input="__e" class="data-v-cfc16b10" bind:__l="__l" vue-slots="{{['default']}}"><view class="u-model data-v-cfc16b10"><block qq:if="{{showTitle}}"><view class="u-model__title u-line-1 data-v-cfc16b10" style="{{$root.s0}}">{{title}}</view></block><view class="u-model__content data-v-cfc16b10"><block qq:if="{{$slots.default||$slots.$default}}"><view style="{{$root.s1}}" class="data-v-cfc16b10"><slot></slot></view></block><block qq:else><view class="u-model__content__message data-v-cfc16b10" style="{{$root.s2}}">{{content}}</view></block></view><block qq:if="{{showCancelButton||showConfirmButton}}"><view class="u-model__footer u-border-top data-v-cfc16b10"><block qq:if="{{showCancelButton}}"><view class="u-model__footer__button data-v-cfc16b10" style="{{$root.s3}}" hover-stay-time="{{100}}" hover-class="u-model__btn--hover" data-event-opts="{{[['tap',[['cancel',['$event']]]]]}}" bindtap="__e">{{''+cancelText+''}}</view></block><block qq:if="{{showConfirmButton||$slots['confirm-button']}}"><view class="u-model__footer__button hairline-left data-v-cfc16b10" style="{{$root.s4}}" hover-stay-time="{{100}}" hover-class="{{asyncClose?'none':'u-model__btn--hover'}}" data-event-opts="{{[['tap',[['confirm',['$event']]]]]}}" bindtap="__e"><block qq:if="{{$slots['confirm-button']}}"><slot name="confirm-button"></slot></block><block qq:else><block class="data-v-cfc16b10"><block qq:if="{{loading}}"><u-loading vue-id="{{('3626e936-2')+','+('3626e936-1')}}" mode="circle" color="{{confirmColor}}" class="data-v-cfc16b10" bind:__l="__l"></u-loading></block><block qq:else><block class="data-v-cfc16b10">{{''+confirmText+''}}</block></block></block></block></view></block></view></block></view></u-popup></view>