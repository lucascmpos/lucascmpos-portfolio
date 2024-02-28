import React, { useState } from "react";

const Experience = () => {
  const experiencias = [
    {
      id: 1,
      logo: "",
      titulo: "Desenvolvedor Front-End & AWS Cloud",
      subtitulo: "Compass UOL",
      descricao:
        "Durante 5 meses, foram feitos diversos cursos de desenvolvimento, metodologias ágeis e AWS Cloud, contendo projetos reais e avaliações durante um programa de bolsas, após isso, fui efetivado e atuei na Compass dentro do seu parceiro Livelo, onde pratiquei metodologias ágeis como Scrum e Kanban, desenvolvi, modifiquei, testei componentes do Storybook do Livelo App (Web/Mobile) utilizando React TS, React Native, Styled Components, SASS, Storybook e Figma.",
      data: "28/11/2022 - 02/09/2023 - 11 Meses",
    },
    {
      id: 2,
      logo: "",
      titulo: "Auxiliar de Help Desk",
      subtitulo: "Webby Internet",
      descricao:
        "Como estagiário em um provedor de internet atuei atendendo o público, prestando suporte interno e externo através de um sistema ERP, configurando redes de internet (IPV4/IPV6, DNS, MTU) de roteadores e modens com uma solução técnica e rápida de problemas de infraestrutura de hardware, rede e segurança.",
      data: "05/06/2021 - 05/12/2021 - 6 Meses",
    },
  ];

  return (
    <div
      id="exp"
      className="bg-[#020211] flex flex-col p-48 justify-center gap-20 items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-gray-200 text-4xl font-bold">Experiência</h1>
      </div>
      <div className="flex flex-col bg-gray-900 gap-10 p-56 rounded-md items-center justify-center">
        <div className="flex flex-row  w-80 items-center justify-center gap-5 ">
          <h1>Logo da empresa</h1>
          <h1 className="font-bold text-gray-300">Nome da empresa</h1>
        </div>
        <div className="flex flex-row gap-10">
          <h2 className="font-semibold text-gray-300">Nome do cargo</h2>
          <h2 className="font-semibold text-gray-300">Tempo de empresa</h2>
        </div>
        <p className="text-gray-300">Descrição da vaga</p>
      </div>
    </div>
  );
};

export default Experience;
