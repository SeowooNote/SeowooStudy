package com.seowoo.demo.controller;

import com.seowoo.demo.service.MainService;

// com.seowoo.demo 프로젝트의 입력 및 출력과 관련된 기능을 담당하는 클래스
public class MainController {

    private MainService mainService;
    
    private MainController(MainService mainService){
        this.mainService = mainService;
    }

    public void printDatas(){
        mainService.printDatas();
    }

}
