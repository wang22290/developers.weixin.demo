// pages/Login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneInputValue:'',
    passwordInputValue:'',
    longinStatus:false
  },
  // login-form - inputNumber 
  // login-form - inputPassword

  bindKeyInput: function (e) {
    this.setData({
      phoneInputValue: e.detail.value,
    })
  },
  passwordInput:function(e){
    this.setData({
      passwordInputValue :e.detail.value,
    })
  },
  loginButtonTap:function(e){
    var phone = this.data.phoneInputValue;
    var password = this.data.passwordInputValue;
    if (phone == '150' & password == '123'){
      // this.setData({
      //   longinStatus: true 
      // })
      wx:wx.switchTab({
        url: '/pages/Home/home',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
      
    }else{
      this.setData({
        longinStatus: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})