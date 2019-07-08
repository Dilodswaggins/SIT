//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Wake the fuck up',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myAccount:'',
    myPassword:'',
  },

  myAccountInput:function(e)
  {
    var myAccount=e.detail.value;
    this.setData({
      'myAccount':myAccount,
    });
  },

  myPasswordInput:function(e){
    var myPassword=e.detail.value;
    this.setData({
      'myPassword':myPassword,
    })
  }, 

  myLogin:function(){
    var myAccount=this.data.myAccount;
    var myPassword=this.data.myPassword;
    //console.log("账号:"+myAccount);
    //console.log("密码:"+myPassword);
    wx.request({
      url: 'http://localhost:8080/ServletTest_war_exploded/A',
      method:'POST',
      data:{
        username:myAccount,
        password:myPassword
      },
      header:{
        'content-type':'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:function(res){
        console.log(res.data);
      },
      fail:function(res){
        console.log("fail");
      }
    })
  },

  //事件处理函数
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
