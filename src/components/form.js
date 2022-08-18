import React from 'react'

function form() {
    return (
        <div>
            <div class="container">
                <div class="testbox">
                    <form action="/">
                        <div class="item">
                            <p>Owner Name</p>
                            <div class="name-item">
                                <input type="text" name="fname" placeholder="First" />
                                <input type="text" name="lname" placeholder="Last" />
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="item">
                                <p>Email</p>
                                <input type="email" name="email" />
                            </div>
                            <div class="item">
                                <p>Mobile No.</p>
                                <input type="number" name="mobile" />
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="item">
                                <p>Reason</p>
                                <input type="text" name="reason" />
                            </div>
                            <div class="item">
                                <p>Days</p>
                                <input type="number" name="days" />
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="item">
                                <p>Breed</p>
                                <input type="text" name="breed" />
                            </div>
                            <div class="item">
                                <p>Colour</p>
                                <input type="text" name="colour" />
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="item">
                                <p>Age</p>
                                <input type="number" name="age" />
                            </div>
                            <div class="item">
                                <p>Health</p>
                                <input type="text" name="health" />
                            </div>
                        </div>
                        <div class="btn-block">
                            <button className="btn submit" type="submit" href="/">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default form