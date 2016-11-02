Page({
  data:{
    userinfo:[],
    userpost:[],
  },
  onLoad:function(options){
    var that =this ;
    wx.request({
      url: 'https://www.v2ex.com/api/members/show.json?username='+options.username,
      method: 'GET', 
      success: function(res){
       that.setData({
            userinfo:res.data
        })
        console.log(res.data);
      },
      
    })
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?username='+options.username,
      method: 'GET',
      success: function(res){
        that.setData({
            userpost:res.data
        })
      },
     
    })
  },
 
})