package com.skin.management.controller;


import com.skin.management.entity.Department;
import com.skin.management.entity.Employee;
import com.skin.management.mapper.DepartmentMapper;
import com.skin.management.mapper.EmployeeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeptController {

    @Autowired
    DepartmentMapper departmentMapper;

    @Autowired
    EmployeeMapper employeeMapper;


    @GetMapping("/dept/{id}")
    public Department getDepartment(@PathVariable("id") Integer id){
        return departmentMapper.selectByPrimaryKey(id);
    }

    @GetMapping("/dept")
    public Department insertDept(Department department){
        departmentMapper.insert(department);
        return department;
    }

    @GetMapping("/emp/{id}")
    public Employee getEmp(@PathVariable("id") Integer id){
       return employeeMapper.selectByPrimaryKey(id);
    }


}
