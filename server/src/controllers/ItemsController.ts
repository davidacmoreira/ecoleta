import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.73:3333/uploads/${item.image}`,
            };
        });

        if (serializedItems) {
            return response.json(serializedItems);
        } else {
            return response.status(204).json();
        }
    }
}

export default ItemsController;
