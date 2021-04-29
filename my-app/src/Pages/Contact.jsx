import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact-section">
            <div className="container">
            <div className="section-title">
                <h2>GET IN TOUCH</h2>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your Name *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email *" />
                        </div>
                    </div>
                    <div className="col-md-12">
                    <div class="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message *"></textarea>
                    </div>
                    </div>
                </div>
            </form>
                {/* <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"  />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div class="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form> */}
            </div>
        </div>
        </>
    )
}
export default Contact;