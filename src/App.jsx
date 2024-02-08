import { useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import Article from './pages/Article.jsx';

import ResetStyles from './App.style.js';
import { MyPage } from './components/MyPage.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ResetStyles />
      <MainPage />
    </>
  );
};

export default App;
