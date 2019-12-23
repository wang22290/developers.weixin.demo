
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //当前选中项
    currentIndex:0,
    screenHeight:0,
    toView:'',
    cartoonimageList: [
      '/banner/1.jpg',
      '/banner/2.jpg',
      '/banner/3.jpg',
      '/banner/1.jpg',
      '/banner/2.jpg'
    ],
    imgUrl:[],
    username: app.globalData.userInfo,
    leftData:[
      "人气Top",
      "大师咖啡",
      "小鹿茶精选",
      "瑞纳并",
      "鲜榨果汁",
      "经典饮品",
      "健康轻食",
      "瑞星坚果",
      "幸运小食",
      "周边潮品"
    ],
    rightData: [
      {
        title:"人气Top",
        shopArray:[
          {
            image:"/banner/2.jpg",
            name:"圣诞姜饼茶拿铁",
            eName:"happy new year",
            newPrice:"¥1.2",
            oldPrice:"¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥30.2",
            oldPrice: "¥20.0",

          }
        ]
      },
      {
        title: "大师咖啡",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥100.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥0.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "小鹿茶精选",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "瑞纳并",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "鲜榨果汁",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "经典饮品",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "健康轻食",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      },
      {
        title: "瑞星坚果",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "幸运小食",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }, 
      {
        title: "周边潮品",
        shopArray: [
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          },
          {
            image: "/banner/2.jpg",
            name: "圣诞姜饼茶拿铁",
            eName: "happy new year",
            newPrice: "¥10.2",
            oldPrice: "¥20.0",

          }
        ]
      }
    ],
  },

  jumptoMine() {
    wx.switchTab({
      url: '/pages/Mine/mine',
    })
  },

  chick:function(e){
    var myThis = this;
    wx.chooseImage({
      count:9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album','camera'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        myThis.setData({
          imgUrl : tempFilePaths
        })

      },
      fail:function(res){
        console.log(res);
      },
      complete:function(res){

      }
    })
  },

//切换左侧选项
  cartoonViewleftsubjectTap:function(e){
    this.setData({
      currentIndex:e.currentTarget.dataset.index,
    })
    console.log("data" + e.currentTarget.dataset.index),
    this.setData({
      toView:"data"+e.currentTarget.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      screenHeight : 960,
    })
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




