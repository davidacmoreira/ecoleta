import {Request, Response} from 'express';
import knex from '../database/connection';
import config from '../config/config.json';

class PointsController {
    async index(request: Request, response: Response) {
        const { country, city, items } = request.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('country', String(country))
            .where('city', String(city))
            .distinct()
            .select('points.*');
        
        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `http://${config.HOST_SERVER}:${config.PORT_SERVER}/uploads/${point.image}`,
            };
        });

        if (serializedPoints) {
            return response.json(serializedPoints);
        } else {
            return response.status(204).json();
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if(!point) {
            return response.status(400).json({ message: 'point not found' });
        }
        
        const serializedPoint = {
            ...point,
            image_url: `http://${config.HOST_SERVER}:${config.PORT_SERVER}/uploads/${point.image}`,
        };

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point: serializedPoint, items });
    }

    async create(request: Request, response: Response) {
        const {
            name, email, whatsapp, country, city, latitude, longitude, items
        } = request.body;
    
        const trx = await knex.transaction();

        const point = {
            image: request.file.filename, 
            name, email, whatsapp, country, city, latitude, longitude
        }
    
        const ids = await trx('points').insert(point);
    
        const point_id = ids[0];
    
        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
                return {
                    item_id,
                    point_id: ids[0],
                }
            }
        );
    
        await trx('point_items').insert(pointItems);

        await trx.commit();
    
        return response.json({
            id: point_id,
            ...point,
        });
    }
}

export default PointsController;
