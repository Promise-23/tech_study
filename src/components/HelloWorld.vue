<template>
  <div id="container"></div>
</template>

<script>
//http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/custom
// import BMapGL from 'BMapGL';
import mapApi from '../util/baiduApi.js'
// import zqJson from '../../public/json/zq.json';

export default {
  name: 'HelloWorld',
  data:function(){
    return {
      initDot:{ //初始点
        lng:108.37499837133943,
        lat: 22.810383569260047,
        zoom:5,
      },
    }
  },
  props: {
  },
  methods:{
  },
  mounted(){
    mapApi.initMap(this.initDot);
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
