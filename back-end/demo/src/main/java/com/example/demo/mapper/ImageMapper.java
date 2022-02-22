package com.example.demo.mapper;
 
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
 

import com.example.demo.vo.ImageVO;

@Mapper
public interface ImageMapper {
    
    void insertImage(ImageVO img);

	ImageVO fetchImageByID(int bid);
    
}