package com.skin.management.service;


import com.skin.management.entity.AdminRole;

import java.util.List;

public interface ARoleService {

    /**
     * 根据账号查询角色
     * @param userName
     * @return
     */
    List<AdminRole> selectByUserName(String userName);
}
