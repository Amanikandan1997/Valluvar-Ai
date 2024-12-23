import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import jsonData from "./thirukkuralData.json"; // Import JSON file directly
import './App.css'
import T from './valluvar.svg'

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
        label: `திருக்குறள் ${item.number}`,
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
            {/* Tamil Section */}
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
            
            {/* Tamil Explanation */}
            <div style={{
              padding: '10px',
              backgroundColor: '#ccff33',
              borderRadius: '5px',
              fontSize: '12px',
              marginBottom: '20px'
            }}>
              <strong>விளக்கம்:</strong> {item.tam_exp}
            </div>
            
            {/* English Section */}
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
            
            {/* English Explanation */}
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
      {
        id: `7-${item.number}`,
        component: (
          <div style={{ display: 'flex', flexDirection: 'column-reverse', backgroundColor: "#ccff33" }}>
            <div style={{ fontSize: '12px' }}><strong>விளக்கம்:</strong> {item.tam_exp}</div>
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

  return (
    <ThemeProvider theme={theme}>
      <div className="chat-widget">

        <ChatBot
          steps={steps}
          headerTitle="வள்ளுவர் AI (Developed By Manikandan UKI)"
          width="700px"
          placeholder=" Developed By Manikandan UKI @ 2025 "
          // floating
          // floatingIcon="https://img.freepik.com/premium-vector/tamil-poet-thiruvalluvar-writing-thirukkural_1108340-154.jpg"
          botAvatar="https://img.freepik.com/premium-vector/tamil-poet-thiruvalluvar-writing-thirukkural_1108340-154.jpg"
          className="chat-container"
        />
        
      </div>
    </ThemeProvider>
  );
};

export default Chat;
