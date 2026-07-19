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

## 4. Usuários

### Usuário principal

Profissionais da central de equipamentos serão responsáveis por consultar e cadastrar equipamentos, bem como registrar empréstimos e devoluções.

### Usuário secundário

Gestores e profissionais da engenharia clínica poderão acompanhar a disponibilidade, a localização e o histórico dos equipamentos.

## 5. Escopo do MVP

A primeira versão do PulseOps deverá permitir:

- visualizar indicadores gerais dos equipamentos agrupados por status;
- buscar equipamentos por nome, patrimônio ou número de série;
- filtrar equipamentos por status e setor;
- cadastrar equipamentos;
- consultar os dados, o status e a localização de cada equipamento;
- registrar empréstimos para um setor;
- registrar devoluções;
- atualizar automaticamente o status e a localização após cada movimentação;
- visualizar o histórico de movimentações.

## 6. Fora do escopo

Não fazem parte desta primeira versão:

- autenticação e controle de perfis de acesso;
- integração automática com planilhas;
- armazenamento em banco de dados remoto;
- implantação real na AWS;
- assinatura ou identificação de colaboradores;
- gestão de ordens de serviço e manutenção preventiva;
- suporte a múltiplas empresas ou unidades.

## 7. Critérios de sucesso

O MVP será considerado concluído quando o usuário conseguir:

1. localizar um equipamento utilizando busca e filtros;
2. consultar o status e a localização atuais do equipamento;
3. registrar um empréstimo para um setor de destino;
4. visualizar a atualização automática do status e da localização;
5. registrar a devolução do equipamento;
6. consultar o histórico completo de movimentações;
7. executar o fluxo principal em computador e celular sem perda de informações.

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

Nesta primeira versão, os dados serão simulados e poderão ser armazenados no `localStorage`.

A arquitetura de uma possível implantação em nuvem será representada no draw.io, utilizando serviços da AWS.

Os custos dessa arquitetura serão estimados por meio da AWS Pricing Calculator, sem realizar uma implantação real.

## 10. Entregáveis

Ao final do desenvolvimento, o projeto deverá apresentar:

- project brief;
- protótipo no Figma;
- MVP responsivo desenvolvido em React e TypeScript;
- código e README no GitHub;
- demonstração publicada;
- arquitetura AWS no draw.io;
- estimativas da AWS Pricing Calculator;
- estudo de caso e publicações profissionais no LinkedIn.