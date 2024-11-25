// pages/home/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:"all",
    orderListall:[
      {typeService:"代寄快递",numService:"123456789123456789",typeDoneyet:"已完成",start:"福师大",end:"衡水中学",name:"小王",phone:"18111111111"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"拿麦当劳",numService:"912345678912345678",typeDoneyet:"已完成",start:"地点1",end:"地点2",name:"李四",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
    ],
    orderListyetpay:[
      {typeService:"代寄快递",numService:"123456789123456789",typeDoneyet:"已完成",start:"霍格沃兹",end:"衡水中学",name:"王小桃",phone:"18111111111"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
    ],
    orderListyetget:[
      {typeService:"代寄快递",numService:"123456789123456789",typeDoneyet:"已完成",start:"霍格沃兹",end:"衡水中学",name:"王小桃",phone:"18111111111"},
    ],
    orderListalpay:[
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
    ],
    orderListdone:[
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
      {typeService:"智能跑腿",numService:"912345678912345678",typeDoneyet:"未完成",start:"福州十六中",end:"福州大学",name:"张三",phone:"12345678965"},
    ]
  },
  changeTab: function (e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      currentTab: type,
    });
    console.log("change to",type);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})