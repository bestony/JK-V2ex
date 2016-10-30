Page({
  data:{
    post:[],
    comment:[],
  },
  onLoad:function(options){
    var thar = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id='+options.postid,
      method: 'GET', 
      success: function(res){
        thar.setData({
          post: res.data[ 0 ],
        })
        con
      },
      fail: function() {
        // fail
      }
      
    })
  },
})