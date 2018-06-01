import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './footer';

export default class ShowOneHouse extends Component {
    constructor(props){
        super(props);
         this.state= {
             data:{
             houseName:null,
             coins:null,
             level:null
             }
         }
         }

         componentDidMount(){
            console.log(this.props);
            axios.get(`/api/showOneHouse/${this.props.match.params.id}`)
            .then((response)=> {
              this.setState({data:response.data});
              console.log(response.data);          
            })
            .catch(function (error) {
              console.log(error);
            });
        }
  render() {
    return (
      <div>
        <Nav />
        <div className="loginform">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card bg-light mb-3" style={{maxWidth: 50 +"rem"}}>
                <div className="card-header"><h4><b>House Name:</b> <em>{this.state.data.houseName}</em></h4></div>
                <div className="card-body"><h4><b>Coins:</b> <em>{this.state.data.coins}</em></h4></div>
                <div className="card-body">
                <h4 className="card-text"><h4><b>Level:</b> <em>{this.state.data.level}</em></h4></h4>
                </div>  
                          
             </div> 
             <Link className ="btn btn-info btn-lg" to={`/housesWalet`}  style={{alignItems: 'center'}}>Go Back</Link> 
        </div>
       
        </div>
        <Footer />
      </div>
    )
  }
}
