import styles from './Contact.module.css';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Button from '../Button/Button';
// import img from '../../../src/images/daas.svg'
import {useState} from 'react';

const ContactForm = () => {
  
  const[name, setName]=useState("");
  const[email, setEmail]=useState(" ");
  const[text, setText]=useState(""); 
  const[greet,setGreet]=useState("");
  const[more_text,setMore]=useState(""); //Using useState Hooks 

  const onViaCallSubmit = ()=>{
    console.log("On Via call button - console statement");
  };

const OnViaEmailSubmit = ()=>{
  console.log("On via Email button - console statement");
  };

const ViaSupportChat = ()=>{
  console.log("On support chat button - console statement");
  };

const onSubmit=(event)=>{
  event.preventDefault();
  
  console.log("Name : ",event.target[0].value);
  console.log("Email : ",event.target[1].value);
  console.log("Text : ",event.target[2].value);
  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);
  setGreet("Thanks !");
  setMore("for filling out the form.")
  //console.log(event);
};

  return(
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button
            onClick={ViaSupportChat}
            text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>

          <Button 
            onClick={onViaCallSubmit}
            text="VIA CALL" icon={<FaPhoneAlt/>}/>

          </div>

          <Button 
          isOutline={true}
          onClick={OnViaEmailSubmit}
          text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}
          />

          <form
          onSubmit={onSubmit}
          >
            
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
            </div>

            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"></input>
            </div>

            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
            </div>

            <div style={{
              display: "flex",
              justifyContent:"end"
            }}>
              <Button text="SUBMIT"/>
            </div>
            
          </form>
          <div>{greet+" "+ name +" "+ more_text}</div> 
          {/* Bunch of BS to test Hooks */}
        </div>
        <div className={styles.contact_image}>
          <img src="/Images/Contact.svg" alt="image"/>
        </div>
    </section>
  );
};

export default ContactForm