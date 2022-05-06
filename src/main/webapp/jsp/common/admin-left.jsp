<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="col-lg-3 col-md-4 col-sm-12" style="min-height: 800px;">
    <div class="property_dashboard_navbar">
        <div class="dash_user_menues">
            <ul>
                <li <c:if test="${tab == 'my-profile'}"> class="active"</c:if>>
                    <a href="/admin/profile" style="color: white;">
                        <i class="ti-user"></i>个人信息
                    </a>
                </li>
                <c:if test="${sessionScope.user.role == 'customer'}">
                    <li <c:if test="${tab == 'home'}"> class="active"</c:if>>
                        <a href="/admin/home" style="color: white;">
                            <i class="ti-user"></i>我的家
                        </a>
                    </li>
                </c:if>
                <c:if test="${sessionScope.user.role == 'admin' || sessionScope.user.role == 'owner'}">
                    <li <c:if test="${tab == 'house-list'}"> class="active"</c:if>>
                        <a href="/admin/house" style="color: white;">
                            <i class="ti-layers"></i>房子管理
                        </a>
                    </li>
                </c:if>

                <li <c:if test="${tab == 'order-list'}"> class="active"</c:if>>
                    <a href="/admin/order" style="color: white;">
                        <i class="ti-gift"></i>订单管理
                    </a>
                </li>

                <li <c:if test="${tab == 'mark-list'}"> class="active"</c:if>>
                    <a href="/admin/mark" style="color: white;">
                        <i class="ti-bookmark"></i>我的收藏
                    </a>
                </li>
                <c:if test="${sessionScope.user.role == 'admin'}">
                    <li <c:if test="${tab == 'news-list'}"> class="active"</c:if>>
                        <a href="/admin/news" style="color: white;">
                            <i class="ti-new-window"></i>新闻资讯管理
                        </a>
                    </li>
                </c:if>
                <c:if test="${sessionScope.user.role == 'admin'}">
                    <li <c:if test="${tab == 'feedback-list'}"> class="active"</c:if>>
                        <a href="/admin/feedback" style="color: white;">
                            <i class="ti-alert"></i>反馈管理
                        </a>
                    </li>
                </c:if>
                <c:if test="${sessionScope.user.role != 'admin'}">
                    <li <c:if test="${tab == 'feedback-list'}"> class="active"</c:if>>
                        <a href="/admin/feedback" style="color: white;">
                            <i class="ti-alert"></i>我的反馈
                        </a>
                    </li>
                </c:if>
                <c:if test="${sessionScope.user.role == 'admin'}">
                    <li <c:if test="${tab == 'user-list'}"> class="active"</c:if>>
                        <a href="/admin/user" style="color: white;">
                            <i class="ti-user"></i>用户管理
                        </a>
                    </li>
                </c:if>
                <li <c:if test="${tab == 'password'}"> class="active"</c:if>>
                    <a href="/admin/password" style="color: white;">
                        <i class="ti-unlock"></i>密码修改
                    </a>
                </li>
                <li>
                    <a href="/login/logout" style="color: white;">
                        <i class="ti-power-off"></i>退出登录
                    </a>
                </li>
            </ul>
        </div>

    </div>
</div>
