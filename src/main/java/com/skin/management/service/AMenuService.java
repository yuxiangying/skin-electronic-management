package com.skin.management.service;

import com.skin.management.entity.AdminMenu;

import java.util.List;

public interface AMenuService {

    /**
     * 根据角色Id查询菜单
     * @param roleIdList
     * @return
     */
    List<AdminMenu> selectByRoleIds(List<Integer> roleIdList,String level);
}
