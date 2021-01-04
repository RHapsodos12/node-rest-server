
// Puerto
process.env.PORT = process.env.PORT || 3000;

// Enviroment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// DB
let urlDb;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDb = 'mongodb+srv://santacruz:rhapsodos12@testcluster.shgyv.mongodb.net/cafe?retryWrites=true&w=majority'
} else {
    urlDb = 'mongodb+srv://santacruz:rhapsodos12@testcluster.shgyv.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDb;
