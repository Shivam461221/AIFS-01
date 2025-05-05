

export default function ProductCard({productList}){

    return (
        <>
        <div>
            <div className="row">
           { productList.map((product, index) => <div key={index} className="col-md-3 p-3">
                    <img src={product.thumbnail} style={{width:"100%", height:"400px"}} />
                    <h1>{product.title}</h1>
                    <h3>RS. {product.price}</h3>
                    <p>{product.description}</p>
                    <button className="btn btn-primary form-control">View More</button>
                    </div>)    
          }
          </div>
        </div>
        </>
    )
}