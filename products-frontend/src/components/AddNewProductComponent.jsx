import React, { Component } from 'react';
import ProductsService from '../Services/ProductsService';

class AddNewProductComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
             product_title:'',
             price:'',
             
        }
        this.changeProductTitleHandler = this.changeProductTitleHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        
        this.saveProduct=this.saveProduct.bind(this);
       
    }
    saveProduct=(e) =>{
        e.preventDefault();
        let product = {product_title:this.state.product_title,
            price:this.state.price
            
        }
        console.log('product =>' + JSON.stringify(product));
    
       ProductsService.addNewProduct(employee).then(res =>{
            this.props.history.push('/products');
       }
        );
    }
    changeProductTitleHandler=(event)=>{
        this.setState({product_title:event.target.value});
    }
    changePriceHandler=(event)=>{
        this.setState({price:event.target.value});
    }
    cancel(){
    
        this.props.history.push('/products'); 
      }
    render() {
        return (
            <div>
                <div>
                <br/>
                <div className="container">
                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3 mt-5 ">
                           <br/> <h3 className="tex-center">&nbsp;Add New Product</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group gap-3 d-grid">
                                       <label htmlFor="ProductName" className=" mt-3"> Product Name</label>
                                       <input type="text" placeholder="Product Name" name="product_title"
                                        className="form-control" value={this.state.product_title} onChange={this.changeProductTitleHandler}/>
                                </div>
                                <div className="form-group gap-3 d-grid">
                                       <label htmlFor="Price" className=" mt-3"> Price</label>
                                       <input type="text" placeholder="Price" name="price"
                                        className="form-control" value={this.state.price} onChange={this.changePriceHandler}/>
                                </div>
                                
                                <button className="btn btn-success float-end mt-3  " onClick={this.saveProduct} style={{marginLeft:"10px"}}>Save</button>
                                <button className="btn btn-danger  float-end mt-3" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default AddNewProductComponent;