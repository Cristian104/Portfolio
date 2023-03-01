import java.util.Collections;
import java.util.List;
public class Deck {

    private List<Card> card;
    private Integer nCard = 52;

    public Deck() {
    }

    public List<Card> getCard() {
        return this.card;
    }

    public void setCard(List<Card> card) {
        this.card = card;
    }

    public Integer getnCard() {
        return this.nCard;
    }

    public void setnCard(Integer numCard) {
        this.nCard = numCard;
    }

    public String mezclar() {
        Collections.shuffle(this.card);
        return "Mezclando el Deck... ";
    }
}
