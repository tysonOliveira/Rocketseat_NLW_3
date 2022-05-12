import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1605800142641 implements MigrationInterface {

   // Cria uma tabela
   // Realiza alterações, cria campo, deleta algum campo
   public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(new Table({
         name: 'orphanages', // Nome que a tabela vai ter no banco de dados
         columns: [
            {
               name: 'id',                      // A primeira coluna será o id do orfanato
               type: 'integer',                 // Vai ser do tipo inteiro
               unsigned: true,                  // Só permite numeros positivos
               isPrimary: true,                 // Vai indicar que essa coluna é a chave primária
               isGenerated: true,               // a coluna vai ser gerada automaticamente
               generationStrategy: 'increment', // auto increment
            },
            {
               name: 'name',          // Nome do orfanato (nome da coluna)
               type: 'varchar'        // Campo de string curto
            },
            {
               name: 'latitude',
               type: 'decimal',
               scale: 10,
               precision: 2, 
            },
            {
               name: 'longitude',
               type: 'decimal',
               scale: 10,
               precision: 2, 
            },
            {
               name: 'about',
               type: 'text',
            },
            {
               name: 'instructions',
               type: 'text',
            },
            {
               name: 'opening_hours',          
               type: 'varchar'        
            },
            {
               name: 'open_on_weekends',
               type: 'boolean',
               default: false, 
            },
         ],
      }))
   }

   // Desfaz o que foi feito no up
   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orphanages')
   }

}
