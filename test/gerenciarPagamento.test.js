import { realizarNovoPagamento, consultarUltimoPagamento } from '../src/gerenciarPagamento.js';
import assert from 'node:assert';

describe('Testes da Gestão de Pagamento', function () {
    
    describe('Testes da função consultarUltimoPagamento', function () {
        it('Deve retornar apenas o último pagamento realizado', () => {

            // Arrange
            const pagamento = {
                codigoBarras: '3456-7890-1234',
                empresa: 'Empresa C',
                valor: 120.50,
                categoria: 'cara'
            };

            // Act
            const ultimoPagamento = consultarUltimoPagamento();

            // Assert
            assert.equal(ultimoPagamento.codigoBarras, pagamento.codigoBarras);
            assert.equal(ultimoPagamento.empresa, pagamento.empresa);
            assert.equal(ultimoPagamento.valor, pagamento.valor);
            assert.equal(ultimoPagamento.categoria, pagamento.categoria);
        });
    });    

    describe('Testes da função realizarNovoPagamento', function () {
        it('Deve lançar exceção quando o código de barras não for informado', () => {

            // Arrange
            const codigoBarras = '';
            const empresa = 'Empresa Teste';
            const valor = 100;

            // Act / Assert
            assert.throws(
                function (){ realizarNovoPagamento(codigoBarras, empresa, valor) },{
                    message: 'Código de barras precisa ser informado corretamente.'
                }
            )
        });

        it('Deve lançar exceção quando a empresa não for informada', () => {

            // Arrange
            const codigoBarras = '1234-5678';
            const empresa = '';
            const valor = 100;

            // Act / Assert
            assert.throws(
                function (){ realizarNovoPagamento(codigoBarras, empresa, valor) },{
                    message: 'Empresa precisa ser informada corretamente.'
                }
            )
        });

        it('Deve lançar exceção quando o valor for menor ou igual a zero', () => {

            // Arrange
            const codigoBarras = '1234-5678';
            const empresa = 'Empresa Teste';
            const valor = 0;

            // Act / Assert
            assert.throws(
                function (){ realizarNovoPagamento(codigoBarras, empresa, valor) },{
                    message: 'Valor precisa ser informado corretamente.'
                }
            )
        });

        it('Deve definir a categoria como cara quando o valor for maior que cem reais', () => {

            // Arrange
            const codigoBarras = '1111-2222-3333';
            const empresa = 'Empresa Cara';
            const valor = 150;
            const categoria = 'cara';

            // Act
            realizarNovoPagamento(codigoBarras,empresa, valor);

            const ultimoPagamento = consultarUltimoPagamento();

            // Assert
            assert.equal(ultimoPagamento.categoria, categoria);
        });

        it('Deve definir a categoria como padrão quando o valor for menor ou igual a cem reais', () => {

            // Arrange
            const codigoBarras = '1111-2222-3333';
            const empresa = 'Empresa Padrão';
            const valor = 50;
            const categoria = 'padrão';

            // Act
            realizarNovoPagamento(codigoBarras,empresa, valor);

            const ultimoPagamento = consultarUltimoPagamento();

            // Assert
            assert.equal(ultimoPagamento.categoria, categoria);
        });

    });

});
