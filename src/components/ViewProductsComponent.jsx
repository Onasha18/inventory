import React, { Component } from 'react';
import ProductsService from '../Services/ProductsService';

class ViewProductsComponent extends Component {
    constructor(props){
        super(props)

        this.state ={

            products: []
        }
      
    }
    render() {
        return (
            <div>
              <br/> <h2 className="text-center">All Products</h2><br/>
          <div >
              <button className="btn btn-info " onClick={this.addNewProduct}>Add New Product</button>
              <br/>
          </div>
          <br/><br/>
               <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>

                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Edit/Delete</th>
                            </tr>

                        </thead>npm

                        <tbody>

                           {
                               this.state.products.map(
                                   product=>
                                   <tr key={product.id}>

                                       <td>{product.product_title}</td>
                                       <td>{product.price}</td>
                                       
                                       <td>
                                           <button onClick={() => this.editProduct(product.id)} className="btn btn-success">Edit</button>
                                           <button onClick={() => this.deleteProduct(product.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>
                                       </td>
                                       
                                       
                                       
                                       
                                   </tr>
                               )
                           }

                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default ViewProductsComponent;