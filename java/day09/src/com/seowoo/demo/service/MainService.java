package com.seowoo.demo.service;

import com.seowoo.demo.repository.ObjectRepository;

// com.seowoo.demo 프로젝트의 실제 비즈니스 로직을 담당하는 클래스
public class MainService {

    private ObjectRepository objectRepository = new ObjectRepository();

    public void printDatas(){
        int[] datas = objectRepository.getDatas();
        for(int data : datas) System.out.println(data);
    }

}
