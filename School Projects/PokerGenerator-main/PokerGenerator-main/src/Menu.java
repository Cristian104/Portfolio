import java.util.Scanner;
/**
 *
 * @author annip
 */

public class Menu {
            boolean exit;
            Deck Deck= new Deck();

public void runMenu(){
        printEncabezado();
        while(!exit){
            printMenu();
                int opcion=getOpcion();
                    realizarOpcion(opcion);
        }
}
private void printEncabezado(){
         System.out.println("---------------------------------------------------------");
         System.out.println("                Bienvenido a Póker!                      ");
         System.out.println("---------------------------------------------------------");
}

private void printMenu(){
         System.out.println("1. Mezclar Deck");
         System.out.println("2. Sacar una carta");
         System.out.println("3. Carta al Azar");
         System.out.println("4. Generar una mano de 5 cartas");
         System.out.println("0. Salir\n");
         
}
private int getOpcion(){
        int opcion=-1;
        Scanner sn= new Scanner(System.in);
            while (opcion<0||opcion>4){
                try{
                   System.out.println("Ingresa tu opción");
                    opcion=Integer.parseInt(sn.nextLine());
                }
                catch(NumberFormatException e){
                    System.out.println("La opción que elegiste no existe");      
                }   
               }
            return opcion;

}
public void realizarOpcion(int opcion){
            Deck Deck= new Deck();

    switch (opcion){
        case 5:
            exit=true;
            System.out.println("Saliste del programa");
            break;
        case 1:
            Deck.Mezclar();
            break;
        case 2:
            Deck.Head();
            break;
        case 3:
            Deck.Pick();
            break;
        case 4:
            Deck.Hand();
        default:
            System.out.println("La opción que ingresaste es incorrecta");
    }
 
}
}
