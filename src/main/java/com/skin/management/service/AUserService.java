package com.skin.management.service;

import com.skin.management.entity.AdminUser;

/**
 * 后台管理-用户服务层
 */
public interface AUserService {
    //注册
    String registerUser(AdminUser adminUser);
    //登录校验
    AdminUser loginUser(String userName,String password);
}
