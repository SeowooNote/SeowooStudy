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

    static void initExchangeRateArray(){
        exchangeRateArray = new ExchageRateInformation[]{
            new ExchageRateInformation("달러", 1307.5),
            new ExchageRateInformation("엔", 9.32),
            new ExchageRateInformation("위안", 183.78)
        };
    }

    public static void main(String[] args) throws Exception {

        initExchangeRateArray();

        while(true){
            Scanner scanner = new Scanner(System.in);
            System.out.println("화폐 단위를 입력하세요. ('종료' 입력시 프로그램 종료)");

            String inputMonetaryUnit = scanner.nextLine();
            if(inputMonetaryUnit.equals("종료"))    break;

            ExchageRateInformation exchangeRateInformation = null;
            for(ExchageRateInformation item: exchangeRateArray){
                if(item.monetaryUnit.equals(inputMonetaryUnit)){
                    exchangeRateInformation = item;
                    break;
                }
            }
            
        }

        System.out.println("프로그램 종료!");

    }
}
