package com.example.demo.mapper;

import com.example.demo.vo.IndexVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IndexMapper {
	List<IndexVO> borrowed_indexList(int guid); // 빌린 책 가져오기
	List<IndexVO> take_indexList(int tuid); // 빌려준 책 가져오기
    void deleteborrowlist(int gtid); // 빌린 책 목록 삭제 버튼
	void deletetakelist(int gtid); // 빌려준 책 목록 삭제 버튼
}