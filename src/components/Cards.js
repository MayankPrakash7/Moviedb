import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './cards.css';

function Cards({list}) {
    return (
      <div className="App">
        <Box className="Box"  >
        { 
          (list.length > 0 )  
          ?   <Box>
             <Typography gutterBottom variant="h2" component="div">
                    What's Popular
             </Typography>
             <Grid container spacing={18} className='Grid-con'>
        { 
        list.map((item) => {
            return (
                <>
               <Grid item xs={12} sm={6} md={4} key={item.id}> 
               <Card  sx={{ maxWidth: 145},{ maxHeigth: 645}} className="card">
               <CardActionArea>
                <CardMedia
                  className="card-media"
                  component="img"
                   height="540"
                  image= {`http://image.tmdb.org/t/p/w342/${item.poster_path}`}
                  alt="Avatar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
                </>    
        )} 
        )}    
        </Grid>           
             </Box>
          : <p>No Movies found</p>
        }         
        </Box>
      </div>
    );
  }
  
  const mapStateToProps = (state) => {
     return {
       list: state.getListData.list
     };
   };
   
   export default connect(mapStateToProps)(Cards);