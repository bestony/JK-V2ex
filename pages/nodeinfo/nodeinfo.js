Page({
  data:{
    nodeinfo:[],
    nodepost:[],
  },
  onLoad:function(options){
    var that =this ;
    wx.request({
      url: 'https://www.v2ex.com/api/nodes/show.json?id='+options.nodeid,
      method: 'GET', 
      success: function(res){
       that.setData({
            nodeinfo:res.data
        })
      },
      
    })
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?node_id='+options.nodeid,
      method: 'GET',
      success: function(res){
        that.setData({
            nodepost:res.data
        })
      },
     
    })
  },
  navTo: function (e) {
    //console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../post/post?postid=' + e.currentTarget.id
    })
  }
  
})