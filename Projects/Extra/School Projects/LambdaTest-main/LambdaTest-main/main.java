import java.util.ArrayList;
import java.util.Collections;


interface AnonnymClass {

    public void ListaImpresion();
    
}

public class main {


    public static void main(String[] args) {
        
        Propiedad p1= new Propiedad("Cristian","Estrada");
        Propiedad p2= new Propiedad("Juan Carlos","Camacho");
        Propiedad p3= new Propiedad("Laila","Ortega");
        Propiedad p4= new Propiedad("Melissa","Estrada");
        Propiedad p5= new Propiedad("Adriana","Medina");
        Propiedad p6= new Propiedad("Ivan","Chavarria");
        Propiedad p7= new Propiedad("Raymundo","Ruben");
        Propiedad p8= new Propiedad("Pablo","Longoria");
        Propiedad p9= new Propiedad("Sofia","Abigail");
        Propiedad p10= new Propiedad("Segio","Medina");
        
     ArrayList<Propiedad> nombres = new ArrayList<Propiedad>();
        nombres.add(p1);
        nombres.add(p2);
        nombres.add(p3);
        nombres.add(p4);
        nombres.add(p5);
        nombres.add(p6);
        nombres.add(p7);
        nombres.add(p8);
        nombres.add(p9);
        nombres.add(p10);
        
        Collections.sort(nombres);
        
        AnonnymClass anon= new AnonnymClass() {
       
        	 public void ListaImpresion(){
            System.out.println("A continuacion se imprime la lista en orden \n");
       
            for (Propiedad string:nombres){
            System.out.println(string);
            
        }};}; anon.ListaImpresion();}}

