import { Component } from '@angular/core';
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
                     <tr>
                        <td>1</td>
                        <td>1200x1000 mm</td>
                        <td>500 HRK</td>
                        <td>2</td>
                        <td>2800 HRK</td>
                        <td><a class="btn btn-warning btn-sm">Uredi</a>  <a class="btn btn-danger btn-sm">Obrisi</a></td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>1200x1000 mm</td>
                        <td>500 HRK</td>
                        <td>2</td>
                        <td>2800 HRK</td>
                        <td><a class="btn btn-warning btn-sm">Uredi</a>  <a class="btn btn-danger btn-sm">Obrisi</a></td>
                     </tr>
                </table>
                <div class="well text-center">Ukupno: 2000 HRK</div>
            </div>
            <br>
            <div class="row">
                <form class="form-inline">
                  <div class="form-group">
                    <label for="sirina">Širina</label>
                    <input type="text" class="form-control" id="sirina" placeholder="1400">
                  </div>
                  <div class="form-group">
                    <label for="duzina">Dužina</label>
                    <input type="text" class="form-control" id="duzina" placeholder="1200">
                  </div>
                  <div class="form-group">
                    <label for="kolicina">Količina</label>
                    <input type="number" class="form-control" id="kolicina" placeholder="2">
                  </div>
                  <button type="submit" class="btn btn-primary">Izračunaj</button>
                </form>
            </div>
        </div>
`,
    styles: ['.form-inline .form-group {margin-left: 10px}']
})
export class AppComponent {
}