import React from 'react';
import{ emailjs } from 'emailjs-com';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data,e) => { 
        console.log("error")
        alert("Thank You");
       
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_6wux0gk', e.target, 'user_JM79IeHZZeK8KWUvD0zX9')
          .then((result) => {
              console.log( 'error', result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }; 
    return (
        <div className="container mt-5">
            <div>
                <h2 className="fw-bold text-center mt-5 py-5">CONTACT ME</h2>
                <div className="static_info">
                    <h5>CALL ME: <a href="tel:+393271851450">+393271851450</a></h5>
                    <h5>SEND ME E-Mail: <a href="mailto:mrssharmina92@gmail.com">mrssharmina92@gmail.com</a></h5>
                    <h4 className="heading my-4" style={{fontWeight:'500'}}>OR SEND ME MESSAGE</h4>
                </div>
            </div>

            <div>
                <form className="pb-5 " onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control mb-2 p-3" placeholder="Enter Your Name" {...register("name", { required: true })} />
                    {errors.name && <small className="waring">Name is required</small>}

                    <input className="form-control mb-2 p-3" placeholder="Enter Subject" {...register("subject", { required: true })} />
                    {errors.subject && <small className="waring">Subject is required</small>}

                    <input className="form-control mb-2 p-3" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.email && <small className="waring">E-Mail is required</small>}

                    <textarea name="message"  className="form-control mb-2 p-2" placeholder="Enter Your Message" style={{height:'200px'}} {...register("message", { required: true })} ></textarea>
                    {errors.message && <small className="waring">Message is required</small>}

                    <button className="btn btn-dark p-3" type='submit'>Send Message</button>
                </form>
        
         </div>
         <Footer></Footer>
        </div>
    );
};

export default Contact;