package com.example.demo.mapper;
 

 
import org.apache.ibatis.annotations.Mapper;
 

import com.example.demo.vo.ReportVO;
@Mapper
public interface ReportMapper {
	
    void insertReport(ReportVO report);
    
}