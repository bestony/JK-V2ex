Page({
  data: {
    post: [],
    comment: [],
  },
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.postid,
      method: 'GET',
      success: function (res) {
        new Date;
        res.data[0].created = new Date(res.data[0].created * 1000);
        that.setData({
          post: res.data[0],
        })
         wx.hideToast()
      },
      fail: function () {
        
      }

    });
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.postid,
      method: 'GET',
      success: function(res){
       that.setData({
          comment: res.data,
        })
        console.log( res.data);
      },
      fail: function() {
        // fail
      },
      
    })
  },
  navTo: function (e) {
    //console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../userinfo/userinfo?username=' + e.currentTarget.id
    })
  }
})