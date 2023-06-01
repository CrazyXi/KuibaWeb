<template>
    <div ref="Relation" id="Relation" :style="{ height: '100%', width: '100%' }"></div>
    <div calss="tools" style="position: fixed;top: 20%;left: 2%;">
        <div id="abtn" class="btns" @click="enlarge">
            <svg t="1595325014878" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                width="100%" height="100%">
                <path fill="white"
                    d="M943.8 892.5l-201.4-201c24.2-29 43.9-61.3 58.7-96.3 20-47.3 30.1-97.6 30.1-149.4s-10.1-102-30.1-149.4c-19.3-45.7-47-86.7-82.1-122-35.2-35.2-76.2-62.9-121.9-82.2-47.3-20-97.5-30.2-149.3-30.2-51.8 0-102 10.2-149.3 30.2-45.7 19.3-86.7 47-121.9 82.2s-62.8 76.3-82.1 122c-20 47.3-30.1 97.6-30.1 149.4s10.1 102 30.1 149.4c19.3 45.7 47 86.7 82.1 122 35.2 35.2 76.2 62.9 121.9 82.2 47.3 20 97.5 30.2 149.3 30.2 51.7 0 102-10.2 149.3-30.2 34.6-14.7 66.6-34.1 95.3-58l201.5 201c6.9 6.9 15.9 10.3 24.9 10.3 9.1 0 18.1-3.5 25-10.4 13.8-13.7 13.8-36.1 0-49.8zM669.7 666.6c-0.4 0.4-0.8 0.7-1.2 1.1-0.3 0.3-0.6 0.6-0.8 0.9-59 58.3-137 90.4-219.9 90.4-83.5 0-162.1-32.6-221.2-91.7-59.1-59.1-91.6-137.8-91.6-221.4s32.5-162.3 91.6-221.4c59.1-59.1 137.6-91.7 221.2-91.7s162.1 32.6 221.2 91.7c59.1 59.1 91.6 137.8 91.6 221.4 0 83.3-32.3 161.6-90.9 220.7z"
                    p-id="1176"></path>
                <path fill="white"
                    d="M573.7 419H473v-98c0-19.5-13-35.3-32.5-35.3S408 301.5 408 321v98H305.3c-19.5 0-35.3 13-35.3 32.5s15.8 32.5 35.3 32.5H408v105.4c0 19.5 13 35.3 32.5 35.3s32.5-15.8 32.5-35.3V484h100.7c19.5 0 35.3-13 35.3-32.5S593.2 419 573.7 419z"
                    p-id="1177"></path>
            </svg>
        </div>
        <div id="rbtn" class="btns" @click="decrease">
            <svg t="1595325033708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                width="100%" height="100%">
                <path fill="white"
                    d="M946.9 897.7L744 695.2c24.4-29.2 44.2-61.7 59.1-97 20.2-47.7 30.4-98.3 30.4-150.5s-10.2-102.8-30.4-150.5c-19.5-46-47.3-87.4-82.8-122.9s-76.8-63.4-122.8-82.8c-47.7-20.2-98.3-30.4-150.4-30.4S344.4 71.3 296.8 91.5c-46 19.5-87.3 47.4-122.8 82.8-35.5 35.5-63.3 76.8-82.8 122.9-20.2 47.7-30.4 98.3-30.4 150.5S71 550.5 91.2 598.2c19.5 46 47.3 87.4 82.8 122.9s76.8 63.4 122.8 82.8c47.7 20.2 98.3 30.4 150.4 30.4s102.7-10.2 150.4-30.4c34.9-14.8 67.1-34.4 96.1-58.5l203 202.6c6.9 6.9 16 10.4 25.1 10.4 9.1 0 18.2-3.5 25.2-10.5 13.8-13.8 13.8-36.3-0.1-50.2zM447.2 763.2c-84.2 0-163.3-32.8-222.8-92.4C164.8 611.2 132 532 132 447.7c0-84.3 32.8-163.5 92.3-223.1 59.5-59.6 138.7-92.4 222.8-92.4s163.3 32.8 222.8 92.4c59.5 59.6 92.3 138.8 92.3 223.1 0 83.9-32.5 162.8-91.6 222.3-0.4 0.4-0.8 0.8-1.2 1.1-0.3 0.3-0.6 0.6-0.8 0.9-59.3 58.9-137.9 91.2-221.4 91.2z"
                    p-id="1922"></path>
                <path fill="white"
                    d="M574 416H303.7c-19.7 0-35.6 12.8-35.6 32.5S284 481 303.7 481H574c19.7 0 35.6-12.8 35.6-32.5S593.7 416 574 416z"
                    p-id="1923"></path>
            </svg>
        </div>
    </div>
</template>
<style>
.btns {
    height: 25px;
    width: 25px;
    background-color: #3498db;
    margin: 10px;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0px 1px 3px #4a4a4a;
    cursor: pointer;
}
</style>
<script>
import { defineComponent, } from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
    name: 'Relation',
    data: () => {
        return {
            RelationChart:null,
            color1: '#006acc',
            color2: '#f1c40f',
            color3: '#10a050',
            color4: '#e74c3c',
            rdata: {
                nodes: [{
                    name: '远浪',
                    category: 1,
                    symbol: 'image://kbug_figure/k_yl.png',
                    lines: '<div style="color:#1abc9c;">一般说来，花痴都是不会那么正经的死去的</div><div style="color:#e74c3c;">只有站在曲境一号上的我，才是他心仪的姑娘</div>'
                }, {
                    name: '蛮吉',
                    category: 3,
                    symbol: 'image://kbug_figure/k_mj.png',
                    lines: '<div style="color:#1abc9c;">脉术那么差，根本打不过，为什么还要打？<br>我知道我根本打不过，但是我要用行动来告诉你我的态度，我是你的敌人！</div>'
                }, {
                    name: '蛮小满',
                    category: 1,
                    symbol: 'image://kbug_figure/k_mxm.png',
                }, {
                    name: '雪伦',
                    category: 1,
                    symbol: 'image://kbug_figure/k_xl.png',
                }, {
                    name: '狼阳',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lys.png',
                }, {
                    name: '雪晴',
                    category: 1,
                    symbol: 'image://kbug_figure/k_xq.png',
                }, {
                    name: '雪玲',
                    category: 1,
                    symbol: 'image://kbug_figure/k_xls.png',
                }, {
                    name: '离离茶',
                    category: 1,
                    symbol: 'image://kbug_figure/k_llc.png',
                }, {
                    name: '迷麟',
                    category: 3,
                    symbol: 'image://kbug_figure/k_ml.png',
                    lines: '我现在明白了，因为要吃，要交配，地界要想和平就太难了'
                }, {
                    name: '燃谷',
                    category: 1,
                    symbol: 'image://kbug_figure/k_rg.png',
                }, {
                    name: '大仓',
                    category: 1,
                    symbol: 'image://kbug_figure/k_dc.png',
                }, {
                    name: '海问香',
                    category: 1,
                    symbol: 'image://kbug_figure/k_hwx.png',
                    lines: '<div style="color:#3498db;">你的对手和你是一样的人，会说笑话。<br>爱吃好吃的东西，是同样的儿子、父亲、丈夫、兄弟、姐妹…</div><div style="color:#2ecc71;">我守这里,谁也别想过去！</div><div style="color:#e74c3c;">做这个人的战士和他一起去经历,失败。</div><div style="color:#1abc9c;">这是底线，越过，就是毁灭</div><div style="color:#f1c40f;">在你被一套套完全相反的理论说得无法取舍的时候，<br>那一个是会让你真正感动的，对你来说，那就是对的</div>'
                }, {
                    name: '幽若离',
                    category: 1,
                    symbol: 'image://kbug_figure/k_yrl.png',
                }, {
                    name: '狼勇',
                    category: 1,
                    symbol: 'image://kbug_figure/k_ly.png',
                    lines: '力断长梦之河，踏破呼啸高原，冲天高塔直指苍穹，燃烧生命照亮明天'
                }, {
                    name: '敖江',
                    category: 2,
                    symbol: 'image://kbug_figure/k_aj.png',
                }, {
                    name: '秋落木',
                    category: 1,
                    symbol: 'image://kbug_figure/k_qlm.png',
                }, {
                    name: '阿离',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lla.png',
                }, {
                    name: '奇衡三',
                    category: 1,
                    symbol: 'image://kbug_figure/k_qhs.png',
                }, {
                    name: '雷光',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lg.png',
                }, {
                    name: '万两',
                    category: 1,
                    symbol: 'image://kbug_figure/k_wl.png',
                }, {
                    name: '吧咕哒',
                    category: 1,
                    symbol: 'image://kbug_figure/k_bgd.png',
                }, {
                    name: '幽弥狂',
                    category: 1,
                    symbol: 'image://kbug_figure/k_ymk.png',
                    lines: '<div style="color:#e74c3c;">白落提，丰和，英宋，桓泽金，广秀，与魁拔1026年参加神圣联盟东部战区，<br>与魁拔英勇作战，共计参战171次，杀敌526名，与五天前在魁拔营地阵亡，<br>我是他们的长官雾妖族妖侠幽弥狂</div><div style="color:#2ecc71;">知道你很强大，我们很难战胜，但是我们就是要用我们的行动告诉你我们的态度——我们是你的敌人！<br>即使，我们连作为魁拔的敌人的资格都不被承认！</div>'
                }, {
                    name: '蹄',
                    category: 1,
                    symbol: 'image://kbug_figure/k_t.png',
                }, {
                    name: '黑闪目',
                    category: 1,
                }, {
                    name: '千宏尺',
                    category: 1,
                }, {
                    name: '蝉鸣',
                    category: 1,
                    symbol: 'image://kbug_figure/k_cm.png',
                }, {
                    name: '蝉鸣妹妹',
                    category: 1,
                }, {
                    name: '玲',
                    category: 1,
                    symbol: 'image://kbug_figure/k_l.png',
                    lines: '他会循着冲天槊发出的召唤，就像听着来自远天的战歌，<br>一边随着轻声吟唱，一边走向他的战器——冲天槊，<br>没有人可以阻止他，因为他是世间最伟大的――魁拔'
                }, {
                    name: '嘉',
                    category: 1,
                    symbol: 'image://kbug_figure/k_j.png',
                }, {
                    name: '十六队',
                    category: 1,
                    symbol: 'image://kbug_figure/k_sld.png',
                }, {
                    name: '花芜',
                    category: 1,
                    symbol: 'image://kbug_figure/k_hw.png',
                }, {
                    name: '熊枭',
                    category: 1,
                    symbol: 'image://kbug_figure/k_xx.png',
                }, {
                    name: '兽国国王',
                    category: 1,
                }, {
                    name: '村长',
                    category: 1,
                    symbol: 'image://kbug_figure/k_czdr.png',
                    lines: '伟大的英雄本来就是属于全世界的，他不应该被埋没在乡村里'
                }, {
                    name: '谷鸡泰',
                    category: 1,
                    symbol: 'image://kbug_figure/k_gjt.png',
                }, {
                    name: '蛮志',
                    category: 1,
                    symbol: 'image://kbug_figure/k_zmzs.png',
                }, {
                    name: '鹿满',
                    category: 1,
                    symbol: 'image://kbug_figure/k_zlms.png',
                }, {
                    name: '艾芒',
                    category: 1,
                }, {
                    name: '基斯卡王',
                    category: 1,
                    symbol: 'image://kbug_figure/k_jskw.png',
                }, {
                    name: '谢都城主',
                    category: 1,
                    symbol: 'image://kbug_figure/k_xdcz.png',
                }, {
                    name: '谢都王子',
                    category: 1,
                    symbol: 'image://kbug_figure/k_xdwz.png',
                }, {
                    name: '广方',
                    category: 1,
                    symbol: 'image://kbug_figure/k_gf.png',
                }, {
                    name: '猪哥',
                    category: 1,
                    symbol: 'image://kbug_figure/k_zgs.png',
                }, {
                    name: '獴亮',
                    category: 1,
                    symbol: 'image://kbug_figure/k_mls.png',
                }, {
                    name: '潘',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgp.png',
                    lines: '<div style="color:#e74c3c;">伟大这种事 不是自己说出来的 而是靠努力争取的</div>'
                }, {
                    name: '辞',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgc.png',
                }, {
                    name: '雄',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgkx.png',
                    lines: '认识你，既是你的命运，也是我的命运，我们成为好朋友，<br>我们的命运就都一下好了，而我们成为敌人，我们的命运就一起坏了，<br>我们的命运是互相决定的，知道这个道理，就能明白，坑害别人的人是愚蠢到家了'
                }, {
                    name: '丹',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgd.png',
                    lines: '潘，不要像你父亲那样迂腐，他以为自杀可以平息他族的愤怒，他做到了，<br>可是那些家族其实并不是因为愤怒要抹杀卡拉肖克家族的，而是因为利益。人的心情确实可以受到他人行为的震动，<br>从而得到彻底改变，即使仇恨这种东西也可以消掉。但是，人的贪欲的利益欲望是不会消除的。<br>他们并不恨你，潘，只是你已经挡在了他们的道路上，确实让人难以容忍'
                }, {
                    name: '杰',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgj.png',
                }, {
                    name: '玺',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgx.png',
                }, {
                    name: '爪云',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgzy.png',
                }, {
                    name: '白',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgb.png',
                }, {
                    name: '飞',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgf.png',
                }, {
                    name: '林',
                    category: 1,
                }, {
                    name: '诚',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgmc.png',
                }, {
                    name: '兰',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgal.png',
                }, {
                    name: '勒克米罗族长',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lglzz.png',
                }, {
                    name: '阿赫琉璱族长',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgazz.png',
                }, {
                    name: '梅龙尼卡族长',
                    category: 1,
                    symbol: 'image://kbug_figure/k_lgmzz.png',
                }, {
                    name: '镜心',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsjx.png',
                }, {
                    name: '尘',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsc.png',
                }, {
                    name: '朴心',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tspx.png',
                }, {
                    name: '朴烨',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tspy.png',
                }, {
                    name: '镜',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsj.png',
                }, {
                    name: '焰',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsy.png',
                }, {
                    name: '焰烁',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsyss.png',
                }, {
                    name: '焰术',
                    category: 0,
                }, {
                    name: '朴',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsp.png',
                }, {
                    name: '泱',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsyy.png',
                }, {
                    name: '泱澈',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsyyz.png',
                }, {
                    name: '元',
                    category: 0,
                    symbol: 'image://kbug_figure/k_tsyuan.png',
                }],

                //关系线
                links: [{
                    source: '蛮吉',
                    target: '远浪',
                    name: '人生导师'
                }, {
                    source: '蛮小满',
                    target: '蛮吉',
                    name: '养父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '蛮志',
                    target: '蛮小满',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '鹿满',
                    target: '蛮小满',
                    name: '母子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '鹿满',
                    target: '蛮志',
                    name: '夫妻',
                    symbolSize: ['none', 'none']
                }, {
                    source: '蛮小满',
                    target: '阿离',
                    name: '恋人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '离离茶',
                    target: '阿离',
                    name: '父女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '艾芒',
                    target: '阿离',
                    name: '母女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '艾芒',
                    target: '离离茶',
                    name: '夫妻',
                    symbolSize: ['none', 'none']
                }, {
                    source: '基斯卡王',
                    target: '艾芒',
                    name: '师生',
                    symbolSize: ['none', 'none']
                }, {
                    source: '谢都城主',
                    target: '离离茶',
                    name: '政敌',
                    symbolSize: ['none', 'none']
                }, {
                    source: '谢都城主',
                    target: '谢都王子',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '谢都王子',
                    target: '阿离',
                    name: '婚约',
                    symbolSize: ['none', 'none']
                }, {
                    source: '远浪',
                    target: '阿离',
                    name: '上下级',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪伦',
                    target: '蛮小满',
                    name: '宿敌',
                    symbolSize: ['none', 'none']
                }, {
                    source: '狼阳',
                    target: '雪伦',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪晴',
                    target: '狼阳',
                    name: '夫妻',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪晴',
                    target: '雪伦',
                    name: '母子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪晴',
                    target: '雪玲',
                    name: '母女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '狼阳',
                    target: '雪玲',
                    name: '父女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪伦',
                    target: '雪玲',
                    name: '兄妹',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪伦',
                    target: '獴亮',
                    name: '仇人',
                }, {
                    source: '雪玲',
                    target: '獴亮',
                    name: '仇人',
                }, {
                    source: '广方',
                    target: '雪玲',
                    name: '暗恋',
                }, {
                    source: '猪哥',
                    target: '广方',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '猪哥',
                    target: '熊枭',
                    name: '政敌',
                    symbolSize: ['none', 'none']
                }, {
                    source: '猪哥',
                    target: '兽国国王',
                    name: '兄弟',
                    symbolSize: ['none', 'none']
                }, {
                    source: '狼阳',
                    target: '狼勇',
                    name: '后代'
                }, {
                    source: '蛮吉',
                    target: '敖江',
                    name: '情敌'
                }, {
                    source: '蛮吉',
                    target: '迷麟',
                    name: '前代'
                }, {
                    source: '爪云',
                    target: '迷麟',
                    name: '养父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '燃谷',
                    target: '迷麟',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '大仓',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '狼勇',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '海问香',
                    target: '迷麟',
                    name: '暗恋'
                }, {
                    source: '大仓',
                    target: '海问香',
                    name: '暗恋'
                }, {
                    source: '幽若离',
                    target: '迷麟',
                    name: '暗恋'
                }, {
                    source: '燃谷',
                    target: '幽若离',
                    name: '暧昧',
                    symbolSize: ['none', 'none']
                }, {
                    source: 'Firefox',
                    target: '蛮吉',
                    name: '董事'
                }, {
                    source: '蛮吉',
                    target: '阿离',
                    name: '养母子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '秋落木',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '秋落木',
                    target: '离离茶',
                    name: '挚友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '奇衡三',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '雷光',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '万两',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '吧咕哒',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '幽弥狂',
                    target: '迷麟',
                    name: '死敌'
                }, {
                    source: '蹄',
                    target: '迷麟',
                    name: '追随者'
                }, {
                    source: '蹄',
                    target: '嘉',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '黑闪目',
                    target: '千宏尺',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '黑闪目',
                    target: '蝉鸣',
                    name: '追随者'
                }, {
                    source: '千宏尺',
                    target: '蝉鸣',
                    name: '追随者'
                }, {
                    source: '蝉鸣',
                    target: '狼勇',
                    name: '继任者'
                }, {
                    source: '蝉鸣妹妹',
                    target: '蝉鸣',
                    name: '兄妹',
                    symbolSize: ['none', 'none']
                }, {
                    source: '玲',
                    target: '蝉鸣妹妹',
                    name: '养母女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '黑闪目',
                    target: '蹄',
                    name: '杀死'
                }, {
                    source: '十六队',
                    target: '秋落木',
                    name: '下属'
                }, {
                    source: '幽若离',
                    target: '十六队',
                    name: '隶属'
                }, {
                    source: '敖江',
                    target: '十六队',
                    name: '后代'
                }, {
                    source: '花芜',
                    target: '离离茶',
                    name: '上下级',
                    symbolSize: ['none', 'none']
                }, {
                    source: '熊枭',
                    target: '花芜',
                    name: '朋友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '熊枭',
                    target: '兽国国王',
                    name: '上下级',
                    symbolSize: ['none', 'none']
                }, {
                    source: '村长',
                    target: '兽国国王',
                    name: '上下级',
                    symbolSize: ['none', 'none']
                }, {
                    source: '蛮吉',
                    target: '村长',
                    name: '朋友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '蛮吉',
                    target: '谷鸡泰',
                    name: '朋友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '潘',
                    target: '蛮吉',
                    name: '敌人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '辞',
                    target: '潘',
                    name: '挚友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '丹',
                    target: '潘',
                    name: '母子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雄',
                    target: '潘',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雄',
                    target: '丹',
                    name: '夫妻',
                    symbolSize: ['none', 'none']
                }, {
                    source: '杰',
                    target: '丹',
                    name: '兄妹',
                    symbolSize: ['none', 'none']
                }, {
                    source: '辞',
                    target: '杰',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '玺',
                    target: '杰',
                    name: '父子',
                    symbolSize: ['none', 'none']
                }, {
                    source: '玺',
                    target: '辞',
                    name: '兄弟',
                    symbolSize: ['none', 'none']
                }, {
                    source: '白',
                    target: '爪云',
                    name: '兄弟',
                    symbolSize: ['none', 'none']
                }, {
                    source: '杰',
                    target: '白',
                    name: '后代',
                }, {
                    source: '蹄',
                    target: '白',
                    name: '女婿',
                }, {
                    source: '雄',
                    target: '飞',
                    name: '后代',
                }, {
                    source: '飞',
                    target: '林',
                    name: '后代',
                }, {
                    source: '诚',
                    target: '潘',
                    name: '敌人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '兰',
                    target: '潘',
                    name: '敌人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '勒克米罗族长',
                    target: '潘',
                    name: '敌人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '阿赫琉璱族长',
                    target: '潘',
                    name: '敌人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '梅龙尼卡族长',
                    target: '潘',
                    name: '敌人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '黑闪目',
                    target: '幽弥狂',
                    name: '朋友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '玲',
                    target: '嘉',
                    name: '朋友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '镜心',
                    target: '蛮吉',
                    name: '暧昧',
                    symbolSize: ['none', 'none']
                }, {
                    source: '尘',
                    target: '迷麟',
                    name: '恋人',
                    symbolSize: ['none', 'none']
                }, {
                    source: '朴烨',
                    target: '镜心',
                    name: '发小',
                    symbolSize: ['none', 'none']
                }, {
                    source: '朴烨',
                    target: '朴心',
                    name: '人生导师',
                }, {
                    source: '镜心',
                    target: '朴心',
                    name: '母女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '雪玲',
                    target: '朴烨',
                    name: '朋友',
                    symbolSize: ['none', 'none']
                }, {
                    source: '镜心',
                    target: '镜',
                    name: '父女',
                    symbolSize: ['none', 'none']
                }, {
                    source: '镜',
                    target: '朴心',
                    name: '夫妻',
                    symbolSize: ['none', 'none']
                }, {
                    source: '镜',
                    target: '焰',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '尘',
                    target: '镜',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '朴',
                    target: '镜',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '泱',
                    target: '镜',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '泱',
                    target: '镜',
                    name: '伙伴',
                    symbolSize: ['none', 'none']
                }, {
                    source: '焰术',
                    target: '焰',
                    name: '继任者',
                }, {
                    source: '焰烁',
                    target: '焰术',
                    name: '继任者',
                }, {
                    source: '焰烁',
                    target: '焰',
                    name: '23世孙',
                }, {
                    source: '泱澈',
                    target: '泱',
                    name: '继任者',
                }, {
                    source: '元',
                    target: '泱',
                    name: '领袖',
                }]
            }
        }
    },
    mounted() {
        this.createRelation();
    },
    methods: {
        enlarge() {
            this.RelationChart._model.option.series[0].zoom += 0.5;
            this.RelationChart.resize();
        },
        decrease() {
            if (this.RelationChart._model.option.series[0].zoom > 0) {
                if (this.RelationChart._model.option.series[0].zoom - 0.5 == 0) {
                    this.RelationChart._model.option.series[0].zoom -= 1;
                    console.log(this.RelationChart._model.option.series[0].zoom);
                    this.RelationChart.resize();
                } else {
                    this.RelationChart._model.option.series[0].zoom -= 0.5;
                    console.log(this.RelationChart._model.option.series[0].zoom);
                    this.RelationChart.resize();
                }
            }
        },
        createRelation() {
            this.RelationChart = echarts.init(document.getElementById('Relation'))
            this.rdata.links.forEach(link => {
                link.label = { align: 'center', fontSize: 12 };
            });
            let categories = [
                {
                    name: '天神', itemStyle: { color: this.color1 }
                },
                {
                    name: '妖', itemStyle: { color: this.color2 }
                },
                {
                    name: '未知', itemStyle: { color: this.color3 }
                },
                {
                    name: '魁拔', itemStyle: { color: this.color4 }
                }]
            let option = {
                tooltip: {
                    formatter: function (params, ticket, callback) {
                        let strbf = params.name + '<br>';
                        if (params.data.lines != undefined) {
                            strbf += params.data.lines;
                        }
                        return strbf;
                    }
                },
                title: {
                    text: '魁拔人物关系图',
                    textAlign: 'left',
                    x: 'center',
                    y: '7px',
                },
                legend: [
                    {
                        right: 'right',
                        // selectedMode: 'single',
                        data: categories.map(x => x.name),
                        // icon: 'circle'
                    }],
                series: [{
                    type: 'graph',
                    layout: 'force',
                    layoutAnimation: true,
                    symbolSize: 58,
                    draggable: true,
                    roam: true,
                    // focusNodeAdjacency: true,
                    categories: categories,
                    edgeSymbol: ['circle', 'arrow'],
                    // edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 60,
                            },
                            formatter(x) {
                                return x.data.name;
                            }
                        }
                    },
                    lineStyle: {
                        color: '#2c3e50',
                        width: 3,
                    },
                    label: {
                        show: true,
                        position: 'top',
                    },
                    force: {
                        repulsion: 2000,
                        edgeLength: 120
                    },
                    data: this.rdata.nodes,
                    links: this.rdata.links
                }]
            }
            this.RelationChart.setOption(option);
        }
    },

})
</script>