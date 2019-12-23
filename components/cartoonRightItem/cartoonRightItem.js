// components/cartoonRightItem/cartoonRightItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String,
    en_name: String,
    newPrice: String,
    oldPrice: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    // this.setData({
    //   name: this.properties.name ,
    // })
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (e ) {
      console.log(e);
    }
  }
})
