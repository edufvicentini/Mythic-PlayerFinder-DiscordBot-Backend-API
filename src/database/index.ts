import mongoose from 'mongoose';

const db_uri = process.env.DB_URI as string;

async function MongoDBConnect() {
    const connect = mongoose.connect(db_uri);

    console.log('Banco de Dados Conectado');

    return connect;
}

export { MongoDBConnect };
