# PulseOps — Project Brief
> **Status:** Em desenvolvimento | **Tipo:** Estudo de caso para portfólio

## 1. Contexto

O PulseOps surgiu a partir da observação do processo de controle e movimentação de equipamentos médico-hospitalares em uma central de equipamentos vinculada à engenharia clínica.

Nesse processo, profissionais da central precisam registrar informações como identificação do equipamento, status, setor de destino e datas durante as etapas de empréstimo e devolução.

## 2. Problema identificado

Atualmente, o registro das movimentações pode depender de formulários físicos e planilhas, exigindo que as mesmas informações sejam registradas em mais de um local.

Esse cenário pode causar:

- dificuldade para identificar a localização, consultar a disponibilidade e acompanhar as devoluções;
- divergências entre o registro e a situação física do equipamento;
- retrabalho durante o registro de empréstimos, devoluções e conferência das informações.

## 3. Objetivo do MVP

O objetivo do PulseOps nesta primeira versão é permitir que profissionais da central de equipamentos consultem os equipamentos, verifiquem sua disponibilidade e localização e registrem empréstimos e devoluções em uma única interface.

A aplicação também deverá permitir a visualização do histórico de movimentações, facilitando o acompanhamento do ciclo de utilização dos equipamentos.

A devolução deverá incluir uma conferência simplificada, permitindoo indicar se o equipamento retorna ao status disponível ou se deve ser encaminhado para avaliação ou manutenção.

## 4. Usuários

### Usuário principal

Profissionais da central de equipamentos serão responsáveis por consultar e cadastrar equipamentos, bem como registrar empréstimos e devoluções.

### Usuário secundário

Gestores e profissionais da engenharia clínica poderão acompanhar a disponibilidade, a localização e o histórico dos equipamentos.

## 5. Escopo do MVP

A primeira versão do PulseOps deverá permitir:

- visualizar uma Central de Operações com indicadores dos equipamentos agrupados por status e movimentações recentes;
- buscar equipamentos por nome, patrimônio ou número de série;
- filtrar equipamentos por status e setor;
- cadastrar equipamentos;
- consultar os dados, o status e a localização de cada equipamento;
- registrar empréstimos para um setor;
- registrar devoluções por meio de um checklist simplificado;
- definir, após a devolução, se o equipamenteo ficará disponível ou será encaminhado para manutenção;
- sinalizar o tipo e a etapa da manutenção, quando aplicável;
- atualizar automaticamente o status e a localização após cada movimentação;
- visualizar o histórico de movimentações.
- realizar checklist simplificado durante a devolução;
- definir a condição do equipamento após a devolução;
- encaminhar o equipamento para disponibilidade ou manutenção;
- sinalizar o tipo e a etapa da manutenção, quando aplicável;

## 6. Fora do escopo

Não fazem parte desta primeira versão:

- autenticação e controle de perfis de acesso;
- integração automática com planilhas;
- armazenamento em banco de dados remoto;
- implantação real na AWS;
- assinatura ou identificação de colaboradores;
- gestão completa de ordens de manutenções, incluindo ordens de serviço, planejamento, execução, custos e fornecedores;
- controle de estoque, compra ou consumo de peças;
- suporte a múltiplas empresas ou unidades.

## 7. Critérios de sucesso

O MVP será considerado concluído quando o usuário conseguir:

1. localizar um equipamento utilizando busca e filtros;
2. consultar sua identificação, status e localização;
3. registrar um empréstimo de um equipamento disponível para um setor;
4. visualizar a atualização do status para emprestados e da localização para o setor de destino;
5. registrar a devolução por meio de um checklist simplificado;
6. definir se o equipamento devolvido ficará disponível ou será encaminhado para manutenção;
7. consultar o tipo e a etapa da manutenção, quando aplicável;
8. visualizar o histórico atualizado das movimentações;
9. utilizar o fluxo principal em computador e celular.

## 8. Privacidade e uso de dados

Para preservar a privacidade e evitar a exposição de informações institucionais:

- todos os dados apresentados serão fictícios;
- não serão utilizados nomes de empresas, instituições ou colaboradores;
- o sistema não armazenará informações de pacientes;
- patrimônios, números de série e setores serão criados exclusivamente para demonstração;
- os documentos analisados serão utilizados somente para compreender requisitos genéricos do processo.

## 9. Abordagem técnica

O frontend será desenvolvido utilizando React, TypeScript, Vite e Tailwind CSS.

A interface será planejada no Figma, com foco em responsividade, acessibilidade e facilidade de uso.

A identidade visual seguirá o sistema próprio do PulseOps, denominado Signal Grid, combinando precisão técnica, rastreabilidade e facilidade de leitura.

No computador, a aplicação utilizará navegação horizontal. No celular, a navegação será adaptada para o formato inferior.

A Interface seguirá um sistema visual próprio do PulseOps, com linguagem baseada em precisão técnica, rastreabilidade e facilidade de leitura.

As informações de identificação, localização, status e movimentação terão prioridade visual. Os status não dependerão apenas de cores, garantindo melhor acessibilidade.

Nesta primeira versão, os dados serão simulados e poderão ser armazenados no `localStorage`.

A arquitetura de uma possível implantação em nuvem será representada no draw.io, utilizando serviços da AWS.

Os custos dessa arquitetura serão estimados por meio da AWS Pricing Calculator, sem realizar uma implantação real.

## 10. Entregáveis

Ao final do desenvolvimento, o projeto deverá apresentar:

- project brief;
- regras de negócio documentadas;
- identidade visual e design system documentados;
- protótipo das telas no Figma;
- MVP responsivo desenvolvido em React e TypeScript;
- código e README no GitHub;
- demonstração publicada;
- arquitetura AWS no draw.io;
- estimativa de custos na AWS Pricing Calculator;
- estudo de caso e publicações profissionais no LinkedIn.
