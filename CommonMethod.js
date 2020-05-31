function requestMethod(par1,par2,par3,callback) {
    //第一步 创建一个请求对象(负责要数据)
    var xhr = new XMLHttpRequest();

    //第二步：建立连接（找到那个服务器要数据）
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
    //设置头信息，告诉服务器让信息以表单方式传递
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

    //第三步：向服务端发送请求

    xhr.send(par3);

    //第四步：接收服务端返回的数据数据

    xhr.onreadystatechange = function () {
        // if(xhr.readyState == 4 && xhr.status == 200){
        if(xhr.readyState==4&&xhr.status==200){
            var responseData = JSON.parse(xhr.responseText);
            var returnStr = responseData.data;

            callback(returnStr);


        }

    }
}