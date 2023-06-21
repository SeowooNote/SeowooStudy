import java.util.Scanner;

class ExchageRateInformation{

    String monetaryUnit;
    double exchageRate;

    public ExchageRateInformation() {}

    ExchageRateInformation(String monetaryUnit, double exchageRate){
        this.monetaryUnit = monetaryUnit;
        this.exchageRate = exchageRate;
    }

}

public class CurrencyExchange03 {

    static ExchageRateInformation[] exchangeRateArray;

    static ExchageRateInformation exchageRateInformation;

    static String inputMonetaryUnit;
    static int inputAmount;


    static void initExchangeRateArray(){
        exchangeRateArray = new ExchageRateInformation[]{
            new ExchageRateInformation("달러", 1307.5),
            new ExchageRateInformation("엔", 9.32),
            new ExchageRateInformation("위안", 183.78)
        };
    }

    static void inputMonetaryUnit(){

        Scanner scanner = new Scanner(System.in);

        // 화폐 단위 입력 받는 기능
        System.out.println("화폐 단위를 입력하세요. ('종료' 입력시 프로그램 종료)");

        inputMonetaryUnit = scanner.nextLine();
        if(inputMonetaryUnit.equals("종료"))    inputMonetaryUnit = null;

    }

    static void findByMonetaryUnit(){

        for(ExchageRateInformation item: exchangeRateArray){
            if(item.monetaryUnit.equals(inputMonetaryUnit)){
                exchageRateInformation= item;
                break;
                }
            }

    }

    static void inputAmount(){

        Scanner scanner = new Scanner(System.in);

        // 금액을 입력 받는 기능
        System.out.println("금액을 입력하세요. (금액은 0보다 큰 정수이어야 합니다.)");
        inputAmount = scanner.nextInt();
    }

    static void calculationAmount(){
        // 입력받은 금액과 환율을 계산하는 기능
        double resultAmount = inputAmount * exchageRateInformation.exchageRate;
        System.out.println(resultAmount + "원");
    }

    public static void main(String[] args) throws Exception {

        initExchangeRateArray();

        while(true){ 

            // 화폐 단위 입력 받는 기능
            inputMonetaryUnit();
            if(inputMonetaryUnit == null)   break;

            findByMonetaryUnit();

            if(exchageRateInformation == null){
                System.out.println("잘못된 화폐 단위입니다.");
                continue;
            }

            // 금액을 입력 받는 기능
            inputAmount();
            if(inputAmount <= 0){
                System.out.println("금액은 0보다 커야합니다.");
                continue;
            }

            // 입력받은 금액과 환율을 계산하는 기능
            calculationAmount();

        }

        System.out.println("프로그램 종료!");

    }
}
