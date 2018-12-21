var question;

/*问题列表*/
/*暂时是固定的题目和答案，将来要能够随机创建题目*/
question = {
  list: [{
    kind: '关系',
    item: [{
      relation: '爸爸-女儿',
      text:'这是谁的爸爸？',
      audio: '001',
      head: '001',
      options: ['002', '100', '202'],
      answer: '100',
      selected: true
    }, {
      relation: '爸爸-女儿',
      text: '这是谁的爸爸？',
      audio: '001',
      head: '001',
      options: ['002', '102', '101'],
      answer: '101',
      selected: false
    }, {
      relation: '妈妈-女儿',
      text: '这是谁的妈妈？',
      audio: '002',
      head: '002',
      options: ['001', '100', '202'],
      answer: '100',
      selected: false
    }, {
      relation: '女儿-爸爸',
      text: '这是谁的女儿？',
      audio: '101',
      head: '101',
      options: ['002', '203', '001'],
      answer: '001',
      selected: false
    }, {
      relation: '姥姥-孙女',
      text: '这是谁的姥姥？',
      audio: '200',
      head: '202',
      options: ['002', '101', '001'],
      answer: '101',
      selected: false
    }]
  }]
}

module.exports=question;