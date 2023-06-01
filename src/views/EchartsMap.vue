<template>
  <div ref="SvgMap" id="SvgMap" :style="{ height: '100%', width: '100%' }"></div>
</template>
<style></style>
<script>
import { defineComponent, onMounted, ref, nextTick } from 'vue';
import * as echarts from 'echarts';
import svgmap1 from '@/assets/svgmap2.svg';
import { getSvgMap } from '@/api/index';
export default defineComponent({
  name: 'EchartsMap1',
  components: {
  },
  methods: {
  },
  setup() {
    const SvgMap = ref(null)

    let mapdata = {
      '鬼方': { name: "鬼方", type: 1, ethnic_group: '未知', intro: '未知' },
      '雪国': { name: "雪国", type: 1, ethnic_group: '萨库人', intro: '生活在雪山上的萨库人为适应恶劣的天气进化成现在的样子。\r由于人口稀少，活着的萨库人都十分珍稀和他人的交往，但骨子里又有强烈的斗争心。\r萨库人很重视友情和亲情，对朋友和家人都是百分百的真心。\r但由于他们体形庞大，每当想用肢体语言传递自己的感情时，总免不了吓到比他们矮小许多的朋友。\r不过这并不影响萨库人的好名声，不论是作为吃饭喝酒的朋友还是茹毛饮血的战友。\r在地界上，萨库人往往是最好的雇佣兵、平时的好朋友、战时的好兄弟。\r人们从来不担心萨库人的信用，纵使在历次对魁拔战争中，萨库人分别加入了两个不同的阵营进行作战，也没有对他们的信用造成一丝影响。\r' },
      '龙国': { name: "龙国", type: 1, ethnic_group: '龙族', intro: '在长梦之河流域居住的龙族人曾长期处于几大家族各自统治的离散状态。\r在频繁的战争和资源争夺后，他们最终走到一起，形成了现在的龙国。\r外形俊美，作风优雅的龙国人一直是绝大多数地界人崇拜的偶像。\r不论是在与天神接触的过程中，还是在与魁拔对战的过程中，历史上的龙国一直处于领袖地位。\r' },
      '海国': { name: "海国", type: 1, ethnic_group: '粼妖', intro: '粼妖是一群住在海底的神秘种族，虽然同为神圣联盟的一员，但他们的名字对其他种族来说仍十分陌生。\r直到魁拔的战火席卷整个地界，粼妖的命运才与其他种族紧密联系到一起，他们倾巢而出，为自己的信念而战。\r时至今日，随着种族间的交流不断加强，粼妖在海上找到了自己新的意义。\r熟悉海上生活的粼妖中出现了许多伟大的航海家，在变幻莫测的大海之上书写全新的篇章。' },
      '商国': { name: "商国", type: 1, ethnic_group: '墨拓人', intro: '家乡在墨窟谷的墨拓人是地界上的一群怪胎，对赚钱有着近乎疯狂的执着。\r他们矮小、孱弱，但足迹遍布世界;贪婪、吝啬，但却极讲信用。\r这和墨拓人的历史有很大关系，他们的故土经历了两次毁灭性打击，迫切需要重振家园的资金，\r便开始聚敛一切可以聚敛的钱财，并在不知不觉中做到了全国、邻国乃至全地界。\r虽然商国是世界上最富有的国家，但墨拓人并没有在神圣联盟中博得更高的地位。\r对他们来说，也许做生意才是唯一的乐趣。\r' },
      '沙国': { name: "沙国", type: 1, ethnic_group: '格洛莫赫人', intro: '在漫天黄沙的永昼沙漠中，居住着一个神秘的种族：格洛莫赫人。\r格洛莫赫人很早以前就生活在地界之上，经过数千年地理环境的变迁，\r他们如今只能蜷缩在无边沙漠中的一角来勉强度日。\r原本人数就不算多的格洛莫赫人一直恪守着他们自己待人接物的方式：不主动示好也不主动交恶。\r也正因如此，大多数格洛莫赫人不仅让人觉得神秘，更有一种冷漠孤高的疏离感。\r但其实格洛莫赫人也不都是天生的恶人嘴脸，只是不太清楚怎么与人交往罢了。\r' },
      '夜国': { name: "夜国", type: 1, ethnic_group: '雾妖', intro: '居住在海上岛国的雾妖们名声一直不太好，冰冷、残忍、毒辣是他们的代名词，\r这除了和他们天生喜暗有关之外，还和他们黑暗的过去有关。\r历史上的雾妖经历了长期内乱，甚至曾经引发了多国混战。\r在战争中，雾妖凶狠的招式和残忍的手段给整个元泱界都留下了极为深刻的印象。\r如今的雾妖一方面四散在地界各处过着雇佣兵的生活，一方面也在思考如何挣脱这个持续了近千年的邪恶烙印。\r' },
      '风国': { name: "风国", type: 1, ethnic_group: '基思卡人', intro: '居住在呼啸高原上的基斯卡人是一群天生的异类，他们在面对恶劣的自然环境时放弃了一切体力劳动，\r将脑力劳动发展到超越极致的高度，发明和创造就是他们生活的全部。\r在和平地度过了600年之后，拥有世界顶尖科技的风国在神圣联盟中的地位已经今非昔比，\r他们除了继续挖掘地界中的秘密之外，还将目光投向了一片未知之地——天界。\r' },
      '虫国': { name: "虫国", type: 1, ethnic_group: '蛰族', intro: '虫国是唯一一个没有纹耀制度的国家，自然也没有加入神圣联盟。\r一直以来，蜇族始终受到其它国家的不平等对待。\r蜇族人在漫长的不平等待遇中逐渐学会了坚强与拼搏，结合自身的特点找到了一条属于自己的出路，成为了整个地界中不可或缺的一个存在。\r虽然没有俊美的外形和肥沃的良田，蜇族人的生活却渐渐好了起来，他们只缺少一个公平的地位。\r如今的虫国依旧处于尴尬之中，依旧在为博得自己的一席之地而努力。\r' },
      '树国': { name: "树国", type: 1, ethnic_group: '辉妖', intro: '古时，辉妖过着平静的生活，陪伴他们的只有无数的树木。\r魁拔战争爆发后，树国人民惊恐地发现他们完全没有抵御魁拔的能力，只能白白被战火燃成灰烬。\r但随着地界的不断发展，各国之间往来频繁，树国人利用自己高超的纺织技巧发展经济，国力突飞猛进。\r如今的树国在日趋和平的当下，借助强大的经济实力在神圣联盟中获取了相应地位。\r以树国为核心的地界政治格局正在逐渐形成。\r' },
      '兽国': { name: "兽国", type: 1, ethnic_group: '兽族', intro: '拥有地界最大领土和最多人口的兽国是一个传统的农业国家，多数兽族人的一辈子就是与耕种田地打交道。\r由于常年处在外战内乱之中，妖侠阶级逐渐获得了兽国的统治权，妖侠文化也在兽国境内广为流传。\r广袤的土地赐予了兽族人宽广的胸襟，残酷的战争则磨练出了他们豪爽的性格。\r在这样的性格驱使下。\r兽族人屡屡被逼至绝境又再次从逆境中抬起头来。\r如今的兽国在以文治国的方针下，采取各种手段避免战事再发，但终躲不过魁拔的复活。\r' },
      '翼国': { name: "翼国", type: 1, ethnic_group: '翼族', intro: '由于天生两翼，翼族注定不能过上和一般种族同样的生活。\r因此，天性好战的翼族人走上了以武治国的军事化道路。\r在早先的战争中，翼族被武器精良、作战勇猛的龙国人逼到了现在的国土上。\r而在之后与兽国的战争中，逐渐掌握了先进武器和优秀战略的翼族人找到了自己的战术方针，国家也因此壮大起来。\r在和平时期，尚武的翼族人依旧过着清贫的生活，但每一个翼族人都随时准备着投入一场全新的战斗。\r' },
      '涡流岛': { name: "涡流岛", type: 1, ethnic_group: '无', intro: '' }
    }
    onMounted(() => {
      getSvgMap(svgmap1).then(res => {
        nextTick(() => {
          let chart1 = echarts.init(SvgMap.value)
          echarts.registerMap('kuibug_map', { svg: res })
          var option = {
            title: {
              show: true,
              text: '魁拔世界地图',
              textAlign: 'left',
              x: 'center',
              y: '7px',
            },
            tooltip: {
              show: true,
            },
            geo: [
              {
                map: 'kuibug_map',
                name: '魁拔世界地图',
                type: 'map',
                roam: true,
                selectedMode: false,
                itemStyle: {
                  color: null,
                  borderWidth: 0,
                },
                emphasis: {
                  focus: 'none',
                  itemStyle: {
                    color: null,
                  },
                  label: {
                    show: false
                  }
                },
                tooltip: {
                  show: true,
                  confine: true,
                  padding: 3,
                  formatter: function (params) {
                    var tobj = mapdata[params.name];
                    if (tobj != undefined) {
                      return tobj.name + ' (' + tobj.ethnic_group + '): ' + tobj.intro;
                    } else {
                      return params.name;
                    }
                  },
                  textStyle: {
                    fontSize: 13,
                  },
                  extraCssText: 'white-space:normal !important;max-width:200px !important;height:auto !important;word-wrap:break-word;',
                  // extraCssText:'0 1px 2px 0 rgba(0,0,0,0.16),0 1px 2px 0 rgba(0,0,0,0.12);',
                },
                data: [
                ]
              }
            ]
          }
          chart1.setOption(option);
        })
      })

    });
    return {
      SvgMap
    };
  }

})

</script>