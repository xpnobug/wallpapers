<view class="data-v-77e5870f"><view hidden="{{!(!loadShow)}}" class="data-v-77e5870f"><view class="vtop data-v-77e5870f"><block qq:if="{{!homeTop||scrollTop<=homeTop-(menuButtonInfo.top+30+15)}}"><view class="title u-flex u-row-left u-p-l-40 data-v-77e5870f" style="{{'margin-top:'+(menuButtonInfo.top+'px')+';'}}"><text class="data-v-77e5870f"></text><u-icon class="u-p-l-15 fenxiang data-v-77e5870f" vue-id="57282994-1" name="/static/icon/share.png" size="40" bind:__l="__l"></u-icon><button style="position:absolute;top:20rpx;left:20rpx;width:50rpx;height:50rpx;opacity:0;" open-type="share" class="data-v-77e5870f"></button><view data-event-opts="{{[['tap',[['search',['$event']]]]]}}" class="search u-flex u-row-left data-v-77e5870f" bindtap="__e"><u-icon vue-id="57282994-2" name="/static/icon/search.png" size="36" class="data-v-77e5870f" bind:__l="__l"></u-icon><text class="u-p-l-15 data-v-77e5870f">搜索你想要的壁纸</text></view></view></block><block qq:else><view class="data-v-77e5870f"><scroll-view style="height:100rpx;" scroll-x="{{true}}" scroll-into-view="{{rolldistance}}" scroll-with-animation="{{true}}" class="data-v-77e5870f"><view class="u-flex u-row-left u-p-t-20 u-p-b-20 data-v-77e5870f"><view style="padding:0 16rpx;" id="akun1" class="data-v-77e5870f"></view><block qq:for="{{cateList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['scroll-view-item','tags','data-v-77e5870f',cateStatic==item.type?'tag-active':'']}}" id="{{'akun'+(index+1)}}" data-event-opts="{{[['tap',[['cateClick',['$0','$1','akun'+(index+2)],[[['cateList','',index,'type']],[['cateList','',index,'more']]]]]]]}}" bindtap="__e">{{''+item.name+''}}</view></block><view style="width:40rpx;" class="data-v-77e5870f">ㅤ</view></view></scroll-view></view></block><view class="div3 data-v-77e5870f"></view><view class="div2 data-v-77e5870f"></view><view class="div1 data-v-77e5870f"></view></view><view style="{{'margin-top:'+('calc('+menuButtonInfo.top+'px + 8% + 45rpx + 24rpx)')+';'}}" class="data-v-77e5870f"></view><view class="u-p-t-20 banner data-v-77e5870f"><u-swiper vue-id="57282994-3" effect3d="{{true}}" height="280" bg-color="#FFFFFF" name="image" border-radius="16" effect3d-previous-margin="0" list="{{bannerList}}" data-event-opts="{{[['^click',[['bannerClick']]]]}}" bind:click="__e" class="data-v-77e5870f" bind:__l="__l"></u-swiper></view><view class="data-v-77e5870f"><view class="u-p-t-40 data-v-77e5870f"><scroll-view scroll-x="{{true}}" scroll-into-view="{{rolldistance}}" scroll-with-animation="{{true}}" class="data-v-77e5870f"><view class="m-nav data-v-77e5870f"><view style="padding:0 16rpx;" id="akun1" class="data-v-77e5870f"></view><block qq:for="{{indexList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['scroll-view-item','dhs','data-v-77e5870f',cateStatic==item.type?'tag-active':'']}}" id="{{'akun'+(index+1)}}" data-event-opts="{{[['tap',[['cateClick',['$0','$1','akun'+(index+2)],[[['indexList','',index,'type']],[['indexList','',index,'more']]]]]]]}}" bindtap="__e"><navigator class="item data-v-77e5870f" url="{{item.url}}"><view class="image-wrap data-v-77e5870f"><image mode="widthFix" src="{{item.image}}" class="data-v-77e5870f"></image></view><view class="data-v-77e5870f">{{''+item.name+''}}</view></navigator></view></block></view></scroll-view><scroll-view scroll-x="{{true}}" scroll-into-view="{{rolldistance}}" scroll-with-animation="{{true}}" class="data-v-77e5870f"><view class="m-nav data-v-77e5870f"><view style="padding:0 15rpx;" id="akun1" class="data-v-77e5870f"></view><block qq:for="{{indesList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['scroll-view-item','dhs','data-v-77e5870f',cateStatic==item.type?'tag-active':'']}}" id="{{'akun'+(index+1)}}" data-event-opts="{{[['tap',[['cateClick',['$0','$1','akun'+(index+2)],[[['indesList','',index,'type']],[['indesList','',index,'more']]]]]]]}}" bindtap="__e"><navigator class="item data-v-77e5870f" url="{{item.url}}"><view class="image-wrap data-v-77e5870f"><image mode="widthFix" src="{{item.image}}" class="data-v-77e5870f"></image></view><view class="data-v-77e5870f">{{''+item.name+''}}</view></navigator></view></block></view></scroll-view></view></view><view class="u-p-t-40 data-v-77e5870f"><view class="u-p-l-40 u-p-r-40 data-v-77e5870f"><u-section vue-id="57282994-4" title="热门推荐" show-line="{{false}}" bold="{{false}}" font-size="{{36}}" sub-title="更多" data-event-opts="{{[['^click',[['listClick',['category','',-2]]]]]}}" bind:click="__e" class="data-v-77e5870f" bind:__l="__l"></u-section></view><scroll-view class="u-p-t-30 data-v-77e5870f" style="height:380rpx;" scroll-x="{{true}}"><view class="u-flex u-row-left u-p-l-40 u-p-r-40 data-v-77e5870f"><block qq:for="{{hotList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view data-event-opts="{{[['tap',[['detail',['$0',0,'$1'],[[['hotList','',index,'_id']],[['hotList','',index,'images']]]]]]]}}" class="tab data-v-77e5870f" bindtap="__e"><image style="width:215rpx;height:350rpx;" src="{{item.image+'?x-oss-process=image/resize,w_600/quality,q_100'}}" mode="aspectFill" class="data-v-77e5870f"></image><view class="array data-v-77e5870f">{{item.images.length}}</view></view></block><view style="width:40rpx;" class="data-v-77e5870f">ㅤ</view></view></scroll-view></view><view class="u-p-t-30 data-v-77e5870f"><view class="u-p-l-40 u-p-r-40 u-p-t-20 u-p-b-20 data-v-77e5870f"><u-section vue-id="57282994-5" title="官方推荐" show-line="{{false}}" bold="{{false}}" font-size="{{36}}" sub-title="更多" data-event-opts="{{[['^click',[['listClick',['category','',-1]]]]]}}" bind:click="__e" class="data-v-77e5870f" bind:__l="__l"></u-section></view><scroll-view style="height:80rpx;" scroll-x="{{true}}" scroll-into-view="{{rolldistance}}" scroll-with-animation="{{true}}" class="data-v-77e5870f"><view class="query u-m-t-10 u-m-b-10 u-m-r-30 u-flex u-row-left data-v-77e5870f"><view style="padding:0 18rpx;" id="akun1" class="data-v-77e5870f"></view><block qq:for="{{cateList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['scroll-view-item','tags','data-v-77e5870f',cateStatic==item.type?'tag-active':'']}}" id="{{'akun'+(index+1)}}" data-event-opts="{{[['tap',[['cateClick',['$0','$1','akun'+(index+2)],[[['cateList','',index,'type']],[['cateList','',index,'more']]]]]]]}}" bindtap="__e">{{''+item.name+''}}</view></block><view style="width:40rpx;" class="data-v-77e5870f">ㅤ</view></view></scroll-view><view class="u-flex u-row-left u-flex-wrap u-p-l-40 u-p-t-15 data-v-77e5870f"><block qq:for="{{coverList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block class="data-v-77e5870f"><block qq:for="{{item.images}}" qq:for-item="item_" qq:for-index="index_" qq:key="index_"><block class="data-v-77e5870f"><view data-event-opts="{{[['tap',[['detail',['$0',index_,'$1'],[[['coverList','',index,'_id']],[['coverList','',index,'images']]]]]]]}}" class="tab data-v-77e5870f" bindtap="__e"><image style="width:215rpx;height:350rpx;" src="{{item_+'?x-oss-process=image/resize,w_600/quality,q_80'}}" lazy-load="{{true}}" mode="aspectFill" class="data-v-77e5870f"></image></view></block></block></block></block></view></view><u-loadmore vue-id="57282994-6" status="{{loadStatus}}" font-size="{{24}}" margin-top="{{30}}" margin-bottom="{{20}}" color="#B8B8B8" class="data-v-77e5870f" bind:__l="__l"></u-loadmore><view style="height:180rpx;" class="data-v-77e5870f"></view></view><view hidden="{{!(loadShow)}}" class="loading_page data-v-77e5870f"><image src="/static/loading/loading.gif" class="data-v-77e5870f"></image></view><view data-event-opts="{{[['tap',[['backTop',['$event']]]]]}}" class="{{['back','backTop','u-flex','u-flex-col','u-row-center','u-col-center','data-v-77e5870f',backShow?'backTop_show':'backTop_hide']}}" bindtap="__e"><image style="width:36rpx;height:36rpx;" src="/static/backtop.png" class="data-v-77e5870f"></image></view><view data-event-opts="{{[['tap',[['search',['$event']]]]]}}" class="{{['back','backSearch','u-flex','u-flex-col','u-row-center','u-col-center','data-v-77e5870f',backShow?'backTop_show':'backTop_hide']}}" bindtap="__e"><image style="width:30rpx;height:30rpx;" src="/static/search.png" class="data-v-77e5870f"></image></view><foo-bar vue-id="57282994-7" home="{{0}}" data-event-opts="{{[['^toIndex',[['toIndex']]]]}}" bind:toIndex="__e" class="data-v-77e5870f" bind:__l="__l"></foo-bar></view>