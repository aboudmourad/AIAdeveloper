import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "./Nav";

class AllListing extends Component {
    constructor(props){
        super(props);
         this.state= {
             showingListings: [],
             errors: ""
         }
        }



    componentDidMount(){
        axios.get('/api/getAllListings/')
        .then((response)=> {
            //console.log(response.data.list.name);
          this.setState({
              showingListings: response.data.list,
            });
        })
        .catch( (error) =>{
          console.log(error);
          this.setState({errors : "Server Error"});
        });
    }

    
    render() {

        return (
            <div>
                <Nav />
                 <br/>  
               {this.state.showingListings && this.state.showingListings.map((listing)=>{
                    return (
                       <div key={listing._id}>
                         <div className="card" style={{maxWidth: 18 +"rem"}}>
                         <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"/>
                            <div className="card-body">
                              <h4 className='card-header'><b>Product: {listing.name}</b></h4>
                              <h4 className='card-text'><b>Description: {listing.description}</b></h4>
                              <h4 className='card-text'><b>Coins: {listing.price}</b></h4>
                          <Link className="card-link" to={`/showOne/${listing._id}`}>View Listing</Link>
                          <Link className="card-link" to="/Request">Buy</Link>
                         </div>
                          <br/>  
                        </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AllListing;
