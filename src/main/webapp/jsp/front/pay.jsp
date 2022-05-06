<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<link rel="stylesheet" href="/assets/css/pay.css">

<section class="gray-simple">
    <div class="container" style="">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="mod-ct">
                    <div class="order">
                        ${order.house.title}
                    </div>
                    <div class="amount" id="money">
                        ￥${order.totalAmount}
                    </div>
                    <div style="position: relative;display: inline-block">
                        <img src="${pageContext.request.contextPath}/assets/img/alipay_qrcode.png" width="200"
                             height="200" style="display: block;margin: 20px;">
                    </div>
                    <div class="time-item">
                        <h1>支付完成后，将跳转订单列表页面</h1>
                    </div>
                    <div class="tip">
                        <div class="ico-scan-ali"></div>
                        <div class="tip-text">
                            打开支付宝扫一扫
                        </div>
                        <div class="tip-text">
                            <button onclick="submitPay(${order.id})" class="btn btn-small btn-success" style="color: white;" title="支付成功">支付成功</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<%@ include file="../common/footer.jsp" %>
<script>

</script>
</body>
</html>

