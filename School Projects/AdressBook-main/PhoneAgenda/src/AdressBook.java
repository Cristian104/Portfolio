/**
 * 
 */

/**
 * @author cris
 *
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap; // import the HashMap class
import java.util.Map;
import java.util.Map.Entry;


public class AdressBook {

	static BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in)); 
	static HashMap<String, String> Contactos = new HashMap<String, String>();
	

	
	public static void AdressBook() throws IOException {

		
		Contactos.put("Cristian", "8124418339");
	    Contactos.put("Oscar", "8110805074");
	    Contactos.put("Adriana", "8118014759");
	    Contactos.put("Laila", "464 579 0207");
	    Contactos.put("Mi Compare", "8112767943");
	   
	

	}
	
	public static void imprimirLista() throws IOException {
		System.out.println("Contactos: \n");
		for (Map.Entry<String, String> theContacts :Contactos.entrySet()){
			
            System.out.println(theContacts.getKey() +" = "+theContacts.getValue());
        }
	}
	
	public static void List() throws IOException {
		
		imprimirLista();
		
	}
	
	public static void Create() throws IOException {
		
		System.out.println("Ingresa la cantidad de personas que desees agregar: ");
        int Personas = Integer.parseInt(Lector.readLine());
		

		for (int i = 0; i < Personas; i++)
		{
			System.out.print("\nIngresa el nombre de la persona " + (i + 1) + ": ");
			String nombrePersona = Lector.readLine();
			System.out.print("Ingresa el numero telefonico de la persona " + (i + 1) + ": ");
			String numeroPersona = Lector.readLine();
			
			Contactos.put(nombrePersona, numeroPersona);
		}
		
		imprimirLista();
		
	}
	
	public static void Delete() throws IOException {
		
		imprimirLista();
		System.out.println();
		
		System.out.print("Ingresa el contacto que desees eliminar: ");
		
		String nombreContacto = Lector.readLine();
		Contactos.remove(nombreContacto);
		
		imprimirLista();
		
	}
	
	public static void DeleteAllContacts() throws IOException {
		
		Contactos.clear();
	}
	
	

	public static void main(String[] args) throws Exception {
		
		AdressBook();
		
		BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in)); 

		
		
		System.out.println("Bienvenido a tu guia de contactos");
		System.out.println("Aqui encontraras un registro de numeros telefonicos y nombre de propietario");
		System.out.println("La estructura se compone de: NumerodeTelefono:NombreUsuario");
		System.out.println();
		
		System.out.println("Ingresa tu opcion a realizar ");
		System.out.println();
		System.out.println("************************");
		System.out.println("*  1 ..... List     *");
		System.out.println("*  2 ..... Create   *");
		System.out.println("*  3 ..... Delete    *");
		System.out.println("************************");
	
        int opcion = Integer.parseInt(Lector.readLine());

        if (opcion == 1)
        {
        	List();
        }
        
        else if (opcion == 2)
        {
        	Create();
        }
        
        else if (opcion == 3)
        {
        	
    		System.out.println("\nDeseas borrar 1 contacto o todos los contactos?");
    		System.out.println("Ingresa 1 para 1 contacto \nIngresa 2 para Todos los contactos ");
            opcion = Integer.parseInt(Lector.readLine());
            
            if (opcion == 1)
            {
            	Delete();
            }
            
            else if (opcion == 2)
            {
            	DeleteAllContacts();
            	System.out.println("A continuacion la lista de contactos en lista: " + Contactos);
            }
            
            else throw new Exception("No has elegido una opcion valida");

        }
        
        else throw new Exception("No has elegido una opcion valida");

			
	}
	

}
