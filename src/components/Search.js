import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import './search.css';

function Search(props) {
    return (
      <div className="container">
          <div className='row'>
          <section >
              <form  onSubmit={props.handleSubmit}>
                  <div className='input-field' >
                        <input className='input-field-con'  placeholder='Search Movie' type ='text'  onChange={props.setQuery}/>
                  </div>
              </form>
          </section>
          </div>      
      </div>
    );
  }
  

  const mapStateToProps = (state) => {
     return {
       list: state.getListData.list
     };
   };
   
   export default connect(mapStateToProps)(Search);
