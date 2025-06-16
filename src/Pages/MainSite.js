import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import information from "../Assets/Spelinformatie.png";
import Page from "./Page/Page";
import YoutubeVideo from "../Components/YoutubeVideo/YoutubeVideo";
import actionBoard from "../Assets/playboard.png";
import mountains from "../Assets/mountains.png";
import yellow from "../Assets/arab_yellow.png";
import woman from "../Assets/arab_woman.png";
import white from "../Assets/arab_white.png";
import green from "../Assets/arab_green_2.png";
import greenWoman from "../Assets/arab_green.png";
import elfLord from "../Assets/elf_warlord.png";
import earth from "../Assets/earth.png";
import purple from "../Assets/arab_purple_2.png";
import camiel from "../Assets/camiel-nieuw.png";
import ruben from "../Assets/ruben-nieuw.png";
import jasper from "../Assets/jasper-nieuw.png";
import yuri from "../Assets/yuri-nieuw.png";
import {Link} from "react-router-dom";
import Navbar from "../Components/header/Navbar";

function MainSite(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [addSucces, toggleAddSucces] = useState(false);
    const [duplicate, toggleDuplicate] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleFormSubmit(data){
        try{
            setLoading(true);
            const response = await axios.post("https://thelastages.herokuapp.com/thelastages/addemail",{
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
                <section>
                    {/*<Navbar />*/}
                    <div className="homepage">
                        <div className="header-container">
                            <header className='header'>
                                <h1>The Last Ages</h1>
                                <h2>a real-time strategy board game</h2>
                            </header>
                        </div>
                        <div className='form-container'>
                            <form onSubmit={handleSubmit(handleFormSubmit)} >
                                {!addSucces && <h3>Leave your email to stay updated about pre-orders.</h3>}
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
                        </div>
                        <div className="info-image-container">
                            <img src={information} className="info-image" />
                        </div>
                    </div>
                    <Page
                        backgroundTitle="background-promovideo"
                        outer="outer-promovideo"
                        inner="inner-promovideo">
                        <div className="inner-video">
                            <YoutubeVideo embedId="eBYbwL2zRmo"/>
                            <div className="video-text">
                                <h2>Get an impression of the gameplay</h2>
                                <h3>By checking our promotional video</h3>
                            </div>
                        </div>

                    </Page>
                    <Page
                        backgroundTitle="background-team"
                        outer="outer-team"
                        inner="inner-team"
                    >
                        <div className="inner-teams">
                            <div className='team-text'>
                                <h2>our team is working very hard to complete the first batch</h2>
                                <h3><a href="#top"> Sign up</a> and be the first to pre-order!</h3>
                            </div>
                            <div className="team-images">
                                <img src={camiel}/>
                                <img src={ruben}/>
                                <img src={jasper}/>
                                <img src={yuri}/>
                            </div>
                        </div>
                    </Page>
                </section>}
        </>
    )
}

export default MainSite;