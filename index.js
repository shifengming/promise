//1、index.js进行原生的Promise演示
//2、promise.js进行自定义的Promise演示
//3、test.js是对promise.js进行测试
//4、开发过程结合promise/a++ 规范

//一个最基本的promise长什么样？
new Promise((resolve, reject) => {
    resolve(1)
  })
    .then(
      value => {
        return new Promise(resolve => {
          resolve(
            new Promise((resolve, reject) => {
              resolve('333')
            })
          )
        })
      },
      reason => {
        console.log('reason', reason)
      }
    )
    .then(
      value => {
        console.log('then 2 value: ', value)
      },
      reason => {
        console.log('reason', reason)
      }
    )


// let p1 = new Promise((resolve) => {
//     resolve(1)
// })
// let p2 = p1.then(() => {
//     return p2
// })