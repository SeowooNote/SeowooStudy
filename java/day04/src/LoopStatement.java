import java.util.Scanner;

public class LoopStatement {
    public static void main(String[] args) throws Exception{
        // 반복문
        // 특정한 코드 블럭을 조건에 부합하는 동안 반복해서 실행하는 문법
        // 특정한 패턴이나 순서를 가진 작업에 유용하게 사용됨

        // for 문
        // 주어진 조건이 만족되는 동안 반복적으로 실행하는 코드 블록을 지정
        // for (반복에 사용될 변수 초기화; 반복 조건; 변수 증감) {반복할 코드 블록}

        // 반복 횟수를 알고 있을 때 사용되는 반복문
        for(int index = 0; index < 10; index++){
            System.out.println("반복되는 문장" + (index+1));
        }

        // int index = 10;

        // 특정한 패턴을 가질때 for 반복문 사용
        System.out.println("3 * 1 = 3");
        System.out.println("3 * 2 = 6");
        System.out.println("3 * 3 = 9");
        System.out.println("3 * 4 = 12");
        System.out.println("3 * 5 = 15");
        System.out.println("3 * 6 = 18");
        System.out.println("3 * 7 = 21");
        System.out.println("3 * 8 = 24");
        System.out.println("3 * 9 = 27");

        // 3 * n = 3n
        for(int n = 1; n <= 1000; n++){
            System.out.printf("3 * %d = %d\n", n, 3*n);
        }

        // for 문을 이용한 배열 작업
        int[] numbers = new int[25];
        for(int index = 0; index < numbers.length; index++){
            numbers[index] = index + 1;
        }
        for(int index = 0; index < numbers.length; index++){
            System.out.println(numbers[index]);
        }

        System.out.println("=============================");

        // foreach 문
        // 배열을 반복돌면서 요소를 하나씩 복사하여 해당 요소의 데이터를 사용
        // for(배열요소의데이터타입 배열요소의변수명: 반복할배열) {코드블록}
        for(int number: numbers){
            System.out.println(number);
        }

        char[] charArray = new char[]{'a', 'b', 'c', 'd', 'e'};
        for(int index = 0; index < charArray.length; index++){
            charArray[index] = 'A';
        }
        System.out.println(charArray);

        // foreach는 읽기전용으로 값을 사용하는 경우에만 적합
        // 배열의 요소 값을 변경하는 작업은 불가능
        for(char character: charArray){
            character = 'Z';
        }
        System.out.println(charArray);

        System.out.println("=============================");

        // while 문
        // 주어진 조건이 만족되는 동안 반복적으로 실행하는 코드블록을 지정
        // while (논리 표현식) {반복할 코드블록}

        // 반복할 횟수를 알고 있지 않을 때 적합함
        Scanner scanner = new Scanner(System.in);
        int inputNumber = scanner.nextInt();

        while(inputNumber > 0){
            System.out.println("양수를 입력했습니다.");
            inputNumber = scanner.nextInt();
        }
    }
}
