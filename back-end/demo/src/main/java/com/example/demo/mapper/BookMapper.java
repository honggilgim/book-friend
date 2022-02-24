package com.example.demo.mapper;

import com.example.demo.vo.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface BookMapper {


	List<BookVO> likeList(int uid);
	List<BookVO> mybookList(int uid);
    List<BookVO> bookList();
    BookVO fetchBookByID(int bid);
    void updateBook(BookVO book);
    void insertRequest(inRequestVO request);
    void insertLike(inLikeVO like);
    void deleteBook(int bid);
    UserVO fetchUserByID(int uid);
    Integer fetchUidByEmail(String username);
    List<Integer> GetUIDbyName(int id);
    void updateUser(UserVO user);
    List<borrowListVO> borrowList(int uid);
    List<StringborrowListVO> Listinfo(int uid);
    List<StringborrowListVO> Listedinfo(int uid);
    void minusgrade(minusPrintVO minus);
    void insertBook(BookVO book);
    void insertReport(ReportVO report);
    int fetchUserById2(String Username);
    void deleteborrowlist(int gtid);
    BookVO findBid();

}