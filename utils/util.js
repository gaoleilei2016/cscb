//timestamp   时间戳
//option      格式（年月日  就输入YY-MM-DD   时分  就输入 hh-mm）
//功能如下注释   ↓↓↓↓
function formatDate(timestamp, option) {
  var date = new Date(timestamp);
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = function () {
    return date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  }
  var minute = function () {
    return date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  }
  var second = function () {
    return date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  }
  //获取 年月日
  if (option == 'YY-MM-DD hh-mm') return " " + year + "-" + month + "-" + day +" " + hour() + ":" + minute();
  //获取 年月日
  if (option == 'YY-MM-DD') return " " + year + "-" + month + "-" + day;
  //获取年月
  if (option == 'YY-MM') return " " + year + "-" + month;
  //获取年
  if (option == 'YY') return " " + year;
  //获取月
  if (option == 'MM') return  " " + month;
  //获取日
  if (option == 'DD') return " " +  day;
  //获取昨天
  if (option == 'yesterday') return " " + day - 1;
  //获取时分秒
  if (option == 'hh-mm-ss') return " " + hour() + ":" + minute() + ":" + second();
  //获取时分
  if (option == 'hh-mm') return " " + hour() + ":" + minute();
  //获取分秒
  if (option == 'mm-ss') return minute() + ":" + second();
  //获取分
  if (option == 'mm')  return minute();
  //获取秒
  if (option == 'ss') return second();
  //默认时分秒年月日
  return year + '-' + month + '-' + day + ' ' + hour() + ':' + minute() + ":" + second();
}
module.exports = { formatDate }
