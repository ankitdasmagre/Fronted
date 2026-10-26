import './Contact.css';

function Contact (){
    return (
        <div className="contact-container">
        <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any question or inquiries,please fell free to reach out to us using the contact form.</p>
        <div className="info-item">
        <span>Location :</span>
        <p> Kawardha CG pin 491995</p>
        </div>
        <div className="info-item">
        <span>Mobile</span>
        <p>1234567890</p>
        </div>
        <div className="info-item">
        <span>Email</span>
        <p>abc@gmail.com</p>
        </div>
        </div>
        <div className="contact-form">
        <h1>Send a Message</h1>
        <lable>Name</lable>
        <input type="text" placeholder="your Name" required />
        <lable>Email</lable>
        <input type="text" placeholder="your Email" required />
        <lable>Message</lable>
        <textarea placeholder="your Message" required></textarea> 
        <button type="submit">Send Message</button>
        </div>
        </div>
    );
}

export default Contact ;