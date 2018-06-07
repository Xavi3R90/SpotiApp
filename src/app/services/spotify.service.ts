import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Listo');
   }

   getQuery( query: string ){

     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
       'Authorization':'Bearer BQBE3q7ONddAZUJE2_W4y9STbmK9S34DdtiVMuDGtapqsDz6FP0ztLe9vpYSjNxGyNEZf5zU_rgHuIJs3N0'
     });

     return this.http.get(url, {headers});

   }

   getNewReleases() {

     // const headers = new HttpHeaders({
     //   'Authorization':'Bearer BQD7QXqw1IUJTmSYnD6vvoW9lMOuLlEbpavrKgKGQ4SGzYi1FeTXLRSzfhhUpDkXPkeb8_ruY8jBZ0Eglh8'
     // });

     // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
     //            .pipe( map( data => data['albums'].items ) );

     return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ) );

   }

   getArtistas( termino: string ){

     // const headers = new HttpHeaders({
     //   'Authorization':'Bearer BQD7QXqw1IUJTmSYnD6vvoW9lMOuLlEbpavrKgKGQ4SGzYi1FeTXLRSzfhhUpDkXPkeb8_ruY8jBZ0Eglh8'
     // });
     //
     // return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers })
     //            .pipe( map( data =>  data['artists'].items ) );

     return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
                .pipe( map( data =>  data['artists'].items ));

   }


   getArtista( id: string ){

     return this.getQuery(`artists/${ id }`)
                .pipe( map( data =>  data['artists'].items ));

   }




}
