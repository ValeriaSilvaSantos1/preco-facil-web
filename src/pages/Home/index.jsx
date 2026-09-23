import { useEffect, useRef, useState } from 'react';
import "./style.css";
import Trash from "../../assets/trash.svg";
import Logo from "../../assets/logo-preco-facil.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  const [produtos, setProdutos] = useState([]);

  const inputNome = useRef();
  const selectEmbalagem = useRef();
  const inputQuantidade = useRef();
  const inputCustoBase = useRef();
  const inputPorcentagemLucro = useRef();

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch('http://localhost:3000/produtos');
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    buscarProdutos();
  }, []);

  function handleEmbalagemChange() {
    if (selectEmbalagem.current.value === "unidade") {
      inputQuantidade.current.value = "1";
    }
  }

  async function cliqueNoBotao(event) {
    event.preventDefault();

    const tipoEmbalagem = selectEmbalagem.current.value;
    const quantidade = Number(inputQuantidade.current.value) || (tipoEmbalagem === "unidade" ? 1 : 0);
    const custoBaseGlobal = Number(inputCustoBase.current.value);
    const porcentagemLucro = Number(inputPorcentagemLucro.current.value);

    const novoProduto = {
      nome: inputNome.current.value,
      tipoEmbalagem,
      quantidade,
      custoBase: custoBaseGlobal,
      porcentagemLucro,
    };

    if (!novoProduto.nome || novoProduto.custoBase <= 0) {
      alert("Por favor, preencha o nome e um custo base válido.");
      return;
    }

    try {
      const resposta = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto)
      });
      
      const produtoSalvo = await resposta.json();
      setProdutos([...produtos, produtoSalvo]);

      inputNome.current.value = "";
      inputQuantidade.current.value = "";
      inputCustoBase.current.value = "";
      inputPorcentagemLucro.current.value = "";

    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Erro ao conectar com o servidor.");
    }
  }

  async function deletarProduto(id) {
    try {
      await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
      });

      setProdutos(produtos.filter(produto => (produto.id || produto._id) !== id));

    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Não foi possível excluir o produto.");
    }
  }

  return (
    <div className="container" style={{ paddingTop: '90px' }}>
      <Header />

      <div>
        <img src={Logo} alt="Logo Preço Fácil" id="logo_precofacil" />
      </div>

      <form>
        <h1>Precificador Inteligente</h1>
        
        <div className="grupo-campo">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Ex: Bombom Garoto"
            ref={inputNome}
          />
        </div>

        <div className="grupo-campo">
          <label htmlFor="embalagem">Tipo de Embalagem</label>
          <select 
            id="embalagem" 
            name="tipoEmbalagem" 
            ref={selectEmbalagem}
            onChange={handleEmbalagemChange}
          >
            <option value="unidade">Unidade</option>
            <option value="caixa">Caixa</option>
            <option value="fardo">Fardo</option>
            <option value="pacote">Pacote</option>
          </select>
        </div>

        <div className="grupo-campo">
          <label htmlFor="qtd">Quantidade na Embalagem</label>
          <input
            id="qtd"
            name="quantidade"
            type="number"
            min="1"
            placeholder="Ex: 6"
            ref={inputQuantidade}
          />
        </div>

        <div className="grupo-campo">
          <label htmlFor="custo">Custo Total (R$)</label>
          <input
            id="custo"
            name="custoBase"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex: 38.50"
            ref={inputCustoBase}
          />
        </div>

        <div className="grupo-campo">
          <label htmlFor="lucro">Porcentagem de Lucro</label>
          <input
            id="lucro"
            name="porcentagemLucro"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex: 0.3 (para 30%)"
            ref={inputPorcentagemLucro}
          />
        </div>

        <button type="button" onClick={cliqueNoBotao}>
          Calcular
        </button>
      </form>

      <div className="lista-produtos">
        {produtos.slice(-3).map((produto) => {
          const produtoId = produto.id || produto._id;
          const quantidadeValida = produto.quantidade > 0 ? produto.quantidade : 1;
          const custoUnitario = produto.custoBase / quantidadeValida;
          const precoVendaUnitario = custoUnitario + (custoUnitario * produto.porcentagemLucro);

          return (
            <div key={produtoId} className="produto-card">
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
                onClick={() => deletarProduto(produtoId)}
              >
                <img src={Trash} alt="lixeira" id="lixeira_apagar" />
              </button>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Home;