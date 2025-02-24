const tickets = {
  tickets: [
    {
      id: 1,
      idUsuario: 2,
      evento: [
        {
          idEvento: 2,
          idDate: 4,
          idCategory: 2,
          quantity: 2,
        },
      ],
      idTransaction: '1',
    },
  ],
};

const sales = {
  sales: [
    {
      id: 1,
      token: '12345678',
      numberTransaction: 'ASD54F1V8WO6H4H5',
      client: 'Luis Enrique',
      cardNumber: '369874521123654',
      paymentDate: '2022-02-15',
      cardType: 'VISA',
      idUser: 2,
      totalFare: 90,
    },
  ],
};

const shopCart = {
  cart: [],
};

const slides = {
  slides: [
    {
      id: 1,
      title: 'Coldplay en Perú',
      date: '2022-02-15',
      order: 3,
      img: 'https://live.staticflickr.com/3677/14292292232_af0fc69ccc_h.jpg',
      eventId: 8,
    },
    {
      id: 2,
      title: 'Eva Ayllon - en vivo',
      date: '2022-02-13',
      order: 1,
      img: 'https://live.staticflickr.com/8568/28375523481_b1cc3b1d69_k.jpg',
      eventId: 5,
    },
    {
      id: 3,
      title: 'Conferencia Samsung - 2022',
      date: '2022-02-17',
      order: 2,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Samsung%27s_Virtual_Reality_MWC_2016_Press_Conference_%2826666393696%29.jpg/1200px-Samsung%27s_Virtual_Reality_MWC_2016_Press_Conference_%2826666393696%29.jpg',
      eventId: 6,
    },
  ],
};

const mockDB = {
  tickets,
  sales,
  shopCart,
  slides,
};

export default mockDB;
