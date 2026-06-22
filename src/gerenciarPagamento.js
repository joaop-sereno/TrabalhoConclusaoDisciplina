// 1) Criar um vetor com pagamentos contendo as seguintes propriedades: codigoBarras, empresa, valor, categoria
const pagamentos = [
    {
        codigoBarras: '1234-5678-9012',
        empresa: 'Empresa A',
        valor: 150.00,
        categoria: 'cara'
    },
    {
        codigoBarras: '2345-6789-0123',
        empresa: 'Empresa B',
        valor: 75.00,
        categoria: 'padrão'
    },
    {
        codigoBarras: '3456-7890-1234',
        empresa: 'Empresa C',
        valor: 120.50,
        categoria: 'cara'
    }
];

// 2) Função para realizar um pagamento
export function realizarNovoPagamento(codigoBarras, empresa, valor) {
    if (!codigoBarras) {
        throw new Error('Código de barras precisa ser informado corretamente.');
    }

    if (!empresa) {
        throw new Error('Empresa precisa ser informada corretamente.');
    }
    
    if (valor <= 0) {
        throw new Error('Valor precisa ser informado corretamente.');
    }  

    //Determinar a categoria com base no valor do pagamento    
    let categoria = '';
    if(valor > 100.00){
        categoria = 'cara';
    }else{
        categoria = 'padrão';
    }

    const pagamento = {
        codigoBarras,
        empresa,
        valor,
        categoria
    };

  pagamentos.push(pagamento);
}

// 3) Função para consultar o último pagamento
export function consultarUltimoPagamento() {
    if (pagamentos.length === 0) {
        return 'Nenhum pagamento realizado.';
    }

    return pagamentos.at(-1);
}