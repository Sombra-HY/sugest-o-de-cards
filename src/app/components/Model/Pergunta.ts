export type Resposta = {
  id: number;         // novo campo de identificação única
  texto: string;
  tipo: string;
  pontos: number;
};

export type Pergunta = {
  id: number;         // novo campo de identificação única
  pergunta: string;
  respostas: Resposta[];
};
