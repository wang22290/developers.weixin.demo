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
    //当前点击
    currentIndex: 0,
    //总价
    totalPrice: 0,
    //选中个数
    productNumber: 1,
    //是否选中
    isSelected: false,
    name: '',
    drinkData: [
      "1",
      "1",
      "1",
    ],
    trendData: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
    ]

  },

  /**
   * 是否选中
   */
  selectedIconTap: function(e) {
    // console.log(e);
    const  myProduct = e.detail
    console.log(this.data.currentIndex, this.properties.currentIndex, e.detail, myProduct.productNumber, myProduct.price);
    this.setData({
      totalPrice: this.data.totalPrice + myProduct.productNumber * myProduct.price,
    })

  },
  /**
   * 改变产品数量
   */
  changeProductNumber:function(e){
    const myProduct = e.detail
    var myThis = this
    console.log(myProduct.productNumber)
    if (myProduct.productNumber == -10000) {
      wx.showModal({
        title: '',
        content: '确定不要了吗？',
        success(res) {
          if(res.confirm){
            myThis.setData({
              totalPrice: myThis.data.totalPrice + -1 * myProduct.price,
              drinkData: [
                "1",
                "1",
              ],
            })
          }else if(res.cancel){

          }
        }
      })
    }else{
      this.setData({
         totalPrice: this.data.totalPrice + myProduct.productNumber * myProduct.price,
      })
    }
  },

  /**
   * 结算
   */

  drinkTotalPayBtnTap:function(e){
    wx.showModal({
      title: '',
      content: "给钱"+this.data.totalPrice,
      success(res) {
        if (res.confirm) {
         
        } else if (res.cancel) {

        }
      }
    })
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