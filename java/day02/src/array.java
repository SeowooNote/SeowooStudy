public class array {
// 배열
// '같은 타입'의 변수가 나열된 형태
// 배열은 '생성'해서 사용 함 -> 생성해서 사용하는 변수 : 참조 변수
// 생성은 new 연산자를 이용해서 생성할 수 있음
// 배열(참조 변수)은 실제 데이터가 저장되는 것이 아니라
// 해당 그룹의 첫번째 메모리 주소가 저장됨
    public static void main(String[] args) {
        // 동일한 그룹의 데이터를 변수로 선언해서 사용할 때
        int score1;
        int score2;
        int score3;
        int score4;
        int score5;

        // 배열 선언
        // 데이터 타입[] 배열변수명;
        int[] scores;

        // 배열 생성
        // 배열변수명 = new 데이터타입[길이];
        scores = new int[5];
        System.out.println(scores);     // 메모리 주소가 할당되어 출력됨

        scores[0] = 100;
        scores[1] = 90;
        scores[2] = 80;
        scores[3] = 70;
        scores[4] = 60;
        System.out.println(scores);     // 메모리 주소가 할당되어 출력됨

        System.out.println(scores[0]);
        System.out.println(scores[1]);
        System.out.println(scores[2]);
        System.out.println(scores[3]);
        System.out.println(scores[4]);

        // 배열 길이
        System.out.println(scores.length);

        // 문자열
        char[] apple = new char[5];
        apple[0] = 'a';
        apple[1] = 'p';
        apple[2] = 'p';
        apple[3] = 'l';
        apple[4] = 'e';

        System.out.println(apple);      // 문자열 배열의 경우 메모리 주소가 할당되어 출력되지 않고 해당 배열의 값들로 구성된 입력값이 출력됨

        char[] banana1 = new char[] {'b', 'a', 'n', 'a', 'n', 'a'};
        System.out.println(banana1);

        char[] banana2 = {'b', 'a', 'n', 'a', 'n', 'a'};

        // String
        // 문자의 배열을 조금 더 쉽게 다룰 수 있도록 여러가지 메소드를
        // 포함하고 있는 참조형 데이터 타입
        // String 변수명 = "데이터";
        String carrot = "carrot";
        System.out.println(carrot);
    }

}