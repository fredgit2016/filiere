package com.filiere.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ProductController{

    @CrossOrigin
    @GetMapping("/product")
public Product getProduct(@RequestParam(value = "id") String productId) {
    return new Product( Long.parseLong(productId, 10)  , "another name");
}

}