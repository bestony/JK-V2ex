Page({
  data: {
    hot: [],
    new: [],
    selected: true,
    selected1: false
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      method: 'GET',
      success: function (res) {
        that.setData({
          hot: res.data,
        })
        console.log(res.data);
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
        console.log(res.data);
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