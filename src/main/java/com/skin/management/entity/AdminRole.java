package com.skin.management.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table admin_role
 *
 * @mbg.generated do_not_delete_during_merge
 */
@Data
public class AdminRole implements Serializable {
    /**
     * Database Column Remarks:
     *   主键
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     * Database Column Remarks:
     *   角色编码
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.role_code
     *
     * @mbg.generated
     */
    private String roleCode;

    /**
     * Database Column Remarks:
     *   角色名称
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.role_name
     *
     * @mbg.generated
     */
    private String roleName;

    /**
     * Database Column Remarks:
     *   角色描述
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.description
     *
     * @mbg.generated
     */
    private String description;

    /**
     * Database Column Remarks:
     *   是否删除：0否，1是
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.is_delete
     *
     * @mbg.generated
     */
    private String isDelete;

    /**
     * Database Column Remarks:
     *   创建人工号
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.create_user
     *
     * @mbg.generated
     */
    private String createUser;

    /**
     * Database Column Remarks:
     *   创建时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.create_time
     *
     * @mbg.generated
     */
    private Date createTime;

    /**
     * Database Column Remarks:
     *   更新人工号
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.update_user
     *
     * @mbg.generated
     */
    private String updateUser;

    /**
     * Database Column Remarks:
     *   修改时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_role.update_time
     *
     * @mbg.generated
     */
    private Date updateTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table admin_role
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;
}