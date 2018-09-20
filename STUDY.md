###阿里面试题:

<!-- 
  # 使当前运行的异步操作（promise或者async）停止等待若干秒
  # (async()=>{
  #   console.log('hello');
  #   await sleep(2000);
  #   console.log('world');
  # })()
  #
  # @param secs 
 -->

const sleep = (secs) =>{
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve();
    },secs)
  })
}
<!-- 
  #
  # 对以下数据做处理，是的输出结果为'256'
  # const ary = [{a: 6}, {a: 1}, {a: 5},{a: 2}];
  # 
  # @param ary
 -->
const filterMapReduce = (ary) =>{
  return ary.filter( item =>item.a > 1)
          .map(item => item.a)
          .sort((n,m) => n - m).join('')
}

<!-- 
  # 对以下数据做处理，是的输出结果为['a','b','c']
  # const ary = ['a','b','c','a','b','c','a','b','c']
  #
  # @param ary
  #
 -->
 distinct (ary) {
   return [...new Set(ary)];
 }

 <!-- 
  # 
  # 
  #
  #
  -->