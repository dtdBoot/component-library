import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";

function App() {

  return (
    <>
      <Button color="blue" shape="pill"></Button>
      <Banner bannerType="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Card>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. </Card>
    </>
  )
}

export default App;
