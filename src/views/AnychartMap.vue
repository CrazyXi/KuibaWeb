<template>
    <div ref="SvgMap" id="SvgMap" :style="{ height: '100%', width: '100%' }"></div>
</template>
<script>
import { defineComponent, } from 'vue';
import * as anychart from 'anychart';
import svgmap0 from '@/assets/svgmap0.svg';
import { getSvgMap } from '@/api/index';
export default defineComponent({
    name: 'AnychartMap',
    data: () => {
        return {
            mapdata: [
                { id: "Ghost_party", type: 1, title: "鬼方", fill: "#34495e", name: '鬼方', ethnic_group: '未知', intro: '未知' },
                { id: "Snow_Country", type: 1, title: "雪国", fill: "#8B8B8C", name: '雪国', ethnic_group: '萨库人', intro: '生活在雪山上的萨库人为适应恶劣的天气进化成现在的样子。\r由于人口稀少，活着的萨库人都十分珍稀和他人的交往，但骨子里又有强烈的斗争心。\r萨库人很重视友情和亲情，对朋友和家人都是百分百的真心。\r但由于他们体形庞大，每当想用肢体语言传递自己的感情时，总免不了吓到比他们矮小许多的朋友。\r不过这并不影响萨库人的好名声，不论是作为吃饭喝酒的朋友还是茹毛饮血的战友。\r在地界上，萨库人往往是最好的雇佣兵、平时的好朋友、战时的好兄弟。\r人们从来不担心萨库人的信用，纵使在历次对魁拔战争中，萨库人分别加入了两个不同的阵营进行作战，也没有对他们的信用造成一丝影响。\r' },
                { id: "Long_Guo", type: 1, title: "龙国", fill: "#f1c40f", name: '龙国', ethnic_group: '龙族', intro: '在长梦之河流域居住的龙族人曾长期处于几大家族各自统治的离散状态。\r在频繁的战争和资源争夺后，他们最终走到一起，形成了现在的龙国。\r外形俊美，作风优雅的龙国人一直是绝大多数地界人崇拜的偶像。\r不论是在与天神接触的过程中，还是在与魁拔对战的过程中，历史上的龙国一直处于领袖地位。\r' },
                { id: "Sea_state", type: 1, title: "海国", name: '海国', fill: "#fff", ethnic_group: '粼妖', intro: '粼妖是一群住在海底的神秘种族，虽然同为神圣联盟的一员，但他们的名字对其他种族来说仍十分陌生。\r直到魁拔的战火席卷整个地界，粼妖的命运才与其他种族紧密联系到一起，他们倾巢而出，为自己的信念而战。\r时至今日，随着种族间的交流不断加强，粼妖在海上找到了自己新的意义。\r熟悉海上生活的粼妖中出现了许多伟大的航海家，在变幻莫测的大海之上书写全新的篇章。' },
                { id: "The_dealer_countries", type: 1, title: "商国", fill: "#ff6348", name: '商国', ethnic_group: '墨拓人', intro: '家乡在墨窟谷的墨拓人是地界上的一群怪胎，对赚钱有着近乎疯狂的执着。\r他们矮小、孱弱，但足迹遍布世界;贪婪、吝啬，但却极讲信用。\r这和墨拓人的历史有很大关系，他们的故土经历了两次毁灭性打击，迫切需要重振家园的资金，\r便开始聚敛一切可以聚敛的钱财，并在不知不觉中做到了全国、邻国乃至全地界。\r虽然商国是世界上最富有的国家，但墨拓人并没有在神圣联盟中博得更高的地位。\r对他们来说，也许做生意才是唯一的乐趣。\r' },
                { id: "Sand_Country", type: 1, title: "沙国", fill: "#e67e22", name: '沙国', ethnic_group: '格洛莫赫人', intro: '在漫天黄沙的永昼沙漠中，居住着一个神秘的种族：格洛莫赫人。\r格洛莫赫人很早以前就生活在地界之上，经过数千年地理环境的变迁，\r他们如今只能蜷缩在无边沙漠中的一角来勉强度日。\r原本人数就不算多的格洛莫赫人一直恪守着他们自己待人接物的方式：不主动示好也不主动交恶。\r也正因如此，大多数格洛莫赫人不仅让人觉得神秘，更有一种冷漠孤高的疏离感。\r但其实格洛莫赫人也不都是天生的恶人嘴脸，只是不太清楚怎么与人交往罢了。\r' },
                { id: "dark_country", type: 1, title: "夜国", fill: "#2f3542", name: '夜国', ethnic_group: '雾妖', intro: '居住在海上岛国的雾妖们名声一直不太好，冰冷、残忍、毒辣是他们的代名词，\r这除了和他们天生喜暗有关之外，还和他们黑暗的过去有关。\r历史上的雾妖经历了长期内乱，甚至曾经引发了多国混战。\r在战争中，雾妖凶狠的招式和残忍的手段给整个元泱界都留下了极为深刻的印象。\r如今的雾妖一方面四散在地界各处过着雇佣兵的生活，一方面也在思考如何挣脱这个持续了近千年的邪恶烙印。\r' },
                { id: "The_wind", type: 1, title: "风国", fill: "#34ace0", name: '风国', ethnic_group: '基思卡人', intro: '居住在呼啸高原上的基斯卡人是一群天生的异类，他们在面对恶劣的自然环境时放弃了一切体力劳动，\r将脑力劳动发展到超越极致的高度，发明和创造就是他们生活的全部。\r在和平地度过了600年之后，拥有世界顶尖科技的风国在神圣联盟中的地位已经今非昔比，\r他们除了继续挖掘地界中的秘密之外，还将目光投向了一片未知之地——天界。\r' },
                { id: "The_insect_countries", type: 1, title: "虫国", fill: "#474787", name: '虫国', ethnic_group: '蛰族', intro: '虫国是唯一一个没有纹耀制度的国家，自然也没有加入神圣联盟。\r一直以来，蜇族始终受到其它国家的不平等对待。\r蜇族人在漫长的不平等待遇中逐渐学会了坚强与拼搏，结合自身的特点找到了一条属于自己的出路，成为了整个地界中不可或缺的一个存在。\r虽然没有俊美的外形和肥沃的良田，蜇族人的生活却渐渐好了起来，他们只缺少一个公平的地位。\r如今的虫国依旧处于尴尬之中，依旧在为博得自己的一席之地而努力。\r' },
                { id: "The_tree_kingdom", type: 1, title: "树国", fill: "#2ecc71", name: '树国', ethnic_group: '辉妖', intro: '古时，辉妖过着平静的生活，陪伴他们的只有无数的树木。\r魁拔战争爆发后，树国人民惊恐地发现他们完全没有抵御魁拔的能力，只能白白被战火燃成灰烬。\r但随着地界的不断发展，各国之间往来频繁，树国人利用自己高超的纺织技巧发展经济，国力突飞猛进。\r如今的树国在日趋和平的当下，借助强大的经济实力在神圣联盟中获取了相应地位。\r以树国为核心的地界政治格局正在逐渐形成。\r' },
                { id: "Wild_beast", type: 1, title: "兽国", fill: "#e74c3c", name: '兽国', ethnic_group: '兽族', intro: '拥有地界最大领土和最多人口的兽国是一个传统的农业国家，多数兽族人的一辈子就是与耕种田地打交道。\r由于常年处在外战内乱之中，妖侠阶级逐渐获得了兽国的统治权，妖侠文化也在兽国境内广为流传。\r广袤的土地赐予了兽族人宽广的胸襟，残酷的战争则磨练出了他们豪爽的性格。\r在这样的性格驱使下。\r兽族人屡屡被逼至绝境又再次从逆境中抬起头来。\r如今的兽国在以文治国的方针下，采取各种手段避免战事再发，但终躲不过魁拔的复活。\r' },
                { id: "The_wing_countries", type: 1, title: "翼国", fill: "#4b7bec", name: '翼国', ethnic_group: '翼族', intro: '由于天生两翼，翼族注定不能过上和一般种族同样的生活。\r因此，天性好战的翼族人走上了以武治国的军事化道路。\r在早先的战争中，翼族被武器精良、作战勇猛的龙国人逼到了现在的国土上。\r而在之后与兽国的战争中，逐渐掌握了先进武器和优秀战略的翼族人找到了自己的战术方针，国家也因此壮大起来。\r在和平时期，尚武的翼族人依旧过着清贫的生活，但每一个翼族人都随时准备着投入一场全新的战斗。\r' },
                { id: "Eddy_current_island", type: 1, title: "涡流岛", fill: "#EA2027", name: '涡流岛', ethnic_group: '未知', intro: '' },
                // 标志
                { id: "NEs1", type: 2, title: "龙国国徽", fill: "#fff", name: ' ', popt: "龙国国徽" },
                { id: "NEs2", type: 2, title: "沙国国徽", fill: "#fff", name: ' ', popt: "沙国国徽" },
                { id: "NEs3", type: 2, title: "树国国徽", fill: "#fff", name: ' ', popt: "树国国徽" },
                { id: "NEs4", type: 2, title: "夜国国徽", fill: "#fff", name: ' ', popt: "夜国国徽" },
                { id: "NEs5", type: 2, title: "虫国国徽", fill: "#fff", name: ' ', popt: "虫国国徽" },
                { id: "NEs6", type: 2, title: "风国国徽", fill: "#fff", name: ' ', popt: "风国国徽" },
                { id: "NEs7", type: 2, title: "商国国徽", fill: "#fff", name: ' ', popt: "商国国徽" },
                { id: "NEs8", type: 2, title: "兽国国徽", fill: "#fff", name: ' ', popt: "兽国国徽" },
                { id: "NEs9", type: 2, title: "翼国国徽", fill: "#fff", name: ' ', popt: "翼国国徽" },
                { id: "NEs10", type: 2, title: "雪国国徽", fill: "#fff", name: ' ', popt: "雪国国徽" },
                { id: "NEs11", type: 2, title: "海国国徽", fill: "#565D4E", name: ' ', popt: "海国国徽" },
                // 建筑
                { id: "LST", type: 3, title: "灵山塔", fill: "#fff", name: ' ', popt: "灵山塔" },
                { id: "LS", type: 3, title: "灵山", fill: "#fff", name: ' ', popt: "灵山" },
                { id: "SSY", type: 3, title: "双神岩", fill: "#fff", name: ' ', popt: "双神岩" },
                { id: "TJXS", type: 3, title: "瞳寂雪峰", fill: "#fff", name: ' ', popt: "瞳寂雪峰" },

            ]
        }
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            const SvgMap = this.$refs.SvgMap;
            let stage = anychart.graphics.create(SvgMap)
            getSvgMap(svgmap0).then(res => {
                anychart.map()['0']
                let map = anychart.map()
                map.geoData(res)
                let seriesc = map.choropleth(this.mapdata)
                map.title("魁拔世界地图")
                seriesc.labels(true)
                seriesc.stroke(null)
                seriesc.tooltip().format(function (e) {
                    if (e.getData("type") == 1) {
                        return "族群: " + e.getData("ethnic_group") + "\n" + "简介: " + e.getData("intro")
                    } else if (e.getData("type") == 2 || e.getData("type") == 3) {
                        return e.getData("popt")
                    }
                })
                let labels = seriesc.labels()
                labels.fontColor('black')
                labels.fontSize("15px")
                labels.offsetY(-15)
                map.container(stage)
                map.draw()
                //不知道什么鬼兼容性问题，UI缩放工具无效了
                let zoom = anychart.ui.zoom()
                zoom.target(map)
                zoom.render()
            })
        }
    }

})

</script>