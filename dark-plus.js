({
    name: "nocpiun.darkPlus",
    displayName: "Dark+",
    description: "夜间模式增强版, 需搭配Bilibili Evolved夜间模式使用",
    author: {
        name: "NoahHrreion",
        link: "https://nin.red"
    },
    tags: [
        {
            name: 'style',
            displayName: '样式',
            color: '#8BC34A',
            icon: 'mdi-palette-outline',
            order: 2,
        },
        {
            name: 'general',
            displayName: '通用',
            color: '#888',
            icon: 'mdi-progress-wrench',
            order: 8,
        },
        {
            name: 'nocpiun-exclusive',
            displayName: 'Nocp://',
            color: '#FF5722',
            icon: 'mdi-flask-outline',
            order: 9,
        },
    ],
    instantStyles: [{
        name: "dark-plus",
        style: `
/* Dark+ */
/* Written by [NriotHrreion] */

/* !!! REQUIRE DARK MODE !!! */

:root{
    --nocp-white-1: #e5e5e5;
    --nocp-gray-1: #3e3c3c;
    --nocp-gray-2: #4d4c4c;
    --nocp-gray-3: #939393;
    --nocp-gray-4: #1b1b1b;
}

body .van-popover.van-popper.van-more li {
    color: var(--nocp-gray-3) !important;
}
body .van-popover.van-popper.van-more li svg {
    fill: var(--nocp-gray-3) !important;
}

body .user-card .card-user-name {
    color: var(--nocp-white-1) !important;
}
body .user-card .card-user-attention span:first-child,
body .user-card .card-user-fans span:first-child,
body .user-card .card-user-like span:first-child {
    color: var(--nocp-white-1) !important;
}
body .user-card .card-message-btn {
    border-color: var(--nocp-gray-3) !important;
}
body .user-card .card-message-btn:hover {
    border-color: var(--brand_blue) !important;
    color: var(--brand_blue) !important;
}

.bili-header .channel-items__left {
    border-right-color: var(--nocp-gray-2) !important;
}

.user-info-panel .logout:hover {
    background: #ff473d !important;
}

.bili-video-card__info--tit a,
.bili-movie-card__info--tit a,
.bili-live-card__info--tit a,
.bili-bangumi-card__info--tit a,
.bili-manga-card__info--tit a,
.bili-cheese-card__info--tit a {
    color: var(--nocp-white-1) !important;
}

.article-card-body picture {
    border-color: transparent !important;
}

.search-header .search-input-wrap {
    background: var(--nocp-gray-2) !important;
    border: none !important;
}
.search-header .search-input-wrap input {
    color: var(--nocp-white-1) !important;
}
.search-header .search-sticky-header, .search-fixed-header {
    background: #222 !important;
}
.search-header .vui_tabs--nav-num {
    background: var(--nocp-gray-1) !important;
    color: var(--nocp-white-1) !important;
}
.search-header .search-line {
    border-top: none !important;
}
.search-header .search-condition-row button {
    background: var(--nocp-gray-1) !important;
    color: var(--nocp-white-1) !important;
}
.search-header .search-condition-row button.vui_button--active {
    background: #357183 !important;
    color: #49caf7 !important;
}
.search-header button.vui_button.vui_button--active-shrink.i_button_more {
    background: var(--nocp-gray-1) !important;
    color: var(--nocp-white-1) !important;
    border: none !important;
}

.search-panel {
    background: var(--nocp-gray-2) !important;
    border-color: transparent !important;
}
.search-panel .trending-item:hover {
    background: var(--nocp-gray-3) !important;
    color: var(--nocp-white-1) !important;
}
.search-panel .trending-item .search-rank-top {
    color: #fff !important;
}
.search-panel .suggestions .suggest-item {
    color: var(--nocp-white-1) !important;
}
.search-panel .suggestions .suggest-item:first-child {
    padding-top: 0 !important;
}
.search-panel .suggestions .suggest-item .suggest_high_light {
    color: #f4739d !important;
}
.search-panel .suggestions .suggest-item:hover {
    background: var(--nocp-gray-3) !important;
}

.search-page .show-more-text {
    background: var(--nocp-gray-2) !important;
}
.search-page .show-more-text button {
    background: var(--nocp-gray-2) !important;
}
.search-page .vui_pagenation--btns button {
    background: var(--nocp-gray-1) !important;
    color: var(--nocp-white-1) !important;
    border: none !important;
}
.search-page .vui_pagenation--btns button.vui_button--active {
    background: #357183 !important;
    color: #49caf7 !important;
}
.search-page .vui_pagenation--btns button.vui_button--disabled {
    color: var(--nocp-gray-3) !important;
}

.video-container-v1 .float-nav-exp .item, .video-container-v1 .fixed-nav .item {
    background-color: #333 !important;
    color: #eee !important;
    border: none !important;
}
.video-container-v1 .float-nav-exp .item svg {
    fill: #eee !important;
}
.video-container-v1 .float-nav-exp .item.on {
    color: var(--brand_blue) !important;
}
.video-container-v1 .float-nav-exp .item.on svg {
    fill: var(--brand_blue) !important;
}
.video-container-v1 .normal-members-header {
    background: #444 !important;
    color: #eee !important;
}
.video-container-v1 .normal-members-header .person {
    color: var(--nocp-gray-3) !important;
}
.video-container-v1 .multi-page-v1 {
    background: #444 !important;
}
.video-container-v1 .multi-page-v1 li .page-num {
    color: var(--nocp-gray-3) !important;
}
.video-container-v1 .multi-page-v1 li:hover, .video-container-v1 .multi-page-v1 li.on {
    background: #555 !important;
}
.video-container-v1 .base-video-sections-v1 {
    background: #444 !important;
}
.video-container-v1 .base-video-sections-v1 .video-episode-card__info {
    background: #555 !important;
}
.video-container-v1 .bpx-player-popup-show {
    /* Avoid Player Popup */
    display: none !important;
}
.video-container-v1 .toolbar-left {
    color: #aaa !important;
}
.video-container-v1 .toolbar-left svg {
    fill: #aaa !important;
}
.video-container-v1 .toolbar-left .like:hover .info-text {
    color: var(--brand_blue) !important;
}
.video-container-v1 .desc-info {
    color: var(--nocp-white-1) !important;
}
.video-container-v1 .tag, .video-container-v1 .tag:hover {
    background-color: transparent !important;
}
.video-container-v1 .tag a,
.video-container-v1 .tag-link {
    background: var(--nocp-gray-1) !important;
    color: var(--nocp-white-1) !important;
}
.video-container-v1 .tag a svg,
.video-container-v1 .tag-link svg {
    fill: var(--nocp-white-1) !important;
}
.video-container-v1 .tag-more, .video-container-v1 .tag-more:hover {
    background: var(--nocp-gray-1) !important;
}
.video-container-v1 .tag-more svg {
    fill: var(--nocp-white-1) !important;
}
.video-container-v1 .tag-more:hover svg {
    fill: var(--brand_blue) !important;
}
.video-container-v1 .s_tag-v1 {
    border-bottom-color: var(--nocp-gray-2) !important;
}
.video-container-v1 .activity-m-v1 {
    /* No AD */
    display: none !important;
}
.video-container-v1 .nav-title {
    color: var(--nocp-white-1) !important;
}
.video-container-v1 .nav-sort.hot .hot-sort, .video-container-v1 .nav-sort.time .time-sort {
    color: var(--nocp-white-1) !important;
}
.video-container-v1 .comment .reply-box .reply-box-send {
    background-color: var(--theme-color) !important;
}
.video-container-v1 .comment .reply-box.fixed-box {
    background: #222 !important;
    border-top-color: #222 !important;
}
.video-container-v1 .comment .reply-box .emoji-btn {
    border-color: transparent !important;
    background-color: var(--nocp-gray-1);
}
.video-container-v1 .comment .reply-box .emoji-panel {
    border-color: #2f2f2f !important;
}
.video-container-v1 .comment .reply-box .emoji-panel .emoji-title,
.video-container-v1 .comment .reply-box .emoji-panel .emoji-content {
    background-color: var(--nocp-gray-4) !important;
}
.video-container-v1 .comment .reply-box .emoji-panel .emoji-content .emoji-info:hover {
    background-color: var(--nocp-gray-2) !important;
}
.video-container-v1 .comment .reply-box .emoji-panel .emoji-tab {
    background-color: #2f2f2f !important;
}
.video-container-v1 .comment .reply-box .emoji-panel .emoji-tab .emoji-type.current-type {
    background-color: var(--nocp-gray-3) !important;
}
.video-container-v1 .comment .reply-box .emoji-panel .emoji-tab .emoji-type:hover {
    background-color: var(--nocp-gray-2) !important;
}
.video-container-v1 .comment .content-warp {
    border-bottom-color: var(--nocp-gray-1) !important;
}
.video-container-v1 .comment .content-warp .reply-content {
    color: var(--nocp-white-1) !important;
}
.video-container-v1 .comment .content-warp .reply-tag-item {
    background-color: #2d2d2d !important;
}
.video-container-v1 .comment .content-warp .sub-user-name {
    color: var(--nocp-white-1) !important;
}

.bili-footer {
    background-color: #333 !important;
}
.bili-footer .split-line {
    background-color: var(--nocp-gray-2) !important;
}
.bili-footer .qrcode-wrapper .qrcode-title {
    color: var(--nocp-white-1) !important;
}

/* Info Panel Style */
.nocp-info-panel {
    display: block !important;
    padding-left: 15px;
}
.nocp-info-panel p {
    color: var(--nocp-gray-3);
}

`,
        important: true
    }],
    plugin: {
        displayName: "Dark+ Plugin",
        description: {
            "zh-CN": "夜间模式增强版, 需搭配Bilibili Evolved夜间模式使用 (插件)"
        },
        setup: () => {
            console.log("[Nocp://] Loading Dark+ plugin...");

            // Search Entry Page
            document.querySelector(".search-entry-page").classList.add("search-header");

            /** @todo */
        }
    },
    urlExclude: [
        "//member.bilibili.com/v2",
        "//member.bilibili.com/platform",
        "//member.bilibili.com/video/upload.html",
        "//member.bilibili.com/article-text/home",
        "//www.bilibili.com/audio/submit/",
        "//member.bilibili.com/studio/bs-editor/projects",
        "//www.bilibili.com/s/video/",
        "//member.bilibili.com/platform",
        "//live.bilibili.com/p/html/live-lottery/anchor-join.html",
        "//account.bilibili.com/subtitle/edit/#/editor",
        "/york/allowance-charge",
        "//cm.bilibili.com/quests/#/task",
    ]
});
