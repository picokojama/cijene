"use strict";
var Prozor = (function () {
    function Prozor(sirina, duzina, komada) {
        this.sirina = sirina;
        this.duzina = duzina;
        this.komada = komada;
        this.cijenaJednog = this.sirina * this.duzina;
        this.ukupnaCijena = this.cijenaJednog * this.komada;
    }
    return Prozor;
}());
exports.Prozor = Prozor;
//# sourceMappingURL=prozor.js.map