/*注册提交*/
function submitRegister(){
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/register/submit", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:$("#registerForm").serialize(),//获取registerForm里面的数据并提交
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新页面
                window.location.reload();
            }
        }
    });

}

/*登录提交*/
function submitLogin(){
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/login/submit", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:$("#loginForm").serialize(),//获取loginForm里面的数据并提交
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新页面
                window.location.reload();
            }
        }
    });

}

/*保存房子信息*/
function submitHouse(){
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/house/publish/submit", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:$("#houseForm").serialize(),//获取houseForm里面的数据并提交
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，退到列表页面
                window.location.href="/admin/house";
            }
        }
    });

}

/*下架房子*/
function downHouse(id) {
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/house/down", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:{
            "id": id
        },
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}


/*上架房子*/
function upHouse(id) {
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/house/up", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:{
            "id": id
        },
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}


/*房子审核通过*/
function checkPassHouse(id) {
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/house/checkPass", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:{
            "id": id
        },
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}



/*房子审核驳回*/
function checkRejectHouse(id) {
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/house/checkReject", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:{
            "id": id
        },
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}



/*删除房子*/
function deleteHouse(id) {
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/house/delete", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:{
            "id": id
        },
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}



/*收藏房子提交*/
function submitMark(id) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/mark/submit", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            "houseId": id
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            if (data.msg == "请先登录") {
                window.location.href = "/";
            }
        }
    });
}

/*创建订单*/
function createOrder() {
    var houseId = $("#houseId").val();
    var endDate = $("#endDate").val();
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/order/create", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            "houseId": houseId,
            "endDate": endDate
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            if (data.msg == "请先登录") {
                window.location.href = "/";
            }
            //如果创建成功，跳转到签订合同页面
            if (data.code == 1){
                window.location.href = "/order/agreement/view?orderId="+data.result;
            }

        }
    });
}


/*完成签订合同*/
function confirmAgreement(orderId) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/order/agreement/submit", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            "orderId": orderId
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            if (data.msg == "请先登录") {
                window.location.href = "/";
            }
            //如果创建成功，跳转到支付页面
            if (data.code == 1){
                window.location.href = "/order/pay?orderId="+data.result;
            }
        }
    });
}

/*支付*/
function  submitPay(orderId) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/order/pay/submit", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            "orderId": orderId
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            if (data.msg == "请先登录") {
                window.location.href = "/";
            }
            //如果支付成功，跳转到我的家
            if (data.code == 1){
                window.location.href = "/admin/home";
            }
        }
    });
}


/*发送邮件联系房东*/
function submitContact() {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/house/contact", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: $('#contactForm').serialize(),
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            if (data.msg == "请先登录") {
                window.location.href = "/";
            }
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}

/*个人信息保存*/
function  submitProfile() {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/profile/submit", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: $('#profileForm').serialize(),
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}

/*取消订单*/
function CancelOrder(orderId) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/order/cancel", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'orderId': orderId
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}




/*申请退租*/
function endOrder(orderId) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/order/end", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'orderId': orderId
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}

/*退租申请通过*/
function endOrderPass(orderId) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/order/endPass", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'orderId': orderId
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}


/*退租申请通过*/
function endOrderReject(orderId) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/order/endReject", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'orderId': orderId
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}

/*取消收藏*/
function cancelMark(id) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/mark/cancel", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'id': id
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}


/*删除新闻*/
function deleteNews(id) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/news/delete", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'id': id
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}


/*保存新闻资讯*/
function submitNews(){
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/news/publish/submit", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:$("#newsForm").serialize(),//获取houseForm里面的数据并提交
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果发送成功，刷新当前页面
                window.location.href="/admin/news";
            }
        }
    });
}


/*提交用户反馈*/
function submitFeedback(){
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/feedback/submit", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:$("#feedbackForm").serialize(),//获取houseForm里面的数据并提交
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果发送成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}


/*给回复提交的id赋值*/
function showReplyModal(id) {
    $("#feedbackId").val(id);
}


/*提交用户反馈信息*/
function feedbackReplySubmit() {
    $.ajax({
        type:"POST",//提交返回方式POST
        url:"/admin/feedback/reply/submit", //地址
        async:false,//看是不是异步，false的话就是同步提交
        data:$("#feedbackForm").serialize(),//获取feedbackForm里面的数据并提交
        //成功的话执行函数
        success:function (data) {
            alert(data.msg);
            if(data.code == 1){    //如果发送成功，刷新当前页面
                window.location.reload();
            }
        }
    });
}



/*删除反馈*/
function deleteFeedback(id) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/feedback/delete", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'id': id
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}


/*禁用用户*/
function disableUser(id) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/user/disable", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'id': id
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}

/*启用用户*/
function enableUser(id) {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/user/enable", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data: {
            'id': id
        },
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，刷新当前页面
            if (data.code == 1){
                window.location.reload();
            }
        }
    });
}



/*更新密码*/
function submitPassword() {
    $.ajax({
        type: "POST",//提交返回方式POST
        url: "/admin/password/submit", //地址
        async: false,//看是不是异步，false的话就是同步提交
        data:$("#passwordForm").serialize(),//获取houseForm里面的数据并提交
        //成功的话执行函数
        success: function (data) {
            alert(data.msg);
            //如果发送成功，返回
            if (data.code == 1){
                window.location.href = "/login/logout";
            }
        }
    });
}