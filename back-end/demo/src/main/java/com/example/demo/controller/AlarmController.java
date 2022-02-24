package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import com.example.demo.mapper.AlarmMapper;
import com.example.demo.vo.BookVO;
import com.example.demo.vo.RequestVO;
import com.example.demo.vo.LikeVO;
import com.example.demo.vo.AlarmVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/books")
public class AlarmController {

    @Autowired
    AlarmMapper alarmMapper;


    @GetMapping("/alarm/list/{uid}")
    public List<AlarmVO> alarmList(@PathVariable int uid){
        System.out.println(alarmMapper.alarmList(uid));
        System.out.println("알람 출력 성공");
        return alarmMapper.alarmList(uid);
    }

    @PostMapping("/alarm")
    void insertAlarm(@RequestBody AlarmVO alarm) {
        alarmMapper.insertAlarm(alarm);
        System.out.println("알람 DB 저장 성공");
    }

    @DeleteMapping("/alarm/{aid}")
    public void deleteAlarm(@PathVariable int aid) {
        alarmMapper.deleteAlarm(aid);
        System.out.println("알람 삭제, 성공적");
    }



}