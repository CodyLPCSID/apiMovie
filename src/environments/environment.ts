// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MOVIE_API_KEY : 'b6aeb3ece0d12122656a309c7613fec1',
  MOVIE_API_URL_TOP_RATED : 'https://api.themoviedb.org/3/movie/top_rated?api_key=',
  MOVIE_API_URL_UPCOMING : 'https://api.themoviedb.org/3/movie/upcoming?api_key=',
  MOVIE_API_URL_SEARCH : 'https://api.themoviedb.org/3/search/movie?api_key='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
