// components/shopItem/shopItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    shopItemPush:function(e){
      wx.switchTab({
        url: '/pages/Mine/mine',
      })
    },
    icon_navigationPush: function (e) {
      //不保留原来页面
      // wx.reLaunch({
      //   url: '/pages/order/order',
      // })
      // wx.redirectTo({
      //   url: '/pages/order/order',
      // })
      wx.navigateTo({
        url: '/pages/order/order',
      })

    }


  }
 
})
