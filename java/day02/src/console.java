import java.util.Scanner;

public class console {
    
    public static void main(String[] args) {
        // 콘솔 출력
        // System.out.println(); / System.out.print();
        System.out.println("줄바꿈이 있습니다.");
        System.out.print("줄바꿈이 없습니다.");

        // 콘솔 입력
        // java.util.Scanner 클래스를 사용해서 콘솔 입력값을 받을 수 있음
        // Scanner scanner = new Scanner(System.in);
        Scanner scanner = new Scanner(System.in);

        System.out.print("정수를 입력하세요 : ");
        int number = scanner.nextInt();
        System.out.println("엽력하신 정수는 " + number + " 입니다.");
    }

}