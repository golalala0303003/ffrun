export default{
  getorder(callback){
    let id_temp=wx.getStorageSync('user_id');
    console.log("这是userid",id_temp);
    wx.request({
      url: `http://127.0.0.1:4523/m1/5470558-5146069-default/user/order/${id_temp}`,
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
  },

  get_AD_order(callback){
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/admin/order',
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

  get_AD_user(callback){
    wx.request({
      url: 'http://127.0.0.1:4523/m1/5470558-5146069-default/admin/user',
      method:'GET',
      success(res){
        console.log("666",res.data.data);
        callback(res.data);
      }
    });
  },

  get_yijie(callback){
    let id_temp=wx.getStorageSync('user_id');
    console.log("这是userid",id_temp);
    wx.request({
      url: `http://127.0.0.1:4523/m1/5470558-5146069-default/user/rider/${id_temp}`,
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

}