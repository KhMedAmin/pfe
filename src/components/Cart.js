import React from 'react';

const ShoppingCart = () => {
  return (
    <section className="h-100" style={{ backgroundColor: "#E67E22", paddingTop: "50px" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              <div>
                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
              </div>
            </div>

            {/* Cart items */}
            <div className="card rounded-3 mb-4">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">Basic T-shirt</p>
                    <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2">
                      <i className="fas fa-minus"></i>
                    </button>
                    <input id="form1" min="0" name="quantity" value="2" type="number" className="form-control form-control-sm" />
                    <button className="btn btn-link px-2">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">$499.00</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Cart items */}

            {/* Discount code */}
            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  <input type="text" id="form1" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1">Discount code</label>
                </div>
                <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
              </div>
            </div>
            {/* End Discount code */}

            {/* Proceed to pay button */}
            <div className="card">
              <div className="card-body">
                <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
              </div>
            </div>
            {/* End Proceed to pay button */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
