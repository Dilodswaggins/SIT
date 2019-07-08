// pages/header/header.js
Page({
  data: {
    imgUrls: [
      '/icon/abc.jpg',
      '/icon/abc2.jpg',
      '/icon/abc3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
    },
  viewdetail: function () {
    wx.switchTab({
      url: '../user/user',
    }) 
  },
  parkdetail: function () {
    wx.switchTab({
      url: '../park/park',
    })
  },
  finddetail: function () {
    wx.navigateTo({
      url: '../find/find'
    })
  },
  cardetail: function () {
    wx.navigateTo({
      url: '../mycar/mycar'
    })
  }
})
