import {Injectable} from "@angular/core";
import {Prozor} from './prozor'
@Injectable()
export class ProzoriService {
    prozori: Array<Prozor> = [];

    dobiProzore() {
        return this.prozori;
    }

    dodajProzor(sirina, duzina, komada) {
        this.prozori.push(new Prozor(sirina, duzina, komada));
    }

    obrisiProzor(prozor:Prozor) {
        var mjesto = this.prozori.indexOf(prozor);
        this.prozori.splice(mjesto, 1);
    }

    ukupniTrosak() {
        var trosak = 0;
        this.prozori.forEach(function (prozor, index) {
            trosak += prozor.ukupnaCijena;
        });
        return trosak;
    }
}