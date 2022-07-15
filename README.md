# bellaface

## ➭ Primeiros Passos

- Baixe e configure o [Android Studio](https://developer.android.com/studio).
- Criar uma [nova AVD](https://developer.android.com/studio/run/managing-avds) com o nome Pixel_2_API_29 e com a API Level 29.
- Rodar o comando

  ```
  sudo chmod 777 -R /dev/kvm
  ```
### Adicione o android ao PATH:

Após instalar o Android Studio e baixar os arquivos do Android, será necessário adicionar as seguintes variáveis ao PATH.

1. Acessar o arquivo `~/.bashrc`:

```bash
sudo nano ~/.bashrc
```

2. Adicionar as seguintes variáveis no final do arquivo:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

3. Verificar se as variáveis foram adicionadas executando o comando no terminal:

```bash
echo $ANDROID_HOME
```
## ➭ iniciando a aplicação

1. Inicie o backend


```bash
cd backend/
docker build -t wmw/bellaface:v1 .
docker run -p 8080:8080 -t wmw/bellaface:v1
```

2. Inicie o frontend
   
```bash
cd frontend/
npm install && expo start
```

ao finalizar a execução do comando expo start digite 'a' no terminal para instalar e abrir a aplicação no emulador android, que já deve estar ligado.




