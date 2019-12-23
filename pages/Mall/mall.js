// Component({
//   pageLifetimes: {
//     show() {
//       if (typeof this.getTabBar === 'function' &&
//         this.getTabBar()) {
//         this.getTabBar().setData({
//           selected: 2
//         })
//       }
//     }
//   }
// })


// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    currentIndex: 0,
    tabData: [
      "全部",
      "立等可取",
      "预约可取"
    ]
  },
  /**
   * tab点击切换
   */
  clickTag:function(e){
    // console.log(e)
    var that = this;
    var tempIndex = e.currentTarget.dataset.current
    that.setData({
      currentIndex: e.currentTarget.dataset.current,
    });
    // console.log(that.data.currentIndex);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})