<template>
  <div id="container"></div>
</template>

<script>
import BMapGL from 'BMapGL'

export default {
  name: 'HelloWorld',
  props: {
  },
  methods:{
    initMap:()=>{
      let map = new BMapGL.Map('container'); //创建地图实例
      let point = new BMapGL.Point(116.404,39.915); //创建点坐标
      map.centerAndZoom(point, 15); //初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.setHeading(44.5); //设置地图旋转角度
      map.setTilt(100); //设置地图的倾斜角度
      // map.setMapType(BMAP_EARTH_MAP); //设置地图类型为地球模式

      let opts = {
        anchor:'BMAP_ANCHOR_BOTTOM_LEFT', //控制控件位置
        offset:new BMapGL.Size(100,35) //控制控件偏移量
      }
      let scaleCtrl = new BMapGL.ScaleControl(opts); //添加比例尺控件
      map.addControl(scaleCtrl);
      let zoomCtrl = new BMapGL.ZoomControl(); //添加缩放控件
      map.addControl(zoomCtrl);
    }
  },
  mounted(){
    this.initMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
