/**
 * ajax请求函数模块
 * 返回值：promise对象
 */
import axios from "axios"
export default function ajax(url,data={},type="get"){
  return new Promise (function(resolve,reject){
    let promise
    if(type==="get"){
      // 准备URL query 参数数据
      let dataStr=""//数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if(dataStr!==''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf("&"))
        url=url+"?"+dataStr
      }
      // 发送get请求
      promise=axios.get(url)
    }else{
      //发送post请求
      promise=axios.post(url,data)
    }
    // return promise
    // 成功的时候调用resolve
    promise.then(response=>{
      resolve(response.data)
    })
  }).catch(error=>{
    // 失败的时候调用reject
    reject(error)
  })
}