import {Component, OnInit} from '@angular/core';
import {ProzoriService} from "./prozori.service";
import {Prozor} from "./prozor";
@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="page-header">
                <h1>Ime aplikacije <small>opis</small></h1>
            </div>
            <br>
            <div class="row">
                <table class="table">
                    <tr>
                        <th>#</th>
                        <th>Dimenzije</th>
                        <th>Cijena jedne</th>
                        <th>Količina</th>
                        <th>Ukupna Cijena</th>
                        <th>Akcije</th>
                     </tr>
                     <tr *ngFor="let prozor of prozori">
                        <td>{{prozori.indexOf(prozor)+1}}</td>
                        <td>{{prozor.sirina}}x{{prozor.duzina}} mm</td>
                        <td>{{prozor.cijenaJednog}} HRK</td>
                        <td>{{prozor.komada}}</td>
                        <td>{{prozor.ukupnaCijena}} HRK</td>
                        <td><a class="btn btn-danger btn-sm" (click)="onObrisi(prozor)">Obrisi</a></td>
                     </tr>
                </table>
                <div class="well text-center">Ukupno: {{ukupno}}</div>
            </div>
            <br>
            <div class="row">
                <form class="form-inline" #f="ngForm" (ngSubmit)="onSubmit(f)">
                  <div class="form-group">
                    <label for="sirina">Širina</label>
                    <input type="text" class="form-control" id="sirina" placeholder="1400" #sirina="ngModel" name="sirina" [(ngModel)]="currentProzor.sirina" required>
                  </div>
                  <div class="form-group">
                    <label for="duzina">Dužina</label>
                    <input type="text" class="form-control" id="duzina" placeholder="1200" #duzina="ngModel" name="duzina" [(ngModel)]="currentProzor.duzina" required>
                  </div>
                  <div class="form-group">
                    <label for="kolicina">Količina</label>
                    <input type="number" class="form-control" id="kolicina" placeholder="2" #kolicina="ngModel" name="kolicina" [(ngModel)]="currentProzor.kolicina" value="1" required>
                  </div>
                  <button type="submit" class="btn btn-primary" [disabled]="!f.form.valid">Izračunaj</button>
                  <span *ngIf="pomoc" id="helpBlock" class="help-block">*Sva polja moraju biti popunjena samo brojevima. Dimenzije ne mogu biti 0</span>
                </form>
            </div>
        </div>
`,
    styles: ['.form-inline .form-group {margin-left: 10px}']
})
export class AppComponent implements OnInit {
    pomoc = false;
    ukupno = 0;

    currentProzor = {
        sirina: 0,
        duzina: 0,
        kolicina: 0
    };

    prozori: Array<Prozor>;

    constructor(private prozorService: ProzoriService) {}

    ngOnInit(): any {
        this.prozori = this.prozorService.dobiProzore();
    }

    onSubmit(f) {
        if(f.invalid) {
            this.pomoc = true;
            return;
        }
        if(this.currentProzor.sirina == 0 || this.currentProzor.duzina == 0) {
            this.pomoc = true;
            return;
        }
        if(isNaN(this.currentProzor.sirina) || isNaN(this.currentProzor.duzina)) {
            this.pomoc = true;
            return;
        }
        var sirina = +this.currentProzor.sirina;
        var duzina = +this.currentProzor.duzina;
        var kolicina = +this.currentProzor.kolicina;
        //console.log(typeof sirina, sirina, typeof duzina, duzina, typeof kolicina, kolicina);
        this.prozorService.dodajProzor(sirina, duzina, kolicina);
        this.ukupno = this.prozorService.ukupniTrosak();
    }

    onUredi(prozor:Prozor) {

    }

    onObrisi(prozor:Prozor) {
        this.prozorService.obrisiProzor(Prozor);
        this.ukupno = this.prozorService.ukupniTrosak();
    }
}