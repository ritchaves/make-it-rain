import React from 'react';
import styled from 'styled-components';
import MakeItRainButton from '../components/make-it-rain';
import Layout from '../components/layout';
import emojis from '../constants/emojis';
import Toggle from '../components/toggle';
import useLocalStorage from '../utils/hooks/useLocalStorage';

// import Header from '../components/header'; ｡◕‿◕｡ ｡◕‿◕｡ ｡◕‿◕｡

const Container = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const [mode, setMode] = useLocalStorage('mode', 'light');
  return (
    <Layout mode={mode}>
      <Container>
        <Toggle setMode={setMode} />
        <MakeItRainButton listEmoji={emojis} />
      </Container>
    </Layout>
  );
};

export default Home;
