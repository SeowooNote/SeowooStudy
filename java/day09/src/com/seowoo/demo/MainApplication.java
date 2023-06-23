package com.seowoo.demo;

import java.util.Scanner;

import com.seowoo.demo.controller.MainController;
import com.seowoo.demo.repository.ObjectRepository;
import com.seowoo.demo.service.MainService;

// com.seowoo.demo 프로젝트의 실제 실행 클래스
public class MainApplication {

    private static MainController mainController;
    public static void main(String[] args) throws Exception {

        Scanner scanner = new Scanner(System.in);

        int input = scanner.nextInt();

        ObjectRepository objectRepository = new ObjectRepository(input); 
        Object2Repository object2Repository = new Object2Repository(); 
        MainService mainService = null;


        if(input <= 0) mainService = new MainService(object2Repository);
        else mainService = new MainService(ObjectRepository);

        mainController = new MainController(mainService);
        mainController.printDatas();

    }
}
