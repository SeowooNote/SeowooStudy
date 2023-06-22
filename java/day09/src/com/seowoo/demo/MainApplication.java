package com.seowoo.demo;

import java.util.Scanner;

import com.seowoo.demo.controller.MainController;

// com.seowoo.demo 프로젝트의 실제 실행 클래스
public class MainApplication {

    private static MainController mainController = new MainController();
    public static void main(String[] args) throws Exception {

        Scanner scanner = new Scanner(System.in);

        int input = scanner.nextInt();
        

        if(input == 0) mainController.printDatas();
        else{}

    }
}
