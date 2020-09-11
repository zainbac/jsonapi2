const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Worlddd');
});
app.get('/api/courses', (req, res) => {
  res.send([
    {
      id: '0',
      title: 'ZBC PHARMACY',
      barcode: '12345',
      picture: require('./../../../../assets/COUPON0.png'),
      content: (
        <Text style={{ textAlign: 'center' }}>
          {' '}
          HANDBRAKE SPAREPART PRICE : RM24
        </Text>
      ),
    },
    {
      id: '1',
      title: 'ZBC PHARMACY',
      barcode: '12315',
      picture: require('./../../../../assets/COUPON1.png'),
      content: <Text>WHEELCHAIR TYRE 22,24 INCH : RM99</Text>,
    },
    {
      id: '2',
      barcode: '123152',
      title: 'ZBC PHARMACY',
      picture: require('./../../../../assets/COUPON2.png'),
      content: <Text>CASTOR WHEELCHAIR 8IN NARROW : RM33</Text>,
    },
    {
      id: '3',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: require('./../../../../assets/COUPON3.png'),
      content: <Text> MAG WHEEL & FF TYRE 16IN : RM130</Text>,
    },
    {
      id: '4',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: require('./../../../../assets/COUPON4.png'),
      content: <Text>S'PART-ARMREST PAD 10IN RUBBER : RM31</Text>,
    },
    {
      id: '5',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: require('./../../../../assets/COUPON5.png'),
      content: <Text>S'PART-6/8IN RUBBER TIP (2PCS) : RM8.60</Text>,
    },
    {
      id: '6',
      barcode: '123152',
      title: 'ZBC PHARMACY ',
      picture: require('./../../../../assets/COUPON6.png'),
      content: <Text>FOOTPLATE PLASTIC FOR WHEELCHAIR (1PAIR) : RM66</Text>,
    },
  ]);
});
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});
//PORT

const port = process.env.PORT || 3400;
app.listen(port, () => console.log('Listening on port ${port}..'));
