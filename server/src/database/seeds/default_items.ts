import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'lamps', image: 'lamps.svg' },
        { title: 'batteries', image: 'batteries.svg' },
        { title: 'paper', image: 'paper.svg' },
        { title: 'eletronics', image: 'eletronics.svg' },
        { title: 'organic', image: 'organic.svg' },
        { title: 'oil', image: 'oil.svg' },
    ]);
}