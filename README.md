[Demo]([https://github.com/Kevin996233](https://crazyxi.github.io/KuibaWeb/#/))
## 使用技术框架
* Vue3
* Vite
* Echarts
* AnyChart
## 安装环境
`npm install `

## 注意
AnyChartMap可能会报错(兼容性问题)
```javascript
Uncaught (in promise) TypeError: Cannot set property name of #<Attr> which h
```
- 在`node_modules\anychart\dist\js\anychart-bundle.min.js`找到`k.name=k.name.toLowerCase();`并删除
- 再删除`node_modules\.vite` 清除缓存

## 截图
- 魁拔矢量地图素材(`public\kuiba_23_map.cdr`)
先用CDR导出成SVG文件，然后用Inkscape调整节点属性
![JR_AS_4_NA6C4_GQ_U2_P8K.png](https://s2.loli.net/2023/06/01/DMzdYtveCl6f4pn.png)
- 修改节点属性
![1CL_0L3_CMF_H9FECCHMDW9.png](https://s2.loli.net/2023/06/01/QMfNteBqEh2sn6w.png)
- Echarts魁拔世界地图
![WX84BWZ_P___ZILC~T@BRVE.png](https://s2.loli.net/2023/06/01/UmRtXcpYKTg94Mk.png)
- 魁拔人物关系图
![_0AS5VCU_DA892D2__LW466.png](https://s2.loli.net/2023/06/01/e7IX8KQ9TFhkUqc.png)
- Anychart魁拔世界地图
![IRP`_7RI9~0RNGACA_Z0E_T.png](https://s2.loli.net/2023/06/01/2WxlQHjqMsVofnT.png)



