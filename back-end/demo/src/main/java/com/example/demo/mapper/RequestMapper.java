package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.demo.vo.RequestlistVO;
import com.example.demo.vo.UserVO;
import com.example.demo.vo.borrowListVO;

@Mapper
public interface RequestMapper {
    List<RequestlistVO> requestList(int uid);
    void insertborrow(borrowListVO borrow);
    void deleteRequest(int rqid);
    UserVO fetchUserByID(String username);
}