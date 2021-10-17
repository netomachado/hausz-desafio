const axios = require('axios').default;

exports.postClientes = async (info) => {
  
  return await axios.post('https://app.omie.com.br/api/v1/geral/clientes/', 
    info)
  
};



  // body: {
  //   "call": "ListarClientes",
  //   "app_key": '1930641069357',
  //   "app_secret": '5b01c0fcab6fa1127b14d4b9c880f01d',
  //   "param": [{
  //     "pagina": 1,
  //     "registros_por_pagina": 50,
  //     "apenas_importado_api": "N"
  //   }]
  // }

  // body: {
  //   	{ "call": "ConsultarCliente",
  //      "app_key": "1930641069357",
  //      "app_secret": "5b01c0fcab6fa1127b14d4b9c880f01d",
  //      "param": [{
  //         "codigo_cliente_omie": 1917906514,
	// 	       "codigo_cliente_integracao": "43.306.831/0001-07"
  //   }]}

  // body: {
  //   	{ "call": "IncluirCliente",
  //      "app_key": "1930641069357",
  //      "app_secret": "5b01c0fcab6fa1127b14d4b9c880f01d",
  //      "param": [{
  //          "codigo_cliente_integracao": "CodigoInterno0001",
  //          "email": "primeiro@ccliente.com.br",
  //          "razao_social": "Primeiro Cliente  Ltda Me",
  //          "nome_fantasia": "Primeiro Cliente"
  //   }]}

 // body: {
  //   	{ "call": "ExcluirCliente",
  //      "app_key": "1930641069357",
  //      "app_secret": "5b01c0fcab6fa1127b14d4b9c880f01d",
  //      "param": [{
 //         "codigo_cliente_omie": 1917906514,
	// 	      "codigo_cliente_integracao": "43.306.831/0001-07"
  //   }]}


  exports.postPedidos = async (info) => {
  
    return await axios.post('https://app.omie.com.br/api/v1/produtos/pedido/', 
      info)
    
  };
  

  // body: {
  //    { "call": "ConsultarPedido",
  //      "app_key": "1930641069357",
  //      "app_secret": "5b01c0fcab6fa1127b14d4b9c880f01d",
  //      "param": [{
  //          "codigo_pedido": 25953530  
  //   }]}

  //  body: {
    //  { "call": "ListarPedidos",
    //    "app_key": "1930641069357",
    //    "app_secret": "5b01c0fcab6fa1127b14d4b9c880f01d",
    //    "param": [{
    //        "pagina": 1,
    //        "registros_por_pagina": 100,
    //        "apenas_importado_api": "N"  
    // }]}}


    
  //  body: {
    //  { "call": "IncluirPedido",
    //    "app_key": "1930641069357",
    //    "app_secret": "5b01c0fcab6fa1127b14d4b9c880f01d",
    //    "param": [{
        //   "cabecalho": {
        //     "codigo_cliente": 3792227,
        //     "codigo_pedido_integracao": "1634500275",
        //     "data_previsao": "17/10/2021",
        //     "etapa": "10",
        //     "numero_pedido": "62225",
        //     "codigo_parcela": "999",
        //     "quantidade_itens": 2
        //   },
        //   "det": [
        //     {
        //       "ide": {
        //         "codigo_item_integracao": "4422421"
        //       },
        //       "inf_adic": {
        //         "peso_bruto": 150,
        //         "peso_liquido": 150
        //       },
        //       "produto": {
        //         "cfop": "5.102",
        //         "codigo_produto": "4422421",
        //         "descricao": "Telefone Celular X",
        //         "ncm": "9403.30.00",
        //         "quantidade": 1,
        //         "tipo_desconto": "V",
        //         "unidade": "UN",
        //         "valor_desconto": 0,
        //         "valor_unitario": 200
        //       }
        //     }
        //   ],
        //   "frete": {
        //     "modalidade": "9"
        //   },
        //   "informacoes_adicionais": {
        //     "codigo_categoria": "1.01.03",
        //     "codigo_conta_corrente": 11850365,
        //     "consumidor_final": "S",
        //     "enviar_email": "N"
        //   },
        //   "lista_parcelas": {
        //     "parcela": [
        //       {
        //         "data_vencimento": "18/10/2021",
        //         "numero_parcela": 1,
        //         "percentual": 50,
        //         "valor": 100
        //       },
        //       {
        //         "data_vencimento": "28/03/2022",
        //         "numero_parcela": 2,
        //         "percentual": 50,
        //         "valor": 100
        //       }
        //     ]
        //   }
        // }]}}

    