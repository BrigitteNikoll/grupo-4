const setOnLocalStorage = (store, action) => {
  switch (action.type) {
    case 'eventos/addNewEvent':
      localStorage.setItem(
        'eventos',
        JSON.stringify({ eventos: store.getState().eventos.eventos })
      );
      break;
    case 'eventos/saveEditEvent':
      localStorage.setItem(
        'eventos',
        JSON.stringify({ eventos: store.getState().eventos.eventos })
      );
      break;
    case 'shopCart/setCart':
      localStorage.setItem(
        'shopCart',
        JSON.stringify({ cart: store.getState().shopCart.cart })
      );
      break;
    case 'shopCart/updateTicketAmount':
      localStorage.setItem(
        'shopCart',
        JSON.stringify({ cart: store.getState().shopCart.cart })
      );
      break;
    case 'shopCart/removeTicketFromCart':
      localStorage.setItem(
        'shopCart',
        JSON.stringify({ cart: store.getState().shopCart.cart })
      );
      break;
    case 'usuarios/addNewUser':
      localStorage.setItem(
        'usuarios',
        JSON.stringify({ usuarios: store.getState().usuarios.usuarios })
      );
      break;

    default:
      console.log(action.type);
      break;
  }
};

export default setOnLocalStorage;
