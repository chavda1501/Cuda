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
            </div>
        </div>
        </>
    )
}
export default Contact;