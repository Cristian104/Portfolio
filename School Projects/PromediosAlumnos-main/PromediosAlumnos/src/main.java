import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class main {

	public static BufferedReader Lector = new BufferedReader(new InputStreamReader(System.in));

	public main() {

	}

	public static void main(String[] args) throws IOException {

		Alumno alumno = new Alumno();

		double Calificaciones[] = new double[5];

		System.out.println("Favor de ingresar el nombre del alumno");
		alumno.nombre = Lector.readLine();

		Double promedio = promedio(alumno.calificacion);

		String calificacion = calificacion(promedio);

		imprimirCalificacion(alumno, promedio, calificacion, Calificaciones);

	}

	public static Double promedio(double Calificaciones[]) throws NumberFormatException, IOException {

		Alumno alumno = new Alumno();

		for (int i = 0; i <= 4; i++) {
			System.out.println(
					"A continuacion ingresa la calificacion que obtuvo " + alumno.nombre + " en la materia " + (i + 1));
			Calificaciones[i] = Double.parseDouble(Lector.readLine());
		}

		/* código para calcular el promedio */

		double suma = 0;
		for (int i = 0; i < 5; i++) {
			suma = Calificaciones[i] + suma;
		}

		double promedio = suma / 5;

		for (int i = 0; i <= 4; i++) {
			System.out.println(
					"El alumno obtuvo una calificacion de: " + Calificaciones[i] + " en la materia " + (i + 1));

		}

		return promedio;
	}

	public static String calificacion(Double promedio) {
		String calificacion = "";
		if (promedio <= 50) {
			calificacion = "F";
		}
		if (promedio >= 51 && promedio <= 60) {
			calificacion = "E";
		}
		if (promedio >= 61 && promedio <= 70) {
			calificacion = "D";
		}
		if (promedio >= 71 && promedio <= 80) {
			calificacion = "C";
		}
		if (promedio >= 81 && promedio <= 90) {
			calificacion = "B";
		}
		if (promedio >= 91 && promedio <= 100) {
			calificacion = "A";
		}

		/* completar este código */
		return calificacion;
	}

	public static void imprimirCalificacion(Alumno alumno, Double promedio, String calificacion,
			double Calificaciones[]) {

		System.out.println("Nombre del estudiante: " + alumno.nombre);
		/* aqui debe de ir un for para imprimir las calificaciones */

		System.out.println("Promedio: " + promedio);
		System.out.println("Calificación: " + calificacion);
	}

}
