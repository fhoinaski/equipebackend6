'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
     
     id: {  
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
     },
     name: {  
       type: Sequelize.STRING,
       allowNull: false
     },
     email: {  
       type: Sequelize.STRING,
       allowNull: false,
       isEmail: true,
       unique: true
     },
     password: {  
       type: Sequelize.STRING,
       allowNull: false
     },
     created_at: {  
       type: Sequelize.DATE,
       allowNull: false
     },
     updated_at: {  
       type: Sequelize.DATE,
       allowNull: true
     },
     deleted_at: {  
      type: Sequelize.DATE,
      allowNull: true
    }
     });
 
   },
 
   async down (queryInterface, Sequelize) { 
     await queryInterface.dropTable('usuarios');
   }
 };
 