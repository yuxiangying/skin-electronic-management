package com.skin.management.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table admin_menu
 *
 * @mbg.generated do_not_delete_during_merge
 */
@Data
public class AdminMenu implements Serializable {
    /**
     * Database Column Remarks:
     *   主键
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     * Database Column Remarks:
     *   父id
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.parent_id
     *
     * @mbg.generated
     */
    private Integer parentId;

    /**
     * Database Column Remarks:
     *   菜单编码
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.menu_code
     *
     * @mbg.generated
     */
    private String menuCode;

    /**
     * Database Column Remarks:
     *   菜单名称
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.menu_name
     *
     * @mbg.generated
     */
    private String menuName;

    /**
     * Database Column Remarks:
     *   类型(1:目录,2:菜单,3:按钮)
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.type
     *
     * @mbg.generated
     */
    private String type;

    /**
     * Database Column Remarks:
     *   菜单说明
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.description
     *
     * @mbg.generated
     */
    private String description;

    /**
     * Database Column Remarks:
     *   是否删除：0否，1是
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.is_delete
     *
     * @mbg.generated
     */
    private String isDelete;

    /**
     * Database Column Remarks:
     *   创建人工号
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.create_user
     *
     * @mbg.generated
     */
    private String createUser;

    /**
     * Database Column Remarks:
     *   创建时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.create_time
     *
     * @mbg.generated
     */
    private Date createTime;

    /**
     * Database Column Remarks:
     *   更新人工号
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.update_user
     *
     * @mbg.generated
     */
    private String updateUser;

    /**
     * Database Column Remarks:
     *   修改时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_menu.update_time
     *
     * @mbg.generated
     */
    private Date updateTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table admin_menu
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;
}