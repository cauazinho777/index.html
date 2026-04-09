// =============================================
// LAJES LORD – products.js
// Dados de todos os produtos
// =============================================

const WHATSAPP_NUMBER = "5517981300658";

const products = {
  "ferragens-vigas": {
    title: "Ferragens – Vigas e Estribos",
    category: "Ferragens",
    img: "https://down-br.img.susercontent.com/file/c6f59b644f0e68a1b31c53a1dd9d814d",
    desc: "Trabalhamos com ferragens de alta resistência para estruturas seguras e duráveis. Nossas vigas e estribos são ideais para lajes, pilares e vigas, atendendo às normas técnicas da ABNT.",
    specs: [
      "Vigas de aço estrutural – vários bitolas",
      "Estribos prontos para uso",
      "Barras de ferro CA-50 e CA-60",
      "Corte e dobra conforme projeto",
      "Entrega em Bebedouro e região"
    ],
    waMsg: "Olá! Vim pelo site e gostaria de um orçamento de Ferragens (Vigas e Estribos). Pode me ajudar?"
  },

  "isopores": {
    title: "Isopores para Laje",
    category: "Isopor",
    img: "https://tse4.mm.bing.net/th/id/OIP.CmTKc-LuPGP4MdYWTvtokgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Isopores de alta qualidade para lajes nervuradas, proporcionando isolamento térmico e acústico, além de redução do peso estrutural. Disponíveis nos modelos H07, H10 e H16.",
    specs: [
      "Isopor H07 – altura 7 cm",
      "Isopor H10 – altura 10 cm",
      "Isopor H16 – altura 16 cm",
      "Excelente isolamento térmico",
      "Leveza para a estrutura da laje",
      "Compatível com qualquer tipo de lajota"
    ],
    waMsg: "Olá! Gostaria de fazer um orçamento de Isopores (H07, H10 e/ou H16). Pode me ajudar?"
  },

  "lajotas": {
    title: "Lajotas",
    category: "Lajotas",
    img: "https://ceramicamonaco.com.br/wp-content/uploads/2022/02/laje-trelicada-lajora-isopor-e1643715933566.jpg",
    desc: "Lajotas cerâmicas de alta qualidade para composição de lajes, utilizadas junto aos trilhos de beta e isopores. Disponíveis nas alturas H07 e H10, para laje forro e laje piso.",
    specs: [
      "Lajota H07 – altura 7 cm",
      "Lajota H10 – altura 10 cm",
      "Resistência e durabilidade garantidas",
      "Compatível com isopores e vigotas",
      "Aplicação: laje forro e laje piso"
    ],
    waMsg: "Olá! Gostaria de um orçamento de Lajotas (H07 e/ou H10). Pode me ajudar?"
  },

  "lajes": {
    title: "Lajes – Trilhos de Beta",
    category: "Lajes",
    img: "https://tse1.mm.bing.net/th/id/OIP.1d-raC5kpqEITix3vkd78QHaE6?w=834&h=553&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Trabalhamos com todos os tamanhos de lajes, utilizando trilhos de Beta para laje forro e laje piso. Fornecemos também o escoramento necessário para a instalação com segurança e qualidade.",
    specs: [
      "Beta 11 – laje leve para forro",
      "Beta 16 – uso residencial padrão",
      "Beta 20 – alta resistência estrutural",
      "Beta 25 – cargas elevadas e uso comercial",
      "Laje forro e laje piso",
      "Todos os tamanhos disponíveis",
      "Escoramento incluso",
      "Entrega e montagem na região"
    ],
    waMsg: "Olá! Gostaria de um orçamento de Lajes (Trilhos de Beta). Qual modelo e tamanho você recomenda para minha obra?"
  },

  "arames": {
    title: "Arames Recozidos",
    category: "Arame",
    img: "https://edecasasupercenter.com.br/wp-content/uploads/2022/08/2189_0.png",
    desc: "Arames recozidos de alta qualidade para amarração de ferragens e estruturas. Flexíveis e resistentes, ideais para toda obra civil.",
    specs: [
      "Arame recozido nº 18",
      "Flexibilidade superior para amarração",
      "Resistência garantida",
      "Disponível em rolos",
      "Alta durabilidade"
    ],
    waMsg: "Olá! Gostaria de um orçamento de Arames Recozidos. Pode me informar preço e disponibilidade?"
  },
     
  "viaplus": {
    title: "Viaplus 1000 e 7000",
    category: "Impermeabilizante",
    img: "https://http2.mlstatic.com/D_NQ_NP_737776-MLB53353928259_012023-O.webp",
    desc: "Impermeabilizantes Viaplus para proteção de lajes, paredes e fundações. Viaplus 1000 para impermeabilização rígida e Viaplus 7000 para aplicações em áreas com movimentação.",
    specs: [
      "Viaplus 1000 – impermeabilização rígida",
      "Viaplus 7000 – impermeabilização flexível",
      "Alta resistência à umidade",
      "Indicado para lajes, piscinas e áreas molhadas",
      "Fácil aplicação com pincel ou rolo"
    ],
    waMsg: "Olá! Gostaria de um orçamento de Viaplus (1000 e/ou 7000). Pode me ajudar?"
  },
 
  "pregos": {
    title: "Pregos",
    category: "Pregos",
    img: "https://http2.mlstatic.com/D_NQ_NP_679283-MLB50818366396_072022-O-prego-17-x-27-com-duas-cabecas-polido-qualidade-gerdau-1kg.webp",
    desc: "Pregos de alta qualidade em vários tamanhos e espessuras para toda a sua obra. Atendemos desde pequenas reformas até grandes construções.",
    specs: [
      "Várias bitolas e comprimentos",
      "Pregos com cabeça e sem cabeça",
      "Para madeira, alvenaria e concreto",
      "Vendidos por kg ou caixa",
      "Entrega em Bebedouro e região"
    ],
    waMsg: "Olá! Gostaria de um orçamento de Pregos. Quais bitolas e quantidades estão disponíveis?"
  },

  "escoramentos": {
    title: "Caixa de luz – Escoramentos para Lajes",
    category: "Escoramento",
    img: "https://tse4.mm.bing.net/th/id/OIP.c08N2j65cu6rwh5BCMzSUwHaEh?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Escoramentos para lajes de todos os tamanhos, garantindo segurança durante a concretagem. Trabalhamos com escoras metálicas e em madeira para atender a qualquer tipo de obra.",
    specs: [
      "Materiais de alta resistência",
      "Para lajes de todos os tamanhos",
      "Garantia de segurança estrutural",
      "Instalação rapida e eficiente",
      "entregammos na região de Bebedouro e proximidades"
    ],
    waMsg: "Olá! Gostaria de um orçamento de Caixa de luz – para minha laje. Pode me ajudar?"
  }
};
