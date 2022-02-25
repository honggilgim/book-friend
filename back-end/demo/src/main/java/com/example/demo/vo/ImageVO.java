package com.example.demo.vo;
 
import lombok.Data;
 
@Data
public class ImageVO {
    int bid;
    byte[] image;
    
    public ImageVO(int bid, byte[] image) {
    	this.bid=bid;
    	this.image = image;
    }
}
