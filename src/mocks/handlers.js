import { rest } from 'msw';

const handlers = [
  rest.get('https://itx-frontend-test.onrender.com/api/product', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([{
      id: '1234',
      brand: 'Acer',
      model: 'Iconia Talk S',
      price: '173',
      imgUrl: 'url.image',
    }, {
      id: '4567',
      brand: 'Acer',
      model: 'Iconia Talk z',
      price: '176',
      imgUrl: 'url.image',
    }]),
  )),
];

export default handlers;
