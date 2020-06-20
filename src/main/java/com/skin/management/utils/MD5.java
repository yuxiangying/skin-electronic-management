package com.skin.management.utils;

import com.skin.management.entity.AdminUser;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.codec.binary.Base64;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

@Slf4j
public class MD5 {
    private static MessageDigest md5;//md5加密对象
    private static Base64 base64;//加密编码对象
    private static final int saltLen = 15;//盐长度
    private static String salt = "";//盐

    static {
        try {
            md5 = MessageDigest.getInstance("MD5");//获取MD5加密对象
            base64 = new Base64();//获取加密编码对象
        } catch (NoSuchAlgorithmException e) {
            log.error("MD5 static exception:{}",e.getMessage());
        }
    }

    /*
     * 对password进行MD5加盐加密，返回加密过的password,并存储盐salt
     */
    public static void encrypt(AdminUser adminUser){
        Random random = new Random();
        String str = "qwertyuiopasdfghjklzxcvbnm1234567890+-=*;',.";
        for(int i=0;i<saltLen;i++){
            salt += String.valueOf(str.charAt(random.nextInt(str.length())));//从str中随机获取字符生成长度为saltLen的加密盐
        }
        String passwordSalt = adminUser.getPassword() + salt;//将密码和盐拼接到一起
        System.out.println(passwordSalt);
        try {
            md5.reset();//初始化
            System.out.println(passwordSalt.getBytes("UTF-8"));
            md5.update(passwordSalt.getBytes("UTF-8"));//将加盐密码传给消息摘要对象
            byte[] bys=md5.digest();//创建消息摘要对象
            byte[] lastPassword=base64.encode(bys);//进行加密
            adminUser.setPassword(new String(lastPassword));
            adminUser.setSalt(salt);
        } catch (UnsupportedEncodingException e) {
            log.error("MD5 encrypt exception:{}",e.getMessage());
        }
    }

    /*
     * 用于登录时密码验证
     * 根据用户输入的未加密密码和用户的盐进行解密（实际上同样是MD5加密，只不过加密结果用来判断与数据库中的加密密码是否相同）
     * 返回解密结果
     */
    public static String deciphering(String password,AdminUser adminUser){
        String passwordSalt = password + adminUser.getSalt();//将密码和盐拼接到一起
        System.out.println(passwordSalt);
        String lastPassword = "";
        try {
            md5.reset();//初始化
            System.out.println(passwordSalt.getBytes("UTF-8"));
            md5.update(passwordSalt.getBytes("UTF-8"));//将加盐密码传给消息摘要对象
            byte[] bys=md5.digest();//创建消息摘要对象
            byte[] lastPasswordStr=base64.encode(bys);//进行加密
            lastPassword = new String(lastPasswordStr);
        } catch (UnsupportedEncodingException e) {
            log.error("MD5 deciphering exception:{}",e.getMessage());
        }
        return lastPassword;
    }

}
