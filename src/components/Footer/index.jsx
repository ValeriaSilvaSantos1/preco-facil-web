function Footer({ ano }) {
  return (
    <footer style={{
      width: '100%',
      textAlign: 'center',
      color: '#ffffff',
      padding: '20px 0',
      marginTop: 'auto',
      fontSize: '13px',
      opacity: '0.8',
      fontFamily: 'Inter, sans-serif'
    }}>
      <p>&copy; {ano} Preço Fácil</p>
    </footer>
  );
}

export default Footer;