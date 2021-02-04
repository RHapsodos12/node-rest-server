
const jwt = require('jsonwebtoken');

// Verificar token

let verificaToken = ( req, res, next ) => {

    // variable enviada en el header del request
    let token = req.query.authorization;

    jwt.verify( token, process.env.SEED, (err, decoded) => {

        if( err ) {
            return res.status(401).json({
                ok: false,
                err:{
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });

    // res.json({
    //     token
    // });

};

// Verifica admin rol

let verificaAdmin = ( req, res, next ) => {

    let usuario = req.usuario;

    // console.log(usuario.role);

    if( usuario.role != "ADMIN_ROLE"){

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es admin'
            }
        });
    }

    next();

};

module.exports = {
    verificaToken,
    verificaAdmin
};
