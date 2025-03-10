const questions = [
  'Planejo uma carreira para mim próprio(a) e, regularmente, faço a sua revisão no sentido de atingir os objetivos traçados.',

  'Considero desenvolver a minha prática de enfermagem de forma autónoma com os conhecimentos e experiencias adequadas.',

  'Expresso a minha discordância com uma indicação médica de dar alta a um doente sem apoio (seguimento) de enfermagem se o ensino ao doente não estiver completo.',

  'Inicio uma pesquisa de enfermagem para investigar sobre um problema de enfermagem clínico recorrente.',

  'Recuso-me a administrar uma medicação contra indicada apesar da insistência do médico para que esta seja administrada.',

  'Aconselho-me com o médico do doente caso este não esteja a responder ao plano de tratamento.',

  'Dependo da profissão de enfermagem e não dos médicos para a decisão final do que faço como enfermeiro.',

  'Avalio as necessidades do doente hospitalizado sobre os cuidados de enfermagem a prestar no domicílio e determino da sua real necessidade sem esperar pela indicação do médico.',

  'Proponho ao meu superior hierárquicas alterações nas minhas funções profissionais de modo a desenvolver novas competências.',

  'Respondo às perguntas do doente sobre a nova medicação, ou alteração da mesma, antes de administrar o medicamento, quer isto tenha sido feito ou não pelo médico anteriormente.',

  'Instituo a visita de enfermagem na unidade dos doentes.',

  'Recuso administar um medicamento que seja contra indicado ao doente apesar da insistência dos colegas enfermeiros para concretizar a ordem médica.',

  'Consulto outros enfermeiros quando um doente não está a responder ao plano de cuidados de enfermagem.',

  'Habitualmente implemento as inovações nos cuidados ao doente identificados na literatura de enfermagem mais atualizada.',

  'Inicio o pedido de consulta de psiquiatria com o médico do doente se a minha avaliação do doente indicar tal necessidade.',

  'Promovo atividades de enfermagem inovadoras tais como chamadas telefónicas de acompanhamento a doentes a quem foi dado alta recentemente, para avaliar a efetividade do ensino ao doente.',

  'Avalio o nível de compreensão do doente referente ao procedimento diagnóstico e seus riscos antes de consultar o médico do doente caso este tenha dúvidas sobre os riscos do procedimento.',

  'Assumo total responsabilidade dos meus atos profissionais sem esperar ser protegido(a) pelo médico ou hospital no caso de uma situação de má prática.',

  'Desenvolvo canais de comunicação eficientes na instituição empregadora para a entrada de enfermeiros (as) tendo em conta as normas que afetam os cuidados aos doentes.',

  'Desenvolvo e aperfeiçoo instrumentos de avaliação apropriados à área da minha prática clínica.',

  'Registo no quadro dos doentes a data da minha avaliação física do doente para usar na planificação e implementação de cuidados de enfermagem.',

  'Inicio o planeamento da alta do doente no que diz respeito aos cuidados de enfermagem do doente mesmo na ausência do plano de alta do médico.',

  'Comunico ao Diretor ou administrador um médico que me incomode.',

  'Informo o administrador no que diz respeito ao projeto de uma nova unidade de enfermagem ou à compra de equipamentos para ser usado pelos enfermeiros (as).',

  'Preencho a avaliação psicossocial de cada doente e uso esta informação na formulação dos cuidados de enfermagem.',

  'Adapto os instrumentos de avaliação de outras disciplinas para usar na minha prática clínica.',

  'Realizo os cuidados ao doente, utilizando o meu juízo profissional para satisfazer as necessidades individuais do doente mesmo quando isso signifique afastar-me do instituído pelo manual de procedimentos do hospital.',

  'Rejeito uma transferência temporária para uma unidade de especialidade quando não possuo formação e experiencia para concretizar as exigências das novas funções.',

  'Estabeleço contatos com os serviços sociais e dietéticos a pedido do doente, mesmo sem indicação médica.',

  'Dou indicação para aumentar a frequência de avaliação dos sinais vitais de um doente cuja condição se está a deteriorar mesmo na ausência de indicação médica para aumentar a frequência desta monitorização.',

  // Adicione todas as 16 perguntas aqui
].map((question, index) => `${index + 1} - ${question}`);
const weights = [
  3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 2, 1, 1, 2, 1, 3, 2, 2, 2, 1, 2, 2, 1, 1,
  2, 3, 1, 1,
];

const options = [
  'Muito improvável atuar desta forma',
  'Improvável atuar desta forma',
  'Provável atuar desta forma',
  'Muito provável atuar desta forma',
];
