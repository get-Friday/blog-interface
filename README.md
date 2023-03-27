# Blog Legal

Esse projeto foi feito para um teste técnico de vaga de emprego, a interface implementa um projeto de blog que pega suas postagens acessando endpoints do jsonplaceholder e servindo esses dados ao usuário.

## Acessando o site

O site está sendo hospedado no Vercel e pode ser acessado pelo seguinte link:

```
https://blog-interface.vercel.app/
```

## Recursos

Esse projeto coloca em prática:

### Custom Hooks

Para lidar com o consumo da API na aplicação, optei por utilizar custom hooks, já que a lógica de dados da API não requer muita complexidade e apenas um ou dois componentes precisam dessas informações.

### Continuous Integration

Implementei um ambiente de Continuous Integration (CI) utilizando o Github Actions. Configurei um ambiente em node.js que roda comandos do ESLint para verificar se não há nenhum erro no código antes de aprovar o merge com a branch principal. Essa prática nos ajuda a garantir a qualidade do código e evitar problemas de integração.

### Branch Protection

Configurei a proteção da Branch Main para garantir que a integridade do código seja preservada. Bloqueei qualquer commit direto na branch, e é necessário que todo o código seja revisado e aprovado antes de ser incorporado à branch principal. Essa medida ajuda a manter o código em um estado saudável e estável.

### Light and Dark Theme

Implementei ao CSS raíz variáveis que respondem ao tema padrão do navegador do usuário, caso tema claro seja usado cores claras serão aplicadas, assim também para o tema escuro.

### Pagination

Adicionei também uma paginação para garantir a integridade do visual do site além de permitir que o usuário tenha uma escolha de quanto aquele componente ele quer que ocupe espaço em sua tela.