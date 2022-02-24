package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.AlarmVO;
@Mapper
public interface AlarmMapper {
    List<AlarmVO> alarmList(int uid);
    AlarmVO fetchAlarmByID(int aid);
    void insertAlarm(AlarmVO alarm);
    void deleteAlarm(int aid);
}