import java.util.ArrayList;
import java.util.Scanner;

/**
 * @author cris
 *
 */

public class main {
 
    public static void main(String[] args) {
        
    	// Arreglo de Tipos
        
        String[] valor={"2","3","4","5","6","7","8","9","10", "A", "J","Q","K"};
        String [] palo={"Picas","Corazon","Diamante","Trebol"};
        
            Integer count = 1;
            
            Deck Deck= new Deck();
            
             Deck.setCarta(new ArrayList<Card>());
             
            
               for (int i=0; i < palo.length;i++){
                  for (int j=0; j< valor.length;j++){
                   Card carta= new Card(palo[i],getColor(palo[i]), valor[j]);
                   Deck.getCarta().add(carta);  
                   }
                }
               
             System.out.println("El Deck cuenta con un tamaño de "+ Deck.getCarta().size()+" cartas");
             
             
             System.out.println(Deck.Mezclar());          
             System.out.println(Deck.Head());
             System.out.println(Deck.Pick());
             System.out.println(Deck.Hand());            
    
    }
    
    
public static String getColor(String palo){
	
	if (palo.toLowerCase().equals("corazon")||palo.toLowerCase().equals("diamante")){   
        return "Rojo";
    }
    if (palo.toLowerCase().equals("picas")||palo.toLowerCase().equals("trebol")){
            return "Negro";
    }    
    
    return null;
    
  
}
}