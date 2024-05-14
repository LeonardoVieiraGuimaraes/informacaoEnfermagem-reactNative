# Nome do Projeto

Este é um breve parágrafo descrevendo o que o seu projeto faz e para que ele é usado.

## Iniciando

Estas instruções irão ajudá-lo a obter uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Aqui estão as coisas que você precisa ter instalado no seu sistema para rodar este projeto:

- Node.js
- Expo CLI
- Expo Application Services (EAS)

Você pode instalar o Node.js a partir do [site oficial](https://nodejs.org/).

Após instalar o Node.js, você pode instalar o Expo CLI globalmente em seu sistema com o seguinte comando:

```npm
npm install -g expo-cli
```

Para instalar o EAS CLI, use o seguinte comando:
```npm
npm install -g eas-cli@latest
```
Você pode verificar a versão do EAS CLI com o seguinte comando:
```npm
eas --version
```
Para fazer login no EAS, use o seguinte comando:
```npm
eas login
```
### Build

Para fazer o build do projeto para Android com o perfil de preview, você pode usar o seguinte comando:

```bash
eas build -p android --profile preview
```
Este comando irá iniciar o processo de build e, uma vez concluído, fornecerá um link para baixar o arquivo APK.

```bash
eas build -p ios --profile preview
```
Estes comandos irão iniciar o processo de build e, uma vez concluído, fornecerão um link para baixar o arquivo APK ou IPA, respectivamente.

Instalação
Siga estas etapas para configurar o projeto em seu sistema:

Clone o repositório
Navegue até o diretório do projeto
Instale as dependências do projeto
Inicie o servidor de desenvolvimento
Agora você deve ser capaz de abrir o aplicativo em seu dispositivo ou emulador.

Build
Para fazer o build do projeto para Android, você pode usar o seguinte comando:
```npm
eas build -p android
```

Contribuindo
Por favor, leia CONTRIBUTING.md para detalhes sobre o nosso código de conduta e o processo para enviar pedidos pull para nós.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.