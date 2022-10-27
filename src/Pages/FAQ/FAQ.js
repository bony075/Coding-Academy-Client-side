import React from 'react';

const FAQ = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Frequently Asked Questions!</h1>
                    <img src="https://img.graphicsurf.com/2020/10/FAQ-vector-design-concept.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Give up your review!!!</span>
                            </label>
                           
                            <textarea type="textarea" name="Text1" className="input input-bordered" placeholder="Type here"  cols="60" rows="30"></textarea>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;