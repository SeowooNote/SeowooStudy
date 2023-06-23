package com.seowoo.demo.service;

import com.seowoo.demo.repository.ObjectRepository;
import com.seowoo.demo.repository.Repository;

// com.seowoo.demo 프로젝트의 실제 비즈니스 로직을 담당하는 클래스
public class MainService {

    private Repository repository;
    // private ObjectRepository objectRepository;
    // private Object2Repository object2Repository;

    public MainService(ObjectRepository objectRepository, ObjectRepository object2Repository){
        this.repository = repository;
    }

    public void printDatas() {
        int[] datas = repository.getDatas();
        for(int data : datas)   System.out.println(data);
    }

    // public void printDatas2() {
    //     int[] datas = Object2Repository.getDatas();
    //     for(int data : datas)   System.out.println(data);
    // }

}
