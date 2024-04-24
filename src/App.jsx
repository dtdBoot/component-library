import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {

  return (
    <>
      <Button color="gray" shape="pill"></Button>
      <Banner bannerType="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum</Banner>
      <Card>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. </Card>
      <Testimonials
        name="May Andersons"
        title="Workcation, CTO"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonials> 
    </>
  )
}

export default App;
