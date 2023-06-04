public class variable {
    public static void main(String[] args) throws Exception {
        // 변수
        // 데이터를 메모리에 저장하는 공간
        // 메모리에 공간을 할당하는 행위를 '변수를 선언한다'라고 함
        // 할당한 메모리 공간에 데이터를 저장하는 행위를 '변수를 초기화한다'라고 함
        
        // 변수 선언 방법
        // 데이터타입 변수명
        int number;

        // 변수 초기화 방법
        // 변수명 = 데이터;
        number = 0;

        // 모든 변수는 사용하기전에 필수로 초기화 작업이 이루어져야 함
        System.out.println(number);

        // 변수 선언과 동시에 초기화하는 방법
        double pie = 3.14;

        // 1. 동일한 변수명으로 중복 선언이 불가능함
        // int number = 20;

        // 2. 변수명에 특수문자 사용이 불가능함 ($, _ 제외)
        // int num!;

        // 3. 변수명의 첫글자는 숫자가 올 수 없음
        // int 1number;

        // 4. 변수명은 대소문자를 구분함
        // int Number;   int NUmber; 

        // 변수 명명 규칙
        // 1. Camel Case : 띄어쓰기 위치를 표현하기 위해 뒤에 오는 단어릐 첫글자를 대문자료 표기
        // 예) java language -> javaLanguage

        // 1-1. lowerCamelCase : 첫 글자를 무조건 소문자로 시작하는 것
        // 1-2. UpperCamelCase : 첫 글자를 무조건 대문자로 시작하는 것

        // 2. Snake Case : 띄어쓰기 위치를 표현하기 위해 _(언더바)를 사용해서 표기
        // 예) java language -> java_language

        // 2-1. lower_snake_case : 모든 문자를 소문자로 표기하는 것
        // 2-2. UPPER_SNAKE_CASE : 모든 문자를 대문자로 표기하는 것

        // 변수의 명명규칙은 lowerCamelCase를 따름

        // lowerCamelCase - 변수, 메서드
        // UpperCamelCase - 클래스, 인터페이스
        // lower_snake_case - 안 쓰임(종종 javascript에서 변수명명 규칙으로 사용됨)
    }
}