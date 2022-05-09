const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const pessoaColaboradora = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const clienteTelefone = order.phoneNumber;
  const clienteEnderecoEntregaRua = order.address.street;
  const clienteEnderecoEntregaNumero = order.address.number;
  const clienteEnderecoEntregaApartamento = order.address.apartment;

  console.log(`Olá ${pessoaColaboradora}, entrega para: ${cliente}, Telefone: ${clienteTelefone}, R.${clienteEnderecoEntregaRua},\
Nº${clienteEnderecoEntregaNumero}, AP: ${clienteEnderecoEntregaApartamento}`);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const cliente = order.buyer = 'Luiz Silva'
  const pizza = Object.keys(order.order.pizza)
  const bebida = order.order.drinks.coke.type
  const newSum = order.payment.total = '50,00'
  console.log (`Olá ${cliente}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida} é de R$ ${newSum}`)  
};

orderModifier(order);

