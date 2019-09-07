//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    newField:{
      text:'444'
    }
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    wx.showShareMenu({
      withShareTicket: true
    })
    setTimeout(()=>{
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },5000)
  },
onShow(){
  console.log(this.route)

},
  onShareAppMessage(optios){
    console.log(optios)
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  changeItemInObject(){
    this.setData({
      'newField.text':'这是设置的文本'
    })
  }
})
