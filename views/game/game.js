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
      data = this.data.currentData;
    //判断对错
    if (target.dataset.selectId == answerId) {
      data.feedback = "答对了！";
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