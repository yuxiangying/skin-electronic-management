package com.skin.management.service.impl;

import com.skin.management.entity.AdminMenu;
import com.skin.management.mapper.AdminMenuMapper;
import com.skin.management.service.AMenuService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service("aMenuService")
public class AMenuServiceImpl implements AMenuService {
    @Resource
    private AdminMenuMapper adminMenuMapper;

    @Override
    public List<AdminMenu> selectByRoleIds(List<Integer> roleIdList,String level) {
        return adminMenuMapper.selectByRoleIds(roleIdList,level);
    }
}
