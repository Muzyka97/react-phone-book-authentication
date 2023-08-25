import { Typography, Box } from "@mui/material";

const Home = () => {
    return(
      <Box
        display='flex'
        justifyContent="center"
        sx={{pt: 30}}
      >
        <Typography variant="h2" gutterBottom>
          Привіт! Це сторінка Home!{' '}
          <span role="img" aria-label="іконка">
            💁‍♀️
          </span>
        </Typography>
      </Box>
    )
};

export default Home;