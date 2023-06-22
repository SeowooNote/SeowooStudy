package chapter3;

// 다형성
// 하나의 객체 혹은 기능을 다양한 형태로 표현하는 것
// 클래스의 확장, 인터페이스의 확장 및 구현을 통해서 이루어질 수 있음

// Java에서 다루는 다형성에는 오버로딩, 오버라이딩, 업캐스팅, 다운캐스팅
// 오버로딩 : 메서드를 하나의 이름으로 여러 개 생성하는 것
// 오버라이딩 : 상위 클래스에 정의된 메서드를 재정의하는 것

// 업캐스팅 : 자손 클래스의 인스턴스를 부모 클래스의 참조 타입으로 변환 (자동)
// 다운캐스팅 : 부모 클래스의 인스턴스를 자손 클래스의 참조 타입으로 변환 (명시)
class Smartphone{
    String telNumber;
    boolean power;
}

class Galaxy extends Smartphone implements Talk{
    String bixby;

    @Override
    public void voiceTalk(String to, String from) {
        System.out.println(from + "가 " + to + "에게 보이스톡을 시도합니다.");
    }

    @Override
    public void faceTalk(String to, String from) {
        System.out.println(from + "가 " + to + "에게 페이스톡을 시도합니다.");
    }
}

class IPhone extends Smartphone implements Talk{
    int shiri;

        @Override
    public void voiceTalk(String to, String from) {
        System.out.println("보이스톡을 호출합니다.");
    }

    @Override
    public void faceTalk(String to, String from) {
        System.out.println("페이스톡을 호출합니다.");
    }
}

interface Talk{
    void voiceTalk(String to, String from);
    void faceTalk(String to, String from);
}

public class Oop8 {
    
    public static void main(String[] args) throws Exception{
        Galaxy galaxy = new Galaxy();
        IPhone iPhone = new IPhone();

        galaxy.bixby = "bixby";
        iPhone.shiri = 1;

        Smartphone smartphone = null;
        Smartphone smartphone2 = new Smartphone();

        smartphone = galaxy;
        // smartphone.bixby = "b";

        smartphone2 = iPhone;
        // smartphone2.shiri = 1;

        Galaxy galaxy2 = (Galaxy)smartphone;
        IPhone iPhone2 = (IPhone)smartphone2;

        System.out.println(galaxy2);
        System.out.println(galaxy2.bixby);
        System.out.println(iPhone.shiri);

        // 인터페이스를 참조 타입으로 지정한 참조 변수는
        // 해당 인터페이스를 구현한 클래스의 인스턴스를 받을 수 있음
        Talk talk = new IPhone();
        talk.faceTalk("010-1111-1111", "010-2222-1111");
    }
}
