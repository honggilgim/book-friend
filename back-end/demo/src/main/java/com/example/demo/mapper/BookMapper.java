package com.example.demo.mapper;
 
import java.util.List;
 
import org.apache.ibatis.annotations.Mapper;
 
import com.example.demo.vo.BookVO;
import com.example.demo.vo.RequestVO;
import com.example.demo.vo.LikeVO;
@Mapper
public interface BookMapper {
 
    List<BookVO> bookList();
    BookVO fetchBookByID(int bid);
    void updateBook(BookVO book);
    void insertRequest(RequestVO request);
    void insertLike(LikeVO like);
    void deleteBook(int bid);
}