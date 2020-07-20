import React from 'react';
import Layout from "../components/layout";
import NavBar from "../components/NavigationBar/navbar";
import SEO from "../components/seo";

function contact() {
    return (
        <Layout>
            <SEO title="contact" keywords={[`gatsby`, `application`, `react`]} />
            <NavBar />
            <div className="contact-container">
                <div className="section-head">
                    <h3 className="section-title">Contact</h3>
                </div>
                <div className="division"></div>
                <div className="section-content">
                    <div className="contact__form">
                        <form method='post' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
                            <input type='hidden' name='form-name' value='contact' />
                            <div className='field__hidden'>
                                <label>Don't fill if you're not a bot</label>
                                <input name='bot' />
                            </div>
                            <div className='field'>
                                <label>Name</label>
                                <input type='text' name='name'  />
                            </div>
                            <div className='field'>
                                <label>email</label>
                                <input type='email' name='email'  />
                            </div>
                            <div className='field'>
                                <label>Message</label>
                                <textarea name='message' rows='6'></textarea>
                            </div>
                            <div className='submit'>
                                <button type='submit' className='btn__med'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default contact;
