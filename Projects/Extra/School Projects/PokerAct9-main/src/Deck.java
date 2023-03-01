import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/**
 * @author cris
 *
 */

public class Deck {
    private List<Card> carta;
    private List<Card>carta_nueva;
    private Integer Num_carta=52;

public List<Card> getCarta(){
    return carta;
     }

public void setCarta(List<Card> carta){
    this.carta= carta;
    }

public Integer getNum_carta(){
    return Num_carta;
    }

public void setNum_Carta(Integer Num_Carta){
    this.Num_carta= Num_carta;
    }




public String Mezclar(){
    Collections.shuffle(carta);
        return "****** Se mezclo el Deck ******\n";
     }
 

public String Head(){
    
    System.out.println("*** Mostrar Primera Carta del Deck ***");
    
    Card carta=getCarta().get(0);
        System.out.println(getCarta().get(0).getPalo()+ " " +getCarta().get(0).getColor()+ " " + getCarta().get(0).getValor());
            getCarta().remove(0);  
                return "Quedan "+ getCarta().size() + " cartas disponibles en el Deck \n";
    }


public String Pick(){
    System.out.println("*** Mostrar Carta al Azar ***"); 
        Random cartaAzar = new Random();
            int index= cartaAzar.nextInt(getCarta().size());
                Card carta= getCarta().get(index);
                    System.out.println(getCarta().get(index).getPalo() + " "+ getCarta().get(index).getColor() + " "+ getCarta().get(index).getValor());
                    getCarta().remove(0);
                          return "Quedan "+ getCarta().size() + " cartas disponibles en el Deck\n";
}
public String Hand(){
   
   System.out.println("*** Mostrar manojo de cartas ***");
   System.out.println("*** Tu manojo de cartas se compone por las siguientes cartas: ***");
        for(int i=0;i<5;i++){
                     System.out.println((i + 1) + ".- " + getCarta().get(0).getPalo()+ " " +getCarta().get(0).getColor()+ " "+ getCarta().get(0).getValor());
         getCarta().remove(0);
  
        }
            return "Quedan "+ getCarta().size() + " cartas disponibles en el Deck\n";

}
}