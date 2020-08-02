import React from 'react';
import styled from 'styled-components';
import MakeItRainButton from '../components/make-it-rain';
import Layout from '../components/layout';
import emojis from '../constants/emojis';

// import Header from '../components/header'; ｡◕‿◕｡ ｡◕‿◕｡ ｡◕‿◕｡

const Container = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => (
  <Layout>
    <Container>
      <MakeItRainButton listEmoji={emojis} />
      {/* <p>Such wow. Very React</p> */}
    </Container>
  </Layout>
);

export default Home;
