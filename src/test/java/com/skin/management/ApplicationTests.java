package com.skin.management;

import com.skin.management.entity.AdminUser;
import com.skin.management.service.AUserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {
	@Resource
	private AUserService aUserService;

	@Test
	public void contextLoads() {
		AdminUser adminUser = new AdminUser();
		adminUser.setUserName("admin");
		adminUser.setPassword("123456");
		String result = aUserService.registerUser(adminUser);
		System.out.println(result);
	}

}
