/**
 * @fileoverview Dia 05 - Componentes, Data Binding & Módulos
 * @description Exercícios práticos de Angular com tema RPG
 *
 * 📋 INSTRUÇÕES:
 * 1. Complete os exercícios marcados com "// TODO:"
 * 2. Consulte o arquivo "exercicios.md" para as instruções detalhadas
 * 3. Execute este arquivo com:
 *    🚀 FÁCIL: npm run exemplos:dia05 (na raiz do projeto)
 *    🔧 MANUAL: cd docs/semana-01/dia-05 && npx ts-node exemplos.ts
 * 4. Use o arquivo "README.md" como referência teórica
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// =============================================================================
// 📝 SEÇÃO 1: MODELAGEM DO COMPONENTE PERSONAGEM
// =============================================================================

// TODO 1: Interface para personagem
interface Personagem {
  id: number; // number
  nome: string; // string
  nivel: number; // number
  classe: string; // string
  imagem: string; // string (URL)
  habilidades: string[]; // string[]
  experiencia: number; // number
}

// TODO 2: Exemplo de personagem
const personagemExemplo: Personagem = {
  id: 1,
  nome: 'Aegis',
  nivel: 42,
  classe: 'Guerreiro',
  imagem: 'https://rpg-avatar.com/aegis.png',
  habilidades: ['Ataque Duplo', 'Defesa de Ferro', 'Fúria'],
  experiencia: 98765,
};

// =============================================================================
// 🔗 SEÇÃO 2: SIMULAÇÃO DE DATA BINDING
// =============================================================================

// TODO 3: Função para exibir status do personagem (interpolação)
function exibirStatus(personagem: Personagem): void {
  // Exemplo:
  // console.log(`Nome: ${personagem.nome} | Classe: ${personagem.classe} | Nível: ${personagem.nivel}`);
  console.log(
    `Nome: ${personagem.nome} | Classe: ${personagem.classe} | Nível: ${personagem.nivel}`
  );
}

// TODO 4: Função para editar nível do personagem (two-way binding)
function editarNivel(personagem: Personagem, novoNivel: number): void {
  // Exemplo:
  // personagem.nivel = novoNivel;
  personagem.nivel = novoNivel;
}

// TODO 5: Função para atacar (event binding)
function atacar(personagem: Personagem): void {
  // Exemplo:
  // console.log(`${personagem.nome} atacou!`);
  console.log(`${personagem.nome} atacou!`);
}

// TODO 6: Função para formatar experiência (pipe)
function formatarExperiencia(exp: number): string {
  // Exemplo:
  // return exp.toLocaleString();
  return exp.toLocaleString();
}

// TODO 7: Função para mostrar "Herói Lendário" (diretiva ngIf)
function mostrarHeroiLendario(personagem: Personagem): boolean {
  // Exemplo:
  // return personagem.nivel > 40;
  return personagem.nivel > 40;
}

// =============================================================================
// 🧪 SEÇÃO 3: TESTES E SIMULAÇÕES
// =============================================================================

function executarTestes(): void {
  console.log('🧪 === TESTES DIA 05 ===');
  // TODO: Testar exibirStatus
  // TODO: Testar editarNivel
  // TODO: Testar atacar
  // TODO: Testar formatarExperiencia
  // TODO: Testar mostrarHeroiLendario
  exibirStatus(personagemExemplo);
  editarNivel(personagemExemplo, 20);
  atacar(personagemExemplo);
  formatarExperiencia(10);
  mostrarHeroiLendario(personagemExemplo);

  console.log('✅ Testes concluídos!');
}

// 🔥 Descomente para executar os testes:
executarTestes();

export {
  Personagem,
  personagemExemplo,
  exibirStatus,
  editarNivel,
  atacar,
  formatarExperiencia,
  mostrarHeroiLendario,
};
