
// Puerto
process.env.PORT = process.env.PORT || 3000;

// Enviroment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// DB
let urlDb;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDb = process.env.MONGO_URI;
} else {
    urlDb = process.env.MONGO_URI;
}

process.env.URLDB = urlDb;
