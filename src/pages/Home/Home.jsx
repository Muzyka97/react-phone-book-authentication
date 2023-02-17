const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1440px'
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

const Home = () => {
    return(
        <div style={styles.container}>
        <h1 style={styles.title}>
          Привіт! Це сторінка Home!{' '}
          <span role="img" aria-label="іконка">
            💁‍♀️
          </span>
        </h1>
      </div>
    )
};

export default Home;