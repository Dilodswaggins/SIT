//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: "逮虾户",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myAccount:'',
    myPassword:'',
  },

  myAccountInput: function(e){
    var myAccount=e.detail.value;
    this.setData({
      "myAccount":myAccount,
    });
  },

  myPasswordInput: function(e){
    var myPassword=e.detail.value;
    this.setData({
      "myPassword":myPassword,
    });
  },

  myLogin: function(){
    var myAccount=this.data.myAccount;
    var myPassword=this.data.myPassword;
    console.log("账号"+myAccount);
    console.loh("密码"+myPassword);
    /*wx.request({
      url: '',
      method: 'POST',
      data: {
        account: myAccount,
        password: myPassword
      },
      header:{ 'content-type': },
      success: function(res){
        console.log(res.data);
        console.log(res.data.d);
        var retData == JSON.parse(res.data.d);
        console.log(retData);
        if(retData.code == 1){
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration: 10000
          });
        }
        else{
          wx.showToast({
            title: '登陆不成功',
            content: '原因' + retData.message,
            showCancel: false,
          });
        }
      }
    })*/
  },

  //事件处理函数
  rundetail: function(){
    wx.switchTab({
      url: '../header/header'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
