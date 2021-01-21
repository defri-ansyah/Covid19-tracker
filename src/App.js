import React from "react";
import { Cards, Chart, Footer } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "Indonesia",
  };
  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);
    this.setState({ data: fetchedData });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Footer/>
        <Cards data={data} country={country} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;