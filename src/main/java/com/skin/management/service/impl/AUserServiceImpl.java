package com.skin.management.service.impl;

import com.skin.management.entity.AdminUser;
import com.skin.management.entity.AdminUserExample;
import com.skin.management.mapper.AdminUserMapper;
import com.skin.management.service.AUserService;
import com.skin.management.utils.MD5;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

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
            AdminUser currUser = adminUserMapper.selectByName(userName);
            if(currUser==null){
                return null;
            }
            password = MD5.deciphering(password,currUser);
            if(currUser.getPassword().equals(password)){
                currUser.setPassword(null);
                return currUser;
            }
        }catch (Exception e){
            log.error("AUserServiceImpl loginUser exception:{}",e.getMessage());
            return null;
        }
        return null;
    }

    @Override
    public AdminUser getUser() {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpSession httpSession = servletRequestAttributes.getRequest().getSession();
        String userName = (String)httpSession.getAttribute("userName");
        if(!StringUtils.isEmpty(userName)){
            AdminUser currUser = adminUserMapper.selectByName(userName);
            currUser.setPassword(null);
            return currUser;
        }
        return null;
    }
}
