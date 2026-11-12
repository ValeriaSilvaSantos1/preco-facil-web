import { Trash2 } from 'lucide-react';

function ProdutoCard({ produto, aoDeletar }) {
  const produtoId = produto.id || produto._id;
  const quantidadeValida = produto.quantidade > 0 ? produto.quantidade : 1;
  const custoUnitario = produto.custoBase / quantidadeValida;
  const precoVendaUnitario = custoUnitario + (custoUnitario * produto.porcentagemLucro);

  return (
    <div className="produto-card">
      <div className="info-produto">
        <p><strong>Produto:</strong> {produto.nome} ({produto.tipoEmbalagem})</p>
        <p><strong>Quantidade:</strong> {produto.quantidade}</p>
        <p><strong>Custo Unitário:</strong> R$ {custoUnitario.toFixed(2)}</p>
        <p className="preco-destaque">
          <strong>Preço Venda Unitário:</strong> R$ {precoVendaUnitario.toFixed(2)}
        </p>
      </div>
      <button 
        type="button" 
        className="botao-lixeira"
        onClick={() => aoDeletar(produtoId)}
        title="Excluir produto"
      >
        <Trash2 size={22} color="#ff6b6b" />
      </button>
    </div>
  );
}

export default ProdutoCard;