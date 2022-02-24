package com.example.demo.vo;

import lombok.Data;
import java.sql.Timestamp;

@Data
public class AlarmVO {

    int aid;
    int uid;
    int bid;
    String content;
    String time;

}  