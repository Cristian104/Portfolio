import java.util.ArrayList;
import java.util.Scanner;
/**
 *
 * @author Cris
 */

public class Main {
static Scanner scanner= new Scanner(System.in);

    
    /**
     * @param args the command line arguments
     */

    public static void main(String[] args) {
Menu Menu=new Menu();
Menu.runMenu();


        String [] palo={"PIKA","CORAZON","DIAMANTE","TREBOL"};
        String[] valor={"A","2","3","4","5","6","7","8","9","10","J","Q","K"};
            Integer count=1;
            Deck Deck=new Deck();
             Deck.setCarta(new ArrayList<Card>());
                    for (int i=0; i<palo.length;i++){
                        for (int j=0; j< valor.length;j++){
                            Card carta= new Card(palo[i],getColor(palo[i]), valor[j]);
                                Deck.getCarta().add(carta);  
                    }
                }
             System.out.println("El Deck cuenta con un tamaño de "+Deck.getCarta().size()+" cartas");
              //IMPRESIÓN DE MÉTODOS//
             
    }
    
public static String getColor(String palo){
    if (palo.toLowerCase().equals("pika")||palo.toLowerCase().equals("trebol")){
            return "NEGRO";
    }    
    if (palo.toLowerCase().equals("corazon")||palo.toLowerCase().equals("diamante")){   
        return "ROJO";
    }
    return null;

    
}
}
