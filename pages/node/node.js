Page({
  data:{
    nodes:[],
  },
  onLoad:function(options){
    var that= this;
   wx.request({
     url: 'https://v2ex.com/api/nodes/all.json',
     method: 'GET', 
     success: function(res){
      that.setData({
          nodes:res.data
      })
     },
   })
  },
  navTo: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../nodeinfo/nodeinfo?nodeid=' + e.currentTarget.id
    })
  }
})