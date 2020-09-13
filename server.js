const express = require('express');
const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello Worlddd');
// });
app.get('/', (req, res) => {
  res.send([
    {
      id: '0',
      title: 'ZBC PHARMACY',
      barcode: '12345',
      picture: {
        uri: 'https://i.ibb.co/Stpswg9/COUPON0.png',
      },

      content: ' HANDBRAKE SPAREPART PRICE : RM24',
    },
    {
      id: '1',
      title: 'ZBC PHARMACY',
      barcode: '12315',
      picture: { uri: 'https://i.ibb.co/TBN0BSC/COUPON1.png' },
      content: 'WHEELCHAIR TYRE 22,24 INCH : RM99',
    },
    {
      id: '2',
      barcode: '123152',
      title: 'ZBC PHARMACY',
      picture: {
        uri: 'https://i.ibb.co/hy549WW/COUPON2.png',
      },
      content: 'CASTOR WHEELCHAIR 8IN NARROW : RM33',
    },

    {
      id: '3',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: { uri: 'https://i.ibb.co/QrXSrbd/COUPON3.png' },
      content: 'MAG WHEEL & FF TYRE 16IN : RM130',
    },

    {
      id: '4',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: { uri: 'https://i.ibb.co/LvF4BJf/COUPON4.png' },
      content: 'PART-ARMREST PAD 10IN RUBBER : RM31',
    },

    {
      id: '5',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: { uri: 'https://i.ibb.co/dGm7Mvq/COUPON5.png' },
      content: 'PART-6/8IN RUBBER TIP (2PCS) : RM8.60',
    },

    {
      id: '6',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: { uri: 'https://i.ibb.co/C91Q8hb/COUPON6.png' },
      content: 'FOOTPLATE PLASTIC FOR WHEELCHAIR (1PAIR) : RM66',
    },
  ]);
});
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});
//PORT

const port = process.env.PORT || 3400;
app.listen(port, () => console.log('Listening on port ${port}..'));
