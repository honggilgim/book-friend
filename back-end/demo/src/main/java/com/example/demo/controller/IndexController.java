package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.IndexMapper;
import com.example.demo.vo.IndexVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/books")
public class IndexController {

    @Autowired
    IndexMapper indexMapper;

    @GetMapping("/index/borrowedList/{guid}")
    public List<IndexVO> borrowed_indexList(@PathVariable int guid){
        System.out.println(indexMapper.borrowed_indexList(guid));
        System.out.println("빌려본 목록 출력 완료");
        return indexMapper.borrowed_indexList(guid);
    } // 빌려온 책 출력

    @GetMapping("/index/borrowList/{tuid}")
    public List<IndexVO> take_indexList(@PathVariable int tuid) {
       // System.out.println(bookMapper.fetchBookByID(bid));
        return indexMapper.take_indexList(tuid);
    } // 빌려준 책 출력

    @DeleteMapping("/index/borrowList/remove/{gtid}")
    public void deleteborrowlist(@PathVariable int gtid) {
        indexMapper.deleteborrowlist(gtid);
        System.out.println("빌린 목록 삭제 성공");
    } // 빌린 책 목록에서 삭제

    @DeleteMapping("/index/borrowedList/{gtid}")
    public void deletetakelist(@PathVariable int gtid) {
        indexMapper.deletetakelist(gtid);
        System.out.println("빌려준 목록 삭제 성공");
    } // 빌려준 책 목록에서 삭제

}