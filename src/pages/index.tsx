import { Button } from "@nextui-org/react";
import React from "react";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <Header title="Home" content="The awesome projects of CleverIt Group">
      <h1 className="text-primary">Hello Next.js</h1>
      <Button>Click</Button>
    </Header>
  );
};

export default Home;
