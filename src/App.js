import './App.css';
import Search from "./components/Search";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import axios from "axios";
import { connect } from "react-redux";
import { useEffect,useState } from 'react';
import {getList} from "./redux/actionCreate"


function App(props) {
	const [query, setQuery] = useState('spiderman');

  useEffect(() => {
    performFetchAPI();;
  },[query])

 const performFetchAPI = async() => {
   try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=690c155d18bcab778f65ef926c9f50eb&query=${query}`;

    const result = await axios(
      url
    );
    console.log(result.data.results);
    let final = result.data.results;
   props.dispatch(getList(final));
  
   } catch (error) {
     console.log("API Fetch Failed");
   }
 
 }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      performFetchAPI();
    } catch (error) {
      console.log("API Fetch Failed");
    }
    
  }

  return (
    <div className="App">
      <h1 style={{color: "red"}}> The Movie DB </h1>
      <Navbar />
      <Search handleSubmit={handleSubmit}  setQuery={(e) => setQuery(e.target.value)} />
      <Cards />
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    list: state.getListData.list
  };
};

export default connect(mapStateToProps)(App);
