import BMapGL from 'BMapGL';
import * as mapvgl from "mapvgl";

const initMap = (initDot)=>{
  let map = new BMapGL.Map('container'); //创建地图实例
  let point = new BMapGL.Point(initDot.lng,initDot.lat); //创建点坐标
  map.centerAndZoom(point, initDot.zoom); //初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  map.setHeading(0); //设置地图旋转角度
  // map.setTilt(200); //设置地图的倾斜角度
  // eslint-disable-next-line
  map.setMapType(BMAP_EARTH_MAP);  //设置地图类型为地球模式 

  let opts = {
    anchor:'BMAP_ANCHOR_BOTTOM_LEFT', //控制控件位置
    offset:new BMapGL.Size(100,35) //控制控件偏移量
  }
  let scaleCtrl = new BMapGL.ScaleControl(opts); //添加比例尺控件
  map.addControl(scaleCtrl);
  let zoomCtrl = new BMapGL.ZoomControl(); //添加缩放控件
  map.addControl(zoomCtrl);

  //应用地图样式(通过发布样式) 
  map.setMapStyleV2({
    styleId: "ed883c44131202b810010c6583ce0359"
  });
  // map.setMapStyleV2({styleJson:zqJson}); //通过Json文件形式
  let marker = new BMapGL.Marker(point); //创建标注
  map.addOverlay(marker);
  return map;
}

// 创建MapVGL图层管理器
const createView = (map)=>{
  let view = new mapvgl.View({
    map: map
  });

  //创建可视化图层，并添加到图层管理器中
  var layer = new mapvgl.PointLayer({
      color: 'rgba(50, 50, 200, 1)',
      blend: 'lighter',
      size: 2
  });
  view.addLayer(layer);

  //准备好规范化坐标数据
  var data = [{
      geometry: {
          type: 'POINT',
          coordinates: [116.403748, 39.915055]
      }
  }];

  //关联图层与数据，享受震撼的可视化效果
  layer.setData(data);
}

export default{
  initMap,
  createView
}