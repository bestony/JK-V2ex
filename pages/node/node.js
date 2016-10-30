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
  onReady:function(){
    
  },
  onShow:function(){
  
  },
  onHide:function(){
   
  },
  onUnload:function(){
   
  }
})