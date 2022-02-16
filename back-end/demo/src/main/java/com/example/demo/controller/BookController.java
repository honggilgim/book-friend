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
 
import com.example.demo.mapper.BookMapper;
import com.example.demo.vo.BookVO;
import com.example.demo.vo.RequestVO;
import com.example.demo.vo.LikeVO;
 
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
    void insertRequest(@RequestBody RequestVO request) {
        bookMapper.insertRequest(request);
        System.out.println("유저 DB 저장 성공");
    }
    
    @PostMapping("/lik")
    void insertLike(@RequestBody LikeVO like) {
        bookMapper.insertLike(like);
        System.out.println("유저 DB 저장 성공");
    }
    
    @GetMapping("like/{uid}")
    public List<BookVO> likeList(@PathVariable int uid){
        System.out.println(bookMapper.bookList());
        System.out.println("찜리스트 출력 성공");
        return bookMapper.likeList(uid);
    }
        
    
    @DeleteMapping("/{bid}")
    public void deleteBook(@PathVariable int bid) {
        bookMapper.deleteBook(bid);
        System.out.println("유저 삭제, 성공적");
    }
    
}