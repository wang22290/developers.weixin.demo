// components/drinkItem/drinkItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String,
    productNumber:Number,
    isSelected:Boolean,
    price:Number,
    isDelete:Boolean,
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
    //设置是否选中
    selectedIconTap:function (e) {
  
      this.setData({
        isSelected: !this.properties.isSelected,
      })
      
      this.triggerEvent('selectedIconTap', {
        productNumber:this.properties.productNumber,
        price:this.properties.price,
      }
      )
    },
    //数量减少
    productNumberjianTap:function(e){
      var cutBackNumber = 0;
      this.properties.isDelete = false;
      if (this.properties.productNumber > 1) {
        this.setData({
          productNumber: this.properties.productNumber -= 1,
          cutBackNumber: cutBackNumber-=1,
        })
      }else{
       
          cutBackNumber= -10000;
        
      }

      //当产品选中状态，需要事实把值传给控制器
      if (this.properties.isSelected) {
        this.triggerEvent('changeProductNumber', {
          productNumber: cutBackNumber,
          price: this.properties.price,
        }
        )
      }
    },
      //数量增加
    productNumberjiaTap: function (e) {
      var cutBackNumber = 0;
      this.setData({
        productNumber: this.properties.productNumber += 1,
        cutBackNumber: cutBackNumber += 1,
      })
      //当产品选中状态，需要事实把值传给控制器
      if(this.properties.isSelected){
        this.triggerEvent('changeProductNumber', {
          productNumber: cutBackNumber,
          price: this.properties.price,

        }
        )
      }
    }
  }
})
