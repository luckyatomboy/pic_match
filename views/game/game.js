var pic = require("../../pic.js"),
    audio = require("../../audio.js"),
    question = require("../../question.js"),
    service = require("../../utils/service.js"),
    utils = require("../../utils/util.js"),
    handle,nextQuestion,currentId,events,
    _fn;

nextQuestion = {
  relation: '',
  text: '',
  audioUrl: '',
  headUrl: '',
  items: [],
  answerId: '',
  feedback: '',
}

handle = {
  //页面渲染
  render:function( callerPage ){
    var titleSong;

    //页面初始化
    _fn.init( callerPage );
    //抽取题目
    //service.raiseQuestion(nextQuestion);
    service.raiseRandomQuestion(nextQuestion);
    //请求数据
    callerPage.setData({
      currentView : 'vGame',
      currentData : nextQuestion
    });
    //播放题目音频
    titleSong = wx.createInnerAudioContext();
    titleSong.startTime = 5;
    titleSong.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
    titleSong.play();    
  }
};

events = {
  gameProxy: function (e) {
    var target = e.target;
    if (target.dataset && target.dataset.eventType && _fn[target.dataset.eventType]) {
      _fn[target.dataset.eventType].call(this, e);
    }
  }
};

_fn = {
  init: function (callerPage) {
    utils.mix(callerPage, events);
  },
  //检查答案
  checkAnswer: function (e) {
    var target = e.target,
      answerId = this.data.currentData.answerId,
      data = this.data.currentData,
      answerSong;
    
    //创建音频对象
    answerSong = wx.createInnerAudioContext();
    answerSong.startTime = 5;
    
    //判断对错
    if (target.dataset.selectId == answerId) {
      data.feedback = "答对了！"; 
      answerSong.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
      answerSong.play();
    } else {
      data.feedback = "答错了！";
    }
    //只能用setData更新数据，页面会刷新，否则不会刷新
    this.setData({
      currentData: data
    })    
  },
  //下一题
  next: function (e) {
    //抽取题目
    //service.raiseQuestion(nextQuestion);
    utils.clearProperty(nextQuestion);
    service.raiseRandomQuestion(nextQuestion);
    //请求数据
    this.setData({
      //currentView: 'vGame',
      currentData: nextQuestion
    });
  }    

}

module.exports = handle;