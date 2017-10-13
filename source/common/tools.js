
   export function  filterhtml(htmlstr){
       var result=htmlstr.replace(/<\/?.+?>/g,"");
       result=result.replace(/ /g,"");
       result = result.replace(/[ ]/g, "");    //去掉空格
       result = result.replace(/[\r\n]/g, ""); //去掉回车换行
       return  result;
   }


   export function  cutstr(str,len){
       return str.substr(0,len);
   }

   export function   formatDateTime(str) {
       var date=new Date(str);
       var y = date.getFullYear();
       var m = date.getMonth() + 1;
       m = m < 10 ? ('0' + m) : m;
       var d = date.getDate();
       d = d < 10 ? ('0' + d) : d;
       var h = date.getHours();
       var minute = date.getMinutes();
       minute = minute < 10 ? ('0' + minute) : minute;
       return y + '-' + m + '-' + d+' '+h+':'+minute;
   }

   export  function createhtml(content){
       let head="<!DOCTYPE HTML><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\"><style>body{line-height:26px;color:#2f2f2f}blockquote{background-color:#f5f5f5;border:1px solid #ccc;padding:5px;overflow:auto;margin:5px 0;line-height:20px;font-style:oblique}div>.sourceCode{background-color:#f5f5f5;font-family:Courier New!important;border:1px solid #ccc;padding:5px;overflow:auto;margin:5px 0;line-height:22px}table td{border:1px solid silver;border-collapse:collapse;word-break:break-word}table{border:1px solid silver;border-collapse:collapse;word-break:break-word}table thead tr th{border:1px solid silver;border-collapse:collapse}img{width:100%}</style></head><body>";
       let end="</body></html>";
       return head+content+end;
   }