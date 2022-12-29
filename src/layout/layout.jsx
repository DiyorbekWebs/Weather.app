import React from "react";
import Header from "../components/header/header";
import { Main } from "../components/main/main";
import '../App.css'
export default function Layout() {

  return (
    <>
      <div className="style">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
