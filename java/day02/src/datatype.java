// 데이터 타입
// 자바의 변수는 여러가지의 데이터 형태를 저장할 수 있음
// 해당 변수에 저장할 수 있는 데이터의 형태를 데이터 타입이라 함
// 데이터 타입 - 기본형 데이터 타입 / 참조형 데이터 타입

// 기본형 데이터 타입
// 실제로 데이터가 저장되는 변수의 타입
// 1. 정수형 데이터 타입
// 2, 실수형 데이터 타입
// 3. 문자형 데이터 타입
// 4. 논리형 데이터 타입
public class datatype {

    public static void main(String[] args) {
        // 정수형 데이터 타입
        // (byte, short, int, long)

        // 1. byte
        // 1byte(8bit)의 메모리 저장 공간을 차지함
        // -128 ~ 127
        byte byteVariable1 = 127;
        byte byteVariable2 = -128;

        // byte byteVariable3 = 128;    -128 ~ 127까지 byte의 메모리 저장 공간을 넘어가서 오류가 발생

        // 2. short
        // 2byte(16bit)의 메모리 공간을 차지함
        // -32,768 ~ 32,767
        short shortVariable1 = 32767;
        short shortVariable2 = -32768;

        // short shortVariable3 = 32768;    -32,768 ~ 32,767까지 byte의 메모리 저장 공간을 넘어가서 오류가 발생

        // 3. int
        // 4byte(32bit)의 메모리 공간을 차지함
        // -2,147,483,648 ~ 2,147,483,647
        int intVariable1 = 2147483647;
        int intVariable1_1 = 2_147_483_647; // 숫자의 구분자를 나타내려면 _(언더바)로 표현이 가능
        int intVariable2 = -2147483648;
        int intVariable2_1 = -2_147_483_648;

        // int intVariable3 = 2147483649;   -2,147,483,648 ~ 2,147,483,647까지 byte의 메모리 저장 공간을 넘어가서 오류가 발생

        // 4. long
        // 8byte(64bit)의 메모리 공간을 차지함
        // -2^63 ~ 2^63-1
        // 정수타입의 리터럴의 데이터 타입은 int이기 때문에
        // long 타입의 literal(리터럴)을 지정할 땐 데이터 뒤에 L을 붙여야 함(literal은 데이터 그 자체를 의미)
        long longVariable1 = 12_147_483_648L;

        // 실수형 데이터 타입
        // 1. float
        // 4byte(32bit)의 메모리 공간을 차지함
        // 1.4*10^-45 ~ 3.4*10^38
        // 실수타입의 literal(리터럴)의 데이터 타입은 double이기 때문에
        // float타입의 리터럴을 지정할 땐 데이터 뒤에 F를 붙여야 함
        // 소수점 6~7 자리에서 오차 발생
        float floatVariable1 = 3.14F;
        // float floatVariable2 = 5.55555555555555555555;   소수점 6~7 자리에서 오차 발생
        // System.out.println(floatVariable2);

        // 2. double
        // 8byte(64bit)의 메모리 공간을 차지함
        // 4.9*10^-324 ~ 1.8*10^308
        // 소수점 15~17 자리에서 오차 발생
        double doubleVariable1 = 31.4;
        // double doubleVariable2 = 5.55555555555555555555;    소수점 15~17 자리에서 오차 발생
        // System.out.println(doubleVariable2);

        // 문자형 데이터 타입
        // 1. char
        // 2byte(16bit)의 메모리 공간을 차지함
        // 0 ~ 65,535
        // 문자 및 아스키코드, 유니코드를 사용해서 문자를 표현
        // 문자를 나타낼때는 ''로 묶어서 문자를 표현
        char charVariable1 = 'A';   // A(아스키코드)
        char charVariable2 = 65;    // A(문자)
        char charVariable3 = '\u0041'; // A(유니코드)
        System.out.println(charVariable1);
        System.out.println(charVariable2);
        System.out.println(charVariable3);
        
        // 논리형 데이터 타입
        // 1. boolean
        // 1byte(8bit)의 메모리 공간을 차지함
        // true, false의 두 가지 데이터만 가질 수 있음
        boolean blooleanVariable1 =true;
        boolean blooleanVariable2 =false;

        // is**. has**, existed** -> 논리형 데이터 타입을 가지게 됨

        // 상수
        // 한번 초기화하면 변경할 수 없는 변수
        // final 키워드를 사용함
        
        // 선언 방법
        // final 데이터타입 상수명;
        final int NUMBER;

        // 초기화 방법
        NUMBER = 0;
        // NUMBER = 1;  재초기화 불가능

        // 선언과 동시에 초기화
        final double PIE = 3.14;

        // 싱수를 사용하는 이유
        // 값의 보호 : 상수는 프로그램에서 중요한 값이 변경되지 않도록 보호하는 데 사용됨
        // 코드의 가독성 향상 : 상수는 "리터럴" 대신 의미 있는 이름을 사용하여 코드를 이해하기 쉽게 만드는 데 도움이 됨
        int size1 = 412 * 915;

        int GALAXY_S20_WIDTH = 412;
        int GALAXY_S20_HEIGHT = 915;
        int size2 = GALAXY_S20_WIDTH * GALAXY_S20_HEIGHT;
    }

}