package com.skin.management.service;

import com.skin.management.entity.AdminUser;
import com.skin.management.entity.AdminUserExample;
import com.skin.management.mapper.AdminUserMapper;
import com.skin.management.utils.MD5;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Slf4j
@Service("aUserService")
public class AUserServiceImpl implements AUserService {
    @Resource
    private AdminUserMapper adminUserMapper;

    @Override
    public String registerUser(AdminUser adminUser) {
        try {
            if(adminUser!=null){
                MD5.encrypt(adminUser);
                adminUserMapper.insertSelective(adminUser);
                return "sucess";
            }else {
                return "fail";
            }
        }catch (Exception e){
            log.error("AUserServiceImpl registerUser exception:{}",e.getMessage());
            return "fail";
        }
    }

    @Override
    public AdminUser loginUser(String userName, String password) {
        try {
            AdminUser loginUser = adminUserMapper.selectByName(userName);
            if(loginUser==null){
                return null;
            }
            password = MD5.deciphering(password,loginUser);
            if(loginUser.getPassword().equals(password)){
                loginUser.setPassword(null);
                return loginUser;
            }
        }catch (Exception e){
            log.error("AUserServiceImpl loginUser exception:{}",e.getMessage());
            return null;
        }
        return null;
    }
}
