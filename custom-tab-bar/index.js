Component(
  {
    data:{
      selected:0,
      color:"#7A7E83",
      selectedColor:"#3cc51f",
      list: [
        {
          pagePath: "/pages/Home/home",
          text: "home",
          iconPath: "/Images/home.png",
          selectedIconPath: "/Images/home.png"
        },
        {
          pagePath: "/pages/Cartoon/cartoon",
          text: "cartoon",
          iconPath: "/Images/cartoon.png",
          selectedIconPath: "/Images/cartoon.png"
        },
        {
          pagePath: "/pages/Mall/mall",
          text: "mall",
          iconPath: "/Images/mall.png",
          selectedIconPath: "/Images/mall.png"
        },
        {
          pagePath: "/pages/Mine/mine",
          text: "mine",
          iconPath: "/Images/user.png",
          selectedIconPath: "/Images/user.png"
        }
      ]
    },
    atteched(){

    },
    methods:{
      switchTab(e){
        const data = e.currentTarget.dataset
        const url  = data.path
        wx.switchTab({
          url
        })
        this.setData(
          {
            selected:data.index
          }
        )
      }
    }
  }
)

// Component({
//   data: {
//     selected: 0,
//     color: "#7A7E83",
//     selectedColor: "#3cc51f",
//     list: [{
//       pagePath: "/index/index",
//       iconPath: "/image/icon_component.png",
//       selectedIconPath: "/image/icon_component_HL.png",
//       text: "组222件"
//     }, {
//       pagePath: "/index/index2",
//       iconPath: "/image/icon_API.png",
//       selectedIconPath: "/image/icon_API_HL.png",
//       text: "接333口"
//     }]
//   },
//   attached() {
//   },
//   methods: {
//     switchTab(e) {
//       const data = e.currentTarget.dataset
//       const url = data.path
//       wx.switchTab({ url })
//       this.setData({
//         selected: data.index
//       })
//     }
//   }
// }