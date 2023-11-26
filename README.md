# MyGit-JS

O MyGit-JS é uma simulação simples de um sistema de controle de versão Git, implementado em JavaScript. Ele permite criar repositórios, realizar commits, criar e alternar entre branches, e fazer merges básicos.

## Instalação

Para usar o MyGit-JS, siga estas etapas:

1. Clone o repositório:

   ```bash
   git clone https://github.com/devruchoa/mygit-js.git
   
2. Navegue até o diretório do projeto:
   
   ```bash
   cd mygit-js

3. Execute o arquivo de exemplo:

   ```bash
   npm start

## Funcionalidades

1. Criação de repositórios

  ```javascript
  const repository = new GitRepository('nome-do-repositorio');
  ```

2. Realização de Commits:

  ```javascript
  repository.commit('Mensagem do commit');
```

3. Criação de Branches:

  ```javascript
  repository.createBranch('nome-do-branch');
  ```

4. Alternância entre Branches:

  ```javascript
  repository.checkout('nome-do-branch');
  ```

5. Merge de Branches:

  ```javascript
  repository.merge('nome-do-branch');
  ```

6. Visualização do Histórico de Commits

  ```javascript
  const commitHistory = repo.log();
  console.log('Commit History:');
  commitHistory.forEach(commit => {
      const branchIndicator = repo.branches.find(branch => branch.commit === commit && branch.name !== 'master') ? `(${repo.branches.find(branch => branch.commit === commit).name})` : '';
      console.log(`Commit ${commit.id}: ${commit.message} ${branchIndicator}`);
  });
  ```

## Contribuição

Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.


