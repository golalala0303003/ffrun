export default{
  getorder(callback){
    let id_temp=wx.getStorageSync('user_id');
    console.log("这是userid",id_temp);
    wx.request({
      url: `http://localhost:8080/user/order/${id_temp}`,
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

  get_rider_order(callback){
    wx.request({
      url: 'http://localhost:8080/user/rider/order',
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

  get_AD_order(callback){
    wx.request({
      url: 'http://localhost:8080/admin/order',
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

  get_AD_user(callback){
    wx.request({
      url: 'http://localhost:8080/admin/user',
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
      url: `http://localhost:8080/user/rider/${id_temp}`,
      dataType:'json',
      success(res){
        console.log("respond data=",res);
        callback(res.data);
      }
    });
  },

}