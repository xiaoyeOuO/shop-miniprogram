// 0 引入 用来发送请求的 方法
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data:{
    // 轮播图数组
    swiperList: [],
    // 导航数据
    catesList: [],
    // 楼层数据
    floorList: []
  },
  // 页面开始加载就会触发
  onLoad:function(options){
    // 回调地狱：例如当要一个请求完成后再请求，就会有很多回调递归
    // 1 发送异步请求获取轮播图数据   优化的手段可以通过es6的 promise来解决回调地狱的问题 
    
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   },
    // })

    

    // this.setData({
    //   swiperList: ["../../img/轮播图1.dpg","../../img/轮播图2.dpg","../../img/轮播图3.dpg","../../img/轮播图4.dpg"]
    // })
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },

  // 获取轮播图数据
  getSwiperList(){
    request({url: "/home/swiperdata"})
    .then(result => {
      this.setData({
        swiperList: result
      })
    })
  },

  // 获取 分类导航数据
  getCateList(){
    request({url: "/home/catitems"})
    .then(result => {
      this.setData({
        catesList: result
      })
    })
  },
  // 获取 楼层数据
  getFloorList(){
    request({url: "/home/floordata"})
    .then(result => {
      this.setData({
        floorList: result
      })
    })
  }
})
