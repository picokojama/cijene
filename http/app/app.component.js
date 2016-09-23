"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var prozori_service_1 = require("./prozori.service");
var prozor_1 = require("./prozor");
var AppComponent = (function () {
    function AppComponent(prozorService) {
        this.prozorService = prozorService;
        this.pomoc = false;
        this.ukupno = 0;
        this.currentProzor = {
            sirina: 0,
            duzina: 0,
            kolicina: 0
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.prozori = this.prozorService.dobiProzore();
    };
    AppComponent.prototype.onSubmit = function (f) {
        if (f.invalid) {
            this.pomoc = true;
            return;
        }
        if (this.currentProzor.sirina == 0 || this.currentProzor.duzina == 0) {
            this.pomoc = true;
            return;
        }
        if (isNaN(this.currentProzor.sirina) || isNaN(this.currentProzor.duzina)) {
            this.pomoc = true;
            return;
        }
        var sirina = +this.currentProzor.sirina;
        var duzina = +this.currentProzor.duzina;
        var kolicina = +this.currentProzor.kolicina;
        //console.log(typeof sirina, sirina, typeof duzina, duzina, typeof kolicina, kolicina);
        this.prozorService.dodajProzor(sirina, duzina, kolicina);
        this.ukupno = this.prozorService.ukupniTrosak();
    };
    AppComponent.prototype.onUredi = function (prozor) {
    };
    AppComponent.prototype.onObrisi = function (prozor) {
        this.prozorService.obrisiProzor(prozor_1.Prozor);
        this.ukupno = this.prozorService.ukupniTrosak();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <div class=\"page-header\">\n                <h1>Ime aplikacije <small>opis</small></h1>\n            </div>\n            <br>\n            <div class=\"row\">\n                <table class=\"table\">\n                    <tr>\n                        <th>#</th>\n                        <th>Dimenzije</th>\n                        <th>Cijena jedne</th>\n                        <th>Koli\u010Dina</th>\n                        <th>Ukupna Cijena</th>\n                        <th>Akcije</th>\n                     </tr>\n                     <tr *ngFor=\"let prozor of prozori\">\n                        <td>{{prozori.indexOf(prozor)+1}}</td>\n                        <td>{{prozor.sirina}}x{{prozor.duzina}} mm</td>\n                        <td>{{prozor.cijenaJednog}} HRK</td>\n                        <td>{{prozor.komada}}</td>\n                        <td>{{prozor.ukupnaCijena}} HRK</td>\n                        <td><a class=\"btn btn-danger btn-sm\" (click)=\"onObrisi(prozor)\">Obrisi</a></td>\n                     </tr>\n                </table>\n                <div class=\"well text-center\">Ukupno: {{ukupno}}</div>\n            </div>\n            <br>\n            <div class=\"row\">\n                <form class=\"form-inline\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                  <div class=\"form-group\">\n                    <label for=\"sirina\">\u0160irina</label>\n                    <input type=\"text\" class=\"form-control\" id=\"sirina\" placeholder=\"1400\" #sirina=\"ngModel\" name=\"sirina\" [(ngModel)]=\"currentProzor.sirina\" required>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"duzina\">Du\u017Eina</label>\n                    <input type=\"text\" class=\"form-control\" id=\"duzina\" placeholder=\"1200\" #duzina=\"ngModel\" name=\"duzina\" [(ngModel)]=\"currentProzor.duzina\" required>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"kolicina\">Koli\u010Dina</label>\n                    <input type=\"number\" class=\"form-control\" id=\"kolicina\" placeholder=\"2\" #kolicina=\"ngModel\" name=\"kolicina\" [(ngModel)]=\"currentProzor.kolicina\" value=\"1\" required>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.form.valid\">Izra\u010Dunaj</button>\n                  <span *ngIf=\"pomoc\" id=\"helpBlock\" class=\"help-block\">*Sva polja moraju biti popunjena samo brojevima. Dimenzije ne mogu biti 0</span>\n                </form>\n            </div>\n        </div>\n",
            styles: ['.form-inline .form-group {margin-left: 10px}']
        }), 
        __metadata('design:paramtypes', [prozori_service_1.ProzoriService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map