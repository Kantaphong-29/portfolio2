import React from "react";
import Button from "../components/Button";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?_gl=1*a2osc9*_ga*MTIyNTYyNjQ5NS4xNzU1Nzk3NzIy*_ga_8JE65Q40S6*czE3NTU3OTc3MjEkbzEkZzEkdDE3NTU3OTgxOTgkajQxJGwwJGgw')",
        }}
      >
        <div className="text-center p-4">
          <h2 className="text-5xl font-bold mb-4">Welcome to My World</h2>
          <p className="mb-6 text-lg font-semibold">
            Web Nee Mai Mee Halal
          </p>
          <Button nameButton="อย่ากด" />
        </div>
      </section>
    </>
  );
};

export default Home;
