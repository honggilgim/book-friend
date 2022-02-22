package com.example.demo.controller;
 
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.mapper.ImageMapper;
import com.example.demo.vo.BookVO;
import com.example.demo.vo.ImageVO;


 
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/images")
public class ImageController {
 
    
    
	@Autowired
    ImageMapper imageMapper;
	
    @PostMapping("/saveImage")
    void insertImage(@RequestParam("file") MultipartFile multipartFile,String url) {
        File targetFile = new File(url + multipartFile.getOriginalFilename());
        try {
            InputStream fileStream = multipartFile.getInputStream();
            FileUtils.copyInputStreamToFile(fileStream, targetFile);
        } catch (IOException e) {
            FileUtils.deleteQuietly(targetFile);
            e.printStackTrace();
        }
        Map<String, Object> m = new HashMap<>();
        m.put("errorCode", 10);
    }
    
    
//	@PostMapping("/saveImage")
//    void insertImage(@RequestBody Map<String, String> param) {
//    	
//    	System.out.println("\n");
//        System.out.println("=======================================");
//        System.out.println("[ImageController] : [saveImage]");
//        System.out.println("[request keySet] : " + String.valueOf(param.keySet()));
//        System.out.println("[request idx] : " + String.valueOf(param.get("bid")));
//        System.out.println("[request idx] : " + String.valueOf(param.get("image")));
//        System.out.println("=======================================");
//        System.out.println("\n");
//
//        // DATA URL 을 바이트로 변환 실시
//        byte imageArray [] = null;
//        final String BASE_64_PREFIX = "data:image/jpg;base64,";
//        try {
//            String base64Url = String.valueOf(param.get("image"));
//            if (base64Url.startsWith(BASE_64_PREFIX)){
//                imageArray =  Base64.getDecoder().decode(base64Url.substring(BASE_64_PREFIX.length()));
//                System.out.println("\n");
//                System.out.println("=======================================");
//                System.out.println("[ImageController] : [saveImage]");
//                System.out.println("[imageArray] : " + new String(imageArray));
//                System.out.println("=======================================");
//                System.out.println("\n");
//            }
//        }
//        catch (Exception e){
//            e.printStackTrace();
//        }
//
//        // VO 객체에 bid 및 byte 지정 실시 [ blob 컬럼은 byte 로 되어있다]
//        ImageVO img = new ImageVO(Integer.parseInt(param.get("bid")), imageArray);
//        imageMapper.insertImage(img);
//        System.out.println("이미지 DB 저장 성공");
//    }
    
    @GetMapping("/{bid}")
    public ImageVO fetchImageByID(@PathVariable int bid) {
        System.out.println(imageMapper.fetchImageByID(bid));
        ImageVO fetchImage = imageMapper.fetchImageByID(bid);
        return fetchImage;
    }
    
   
    
}


