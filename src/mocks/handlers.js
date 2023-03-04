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
  rest.get('https://itx-frontend-test.onrender.com/api/product/123', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      id: '8Mjqgt5s_52Pcx5jiZ4ch',
      brand: 'Acer',
      model: 'Liquid Z410',
      price: '130',
      imgUrl: 'https://itx-frontend-test.onrender.com/images/8Mjqgt5s_52Pcx5jiZ4ch.jpg',
      networkTechnology: 'GSM / HSPA / LTE',
      networkSpeed: 'HSPA  LTE Cat4 150/50 Mbps',
      gprs: 'Yes',
      edge: 'Yes',
      announced: '2015  January',
      status: 'Available. Released 2015  February',
      dimentions: '136 x 66.7 x 9.9 mm (5.35 x 2.63 x 0.39 in)',
      weight: '145',
      sim: [
        'Single SIM (Micro-SIM) or Dual SIM (Micro-SIM',
        'dual stand-by)',
      ],
      displayType: 'IPS LCD capacitive touchscreen  16M colors',
      displayResolution: '4.5 inches (~61.5% screen-to-body ratio)',
      displaySize: '540 x 960 pixels (~245 ppi pixel density)',
      os: 'Android 4.4.4 (KitKat)',
      cpu: 'Quad-core 1.3 GHz Cortex-A53',
      chipset: 'Mediatek MT6732M',
      gpu: 'Mali-T760MP2',
      externalMemory: 'microSD  up to 32 GB (dedicated slot)',
      internalMemory: [
        '8 GB',
      ],
      ram: '1 GB RAM',
      primaryCamera: [
        '5 MP',
        'autofocus',
        'LED flash',
      ],
      secondaryCmera: '2 MP',
      speaker: 'Yes dual speakers',
      audioJack: 'Yes',
      wlan: [
        'Wi-Fi 802.11 b/g/n',
        'hotspot',
      ],
      bluetooth: [
        '4.0',
        'A2DP',
      ],
      gps: 'Yes with A-GPS',
      nfc: '',
      radio: 'FM radio',
      usb: 'microUSB 2.0',
      sensors: [
        'Accelerometer',
        'proximity',
      ],
      battery: 'Removable Li-Po 2000 mAh battery',
      colors: [
        'Black',
      ],
      options: {
        colors: [
          {
            code: 1000,
            name: 'Black',
          },
        ],
        storages: [
          {
            code: 2000,
            name: '8 GB',
          },
        ],
      },
    }),
  )),
  rest.post('https://itx-frontend-test.onrender.com/api/cart', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      count: 1,
    }),
  )),
];

export default handlers;
