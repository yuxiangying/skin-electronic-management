package com.skin.management.mapper;

import com.skin.management.entity.AdminRoleMenu;
import com.skin.management.entity.AdminRoleMenuExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AdminRoleMenuMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    long countByExample(AdminRoleMenuExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int deleteByExample(AdminRoleMenuExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int insert(AdminRoleMenu record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int insertSelective(AdminRoleMenu record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    List<AdminRoleMenu> selectByExample(AdminRoleMenuExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    AdminRoleMenu selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int updateByExampleSelective(@Param("record") AdminRoleMenu record, @Param("example") AdminRoleMenuExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int updateByExample(@Param("record") AdminRoleMenu record, @Param("example") AdminRoleMenuExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(AdminRoleMenu record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table admin_role_menu
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(AdminRoleMenu record);
}