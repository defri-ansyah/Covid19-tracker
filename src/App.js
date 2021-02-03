import React from "react";
import { Cards, Chart, Footer } from "./Components";
import styles from "./App.module.css";
// import { fetchData } from "./api";
import { Provider } from 'react-redux'
import store from './configs/redux/store'

class App extends React.Component {
  state = {
    country: "Indonesia",
  };

  render() {
    const { country } = this.state;
    return (
      <Provider store={store}>
      <div className={styles.container}>
        <Footer/>
        <Cards country={country} />
        <Chart country={country} />
      </div>
      </Provider>
    );
  }
}

export default App;