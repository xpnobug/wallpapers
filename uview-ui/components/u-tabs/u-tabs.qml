<view class="u-tabs data-v-2c475f74" style="{{'background:'+(bgColor)+';'}}"><view id="{{id}}" class="data-v-2c475f74"><scroll-view class="u-scroll-view data-v-2c475f74" scroll-x="{{true}}" scroll-left="{{scrollLeft}}" scroll-with-animation="{{true}}"><view class="{{['u-scroll-box','data-v-2c475f74',(!isScroll)?'u-tabs-scorll-flex':'']}}"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="u-tab-item u-line-1 data-v-2c475f74" style="{{item.s0}}" id="{{'u-tab-item-'+index}}" data-event-opts="{{[['tap',[['clickTab',[index]]]]]}}" bindtap="__e"><u-badge vue-id="{{'3b2b41ec-1-'+index}}" count="{{item.$orig[count]||item.$orig['count']||0}}" offset="{{offset}}" size="mini" class="data-v-2c475f74" bind:__l="__l"></u-badge>{{''+(item.$orig[name]||item.$orig['name'])+''}}</view></block><block qq:if="{{showBar}}"><view class="u-tab-bar data-v-2c475f74" style="{{$root.s1}}"></view></block></view></scroll-view></view></view>