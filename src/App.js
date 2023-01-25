import React, {useState} from "react";
import './App.css';
import information from "../src/Assets/Spelinformatie.png"
import axios from "axios";
import { useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [addSucces, toggleAddSucces] = useState(false);
    async function handleFormSubmit(data){
        console.log(data.email);
        try{
            const response = await axios.post('https://thelastages.herokuapp.com/addemail',{
                emailAddress: data.email,
                })
            console.log(data.email)
            toggleAddSucces(true)
            const emailField = document.getElementById("email");
            emailField.value = "";
        }catch (data) {
             console.error(data)
        }
    }
  return (
      <>
      <div className="homepage">
          <div className="header-container">
      <header className='header'>
          <h1>The Last Ages</h1>
          <h2>a real-time strategy board game</h2>
      </header>
          </div>
          <div className='form-container'>
          <form onSubmit={handleSubmit(handleFormSubmit)} >
              <h3>Leave your e-mail to receive more information in the future</h3>
              <input
                  id="email"
                  type="email"
                  placeholder="your e-mail address"
                  {...register("email",
                      {required: {
                          value: true,
                              message: 'enter an e-mail address',
                          },
                          maxLength: {
                          value: 50,
                              message: "max length is 50 characters",
                          }
                      })}
                />
              {errors.email && <p>{errors.email.message}</p>}
              <button type="submit">send</button>
              {addSucces && <p>Thank you for your interest in The Last Ages</p>}
          </form>
          </div>
          <div className="bottom-container">
              <img src={information} alt="information-image" className="info-image" />
          </div>
      </div>
      </>
)
}


// - nog niet mooi in landscape modus van telefoon
// - positie van die info onderin is verschillend op desktop en telefoon
// - e-mail adres aanmaken
// - bevestigingsemail versturen
export default App;
