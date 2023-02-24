
public class Propiedad implements Comparable<Propiedad> {
    private String nombre,apellido;
   

    public Propiedad(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }


    public String toString() {
        return  nombre + " " + apellido;
    }


    public int compareTo(Propiedad t) {
     return nombre.compareTo(t.getNombre()) ;
    }
    
    
}