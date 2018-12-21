var game=require("../../views/game/game.js"),
    record=require("../../views/record/record.js"),
    mine=require("../../views/mine/mine.js"),
    views,
    _fn;

views = {
  vGame : game,
  vRecord : record,
  vMine : mine
}

Page({
  data: {
    currentData:game,
    currentView: '',
    tabs:[{
      text:'开始游戏',
      className:'game',
      view:'vGame'
    },{
      text:'游戏记录',
      className:'record',
      view:'vRecord'
    },{
      text:'我的',
      className:'mine',
      view:'vMine'
    }]
  },
  //初始调用
  onReady:function(){
    _fn.selectView.call(this,'vGame');
  },
  //切换tab
  changeTab:function(e){
    var currentTarget=e.currentTarget,
        view=currentTarget.dataset.view;

    if (!view){
      return;
    };

    this.setData({
      currentView:view
    });

    _fn.selectView.call(this,view);
  }

});

_fn = {
  selectView:function(view){
    var view=views[view];
    if(!view){
      return;
    };
    view.render(this);
  }
}
