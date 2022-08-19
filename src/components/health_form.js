import React from 'react'

function health_form() {
    return (
        <div>
            <div className="container-fluid-form2 row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    {/* Info about Dog Form */}
                    <form className="shelter_request">
                        <h1 className="form_heading">Book an Appointment</h1>
                        <div className="form-group">
                            <label for="dog_color">Name of the owner</label>
                            <input type="text" className="form-control" id="dog_color" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label for="dog_color">Name of the Dog</label>
                            <input type="text" className="form-control" id="dog_color" placeholder="Your Dog's Name" />
                        </div>
                        <div className="form-group">
                            <label for="dog_color">Date</label>
                            <input type="date" className="form-control" id="dog_color" />
                        </div>
                        <div className="form-group">
                            <label for="dog_color">Time</label>
                            <input type="time" className="form-control" id="dog_color" />
                        </div>
                        <div className="form-group">
                            <label for="dog_breed">Address</label>
                            <input type="text" className="form-control" id="dog_breed" placeholder="Your Address" />
                        </div>
                        <div className="form-group">
                            <label for="dog_breed">Contact No.</label>
                            <input type="number" className="form-control" id="dog_breed" placeholder="Your Contact no." />
                        </div>
                        <div className="form-group">
                            <label for="dog_breed">Any disease the dog is suffering</label>
                            <input type="text" className="form-control" id="dog_breed" placeholder="Disease name" />
                        </div>
                        <div className="form-group">
                            <label for="dog_breed">Breed</label>
                            <input type="text" className="form-control" id="dog_breed" placeholder="Your dog's breed" />
                        </div>
                        <div className="form-group">
                            <label for="dog_breed">Colour</label>
                            <input type="text" className="form-control" id="dog_breed" placeholder="Your dog's colour" />
                        </div>
                        <button type="submit" className="btn btn-primary submit_btn">Submit</button>
                    </form>
                </div>
                <div className="info_image col-lg-6 col-md-12 col-sm-12">
                    <img src='/img/dogs/hform.png' width={800} alt="Dog" />
                </div>
            </div>

        </div>
    )
}

export default health_form