Component({
  data:{

    banner: [
      '/banner/1.jpg',
      '/banner/2.jpg',
      '/banner/3.jpg',
      '/banner/1.jpg',
      '/banner/2.jpg'
    ],
    for_listView:[
      {
        "class": "dayTop_listImage_left",
        "imageClass": "dayTop_listImage_left_image",
        "imageName":"/Images/image-1.jpeg",
        "textString":"lufei-路飞",
        "oldPrice":"40",
        "newPrice": "40"
      },
      {
        "class": "dayTop_listImage_center",
        "imageClass": "dayTop_listImage_center_image",
        "imageName": "/Images/image-2.jpg",
        "textString": "qiaoba-乔巴",
        "oldPrice": "40",
        "newPrice": "40"
      },
      {
        "class": "dayTop_listImage_right",
        "imageClass": "dayTop_listImage_right_image",
        "imageName": "/Images/image-3.jpeg",
        "textString": "娜美-namei",
        "oldPrice": "40",
        "newPrice": "40"
      }
    ],
    shopList: [
      {
        "class": "dayTop_listImage_left"
      },
      {
        "class": "dayTop_listImage_center"
      },
      {
        "class": "dayTop_listImage_left"
      },
      {
        "class": "dayTop_listImage_center"
      },
      {
        "class": "dayTop_listImage_left"
      },
      {
        "class": "dayTop_listImage_center"
      },
      {
        "class": "dayTop_listImage_center"
      },
      {
        "class": "dayTop_listImage_center"
      }
    ],

  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
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
    console.log("ddd")
  },
  attached:function(){
    this.setData({
      numberA:1,
      numberB:2,
    })
  },
  observers:{
    'numberA, numberB':function(numberA,numberB){
      this.setData({

        sum:numberA + numberB
      })
    }
  }
})


// pages/home/home.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     bannerImg: [
//       '/banner/1.png',
//       '/banner/2.png',
//       '/banner/3.png'
//     ],
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })