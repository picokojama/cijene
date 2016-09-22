export class Prozor {
    public cijenaJednog: number;
    public ukupnaCijena: number;

    constructor(public sirina: number, public duzina: number, public komada: number) {
        this.cijenaJednog = this.sirina * this.duzina;
        this.ukupnaCijena = this.cijenaJednog * this.komada;
    }
}