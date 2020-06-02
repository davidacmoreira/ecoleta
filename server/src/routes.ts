import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http:localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    const {
        name, email, whatsapp, city, latitude, longitude, items
    } = request.body;

    const trx = await knex.transaction();

    const ids = await trx('points').insert({
        image:'fake', name, email, whatsapp, city, latitude, longitude
    });

    const point_id = ids[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id: ids[0],
        }
    });

    await trx('point_items').insert(pointItems);

    return response.json({ success: true });
});

export default routes;
