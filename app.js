//. app.js
var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

//. ルーティング
app.use( express.Router() );

//. スタティックファイル・フォルダの指定
app.use( express.static( __dirname + '/docs' ) );

/*
//. EJS テンプレートエンジン
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
*/

//. GET / へのハンドラ
app.get( '/', function( req, res ){
  res.render( 'index', {} );
});

//. 特定ポート番号で待受
var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
