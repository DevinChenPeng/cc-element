import Mock from 'mockjs'

// 正则url /\/csrmds\/file\/one\/upload/
Mock.mock(/\/csrmds\/file\/one\/upload/, 'post', function(options) {
  console.log('eeeeeeeee', options);
  return Mock.mock({
    code: 0,
    data: 130515111515100
  })
})


Mock.mock(/\/csrmds\/file\/one\/.*/, 'get', function(options) {
  return Mock.mock({
    code: 0,
    data: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F55ee9bb933228.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636957216&t=b3b3f130670abd64fa76cc8b2accea70'
  })
})