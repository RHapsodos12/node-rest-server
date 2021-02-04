
// Puerto
process.env.PORT = process.env.PORT || 3000;

// Enviroment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// Vencimiento
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed
process.env.SEED = process.env.SEED || 'secret'; 

// DB
let urlDb;

if ( process.env.NODE_ENV === 'dev' ) {
    
    urlDb = 'mongodb+srv://santacruz:rhapsodos12@testcluster.shgyv.mongodb.net/cafe?retryWrites=true&w=majority';
} else {
    urlDb = process.env.MONGO_URI;
}

process.env.URLDB = urlDb;
