# Vitest: Um Framework de Testes Moderno

### conceitos

##### Eficiencia
- Usa a mesma engine do Vite, otimizando a execução dos testes.
- Possui suporte a HMR (Hot Module Replacement), permitindo reexecução rápida dos testes.

##### Suporte a TypeScript e ESM
- Funciona nativamente com ES Modules (ESM) e TypeScript, sem necessidade de configuração adicional.

##### Modo Watch (Observação) 
- Reexecuta automaticamente os testes ao detectar mudanças no código.

##### Mocking e Spy nativos
- Permite criar mocks e espiões (spies) sem precisar de bibliotecas adicionais.

##### Testes Paralelos e Isolados
- Executa testes em múltiplas threads, garantindo isolamento e eficiência.

### instalação
para instalar o vitest, pode se usar o NPM
- npm install -D vitest

ou o Yarn
- yarn add -D vitest

### Executando testes
para rodar todos os testes utiliza o comando: 
- npm run test

Se quiser executar os testes em modo watch (observação contínua):

- npm run test -- --watch

### Referências

- https://vitest.dev/guide/
- https://medium.com/@joalisonpereira/vitest-uma-evolução-do-jest-49db62c50cc5
- https://felipecesar.dev/posts/vitest-a-proxima-geracao-dos-frameworks-de-teste