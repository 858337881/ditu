import React, { Component } from 'react'
import '../assets/css/index.css'


export default class Reader extends Component {
  componentDidMount(){
    const{BMap,BMAP_STATUS_SUCCESS}=window
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(114.3162001,30.58108413);
    map.centerAndZoom(point,12);

    

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：'+r.point.lng+','+r.point.lat);
      }
      else {
        alert('failed'+this.getStatus());
      }
      var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
      });
      local.search("厕所");        
    },{enableHighAccuracy: true})

    
  }
    render() {
        return (
          <div>
            <div className="content">
              <div id="allmap" style={{position:"absolute", top: 0,left: 0, width: '100vw',height:'91vh',}}></div>
            </div>
          </div>
        );
    }
}