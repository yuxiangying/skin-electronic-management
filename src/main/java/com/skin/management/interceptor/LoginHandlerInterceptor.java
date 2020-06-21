package com.skin.management.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoginHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object user = request.getSession().getAttribute("userName");
//        System.out.println("preHandle----" + user + " ::: " + request.getRequestURL());
        if (user == null) {
            //request.setAttribute("msg", "无权限请先登录");// 获取request返回页面到登录页request.getRequestDispatcher("/index.html").forward(request, response);
           // request.getRequestDispatcher(request.getContextPath() + "/login").forward(request,response);
            response.sendRedirect(request.getContextPath() + "/login");
            return false;
        }
        return true;
    }
}
