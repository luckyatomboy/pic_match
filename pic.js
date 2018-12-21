var pic;

/*图片属性*/
pic={
  list:[{
    id: '001', /*张骥*/
    url:['http://img.dmall.com/20161206/0ec7c6eb-b60a-42d4-acdb-d47ad7844a13_360x360H'],
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
      url: ['http://img.dmall.com/20161112/06aacf18-237a-4b70-a238-e64c235007e7_360x360H'],
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
  },{
      id: '100',  /*滴滴*/
      url: ['http://img.dmall.com/20161112/fe0bc645-e1e5-48ef-a792-44a81a2ef66e_360x360H'],
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
      url: ['http://img.dmall.com/20161112/283de793-f07b-474c-b766-ba1bc2bfa34f_360x360H'],
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
      url: ['http://img.dmall.com/20161215/de13f732-009a-4bb5-9b01-27613592d0dd_360x360H'],
      relation: [{
        text: '儿子',
        id: ['001', '002']
      }, {
        text: '孙子',
        id: ['200', '201', '202', '203']
      }, {
        text: '哥哥',
        id: ['100', '102']
      }]      
  },{
      id: '201',  /*奶奶*/
      url: ['http://img.dmall.com/20161213/b467ed5e-996f-4840-8c3a-600c6dfda9a9_360x360H'],
      relation: [{
        text: '奶奶',
        id: ['100', '101']
      }, {
        text: '妈妈',
        id: ['001']
      }]     
  },{
      id: '202',  /*姥姥*/
      url: ['http://img.dmall.com/mIndex/201612/1c81ca94-3c79-453c-bef3-88d89d0c41ff_480x480H'],
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
      url: ['http://img.dmall.com/mIndex/201612/b29f039d-04c9-4359-b0fd-d9659a80957a_480x480H'],
      relation: [{
        text: '姥爷',
        id: ['100', '101', '102']
      }, {
        text: '爸爸',
        id: ['002', '003']
      }, {
        text: '老公',
        id: ['203']
      }]      
  }]
}

module.exports=pic;