import React, {useState, useEffect} from "react";
import './App.css';
import information from "../src/Assets/Spelinformatie.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import ActionBoardPage from "./Pages/ActionBoardPage/ActionBoardPage";

function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [addSucces, toggleAddSucces] = useState(false);
    const [duplicate, toggleDuplicate] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleFormSubmit(data){
        try{
            setLoading(true);
            const response = await axios.post("https://thelastages.herokuapp.com/addemail",{
                emailAddress: data.email,
                })

            if (response.data){
                toggleDuplicate(false);
                toggleAddSucces(true);
                const emailField = document.getElementById("email");
                emailField.value = "";
                setLoading(false);
            }else{
                toggleAddSucces(false);
                toggleDuplicate(true);
                setLoading(false);
            }
        }catch (data) {
            console.error(data);
            setLoading(false);
        }
    }
  return (
      <>
          {loading ?
          <div className="loader-container">
              <div className="spinner"></div>
          </div> :
          <div className="homepage">
          <div className="header-container">
      <header className='header'>
          <h1>The Last Ages</h1>
          <h2>a real-time strategy board game</h2>
      </header>
          </div>
          <div className='form-container'>
          <form onSubmit={handleSubmit(handleFormSubmit)} >
              {!addSucces && <h3>Leave your e-mail to receive more information in the future</h3>}
              {!addSucces && <input
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
                />}
              {errors.email && <p>{errors.email.message}</p>}
              {!addSucces && <button type="submit">send</button>}
              {addSucces && <p className='thanks'>Thank you for your interest in The Last Ages.</p>}
              {addSucces && <p className='confirmation'>A confirmation mail has been sent to your e-mail address.</p>}
              {duplicate && <h4>You already declared your interest!</h4>}
              {duplicate && <h4>try a different e-mail address.</h4>}
          </form>
              <div className="info-image-container">
                  <img src={information} className="info-image" />
              </div>
          </div>
      </div>}
          <ActionBoardPage />
      </>
)
}


// - nog niet mooi in landscape modus van telefoon
// - positie van die info onderin is verschillend op desktop en telefoon
// - e-mail adres aanmaken
// - bevestigingsemail versturen
export default App;
