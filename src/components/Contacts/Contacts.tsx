import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "../../styles/main.scss"
import "../../components/Contacts/contacts.scss"

const Contacts: React.FC = () => {
   return (
     <div className="contacts-container">
       <h2>Contacts</h2>
       <div className="contact-cards">
         <div className="card phone-card">
           <i className="fas fa-phone"></i>
           <div className="card-info">
             <p className="label">Phone</p>
             <p>+351 910085402</p>
           </div>
         </div>
         <div className="card email-card">
           <i className="fas fa-envelope"></i>
           <div className="card-info">
             <p className="label">Email</p>
             <p>vanessa.ferreira.dev@gmail.com</p>
           </div>
         </div>
         <div className="card linkedin-card">
           <i className="fab fa-linkedin"></i>
           <div className="card-info">
             <p className="label">LinkedIn</p>
             <p>/vanessabio</p>
           </div>
         </div>
         <div className="card github-card">
           <i className="fab fa-github"></i>
           <div className="card-info">
             <p className="label">GitHub</p>
             <p>/epicnessinha</p>
           </div>
         </div>
       </div>
       <h3 className="send-me">Send me a message:</h3>
      <ContactForm />
     </div>
   );
 };
 
 export default Contacts;