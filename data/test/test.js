export default{
  getorder(callback){
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/order/1',
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

  get_rider_order(callback){
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/user/rider/order',
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  }

}