package com.skin.management.controller;

import com.skin.management.entity.AdminUser;
import com.skin.management.service.AUserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
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
}
