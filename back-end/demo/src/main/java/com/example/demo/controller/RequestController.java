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

import com.example.demo.mapper.RequestMapper;
import com.example.demo.vo.BookVO;
import com.example.demo.vo.RequestVO;
import com.example.demo.vo.RequestlistVO;
import com.example.demo.vo.UserVO;
import com.example.demo.vo.AlarmVO;
import com.example.demo.vo.borrowListVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/books")
public class RequestController {

    @Autowired
    RequestMapper requestMapper;


    @GetMapping("/request/list/{uid}")
    public List<RequestlistVO> requestList(@PathVariable int uid){
        System.out.println(requestMapper.requestList(uid));
        System.out.println("요청 출력 성공");
        return requestMapper.requestList(uid);
    }

    @PostMapping("/borrow")
    void insertborrow(@RequestBody borrowListVO borrow) {
        requestMapper.insertborrow(borrow);
        System.out.println("빌리기 DB 저장 성공");
    }

    @DeleteMapping("/request/{rqid}")
    public void deleteRequest(@PathVariable int rqid) {
        requestMapper.deleteRequest(rqid);
        System.out.println("요청 삭제, 성공적");
    }

    @GetMapping("/user/{username}")
    public UserVO fetchUserByID(@PathVariable String username) {

        System.out.println(requestMapper.fetchUserByID(username));
        UserVO fetchUser = requestMapper.fetchUserByID(username);
        return fetchUser;
    }

}