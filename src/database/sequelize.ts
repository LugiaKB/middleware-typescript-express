import {Error, Sequelize} from 'sequelize';

export const sequelize = new Sequelize('dvdrental', 'postgres', '05102001', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false
});

export default () => {
    
    sequelize
        .authenticate()
        .then(() => {
            console.log("Conexão bem sucedida")
        }).catch((error: Error) => {
            console.log(`Conexão não foi bem sucedida: ${error}`)
        })
}