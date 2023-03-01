/**
 * 
 */
package Project;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

/**
 * @author Cristian
 *
 */


	
public class main {

	public static BufferedReader NumeroNuevo = new BufferedReader(new InputStreamReader(System.in)); 
	
public static void main(String[] args) throws IOException {
		
		System.out.println("Bienvenido a tu Generador de Numeros Primos y Fibonacci");
		System.out.println("A continuacion coemnzaran 2 programas que te permitiran generar numeros a tu gusto ");
		System.out.println();
		//System.out.println();
		

        NumerosPrimos();
        System.out.println();
		SecuenciaFibonacci();
		
			
		
	}
	
	public static void NumerosPrimos() throws IOException {
		

		
	      int i =0;
	      int num =0;
	      
	      String  primeNumbers = "";
	      
	      System.out.println("Bienvenido a tu calculadora de numeros primos, para comenzar, ingresa cuantos numeros primos quieres obtener:");
	      
	      int n = 0;
	      n = Integer.parseInt(NumeroNuevo.readLine());
	      
	      int repeater = 1;
	      
	      
	      for (i = 1; repeater <= n; i++)  	   
	      { 		 		  
		      int counter=0; 

	         for(num =i; num>=1; num--)
	         {
	        	 
			    if(i%num==0)
			    {
				counter = counter + 1;
			    }
			 }
		         
		 if (counter ==2)
		 {
		    //Appended the Prime number to the String
			repeater = repeater + 1;
		    primeNumbers = primeNumbers + i + " ";
		 }	
		 
		 
	      }	
	      System.out.println("A continuacion una secuencia de " + n + " numeros primos: ");
	      System.out.println(primeNumbers);
	      
	      
	}
	
	public static void SecuenciaFibonacci() throws IOException {
		
		
		
		int n = 0;
        System.out.println("Bienvenido a tu secuenciadora Fibonacci, ingresa cuantos digitos Fibonacci deseas generar:");
		n = Integer.parseInt(NumeroNuevo.readLine());

		
		int firstTerm = 0, secondTerm = 1;
	    System.out.println("La secuencia Fibonacci hasta " + n + " terminos es la siguiente:");

	    for (int i = 1; i <= n; ++i) {
	      System.out.print(firstTerm + ", ");

	      int nextTerm = firstTerm + secondTerm;
	      firstTerm = secondTerm;
	      secondTerm = nextTerm;
	    }
	    
	    
	    
	    
	}
	
	
	
	}