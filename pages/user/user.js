// pages/drive/drive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  orderdetail: function () {
    wx.switchTab({
      url: '../order/order',
    })
  },
  feedetail: function () {
    wx.navigateTo({
      url: '../fee/fee',
    })
  },
  staticdetail: function () {
    wx.navigateTo({
      url: '../static/static',
    })
  }
})