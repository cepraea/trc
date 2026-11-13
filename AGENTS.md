# AGENTS.md — Diretrizes Centrais para Agentes

Nenhum agente pode editar esse arquivo.

1. A rastreabilidade também se aplica em planejamentos e execuções de tarefas e devem ser registradas para autidorias e debugs.
2. Ao executar planos ou tarefas, quando houver necessidade utilize a pasta temporária `tmp/`.
3. 

## 1. Regras de Documentação

Toda documentação deve ser criada, identificada e verificada de acordo com as seguintes diretrizes obrigatórias:

1. Requisitos Individuais do Documento: Cada documento da estrutura deve atender rigorosamente aos itens a seguir:  
   - Ter seu papel, objetivo e escopo claramente definidos;  
   - Possuir seu caminho (path) canônico;  
   - Governar as ações e comportamentos dos agentes;  
   - Fornecer o contexto mínimo e suficiente;  
   - Especificar, descrever e explicar integralmente todo o desenvolvimento;  
   - Mitigar proativamente riscos e falhas.  
2. Sustentação de Decisões: A documentação deve permitir que qualquer agente consiga determinar e sustentar com segurança:  
   - O(s) motivo(s) de uma ação ter sido executada;  
   - A(s) forma(s) de execução de uma ação;  
   - O porquê de um código ter sido escrito;  
   - O porquê da forma de escrita adotada para um código;  
   - O porquê da criação de um teste específico.  
3. Rastreabilidade Arquitetural: Criar a documentação que sustente a escrita do código, registrando qual decisão autorizou o comportamento, quais funcionalidades dependem dele e quais restrições não podem ser violadas.  
4. Integridade do Markdown: É estritamente proibido apagar comentários HTML nos arquivos Markdown.  
5. Compatibilidade de Ambiente: Não fornecer respostas ou soluções que não funcionem perfeitamente no VS Code.

## 2. Critérios para Soluções Cirúrgicas

Toda e qualquer solução proposta por agentes deve obrigatoriamente atender aos 5 requisitos essenciais abaixo:

1. Resolução Sem Gargalos: A solução deve resolver o problema atual sem criar novos gargalos, falhas ou dependências desnecessárias.  
2. Ausência de Efeitos Colaterais: Garantir que a proposta não gere impactos negativos em outras áreas do sistema ou do processo.  
3. Solução Definitiva e Limpa: Buscar uma implementação definitiva, evitando "atalhos" ou gambiarras que possam causar débitos técnicos futuros.  
4. Intervenção Cirúrgica: Corrigir pontualmente o erro sem alterar ou comprometer o funcionamento do que já está validado e funcional.
5. Processo de Autoavaliação: Antes de apresentar a resposta final, o agente deve analisar a própria solução e responder: *"Que novos problemas esta solução pode criar?"*. Caso haja qualquer risco relevante, a solução deve ser reajustada para eliminá-lo completamente antes da entrega.

## 3. Preservação de Vínculos Bidirecionais

1. Preservação de Conexões: Não alterar, sobrescrever ou quebrar nenhum vínculo bidirecional existente entre as unidades do repositório.  
2. Sincronização Dupla: Sempre que conectar uma nova unidade a uma existente, atualizar obrigatoriamente ambos os lados da relação (a nova unidade deve referenciar a antiga, e a antiga deve incluir a nova em sua lista de vínculos).  
3. Integridade de Referências: Garantir a ausência completa de referências órfãs ou duplicadas após qualquer operação de inserção ou alteração.
4. Um link nunca deve direcionar a um conteúdo inteiro de um arquivo. Ele deve ser específico e direcionar a localização do conteúdo dentro do arquivo, cirurgicamente.

## 4. Validação Obrigatória no Espaço Determinístico

1. Proibição de Autoavaliação: Os agentes de IA não devem validar o próprio trabalho com scripts valiadadores que eles mesmos criaram, ou utilizando apenas raciocínio probabilístico e inferência lógica.  
2. Uso Obrigatório do Espaço Determinístico: Toda validação deve obrigatoriamente contar com execuções no espaço determinístico, incluindo o uso de scripts, testes automatizados e verificações reais do estado do sistema.  
3. Desenvolvimento Guiado por Testes (TDD): É obrigatorio criar os testes deterministicos e automatizados antes de qualquer implementacao de codigo ou funcionalidade, garantindo a validacao previa no espaco deterministico. Essa abordagem exige um ciclo rigoroso de Red-Green-Refactor:
   1. primeiro, escreve-se um teste que falha para especificar o comportamento desejado;
   2. em seguida, implementa-se o codigo minimo necessario para que o teste passe;
   3. por fim, refatora-se o codigo mantendo a suite de testes totalmente verde.
   4. Alem disso, os testes devem cobrir cenarios de borda, falhas esperadas e integracoes entre componentes, assegurando que o sistema permaneca estavel, previsivel e protegido contra regressoes a cada nova alteracao.  
4. Matriz Completa de Testes Determinísticos: Garantir a cobertura total com testes determinísticos corretos, cobrindo cenários de sucesso, borda e falha esperada.  
5. Organização do Repositório (Árvore Completa): Manter a estrutura de arquivos e diretórios visível, organizada e documentada integralmente para auditoria e navegação rápida.  
6. Identificação de Rotas para Contexto Frugal: Mapear com precisão os caminhos e rotas necessários, permitindo carregar apenas o contexto estritamente essencial para cada execução.

## Formato de Saída

Ao responder siga as seguintes regras:

1. Suas respostas devem respeitar todas as regras do repositório,então se um recurso (arquivo:link) não funciona no Vs Code, utilize outro que funciona, pois isso impede a verificação.
2. Ao apresentar as respostas para "Que novos problemas esta solução pode criar?" apresente também a solução.
3. Identifique as 3 próximas ações recomendadas.

>*Esse arquivo deve ter o máximo de 200 linhas*
