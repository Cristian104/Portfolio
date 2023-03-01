import java.io.PrintStream;
import java.util.ArrayList;

public class Main {
    public Main() {}
    public static void main(String[] args) {
        String[] Palo = new String[]{"treboles", "corazones", "picas", "diamantes"};
        String[] Valor = new String[]{"2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"};
        Deck deck = new Deck();
        deck.setCard(new ArrayList());
        for(int i = 0; i < Palo.length; ++i) {
            for(int j = 0; j < Valor.length; ++j) {
                Card card = new Card(Palo[i], getColor(Palo[i]), Valor[j]);
                deck.getCard().add(card);}}

        System.out.println("Tamaño del deck: " + deck.getCard().size());
        System.out.println("Mezclar el deck " + deck.mezclar());
        PrintStream var10000 = System.out;
        String var10001 = ((Card)deck.getCard().get(0)).getPalo();
        var10000.println("Prmera: " + var10001 + " " + ((Card)deck.getCard().get(0)).getValor());
        System.out.println("Quedan: 51");
        var10000 = System.out;
        var10001 = ((Card)deck.getCard().get(0)).getPalo();
        var10000.println("Segunda: " + var10001 + " " + ((Card)deck.getCard().get(1)).getValor());
        var10000 = System.out;
        var10001 = ((Card)deck.getCard().get(0)).getPalo();
        var10000.println("Tercera: " + var10001 + " " + ((Card)deck.getCard().get(2)).getValor());
        var10000 = System.out;
        var10001 = ((Card)deck.getCard().get(0)).getPalo();
        var10000.println("Cuarta: " + var10001 + " " + ((Card)deck.getCard().get(3)).getValor());
        var10000 = System.out;
        var10001 = ((Card)deck.getCard().get(0)).getPalo();
        var10000.println("Quinta: " + var10001 + " " + ((Card)deck.getCard().get(4)).getValor());}

    public static String getColor(String palo) {
        if (!palo.toLowerCase().equals("Picas") && !palo.toLowerCase().equals("Tréboles")) {
            return !palo.toLowerCase().equals("Corazones") && !palo.toLowerCase().equals("Diamantes") ? null : "rojo";
        } else {
            return "negro";}}}