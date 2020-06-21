package com.skin.management.controller;

import com.skin.management.entity.AdminUser;
import com.skin.management.service.AUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {
    @Resource
    private AUserService aUserService;


    @RequestMapping({"/login","/"})
    public String login() {
        return "login";
    }

    @PostMapping("/login/verify")
    public ModelAndView loginVerify(String username, String password) {
        ModelAndView modelAndView = new ModelAndView();
        AdminUser loginUser =aUserService.loginUser(username,password);
        if (loginUser!=null) {
            ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            HttpSession httpSession = servletRequestAttributes.getRequest().getSession();
            httpSession.setAttribute("userName", loginUser.getUserName());
            modelAndView.addObject("adminUser",loginUser);
            modelAndView.setViewName("index");
        } else {
            modelAndView.setViewName("login");
            modelAndView.addObject("msg", "用户名或密码错误!");
        }
        return  modelAndView;
    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpSession httpSession = servletRequestAttributes.getRequest().getSession();
        httpSession.removeAttribute("userName");
        return "login";
    }
}
