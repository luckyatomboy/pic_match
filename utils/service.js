var pic = require("../pic.js"),
  audio = require("../audio.js"),
  question = require("../question.js"),
  utils = require("util.js"),
  headId='', item1Id='', item2Id='', item3Id='',
  imageObject, targets,
  handle, _fn;

imageObject = {
  headId:'',
  headUrl:'',
  audioUrl:'',
  text:'',
  itemId:''
}

handle = {
  //根据pic.js原始数据随机出题
  raiseRandomQuestion: function(object) {
    var answerUrl, titleSong;

    //清空答案选项
    object.items = [];
    headId = item1Id = item2Id = item3Id = '';

    //抽取主题干
    _fn.getRandomImage(true,imageObject);
    object.headUrl = imageObject.headUrl;
    object.text = imageObject.text;
    object.answerId = imageObject.itemId;
    object.audioUrl = imageObject.audioUrl;
    //清空属性值
    utils.clearProperty(imageObject);

    //取得answer url
    answerUrl = _fn.getRandomUrl(object.answerId);
    object.items.push({ id: object.answerId, url: answerUrl });

    //抽取其他干扰项
    //干扰项1
    _fn.getRandomImage(false,imageObject);
    object.items.push({ id:imageObject.headId, url:imageObject.headUrl });
    utils.clearProperty(imageObject);
    //干扰项2
    _fn.getRandomImage(false, imageObject);
    object.items.push({ id: imageObject.headId, url: imageObject.headUrl });    

    //对items进行随机重排序
    object.items.sort(_fn.randomSort);

    //播放题目音频
    titleSong = wx.createInnerAudioContext();
    titleSong.startTime = 5;
    titleSong.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
    //titleSong.play();        

  }
}

_fn = {
  //取得随机图片信息
  /* 如果headFlag=true, 取得题干信息 object = { headId:'', headUrl:'', text:'', itemId:''}
    如果headFlag=false, 根据已有的itemId，随机取得其他选项图片ID object = { id:'', url:'' }*/
  getRandomImage: function(headFlag, object) {
    var randomIdIndex, randomUrlIndex, randomRelIndex, randomItemIndex, i;

    if (headFlag) {
      //从pic list中随机抽取一个ID作为主ID
      randomIdIndex = Math.floor(Math.random() * pic.list.length);
      //从pic中取得数据
      object.headId = headId = pic.list[randomIdIndex].id;
      //从url数组中随机抽取一个图片
      randomUrlIndex = Math.floor(Math.random() * pic.list[randomIdIndex].url.length);
      object.headUrl = pic.list[randomIdIndex].url[randomUrlIndex];
      //从relation中随机抽取一个
      randomRelIndex = Math.floor(Math.random() * pic.list[randomIdIndex].relation.length);
      //生成标题
      object.text = '这是谁的' + pic.list[randomIdIndex].relation[randomRelIndex].text + '?';
      //抽取item
      randomItemIndex = Math.floor(Math.random() * pic.list[randomIdIndex].relation[randomRelIndex].id.length);
      object.itemId = item1Id = pic.list[randomIdIndex].relation[randomRelIndex].id[randomItemIndex];
      //取得所有子项ID。干扰项不能在这些子项里面
      targets = pic.list[randomIdIndex].relation[randomRelIndex].id;
      //取得题目音频地址
      for (i=0;i<audio.list.length;i++){
        if (audio.list[i].text == pic.list[randomIdIndex].relation[randomRelIndex].text){
          object.audioUrl = audio.list[i].url;
          break;
        }
      }
    } else {
      //取得干扰项的图片
      for (;;) {
        //从pic list中随机抽取一个ID作为干扰项ID
        randomIdIndex = Math.floor(Math.random() * pic.list.length);
        //从pic中取得数据。不能与已经取出的图片id重复
        //if (pic.list[randomIdIndex].id != headId && pic.list[randomIdIndex].id != item1Id && pic.list[randomIdIndex].id != item2Id) {
        if (pic.list[randomIdIndex].id != headId &&                 //不能是题干图片
            targets.indexOf(pic.list[randomIdIndex].id) == -1 &&    //不能在题干的子项中
            pic.list[randomIdIndex].id != item2Id) {                //不能是上次抽出的干扰项
          object.headId = pic.list[randomIdIndex].id;
          //从url数组中随机抽取一个图片
          randomUrlIndex = Math.floor(Math.random() * pic.list[randomIdIndex].url.length);
          object.headUrl = pic.list[randomIdIndex].url[randomUrlIndex];          
          if (item2Id==''){
            item2Id = object.headId;
          }else{
            item3Id = object.headId;
          }
          break;         
        }
      }
    }
  },
  //取得随机url
  getRandomUrl:function(id){
    var randomUrlIndex, i;
    for (i=0;i<pic.list.length;i++){
      if (pic.list[i].id==id){
        randomUrlIndex = Math.floor(Math.random() * pic.list[i].url.length);
        return pic.list[i].url[randomUrlIndex];
      }
    }
  },
  //比较函数
  randomSort:function(a,b){
    return Math.random()>0.5 ? -1 : 1;
  }

}

module.exports = handle;