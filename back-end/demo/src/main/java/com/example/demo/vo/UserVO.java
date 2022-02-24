package com.example.demo.vo;

import lombok.Data;

@Data
public class UserVO {
    int id;
    String created_at;
    String updated_at;
    String addr;
    String email;
    String name;
    String password;
    String username;
    int total_point;
    int grade;
}
