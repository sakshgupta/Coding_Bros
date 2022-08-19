import React from 'react'

function info_form() {
    return (
        <div>
            <div className="container-fluid-form2 row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    {/* Info about Dog Form */}
                    <form className="shelter_request">
                        <h1 className="form_heading">Let's Know more about your Dog</h1>
                        <div className="form-group">
                            <label for="dog_color">Color</label>
                            <input type="text" className="form-control" id="dog_color" placeholder="Your Dog's Color" />
                        </div>
                        <div className="form-group">
                            <label for="dog_breed">Breed</label>
                            <input type="text" className="form-control" id="dog_breed" placeholder="Your Dog's Breed" />
                        </div>
                        <div className="form-group">
                            <label for="dog_age">Age</label>
                            <input type="text" className="form-control" id="dog_age" placeholder="Your Dog's Age" />
                        </div>
                        <div className="form-group">
                            <label for="dog_health">Health</label>
                            <textarea className="form-control" id="handler_reason" rows="2" placeholder="How's your dog?"></textarea>
                        </div>
                        <button type="submit" className="all_btn btn btn-primary submit_btn">Submit</button>
                    </form>
                </div>
                <div className="info_image col-lg-6 col-md-12 col-sm-12">
                    <img src='/img/dogs/form2.jpg' alt="Dog" />
                </div>
            </div>

        </div>
    )
}

export default info_form