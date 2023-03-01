import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

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


//DECLARACIÓN DE MÉTODOS
public String Mezclar(){
    Collections.shuffle(carta);
        return "...Se mezcló el Deck";
     }
 

public String Head(){
    
    System.out.println("----------------PRIMERA CARTA DEL DECK-------------------");
    Card carta=getCarta().get(0);
        System.out.println(getCarta().get(0).getPalo()+ " " +getCarta().get(0).getColor()+ " " + getCarta().get(0).getValor());
            getCarta().remove(0);  
                return "Quedan "+ getCarta().size() + " cartas disponibles en el Deck \n";
    }
public String Pick(){
    System.out.println("--------------------CARTA AL AZAR--------------------------"); 
        Random cartaAzar = new Random();
            int index= cartaAzar.nextInt(getCarta().size());
                Card carta= getCarta().get(index);
                    System.out.println(getCarta().get(index).getPalo() + " "+ getCarta().get(index).getColor() + ""+ getCarta().get(index).getValor());
                    getCarta().remove(0);
                          return "Quedan "+ getCarta().size() + " cartas disponibles en el Deck\n";
}
public String Hand(){
   
   System.out.println("------------------MANO DE CARTAS-------------------------");
        for(int i=0;i<5;i++){
                     System.out.println(getCarta().get(0).getPalo()+ " " +getCarta().get(0).getColor()+ " "+ getCarta().get(0).getValor());
         getCarta().remove(0);
  
        }
            return "Quedan "+ getCarta().size() + " cartas disponibles en el Deck\n";

}
}
