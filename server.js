const express = require( 'express' );
const app = express();

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( request, response ){
    let name = "Alfredo";
    let hobbies = ['Program', 'Teach'];
    let obj = {
        name,
        hobbies
    };

    response.render( 'index', obj );
});

app.get( '/hobbies',  function( request, response ){
    let name = "Alfredo";
    let hobbies = ['Program', 'Teach'];
    let obj = {
        name,
        hobbies
    };
    response.status( 200 ).json( obj );
});

app.listen( 8080, function(){
    console.log( 'This server is running in port 8080.' );
});

/*
const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer( function( request, response ){
    if( request.url === "/" ){
        fs.readFile( 'index.html', 'utf-8', function( errors, contents ){
            response.writeHead( 200, {'Content-Type' : 'text/html'} );
            response.write( contents );
            response.end();
        });
    }
    else{
        response.writeHead( 404 );
        response.end( "Route Not Found!" );
    }
});

server.listen( 8080 );
*/

// npm install -g nodemon