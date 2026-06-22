# Pipeline de Integração Contínua com GitHub Actions

## Sobre o projeto

Conforme solicitado, foi utilizado neste trabalho um projeto de testes automatizados desenvolvido em disciplinas anteriores do curso. O projeto utiliza o Mocha para criação e execução dos testes.

Para implementar a integração contínua, foi criada a estrutura de workflows do GitHub Actions no seguinte diretório:

```text
.github/workflows/
```

Dentro dessa pasta, foram criados três arquivos de pipeline:

```text
01-manual-exec.yaml
02-scheduler-exec.yaml
03-push-exec.yaml
```

## Pipelines implementadas

Cada arquivo representa uma forma diferente de execução da pipeline.

### Execução manual

O arquivo `01-manual-exec.yaml` permite que a pipeline seja iniciada manualmente pela aba **Actions** do GitHub.

Essa execução utiliza o gatilho:

```yaml
workflow_dispatch:
```

### Execução agendada

O arquivo `02-scheduler-exec.yaml` executa a pipeline automaticamente em um horário definido.

Essa execução utiliza o gatilho:

```yaml
schedule:
```

O horário é configurado por meio de uma expressão `cron` dentro do arquivo da pipeline.

### Execução por push

O arquivo `03-push-exec.yaml` executa automaticamente a pipeline sempre que um novo código é enviado para a branch configurada no repositório.

Essa execução utiliza o gatilho:

```yaml
push:
```

## Execução dos testes

Nas três pipelines, o ambiente é preparado com Node.js e as dependências necessárias para a execução dos testes são instaladas.

Os testes automatizados são executados utilizando o Mocha.

```bash
npx mocha
```

## Geração do relatório

Para gerar o relatório dos resultados dos testes, foi utilizado o Mochawesome.

A execução dos testes com geração do relatório é realizada pelo comando:

```bash
npx mocha --reporter mochawesome
```

Após a execução, o Mochawesome gera um relatório em HTML e JSON dentro da pasta:

```text
mochawesome-report/
```

O relatório apresenta informações como:

* Quantidade de testes executados;
* Testes aprovados;
* Testes que apresentaram falha;
* Tempo de execução;
* Detalhes dos cenários executados.

## Armazenamento do relatório

Após a geração do relatório, a pasta `mochawesome-report` é armazenada na execução da pipeline utilizando o recurso de artifacts do GitHub Actions.

Dessa forma, o relatório pode ser baixado diretamente pela página da execução da pipeline na aba **Actions**.
