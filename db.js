const { Sequelize } = require('sequelize');

// Configuration de la base de données
const sequelize = new Sequelize(
    'rev-cloud-3', // Nom de la base de données
    'mahmoud',     // Nom d'utilisateur
    '<motdepasse>', // Mot de passe (remplacez par le vôtre)
    {
        host: 'localhost', // Remplacez par l'hôte de votre base de données
        dialect: 'postgres', // Type de base de données
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        define: {
            createdAt: 'added',
            updatedAt: 'updated',
        },
    }
);

module.exports = sequelize;
