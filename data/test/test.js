export default{
  getlist(){
    wx.request({
      url: 'http://test.com/test/Data',
      dataType:'json',
      success(res){
        console.log("respond data=",res)
      }
    })
  }
}