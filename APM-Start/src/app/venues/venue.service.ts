import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IVenue } from './venue';

/* Service should always be a Singleton */
@Injectable()
export class ProductService {
    private baseUrl = 'api/venue';

    constructor(private http: Http) { }

    getVenue(): Observable<IVenue[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getProducts: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVenueById(id: number): Observable<IVenue> {
        if (id === 0) {
            return Observable.of(this.initializeVenue());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getVenue: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteProduct(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveProduct(product: IVenue): Observable<IVenue> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (product.id === 0) {
            return this.createProduct(product, options);
        }
        return this.updateProduct(product, options);
    }

    private createProduct(product: IVenue, options: RequestOptions): Observable<IVenue> {
        product.id = undefined;
        return this.http.post(this.baseUrl, product, options)
            .map(this.extractData)
            .do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateProduct(product: IVenue, options: RequestOptions): Observable<IVenue> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.http.put(url, product, options)
            .map(() => product)
            .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeVenue(): IVenue {
        // Return an initialized object
        return {
            VenueId:0,
            Name: null,
            Address1: null,
            Address2: null,
            CountryId: null,
            CityId: null
        };
    }
}
