package com.example.demo.mapper;
 
import java.util.List;
 
import org.apache.ibatis.annotations.Mapper;
 
import com.example.demo.vo.BookVO;
 
@Mapper
public interface BookMapper {
 
    List<BookVO> bookList();
    BookVO fetchBookByID(int bid);
    void updateBook(BookVO book);
    void insertBook(BookVO book);
    void deleteBook(int bid);
}