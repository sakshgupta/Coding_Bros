import React from 'react'

function shelther_form() {
    return (
        <div>
            <div className="container-fluid-form1 row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src='/img/dogs/form1.jpg' alt="Dog" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    {/* Shelter Request Form */}
                    <form className="shelter_request">
                        <h1 className="form_heading">Shelter Service</h1>
                        <div className="form-group">
                            <label for="handler_name">Name</label>
                            <input type="text" className="form-control" id="handler_name" placeholder="Enter your Name" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="handler_number">Contact Number</label>
                                <input type="number" className="form-control" id="handler_number" placeholder="Enter your contact number" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Enter your address" />
                        </div>
                        <div className="form-group">
                            <label for="handler_reason">Reason of leaving your dog to the shelter</label>
                            <textarea className="form-control" id="handler_reason" rows="2"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="inputState">Number of days</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>Permanently</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary submit_btn">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default shelther_form