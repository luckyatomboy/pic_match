var handle;

handle = {
//把view中的事件监听器注册在主页面中
  mix: function (r, s) {
    var p;
    for (p in s) {
      r[p] = s[p]
    }
  },
  //清空对象s中的所有属性的值
  clearProperty:function(s){
    for(var p in s){
      s[p] = '';
    }
  }
}

module.exports = handle;