Page({
  data: {
    hot: [],
    new: []
  },
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      method: 'GET',
      success: function (res) {
        that.setData({
          hot: res.data,
        })
        
      },
      fail: function () {
        // fail
      },
    });
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'GET',
      success: function (res) {
        that.setData({
          new: res.data,
        })
        wx.hideToast()
        
      },
      fail: function () {
        // fail
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