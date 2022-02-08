const usuarios = {
  usuarios: [
    {
      id: 1,
      Nombres: 'Jorge ',
      apellidos: 'Guzman Allende',
      Correo: 'admin@gmail.com',
      contraseña: '654321',
      foto: '',
      DNI: '87654321',
      type: 'admin',
    },
    {
      id: 2,
      Nombres: 'Luis Enrique',
      apellidos: 'Rojas Sanchez',
      Correo: 'lenriquers12@gmail.com',
      contraseña: '123456',
      foto: 'https://images.generated.photos/9q0t68GuoBaa5oDdUFKwau6DTiK8QBQBj-d04m8zDqY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI5NDA2LmpwZw.jpg',
      DNI: '12345678',
      type: 'user',
    },
  ],
};

const eventos = {
  events: [
    {
      id: 1,
      title: 'Salsa Colombiana',
      img: 'https://live.staticflickr.com/3815/11566089773_767a3c6f27_b.jpg',
      lowestDate: '2022-02-14T21:00:00.000Z',
      lowestPrice: 80.0,
      category: 'Conciertos',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 80,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 120,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 160,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-14T21:00:00.000Z',
        },
        {
          date: '2022-02-15T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 2,
      title: 'Teatro chino',
      img: 'https://c.pxhere.com/photos/db/b2/opera_chinese_stage_act_culture_traditional_makeup_performance-1261363.jpg!d',
      lowestDate: '2022-02-16T21:00:00.000Z',
      lowestPrice: 45.0,
      category: 'Teatro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 45,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 60,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 75,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-16T21:00:00.000Z',
        },
        {
          date: '2022-02-17T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 3,
      title: 'Rock Alternativo',
      img: 'https://live.staticflickr.com/7908/32393579967_9b4471fc20_3k.jpg',
      lowestDate: '2022-02-10T21:00:00.000Z',
      lowestPrice: 90.0,
      category: 'Conciertos',
      description:
        'Luego de 2 años sin tener un concierto presencial, Adrián Bello vuelve con toda su banda y se presenta en el Centro de Convenciones Barranco. Todo lo que sube, Brasil, Explosion,Escondidos, entre otros, son algunos de los temas que el artistapodrá por fin tocar en vivo en un reencuentro muy especial con su público',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 60,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 90,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 120,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-10T21:00:00.000Z',
        },
        {
          date: '2022-02-11T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'C.C Barranco - Av. República de Panamá 220, Barranco',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 4,
      title: 'Vuelve el voley',
      img: 'https://live.staticflickr.com/65535/48494810371_dbe87c2d6a_h.jpg',
      lowestDate: '2022-02-14T21:00:00.000Z',
      lowestPrice: 25.0,
      category: 'Deportes',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 25,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 50,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 75,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-14T21:00:00.000Z',
        },
        {
          date: '2022-02-15T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 5,
      title: 'Eva Ayllon - en vivo',
      img: 'https://live.staticflickr.com/8568/28375523481_b1cc3b1d69_k.jpg',
      lowestDate: '2022-02-13T21:00:00.000Z',
      lowestPrice: 60.0,
      category: 'Conciertos',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 60,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 90,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 120,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-13T21:00:00.000Z',
        },
        {
          date: '2022-02-14T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 6,
      title: 'Conferencia Samsung - 2022',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Samsung%27s_Virtual_Reality_MWC_2016_Press_Conference_%2826666393696%29.jpg/1200px-Samsung%27s_Virtual_Reality_MWC_2016_Press_Conference_%2826666393696%29.jpg',
      lowestDate: '2022-02-17T21:00:00.000Z',
      lowestPrice: 50.0,
      category: 'Tecnología',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 50,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 70,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 90,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-17T21:00:00.000Z',
        },
        {
          date: '2022-02-18T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 7,
      title: 'Wiñaypacha',
      img: 'https://larepublica.pe/resizer/dQP-3xWkUCy6mPmReHtaIiz76kw=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/NUPZJOLKARFNPNKV2LIJGIOSEQ.jpg',
      lowestDate: '2022-02-11T21:00:00.000Z',
      lowestPrice: 30.0,
      category: 'Cine',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 30,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 50,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 70,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-11T21:00:00.000Z',
        },
        {
          date: '2022-02-12T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 8,
      title: 'Coldplay en Perú',
      img: 'https://live.staticflickr.com/3677/14292292232_af0fc69ccc_h.jpg',
      lowestDate: '2022-02-15T21:00:00.000Z',
      lowestPrice: 180.0,
      category: 'Conciertos',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 180,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 260,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 500,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-15T21:00:00.000Z',
        },
        {
          date: '2022-02-16T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
    {
      id: 9,
      title: 'La salud psicológica en los tiempos del Covid - 19',
      img: 'https://i.ytimg.com/vi/NvpGEjE1xU0/maxresdefault.jpg',
      lowestDate: '2022-02-14T21:00:00.000Z',
      lowestPrice: 45.0,
      category: 'Salud y Bienestar',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.',
      infoExtra: 'info',
      typeTicket: [
        {
          type: 'General',
          price: 45,
          quantity: 30,
        },
        {
          type: 'VIP',
          price: 70,
          quantity: 20,
        },
        {
          type: 'Platinum',
          price: 95,
          quantity: 10,
        },
      ],
      dates: [
        {
          date: '2022-02-14T21:00:00.000Z',
        },
        {
          date: '2022-02-15T21:00:00.000Z',
        },
      ],
      city: 'Lima',
      address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      idOwner: 2,
      ownerName: 'Concerts',
    },
  ],
};

const tickets = {
  tickets: [
    {
      id: 1,
      idUsuario: 2,
      idEvento: 2,
      quantity: 2,
      typeTicket: 'General',
      idTransaction: '1',
    },
  ],
};

const sales = {
  sales: [
    {
      id: 1,
      token: 'AB123456',
      client: 'BCP',
      cardNumber: '0123456789',
      paymentDate: '2022-02-05T21:00:00.000Z',
      cardType: 'debito',
      idUser: 2,
    },
  ],
};

const shopCart = {
  cart: [
    {
      id: 1,
      title: 'Salsa Colombiana',
      img: 'https://live.staticflickr.com/3815/11566089773_767a3c6f27_b.jpg',
      city: 'Lima',
      date: '2022-02-14T21:00:00.000Z',
      typeTicket: 'Platinum',
      price: 120.0,
      numberTickets: '1',
      idUsario: 2,
    },
    {
      id: 2,
      title: 'Rock Alternativo',
      img: 'https://live.staticflickr.com/7908/32393579967_9b4471fc20_3k.jpg',
      city: 'Arequipa',
      date: '2022-02-14T21:00:00.000Z',
      typeTicket: 'VIP',
      price: 90.0,
      numberTickets: '2',
      idUsario: 2,
    },
    {
      id: 3,
      title: 'Vuelve el voley',
      img: 'https://live.staticflickr.com/65535/48494810371_dbe87c2d6a_h.jpg',
      city: 'Lima',
      date: '2022-02-14T21:00:00.000Z',
      typeTicket: 'General',
      price: 60.0,
      numberTickets: '1',
      idUsario: 2,
    },
  ],
};

const slides = {
  slides: [
    {
      id: 1,
      title: 'Coldplay en Perú',
      date: '2022-02-15T21:00:00.000Z',
      order: 3,
      img: 'https://live.staticflickr.com/3677/14292292232_af0fc69ccc_h.jpg',
    },
    {
      id: 2,
      title: 'Eva Ayllon - en vivo',
      date: '2022-02-13T21:00:00.000Z',
      order: 1,
      img: 'https://live.staticflickr.com/8568/28375523481_b1cc3b1d69_k.jpg',
    },
    {
      id: 3,
      title: 'Conferencia Samsung - 2022',
      date: '2022-02-17T21:00:00.000Z',
      order: 2,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Samsung%27s_Virtual_Reality_MWC_2016_Press_Conference_%2826666393696%29.jpg/1200px-Samsung%27s_Virtual_Reality_MWC_2016_Press_Conference_%2826666393696%29.jpg',
    },
  ],
};

const mockDB = {
  usuarios,
  eventos,
  tickets,
  sales,
  shopCart,
  slides,
};

export default mockDB;
