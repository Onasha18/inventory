import React, { Component } from 'react';
import ProductsService from '../Services/ProductsService';

class UpdateProductComponent extends Component {


    constructor(props){
        super(props)

        this.state ={
            id: this.props.match.params.id,
             product_title:'',
             price:''
    
        }
        this.changeProductTitleHandler = this.changeProductTitleHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
        
    }
    componentDidMount(){
        ProductsService.updateProduct(this.state.id).then(
            (res)=>{
                let Product = res.data;
                console.log(product);
                this.setState({
                    product_title : product.product_title,
                    price : product.price
                    
                });
                console.log("product=>");
            }
        );
    }
updateProduct=(e) =>{
    e.preventDefault();
    let product = {
        id:this.state.id,
        product_title:this.state.product_title,
        price:this.state.price,
        
    }
    console.log('product =>' + JSON.stringify(product));
    ProductsService.updateProduct(product,this.state.id).then(
        res =>{
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
                <br/>
                <div className="container">
                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3 mt-5 ">
                           <br/> <h3 className="tex-center">&nbsp;Update Product</h3>
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
                                
                                <button className="btn btn-success float-end mt-3  " onClick={this.updateProduct} style={{marginLeft:"10px"}}>Save</button>
                                <button className="btn btn-danger  float-end mt-3" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateProductComponent;