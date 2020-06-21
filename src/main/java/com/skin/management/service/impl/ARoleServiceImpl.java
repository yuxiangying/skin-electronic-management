package com.skin.management.service.impl;

import com.skin.management.entity.AdminRole;
import com.skin.management.mapper.AdminRoleMapper;
import com.skin.management.service.ARoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service("aRoleService")
public class ARoleServiceImpl implements ARoleService {
    @Resource
    private AdminRoleMapper adminRoleMapper;

    @Override
    public List<AdminRole> selectByUserName(String userName) {
        return adminRoleMapper.selectByUserName(userName);
    }
}
