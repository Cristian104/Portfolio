import java.awt.geom.Area;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class shape {

	public shape() {

	
	}

	public static void main(String[] args) throws Exception {
		BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in)); 



		System.out.println("Bienvenido a tu calculadora de figuras donde podras obtener");
		System.out.println("AREAS Y PERIMETROS");
		
		System.out.println("Ingresa el numero de la figura de la que desees obtener medidas: ");
		System.out.println();
		System.out.println("************************");
		System.out.println("*  1 ..... Circulo     *");
		System.out.println("*  2 ..... Triangulo   *");
		System.out.println("*  3 ..... Cuadrado    *");
		System.out.println("*  4 ..... Rectangulo  *");
		System.out.println("*  5 ..... Pentagono   *");
		System.out.println("************************");
		
        int opcion = Integer.parseInt(Lector.readLine());
        
        System.out.println("Deseas obtener el area o perimetro?");
		System.out.println("Ingresa 1... Perimetro");
		System.out.println("Ingresa 2... Area");
		int AreaPerimetro = Integer.parseInt(Lector.readLine());
        
        if (opcion == 1)
        {
        	if (AreaPerimetro == 1)
        		Perimeter.GetPerimetroCirculo();
        	
        	else if (AreaPerimetro == 2)
            	Area.GetAreaCirculo();
        	else throw new Exception("No has elegido una opcion valida");

        	
        }
        
        else if (opcion == 2)
        {
        	if (AreaPerimetro == 1)
        		Perimeter.GetPerimetroTriangulo();
        	
        	else if (AreaPerimetro == 2)
            	Area.GetAreaTriangulo();
        	else throw new Exception("No has elegido una opcion valida");

        }
        
        else if (opcion == 3)
        {
        	if (AreaPerimetro == 1)
        		Perimeter.GetPerimetroCuadrado();
        	
        	else if (AreaPerimetro == 2)
            	Area.GetAreaCuadrado();
        	else throw new Exception("No has elegido una opcion valida");

        }
        
        else if (opcion == 4)
        {
        	if (AreaPerimetro == 1)
        		Perimeter.GetPerimetroRectangulo();
        	
        	else if (AreaPerimetro == 2)
            	Area.GetAreaRectangulo();
        	else throw new Exception("No has elegido una opcion valida");

        }
        
        else if (opcion == 5)
        {
        	if (AreaPerimetro == 1)
        		Perimeter.GetPerimetroPentagono();
        	
        	else if (AreaPerimetro == 2)
            	Area.GetAreaPentagono();
        	else throw new Exception("No has elegido una opcion valida");

        }
        
        else throw new Exception("No has elegido una opcion valida");

        
        

		
		
	}
	
	public static class Perimeter {
		static BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in)); 


		// Perimetro del Circulo
		public static void GetPerimetroCirculo() throws IOException {
			System.out.print("Favor de ingresar el valor del Radio del circulo: ");
			int radioCirculo = Integer.parseInt(Lector.readLine());
			
			double perimetroCirculo = (2 * 3.141592 * radioCirculo);
			
			System.out.println("El perimetro del circulo tiene un valor de " + perimetroCirculo + " metros.");
		}
		
		// Perimetro del Triangulo
		public static void GetPerimetroTriangulo() throws IOException {
			System.out.print("Favor de ingresar la medida del lado a del triangulo: ");
			int ladoATriangulo = Integer.parseInt(Lector.readLine());
			System.out.print("Favor de ingresar la medida del lado b del triangulo: ");
			int ladoBTriangulo = Integer.parseInt(Lector.readLine());
			System.out.print("Favor de ingresar la medida del lado c del triangulo: ");
			int ladoCTriangulo = Integer.parseInt(Lector.readLine());
			
			
			double perimetroTriangulo = (ladoATriangulo + ladoBTriangulo + ladoCTriangulo);
			
			System.out.println("El perimetro del triangulo tiene un valor de " + perimetroTriangulo + " metros.");
		}
		
		//Perimetro del Cuadrado
		public static void GetPerimetroCuadrado() throws IOException {
			System.out.print("Favor de ingresar la medida de un lado del cuadrado: ");
			int ladoCuadrado = Integer.parseInt(Lector.readLine());
			
			double perimetroCuadrado = (ladoCuadrado * 4);
			
			System.out.println("El perimetro del cuadrado tiene un valor de " + perimetroCuadrado + " metros.");
		}
		
		//Perimetro del Rectangulo
		public static void GetPerimetroRectangulo() throws IOException {
			System.out.print("Favor de ingresar la medida de la base del rectangulo: ");
			int baseRectangulo = Integer.parseInt(Lector.readLine());
			System.out.print("Favor de ingresar la medida de la altura del rectangulo: ");
			int alturaRectangulo = Integer.parseInt(Lector.readLine());
			
			double perimetroRectangulo = ((baseRectangulo * 2) + (alturaRectangulo * 2));
			
			System.out.println("El perimetro del rectangulo tiene un valor de " + perimetroRectangulo + " metros.");
		}
		
		//Perimetro del Pentagono
		public static void GetPerimetroPentagono() throws IOException {
			System.out.print("Favor de ingresar la medida de un lado del pentagono: ");
			int ladoPentagono = Integer.parseInt(Lector.readLine());
			
			double perimetroPentagono = (ladoPentagono * 5);
			
			System.out.println("El perimetro del pentagono tiene un valor de " + perimetroPentagono + " metros.");
		}
	}
	
	
	public static class Area {
		static BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in)); 

		// Area del Circulo
		public static void GetAreaCirculo() throws IOException {
			System.out.print("Favor de ingresar el valor del Radio del circulo: ");
			int radioCirculo = Integer.parseInt(Lector.readLine());
			
			double areaCirculo = (3.141592 * radioCirculo * radioCirculo);
			
			System.out.println("El area del circulo tiene un valor de " + areaCirculo + " metros cuadrados.");
		}
		
		// Area del Triangulo
		public static void GetAreaTriangulo() throws IOException {
			System.out.print("Favor de ingresar la medida de la base del triangulo: ");
			int baseTriangulo = Integer.parseInt(Lector.readLine());
			System.out.print("Favor de ingresar la medida de la altura del triangulo: ");
			int alturaTriangulo = Integer.parseInt(Lector.readLine());
			
			double areaTriangulo = ((baseTriangulo * alturaTriangulo) / 2);
			
			System.out.println("El area del triangulo tiene un valor de " + areaTriangulo + " metros cuadrados.");
		}
		
		//Area del Cuadrado
		public static void GetAreaCuadrado() throws IOException {
			System.out.print("Favor de ingresar la medida de un lado del cuadrado: ");
			int ladoCuadrado = Integer.parseInt(Lector.readLine());
			
			double areaCuadrado = (ladoCuadrado * ladoCuadrado);
			
			System.out.println("El area del cuadrado tiene un valor de " + areaCuadrado + " metros cuadrados.");
		}
		
		//Area del Rectangulo
		public static void GetAreaRectangulo() throws IOException {
			System.out.print("Favor de ingresar la medida de la base del rectangulo: ");
			int baseRectangulo = Integer.parseInt(Lector.readLine());
			System.out.print("Favor de ingresar la medida de la altura del rectangulo: ");
			int alturaRectangulo = Integer.parseInt(Lector.readLine());
			
			double areaRectangulo = (baseRectangulo * alturaRectangulo);
			
			System.out.println("El area del rectangulo tiene un valor de " + areaRectangulo + " metros cuadrados.");
		}
		
		//Area del Pentagono
		public static void GetAreaPentagono() throws IOException {
			System.out.print("Favor de ingresar el valor de la apotema del pentagono: ");
			int apotemaPentagono = Integer.parseInt(Lector.readLine());
			System.out.print("Favor de ingresar el valor del perimetro del pentagono: ");
			int perimetroPentagono = Integer.parseInt(Lector.readLine());
			
			double areaPentagono = ((apotemaPentagono * perimetroPentagono)/2);
			
			System.out.println("El area del pentagono tiene un valor de " + areaPentagono + " metros cuadrados.");
		}

		
	
	}
		
		
		
	
	
	

}
