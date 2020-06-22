package com.skin.management.service;

import com.skin.management.entity.AdminUser;

import java.util.List;
import java.util.Map;

/**
 * 后台管理-用户服务层
 */
public interface AUserService {
    //注册
    String registerUser(AdminUser adminUser);
    //登录校验
    AdminUser loginUser(String userName,String password);

    /**
     * 获取当前登录用户
     * @return
     */
    AdminUser getUser();

    List<AdminUser> selectAll(AdminUser adminUser);
}
