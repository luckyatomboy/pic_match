var pic;

/*图片属性*/
pic={
  list:[{
    id: '001', /*张骥*/
    url: ['http://www.shmbx.iego.cn/game/zhangji1.jpg', 'http://www.shmbx.iego.cn/game/zhangji2.jpg'],
    relation:[{
      text:'爸爸',  
      id:['100','101']
    },{
      text:'儿子',
      id:['200','201']
    },{
      text: '老公',
      id: ['002']      
    }]
  },{
      id: '002', /*李宁*/
      url: ['http://www.shmbx.iego.cn/game/lining1.jpg', 'http://www.shmbx.iego.cn/game/lining2.jpg', 'http://www.shmbx.iego.cn/game/lining3.jpg'],
      relation: [{
        text: '妈妈',
        id: ['100', '101']
      }, {
        text: '女儿',
        id: ['202', '203']
      },{
        text: '老婆',
        id: ['001']          
      }]    
    }, {
      id: '003', /*李楠*/
      url: ['http://www.shmbx.iego.cn/game/linan1.jpg'],
      relation: [{
        text: '妈妈',
        id: ['102']
      }, {
        text: '女儿',
        id: ['202', '203']
      }, {
        text: '老婆',
        id: ['004']
      }]
    }, {
      id: '004', /*张一举*/
      url: ['http://www.shmbx.iego.cn/game/yiju1.jpg'],
      relation: [{
        text: '爸爸',
        id: ['102']
      }, {
        text: '老公',
        id: ['003']
      }]
    },
  {
      id: '100',  /*滴滴*/
      url: ['http://www.shmbx.iego.cn/game/didi1.jpg', 'http://www.shmbx.iego.cn/game/didi2.jpg', 'http://www.shmbx.iego.cn/game/didi3.jpg', 'http://www.shmbx.iego.cn/game/didi4.jpg', 'http://www.shmbx.iego.cn/game/didi5.jpg'],
      relation: [{
        text: '女儿',
        id: ['001', '002']
      }, {
        text: '孙女',
        id: ['200','201','202', '203']
      },{
        text: '姐姐',
        id: ['101']        
      },{
        text: '妹妹',
        id: ['102']           
      }]       
  },{
      id: '101',  /*嗒嗒*/
      url: ['http://www.shmbx.iego.cn/game/dada1.jpg', 'http://www.shmbx.iego.cn/game/dada2.jpg', 'http://www.shmbx.iego.cn/game/dada3.jpg', 'http://www.shmbx.iego.cn/game/dada4.jpg'],
      relation: [{
        text: '女儿',
        id: ['001', '002']
      }, {
        text: '孙女',
        id: ['200', '201', '202', '203']
      }, {
        text: '妹妹',
        id: ['100','102']
      }]     
  },{
      id: '102',  /*皮皮*/
      url: ['http://www.shmbx.iego.cn/game/pipi1.jpg', 'http://www.shmbx.iego.cn/game/pipi2.jpg', 'http://www.shmbx.iego.cn/game/pipi3.jpg', 'http://www.shmbx.iego.cn/game/pipi4.jpg'],
      relation: [{
        text: '儿子',
        id: ['003', '004']
      }, {
        text: '外孙',
        id: ['202', '203']
      }, {
        text: '哥哥',
        id: ['100', '101']
      }]      
  },{
      id: '201',  /*奶奶*/
      url: ['http://www.shmbx.iego.cn/game/nainai1.jpg'],
      relation: [{
        text: '奶奶',
        id: ['100', '101']
      }, {
        text: '妈妈',
        id: ['001']
      }]     
  },{
      id: '202',  /*姥姥*/
      url: ['http://www.shmbx.iego.cn/game/laolao1.jpg', 'http://www.shmbx.iego.cn/game/laolao2.jpg', 'http://www.shmbx.iego.cn/game/laolao3.jpg'],
      relation: [{
        text: '姥姥',
        id: ['100', '101','102']
      }, {
        text: '妈妈',
        id: ['002','003']
      },{
        text: '老婆',
        id: ['203']        
      }]       
  },{
      id: '203',  /*姥爷*/
      url: ['http://www.shmbx.iego.cn/game/laoye1.jpg', 'http://www.shmbx.iego.cn/game/laoye2.jpg', 'http://www.shmbx.iego.cn/game/laoye3.jpg'],
      relation: [{
        text: '姥爷',
        id: ['100', '101', '102']
      }, {
        text: '爸爸',
        id: ['002', '003']
      }, {
        text: '老公',
        id: ['202']
      }]      
  }]
}

module.exports=pic;