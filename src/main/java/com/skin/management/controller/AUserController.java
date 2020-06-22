package com.skin.management.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.skin.management.constant.Constants;
import com.skin.management.entity.AdminUser;
import com.skin.management.service.AUserService;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/manage/aUser")
public class AUserController {

    @Resource
    private AUserService aUserService;

    /**
     * 获得当前用户
     * @return
     */
    @GetMapping("/getUser")
    public AdminUser getUser(){
        return aUserService.getUser();
    }

    @GetMapping("/selectAll")
    public PageInfo selectAllCustomer(String pageNum, AdminUser adminUser){
        int num=1;
        if (pageNum!=null){
            num= Integer.parseInt(pageNum);
        }
        PageHelper.startPage(num, Constants.PAGESIZE);
        adminUser.setIsDelete("0");
        List<AdminUser> adminUserList = aUserService.selectAll(adminUser);
        PageInfo<AdminUser> pageInfo = new PageInfo<>(adminUserList);
        return pageInfo;
    }

    //当前端页面传过来的的String类型的日期与后台实体类的Date类型不匹配时，需要加上该方法
    @InitBinder
    public void init(WebDataBinder binder) {
        binder.registerCustomEditor(Date.class, new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true));
    }
}
