import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProdutoCard from '../../components/ProdutoCard';
import '../Home/style.css';

function Historico() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function buscarTodosProdutos() {
      try {
        const resposta = await fetch('http://localhost:3000/produtos');
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro ao buscar histórico:", error);
      }
    }
    buscarTodosProdutos();
  }, []);

  async function deletarProduto(id) {
    try {
      await fetch(`http://localhost:3000/produtos/${id}`, { method: 'DELETE' });
      setProdutos(produtos.filter(produto => (produto.id || produto._id) !== id));
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  }

  return (
    <div className="container" style={{ paddingTop: '90px' }}>
      <Header />
      
      <div style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff', marginBottom: '15px' }}>
          <ArrowLeft size={20} /> Voltar
        </Link>
        <h1>Histórico Completo ({produtos.length})</h1>
      </div>

      <div className="lista-produtos">
        {produtos.length === 0 ? (
          <p className="mensagem-vazia">Nenhum produto cadastrado no histórico ainda.</p>
        ) : (
          produtos.map((produto) => (
            <ProdutoCard 
              key={produto.id || produto._id} 
              produto={produto} 
              aoDeletar={deletarProduto} 
            />
          ))
        )}
      </div>

      <Footer ano={new Date().getFullYear()} />
    </div>
  );
}

export default Historico;