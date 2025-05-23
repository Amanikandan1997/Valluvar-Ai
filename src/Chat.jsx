import React, { useEffect, useRef } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import jsonData from "./thirukkuralData.json"; // Import JSON file directly
import { Box, Typography } from "@mui/material";

const Chat = () => {
  const steps = [
    {
      id: "0",
      message: "திருக்குறள் அரட்டைக்கு வருக! தயவுசெய்து தொடக்கத்தில் கீழ் பொத்தானை அழுத்தவும். Start The Button.",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "tamil", label: "  தொடங்கு", trigger: "3" },
      ],
    },
    {
      id: "3",
      message: "தெரிய வேண்டிய திருக்குறளைத் தேர்ந்தெடுக்கவும்:",
      trigger: "4",
    },
    {
      id: "4",
      options: jsonData.map((item) => ({
        value: item.number,
        label: `திருக்குறள் ${item.number}  ${item.sect_tam}`,
        trigger: `6-${item.number}`,
      })),
    },
    ...jsonData.flatMap((item) => [
      {
        id: `5-${item.number}`,
        component: (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '13px' }}>
              <strong>குறள்:</strong> {item.number}, <br />
              <strong>பொருள்:</strong> {item.sect_tam}, <br />
              <strong>அதிகாரப் பகுதி: </strong>{item.chapgrp_tam}, <br />
              <strong>அதிகாரம்: </strong>{item.chap_tam} <br />
            </div>
          </div>
        ),
        trigger: `6-${item.number}`,
      },
      {
        id: `6-${item.number}`,
        component: (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            margin: '10px auto',
            border: '1px solid #ccc',
            borderRadius: '10px',
            maxWidth: '600px',
            backgroundColor: '#f9f9f9',
            color: '#480ca8',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                <strong>பொருள்:</strong> {item.sect_tam}, <br />
                <strong>அதிகாரப் பகுதி:</strong> {item.chapgrp_tam}, <br />
                <strong>அதிகாரம்:</strong> {item.chap_tam} <br />
                <strong>குறள்:</strong> {item.number}.
              </div>
              <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }}>
                {item.line1}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                {item.line2}
              </div>
            </div>

            <div style={{
              padding: '10px',
              backgroundColor: '#ccff33',
              borderRadius: '5px',
              fontSize: '12px',
              marginBottom: '20px'
            }}>
              <strong>விளக்கம்:</strong> {item.tam_exp}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p>English Section</p>
              <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                <strong>Section:</strong> {item.sect_eng}, <br />
                <strong>Chapter Group:</strong> {item.chapgrp_eng}, <br />
                <strong>Chapter:</strong> {item.chap_eng} <br />
                <strong>Kural:</strong> {item.number}.
              </div>
              <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }}>
                {item.eng}
              </div>
            </div>

            <div style={{
              padding: '10px',
              backgroundColor: '#ccff33',
              borderRadius: '5px',
              fontSize: '12px'
            }}>
              <strong>Explanation:</strong> {item.eng_exp}
            </div>
          </div>
        ),
        trigger: "2",
      },
    ]),
  ];

  // Chatbot theme customization
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#90e0ef",
    headerFontColor: "#03045e",
    headerFontSize: "20px",
    botBubbleColor: "#90e0ef",
    botFontColor: "#03045e",
    userBubbleColor: "#f5f5f5",
    userFontColor: "#4a4a4a",
  };

  // Function to trigger Tamil speech
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ta-IN';  // Tamil language
    utterance.rate = 1; // Speed of speech
    utterance.pitch = 1; // Pitch of speech
    window.speechSynthesis.speak(utterance);
  };

  // Speak messages when steps are triggered
  useEffect(() => {
    const chatbot = document.querySelector('.chat-container');
    chatbot.addEventListener('message', (event) => {
      const messageText = event.detail.message;
      speak(messageText); // Speak the message when it's added to the DOM
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        padding:"25px"
          }}
        >
        <button className="btn">
  <div className="wrapper">
    <p className="text">        <img src="https://img.freepik.com/premium-vector/tamil-poet-thiruvalluvar-writing-thirukkural_1108340-154.jpg" style={{ height: "90px" }} /></p>

    <div className="flower flower1">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower2">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower3">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower4">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower5">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
    <div className="flower flower6">
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
  </div>
</button>
        </div>


      </div>

      <div className="chat-widget">
        <ChatBot
          steps={steps}
          headerTitle="வள்ளுவர்AI (Developed by Manikandan U K I)"
          width="580px"
          placeholder="Developed By Manikandan UKI @ 2025"
          botAvatar="https://img.freepik.com/premium-vector/tamil-poet-thiruvalluvar-writing-thirukkural_1108340-154.jpg"
          className="chat-container"
        />
      </div>
    </ThemeProvider>
  );
};

export default Chat;
