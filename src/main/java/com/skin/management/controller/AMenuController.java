package com.skin.management.controller;

import com.skin.management.entity.AdminMenu;
import com.skin.management.entity.AdminRole;
import com.skin.management.service.AMenuService;
import com.skin.management.service.ARoleService;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/manage/aMenu")
public class AMenuController {
    @Resource
    private ARoleService aRoleService;
    @Resource
    private AMenuService aMenuService;

    @GetMapping("/roleLeftMenus")
    public List<AdminMenu> roleLeftMenus(String level){
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpSession httpSession = servletRequestAttributes.getRequest().getSession();
        String userName = (String)httpSession.getAttribute("userName");
        if(!StringUtils.isEmpty(userName)){
            List<AdminRole> roleList = aRoleService.selectByUserName(userName);
            if(!CollectionUtils.isEmpty(roleList)){
                List<Integer> roleIdList = new ArrayList<>();
                for(AdminRole role : roleList){
                    roleIdList.add(role.getId());
                }
                List<AdminMenu> result = aMenuService.selectByRoleIds(roleIdList,level);
                return result;
            }
        }
        return new ArrayList<AdminMenu>();
    }
}
