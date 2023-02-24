import java.util.ArrayList;
import java.util.Scanner;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;


/**
 * @author cris
 *
 */

public class main {
 
	public static BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in)); 

	
    public static void main(String[] args) throws Exception {
        
    	
    	
             
         	Menu();

    
    }
    
    
public static void Menu() throws Exception {
	
    Deck Deck= new Deck();

 // Arreglo de Tipos
    
    String[] valor={"2","3","4","5","6","7","8","9","10", "A", "J","Q","K"};
    String [] palo={"Picas","Corazon","Diamante","Trebol"};
    
        Integer count = 1;
        
        
         Deck.setCarta(new ArrayList<Card>());
         
        
           for (int i=0; i < palo.length;i++){
              for (int j=0; j< valor.length;j++){
               Card carta= new Card(palo[i],getColor(palo[i]), valor[j]);
               Deck.getCarta().add(carta);  
               }
            }
           
         System.out.println("El Deck cuenta con un tamaño de "+ Deck.getCarta().size()+" cartas");
	
	System.out.println("*****************************************************************************");
	System.out.println("El juego de Poker esta por comenzar, favor de elegir alguna de las opciones");
	System.out.println("*****************************************************************************");

	int opcion = 0;
    
    do {
    	
    	System.out.println();
    	System.out.println("Mezclar Deck ingresa '1'");
    	System.out.println("Obtener una carta ingresa '2'");
    	System.out.println("Obtener carta al azar ingresa '3'");
    	System.out.println("Obtener mano de cartas ingresa '4'");
    	System.out.println("Salir del juego ingresa '0'");
    	
        opcion = Integer.parseInt(Lector.readLine());

        
    if (Deck.getCarta().size() <= 0)
    {
    	throw new Exception("Ya no hay cartas en Mazo");
    }    
    else if (opcion == 1)
	{
		System.out.println(Deck.Mezclar());          
	}
	else if (opcion == 2)
	{
        System.out.println(Deck.Head());
	}
	else if (opcion == 3)
	{
        System.out.println(Deck.Pick());
	}
	else if (opcion == 4)
	{
        System.out.println(Deck.Hand());            
	}
	else if (opcion == 0)
	{
		System.out.println("Has salido del programa");
		break;
	}
	
	
		
		
	else throw new Exception("Has ingresado una opcion invalida");
    
    
    } while (opcion > 0 || opcion < 5);
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