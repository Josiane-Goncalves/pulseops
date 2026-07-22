# PulseOps — Regras de Negócio

> **Status:** Em definição
> **Escopo:** MVP

## 1. Objetivo

Este documento define as regras que controlam os status, as localizações e as movimentações dos equipamentos no PulseOps.

As regras deverão ser utilizadas como referência para a interface, os tipos TypeScript, os dados simulados e as validações do MVP.

## 2. Conceitos principais

- **Status do equipamento:** representa sua condição operacional atual.
- **Tipo de manutenção:** informa a natureza da manutenção, quando aplicável.
- **Etapa da manutenção:** informa em qual fase do processo de manutenção o equipamento se encontra.
- **Movimentação:** registra uma alteração de localização causada por empréstimo ou devolução.

## 3. Status dos equipamentos

### 3.1 Disponível

Um equipamento disponível:

- deverá estar localizado na Central de Equipamentos;
- poderá ser selecionado para um novo empréstimo;
- não deverá possuir informações de manutenção ativa.

### 3.2 Emprestado

Um equipamento emprestado:

- deverá estar associado ao setor de destino;
- não poderá ser emprestado novamente;
- permanecerá indisponível até que sua devolução seja registrada.

### 3.3 Em manutenção

Um equipamento em manutenção:

- não poderá ser emprestado;
- deverá possuir um tipo e uma etapa de manutenção;
- deverá manter sua localização registrada separadamente;
- poderá voltar ao status disponível após a conclusão da manutenção.

## 4. Manutenção

### 4.1 Tipos de manutenção

O MVP reconhecerá os seguintes tipos:

- **Preventiva:** intervenção programada para reduzir a possibilidade de falhas;
- **Corretiva:** intervenção necessária após identificação de falha, dano ou irregularidade.

### 4.2 Etapas da manutenção

Uma manutenção ativa poderá estar em uma das seguintes etapas:

- **Aguardando avaliação:** equipamento encaminhado para análise técnica;
- **Programada:** manutenção prevista, mas ainda não iniciada;
- **Em andamento:** equipamento em atendimento técnico;
- **Aguardando peças:** atendimento interrompido até a disponibilidade de peças ou componentes.

### 4.3 Regras da manutenção

- `aguardando peças` deverá ser tratado como etapa, e não como tipo de manutenção;
- o tipo e a etapa somente deverão ser preenchidos quando o equipamento estiver em manutenção;
- ao concluir a manutenção, o equipamento poderá voltar ao status disponível;
- o MVP não controlará ordens de serviço, peças, custos, fornecedores ou responsáveis técnicos.

## 5. Empréstimo

### 5.1 Condições para registrar um empréstimo

Um empréstimo somente poderá ser registrado quando:

- o equipamento estiver cadastrado;
- o status atual for disponível;
- a localização atual for a Central de Equipamentos;
- um setor de destino válido for selecionado.

### 5.2 Resultado do empréstimo

Após a confirmação do empréstimo, o sistema deverá:

- alterar o status do equipamento para emprestado;
- alterar sua localização para o setor de destino;
- registrar a data e a hora da movimentação;
- adicionar o empréstimo ao histórico do equipamento.

### 5.3 Restrições

- equipamentos emprestados ou em manutenção não poderão ser emprestados;
- o setor de destino não poderá ser a própria Central de Equipamentos;
- cada empréstimo deverá estar relacionado a um equipamento individual;
- o MVP não registrará assinatura ou identificação do colaborador que retirou ou entregou o equipamento.

## 6. Devolução e checklist

### 6.1 Condições para registrar uma devolução

Uma devolução somente poderá ser registrada quando:

- o equipamento estiver com status emprestado;
- sua localização atual corresponder ao setor que está realizando a devolução.

### 6.2 Checklist de devolução

O checklist simplificado deverá permitir registrar:

- confirmação da identificação do equipamento;
- existência de dano visível;
- presença dos acessórios esperados;
- existência de falha ou irregularidade informada;
- necessidade identificada de manutenção preventiva;
- observação opcional, sem dados de pacientes ou colaboradores.

O checklist representa uma conferência operacional e não substitui uma avaliação técnica.

### 6.3 Resultado do checklist

Quando nenhuma irregularidade for identificada, o sistema deverá:

- alterar o status para disponível;
- alterar a localização para a Central de Equipamentos;
- remover informações de manutenção ativa, caso existam.

Quando houver dano, acessório ausente ou falha informada, o sistema deverá:

- alterar o status para em manutenção;
- definir o tipo como corretiva;
- definir a etapa inicial como aguardando avaliação;
- registrar a localização em que o equipamento foi recebido.

Quando for indicada apenas a necessidade de manutenção preventiva, o sistema deverá:

- alterar o status para em manutenção;
- definir o tipo como preventiva;
- definir a etapa inicial como programada.

Caso uma irregularidade corretiva e uma necessidade preventiva sejam identificadas simultaneamente, a manutenção corretiva terá prioridade no MVP.

### 6.4 Resultado da devolução

Após a confirmação, o sistema deverá:

- registrar a data e a hora;
- registrar a localização de origem e a nova localização;
- adicionar a devolução ao histórico do equipamento;
- impedir uma nova devolução enquanto o equipamento não for emprestado novamente.

## 7. Atualização da manutenção

### 7.1 Entrada em manutenção

Um equipamento disponível poderá ser encaminhado manualmente para manutenção por meio da tela de detalhes.

Um equipamento emprestado somente poderá ser encaminhado para manutenção durante o processo de devolução.

Ao iniciar uma manutenção, o sistema deverá exigir:

- tipo da manutenção;
- etapa inicial;
- localização atual do equipamento.

### 7.2 Transições permitidas

As etapas poderão seguir estas transições:

- programada para em andamento;
- aguardando avaliação para em andamento;
- aguardando avaliação para aguardando peças;
- em andamento para aguardando peças;
- aguardando peças para em andamento.

As etapas somente poderão ser alteradas quando o status do equipamento for em manutenção.

### 7.3 Conclusão da manutenção

Para concluir uma manutenção, o sistema deverá:

- confirmar que o equipamento está em manutenção;
- impedir a conclusão enquanto a etapa for aguardando peças;
- alterar o status para disponível;
- alterar a localização para a Central de Equipamentos;
- remover o tipo e a etapa da manutenção ativa.

Após a conclusão, o equipamento poderá ser emprestado novamente.

### 7.4 Limite do histórico no MVP

O histórico do MVP registrará empréstimos e devoluções.

As alterações internas das etapas da manutenção não serão tratadas como movimentações. Um histórico técnico completo de manutenção ficará para uma versão futura.

## 8. Transições de status

| Status atual | Ação | Próximo status | Nova localização |
| --- | --- | --- | --- |
| Disponível | Registrar empréstimo | Emprestado | Setor de destino |
| Disponível | Encaminhar para manutenção | Em manutenção | Local selecionado |
| Emprestado | Devolver sem irregularidade | Disponível | Central de Equipamentos |
| Emprestado | Devolver com irregularidade | Em manutenção | Local de recebimento |
| Emprestado | Devolver para preventiva | Em manutenção | Local de recebimento |
| Em manutenção | Concluir manutenção | Disponível | Central de Equipamentos |

### 8.1 Transições proibidas

- um equipamento emprestado não poderá receber um novo empréstimo;
- um equipamento em manutenção não poderá ser emprestado;
- um equipamento disponível não poderá receber uma devolução;
- um equipamento emprestado não poderá voltar para disponível sem uma devolução;
- um equipamento em manutenção não poderá ser marcado como emprestado diretamente;
- o status não deverá ser alterado livremente por um campo de seleção.

## 9. Registro das movimentações

### 9.1 Informações comuns

Todo empréstimo ou devolução deverá registrar:

- identificador único da movimentação;
- identificador do equipamento;
- tipo da movimentação;
- localização de origem;
- localização de destino;
- data e hora da ocorrência;
- status resultante do equipamento.

A data e a hora deverão ser geradas pelo sistema no momento da confirmação.

### 9.2 Empréstimo

Uma movimentação de empréstimo deverá registrar:

- equipamento emprestado;
- Central de Equipamentos como origem;
- setor selecionado como destino;
- status resultante como emprestado.

### 9.3 Devolução

Uma movimentação de devolução deverá registrar:

- equipamento devolvido;
- setor atual como origem;
- localização de recebimento como destino;
- resultado do checklist;
- status resultante como disponível ou em manutenção;
- tipo e etapa inicial da manutenção, quando aplicável.

### 9.4 Integridade do histórico

- cada movimentação deverá pertencer a somente um equipamento;
- as localizações deverão ser selecionadas entre registros existentes;
- movimentações confirmadas não poderão ser excluídas no MVP;
- movimentações confirmadas não poderão ser editadas no MVP;
- correções de histórico e auditoria completa ficarão para uma versão futura.

## 10. Localizações

O PulseOps utilizará o conceito de localização para representar onde um equipamento se encontra.

Uma localização poderá ser classificada como:

- **Central de Equipamentos:** origem dos empréstimos e destino das devoluções sem irregularidades;
- **Setor assistencial:** local para o qual um equipamento poderá ser emprestado;
- **Área de manutenção:** local destinado a equipamentos em avaliação ou manutenção.

### 10.1 Regras das localizações

- todo equipamento deverá possuir uma localização atual;
- cada localização deverá possuir um identificador único e um nome;
- o MVP deverá possuir somente uma Central de Equipamentos;
- equipamentos disponíveis deverão estar na Central de Equipamentos;
- equipamentos emprestados deverão estar em um setor assistencial;
- equipamentos em manutenção poderão estar na Central ou em uma área de manutenção;
- empréstimos somente poderão ter um setor assistencial como destino;
- as localizações utilizadas no histórico não poderão ser nomes digitados livremente;
- assistências externas e múltiplas unidades ficarão para versões futuras.

### 10.2 Decisão de modelagem

O domínio utilizará `Location` em vez de `Sector`, pois Central de Equipamentos e Área de Manutenção também são localizações, mas não são necessariamente setores assistenciais.

## 11. Validações gerais

### 11.1 Cadastro do equipamento

- o identificador interno deverá ser único e gerado pelo sistema;
- nome, marca, modelo e patrimônio serão obrigatórios;
- o número de patrimônio deverá ser único;
- o número de série poderá ser opcional;
- quando informado, o número de série não poderá estar associado a outro equipamento;
- cada cadastro representará somente um equipamento físico;
- equipamentos com histórico não poderão ser excluídos no MVP.

### 11.2 Consistência do estado

O sistema não deverá permitir:

- equipamento disponível fora da Central de Equipamentos;
- equipamento emprestado sem setor de destino;
- equipamento em manutenção sem tipo e etapa;
- informações de manutenção ativa em equipamento disponível ou emprestado;
- empréstimo com origem e destino iguais;
- devolução de equipamento que não esteja emprestado;
- alteração direta do status sem uma ação de negócio correspondente.

### 11.3 Checklist

- todos os itens objetivos do checklist deverão ser respondidos;
- somente a observação será opcional;
- a observação não poderá conter dados de pacientes ou colaboradores;
- o resultado deverá ser calculado antes da confirmação da devolução.

## 12. Limitações do MVP

- os dados serão armazenados somente no navegador por meio do `localStorage`;
- não haverá sincronização entre computadores ou celulares;
- a responsividade poderá ser demonstrada em diferentes dispositivos, mas os dados não serão compartilhados entre eles;
- não haverá autenticação, perfis de acesso ou uso simultâneo por vários usuários;
- o histórico registrará empréstimos e devoluções, mas não todas as alterações internas da manutenção;
- não haverá integração automática com planilhas;
- todos os dados utilizados na demonstração serão fictícios.

## 13. Possíveis evoluções futuras

Poderão ser avaliadas em versões futuras:

- banco de dados remoto e sincronização entre dispositivos;
- autenticação e perfis de acesso;
- identificação dos equipamentos por QR Code ou código de barras;
- integração ou importação de planilhas;
- auditoria completa das alterações;
- módulo completo de manutenção e ordens de serviço;
- suporte a múltiplas unidades;
- acompanhamento de assistências externas;
- notificações de empréstimos pendentes ou manutenções programadas.