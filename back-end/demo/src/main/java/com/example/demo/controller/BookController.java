package com.example.demo.controller;

import com.example.demo.mapper.BookMapper;
import com.example.demo.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
 
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/books")
public class BookController {
 
    @Autowired
    BookMapper bookMapper;
    
    @GetMapping
    public List<BookVO> bookList(){
        System.out.println(bookMapper.bookList());
        System.out.println("유저리스트 출력 성공");
        return bookMapper.bookList();
    }
    
    @GetMapping("/{bid}")
    public BookVO fetchBookByID(@PathVariable int bid) {
        System.out.println(bookMapper.fetchBookByID(bid));
        BookVO fetchBook = bookMapper.fetchBookByID(bid);
        return fetchBook;
    }
    
    @GetMapping("mybook/{uid}")
    public List<BookVO> mybookList(@PathVariable int uid){
        System.out.println(bookMapper.bookList());
        System.out.println("찜리스트 출력 성공");
        return bookMapper.mybookList(uid);
    }
    
    @PostMapping("/req")
    void insertRequest(@RequestBody inRequestVO request) {
        bookMapper.insertRequest(request);
        System.out.println("유저 DB 저장 성공");
    }
    
    @PostMapping("/lik")
    void insertLike(@RequestBody inLikeVO like) {
        System.out.println(like);
        bookMapper.insertLike(like);
        System.out.println("유저 DB 저장 성공");
    }
    
    @GetMapping("like/{uid}")
    public List<BookVO> likeList(@PathVariable int uid){
        System.out.println(bookMapper.bookList());
        System.out.println("찜리스트 출력 성공");
        return bookMapper.likeList(uid);
    }

    @GetMapping("/userinfo/{uid}")
    public UserVO fetchUserByID(@PathVariable int uid){
        System.out.println(bookMapper.fetchUserByID(uid));
        return bookMapper.fetchUserByID(uid);
    }

    @GetMapping("/useridinfo/{username}")
    public Integer fetchUidByEmail(@PathVariable String username){
        return bookMapper.fetchUidByEmail(username);
    }

    @GetMapping("/useridbyname/{username}")
    public List<Integer> GetUIDbyName(@PathVariable int id){
        return bookMapper.GetUIDbyName(id);
    }

    @PutMapping("/useredit/{id}")
    public void updateUser(@PathVariable int id, @RequestBody UserVO user) {
       //System.out.println("업데이트유저 => " + user);
        UserVO updateUser = user;
        //System.out.println("업데이트유저 => " + updateUser);

        updateUser.setAddr(user.getAddr());
        updateUser.setEmail(user.getEmail());
        updateUser.setName(user.getName());
        System.out.println(updateUser);
        bookMapper.updateUser(updateUser);
    }

    @GetMapping("/borrowlist/{uid}")
    public List<borrowListVO> borrowList(@PathVariable int uid){
        //int uid =  bookMapper.fetchUidByEmail(username);
        return bookMapper.borrowList(uid);
    }

    @GetMapping("/Listinfo/{uid}")
    public List<StringborrowListVO> Listinfo(@PathVariable int uid){
        //int uid =  bookMapper.fetchUidByEmail(username);
        System.out.println(bookMapper.Listinfo(uid));
        return bookMapper.Listinfo(uid);
    }

    @GetMapping("/Listedinfo/{uid}")
    public List<StringborrowListVO> Listedinfo(@PathVariable int uid){
       // int uid =  bookMapper.fetchUidByEmail(uid);
        return bookMapper.Listedinfo(uid);
    }

    @PostMapping("/minusgrade/{username}/{value}")
    void minusgrade(@PathVariable String username, @PathVariable int value) {
        minusPrintVO minus = new minusPrintVO();
        minus.setUserName(username);
        minus.setValue(value);
        bookMapper.minusgrade(minus);
        System.out.println("등급 차감.");
    }

    @DeleteMapping("/{bid}")
    public void deleteBook(@PathVariable int bid) {
        bookMapper.deleteBook(bid);
        System.out.println("책삭제");
    }

    @DeleteMapping("/deleteborrowList/{gtid}")
    public void deletebrrowlist(@PathVariable int gtid) {
        bookMapper.deleteborrowlist(gtid);
        System.out.println("borrowlist 삭제");
    }

    @PostMapping("/book")
    void insertBook(@RequestBody BookVO book) {
        bookMapper.insertBook(book);
        System.out.println("책 DB 저장 성공");
    }

    @PostMapping("/report")
    void insertBook(@RequestBody ReportVO report) {
        bookMapper.insertReport(report);
        System.out.println("신고 DB 저장 성공");
    }

    @GetMapping("/fetchUserById2/{username}")
    int fetchUserById2(@PathVariable String username) {
        System.out.println("userId fetch "+bookMapper.fetchUserById2(username));
        return bookMapper.fetchUserById2(username);

    }
    @GetMapping("/findBid")
    BookVO findBid() {
        System.out.println("findBid() " + bookMapper.findBid());
        return bookMapper.findBid();

    }



}