// import React, { useState } from 'react';
// import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import { NavigationProp } from '../../../models/types';
// import styles from '../../../assets/styles/styles';

// const questions = [
//   'Planejo uma carreira para mim próprio(a) e, regularmente, faço a sua revisão no sentido de atingir os objetivos traçados.',

//   'Considero desenvolver a minha prática de enfermagem de forma autónoma com os conhecimentos e experiencias adequadas.',

//   'Expresso a minha discordância com uma indicação médica de dar alta a um doente sem apoio (seguimento) de enfermagem se o ensino ao doente não estiver completo.',

//   'Inicio uma pesquisa de enfermagem para investigar sobre um problema de enfermagem clínico recorrente.',

//   'Recuso-me a administrar uma medicação contra indicada apesar da insistência do médico para que esta seja administrada.',

//   'Aconselho-me com o médico do doente caso este não esteja a responder ao plano de tratamento.',

//   'Dependo da profissão de enfermagem e não dos médicos para a decisão final do que faço como enfermeiro.',

//   'Avalio as necessidades do doente hospitalizado sobre os cuidados de enfermagem a prestar no domicílio e determino da sua real necessidade sem esperar pela indicação do médico.',

//   'Proponho ao meu superior hierárquicas alterações nas minhas funções profissionais de modo a desenvolver novas competências.',

//   'Respondo às perguntas do doente sobre a nova medicação, ou alteração da mesma, antes de administrar o medicamento, quer isto tenha sido feito ou não pelo médico anteriormente.',

//   'Instituo a visita de enfermagem na unidade dos doentes.',

//   'Recuso administar um medicamento que seja contra indicado ao doente apesar da insistência dos colegas enfermeiros para concretizar a ordem médica.',

//   'Consulto outros enfermeiros quando um doente não está a responder ao plano de cuidados de enfermagem.',

//   'Habitualmente implemento as inovações nos cuidados ao doente identificados na literatura de enfermagem mais atualizada.',

//   'Inicio o pedido de consulta de psiquiatria com o médico do doente se a minha avaliação do doente indicar tal necessidade.',

//   'Promovo atividades de enfermagem inovadoras tais como chamadas telefónicas de acompanhamento a doentes a quem foi dado alta recentemente, para avaliar a efetividade do ensino ao doente.',

//   'Avalio o nível de compreensão do doente referente ao procedimento diagnóstico e seus riscos antes de consultar o médico do doente caso este tenha dúvidas sobre os riscos do procedimento.',

//   'Assumo total responsabilidade dos meus atos profissionais sem esperar ser protegido(a) pelo médico ou hospital no caso de uma situação de má prática.',

//   'Desenvolvo canais de comunicação eficientes na instituição empregadora para a entrada de enfermeiros (as) tendo em conta as normas que afetam os cuidados aos doentes.',

//   'Desenvolvo e aperfeiçoo instrumentos de avaliação apropriados à área da minha prática clínica.',

//   'Registo no quadro dos doentes a data da minha avaliação física do doente para usar na planificação e implementação de cuidados de enfermagem.',

//   'Inicio o planeamento da alta do doente no que diz respeito aos cuidados de enfermagem do doente mesmo na ausência do plano de alta do médico.',

//   'Comunico ao Diretor ou administrador um médico que me incomode.',

//   'Informo o administrador no que diz respeito ao projeto de uma nova unidade de enfermagem ou à compra de equipamentos para ser usado pelos enfermeiros (as).',

//   'Preencho a avaliação psicossocial de cada doente e uso esta informação na formulação dos cuidados de enfermagem.',

//   'Adapto os instrumentos de avaliação de outras disciplinas para usar na minha prática clínica.',

//   'Realizo os cuidados ao doente, utilizando o meu juízo profissional para satisfazer as necessidades individuais do doente mesmo quando isso signifique afastar-me do instituído pelo manual de procedimentos do hospital.',

//   'Rejeito uma transferência temporária para uma unidade de especialidade quando não possuo formação e experiencia para concretizar as exigências das novas funções.',

//   'Estabeleço contatos com os serviços sociais e dietéticos a pedido do doente, mesmo sem indicação médica.',

//   'Dou indicação para aumentar a frequência de avaliação dos sinais vitais de um doente cuja condição se está a deteriorar mesmo na ausência de indicação médica para aumentar a frequência desta monitorização.',

//   // Adicione todas as 16 perguntas aqui
// ].map((question, index) => `${index + 1} - ${question}`);

// export default function QuestionarioScreen() {
//   const navigation = useNavigation<NavigationProp>();
//   const [answers, setAnswers] = useState(Array(questions.length).fill(1));

//   const onValueChange = (questionIndex: number, answer: number) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = answer;
//     setAnswers(newAnswers);
//   };
//   const weights = [
//     3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 2, 1, 1, 2, 1, 3, 2, 2, 2, 1, 2, 2, 1,
//     1, 2, 3, 1, 1,
//   ];

//   const calculateNAS = () => {
//     let totalScore = 0;
//     for (let i = 0; i < weights.length; i++) {
//       totalScore += weights[i] * answers[i];
//     }

//     if (totalScore >= 60 && totalScore <= 120) {
//       navigation.navigate('voceConsegue');
//     } else if (totalScore > 120 && totalScore <= 180) {
//       navigation.navigate('quaseLa');
//     } else if (totalScore > 180 && totalScore <= 240) {
//       navigation.navigate('parabens');
//     }
//   };

//   return (
//     <View className={styles.screen}>
//       <ScrollView>
//         {questions.map((question, index) => (
//           <View key={index}>
//             <Text className={styles.text}>{question}</Text>
//             <Picker
//               selectedValue={answers[index]}
//               mode="dropdown"
//               onValueChange={(itemValue) => onValueChange(index, itemValue)}
//               style={p.picker}
//             >
//               <Picker.Item
//                 label="Muito improvável atuar desta forma"
//                 value={1}
//               />
//               <Picker.Item label="Improvável atuar desta forma" value={2} />
//               <Picker.Item label="Provável atuar desta forma" value={3} />
//               <Picker.Item label="Muito provável atuar desta forma" value={4} />
//             </Picker>
//           </View>
//         ))}
//         <View className="mt-6">
//           <Button title="Concluir" onPress={calculateNAS} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const p = StyleSheet.create({
//   picker: {
//     fontSize: 30,
//   },
//   // ...
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../models/types';
import styles from '../../../assets/styles/styles';
import { RadioButton } from 'react-native-paper';

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

export default function QuestionarioScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(1));
  const [selectedOption, setSelectedOption] = useState(
    'Muito improvável atuar desta forma',
  );

  const onValueChange = (option: string, index: number) => {
    const newAnswers = [...answers];
    const optionIndex = options.indexOf(option) + 1; // Converte a opção selecionada para o índice correspondente
    newAnswers[index] = optionIndex;
    setAnswers(newAnswers);
    setSelectedOption(option);
  };

  const calculateNAS = () => {
    let totalScore = 0;
    for (let i = 0; i < weights.length; i++) {
      totalScore += weights[i] * answers[i];
      // console.log(`Peso: ${weights[i]}, Resposta: ${answers[i]} \n`);
    }

    if (totalScore >= 60 && totalScore <= 120) {
      navigation.navigate('voceConsegue');
    } else if (totalScore > 120 && totalScore <= 180) {
      navigation.navigate('quaseLa');
    } else if (totalScore > 180 && totalScore <= 240) {
      navigation.navigate('parabens');
    }
  };

  return (
    <View className={styles.screen}>
      <ScrollView>
        <View>
          <Text className="text-lg p-2 text-justify font-bold">
            {questions[currentQuestionIndex]}
          </Text>
          {options.map((option, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => onValueChange(option, currentQuestionIndex)}
            >
              <View className="flex flex-row items-center p-2">
                <RadioButton
                  value={option}
                  status={selectedOption === option ? 'checked' : 'unchecked'}
                />
                <Text className="text-lg p-1">{option}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
      <View className="flex flex-row justify-between">
        <View className="justify-start w-1/2 p-2">
          {currentQuestionIndex > 0 && (
            <TouchableOpacity
              className="bg-blue-200 w-full rounded-lg p-2 border-2"
              onPress={() => {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                // Atualiza a opção selecionada para a resposta anterior ao voltar
                setSelectedOption(
                  options[answers[currentQuestionIndex - 1] - 1],
                );
              }}
            >
              <Text className="text-center text-lg font-semibold">Voltar</Text>
            </TouchableOpacity>
          )}
        </View>
        <View className="justify-end w-1/2 p-2">
          {currentQuestionIndex < questions.length - 1 ? (
            <TouchableOpacity
              className="bg-blue-200 w-full rounded-lg p-2 border-2"
              onPress={() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                // Atualiza a opção selecionada para a resposta atual ou a primeira opção se for a primeira vez na pergunta
                setSelectedOption(
                  options[
                    answers[currentQuestionIndex + 1]
                      ? answers[currentQuestionIndex + 1] - 1
                      : 0
                  ],
                );
              }}
            >
              <Text className="text-center text-lg font-semibold">Avançar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-blue-200 w-full rounded-lg p-2 border-2"
              onPress={calculateNAS}
            >
              <Text className="text-center text-lg font-semibold">
                Concluir
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
