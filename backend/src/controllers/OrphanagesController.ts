import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';

export default {
    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude, 
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
     
        const orphanagesRepository = getRepository(Orphanage);
     
        // Cria um novo orfanato, mas não salva
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        });
     
        // O await precisa estar dentro de um bloco try catch
        try {
            // Salva o orfanato criado
               await orphanagesRepository.save(orphanage);
        } catch (error) {
            console.log(error.msg)
        }
        
     
        return response.status(201).json(orphanage);
    }
};