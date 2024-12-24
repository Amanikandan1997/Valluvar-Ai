import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Select, MenuItem, Card, CardContent, InputLabel, FormControl } from '@mui/material';
import thirukkuralData from './thirukkuralData.json';
import "./App.css"
import "./Navbar.css"
const KuralPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [language, setLanguage] = useState('tamil');

    const filteredData = thirukkuralData.filter((item) => {
        const fullText = `${item.sect_tam} ${item.chapgrp_tam} ${item.chap_tam} ${item.line1} ${item.line2} ${item.tam_exp} ${item.sect_eng} ${item.chapgrp_eng} ${item.chap_eng} ${item.eng} ${item.eng_exp}`;
        return fullText.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const searchByNumber = thirukkuralData.filter((item) => item.number === parseInt(searchTerm));

    const getContent = (kural) => {
        switch (language) {
            case 'tamil':
                return (
                    <>
                        <Typography variant="body1" fontWeight="bold">{kural.line1}</Typography>
                        <Typography variant="body1" fontWeight="bold">{kural.line2}</Typography>
                        <Typography variant="body2" color="textSecondary"><strong>விளக்கம்:</strong> {kural.tam_exp}</Typography>
                    </>
                );
            case 'english':
                return (
                    <>
                        <Typography variant="body1" fontWeight="bold">{kural.eng}</Typography>
                        <Typography variant="body2" color="textSecondary"><strong>Explanation:</strong> {kural.eng_exp}</Typography>
                    </>
                );
            default:
                return <Typography variant="body1">Translation not available</Typography>;
        }
    };

    const dataToShow = searchByNumber.length > 0 ? searchByNumber : filteredData;

    return (
        <Container maxWidth="md">
            {/* Scrolling Text */}
            {/* <Box
                sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                 
                    py: 1,
                    mb: 2,
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        display: 'inline-block',
                        animation: 'scroll-text 10s linear infinite',
                        fontWeight: 'bold',
                        color: '#3f51b5',
                    }}
                >
                   - கன்னியாகுமரி  ஜனவரி 1  2025 அன்று திருவள்ளுவர் சிலையின் 25வது ஆண்டு விழா - Kanyakumari 25th Anniversary of Tiruvalluvar Idol on January 1 2025
                </Typography>
            </Box> */}

            {/* Top Section with Search */}
            <Box sx={{ textAlign: 'center', my: 4 }}>
            
            <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
      }}
    >
      <button className="btn">
  <div className="wrapper">
    <h1 className="text">Thirukkural Explorer</h1>

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
        </div><br/>    

              
                <TextField
                    label="Search Thirukkural by number or text..."
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 2 }}
                />
            
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id="language-label">Select Language</InputLabel>
                    <Select
                        labelId="language-label"
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        label="Select Language"
                    >
                        <MenuItem value="tamil">Tamil</MenuItem>
                        <MenuItem value="english">English</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Thirukkural List */}
            <Box >
                {dataToShow.length > 0 ? (
                    dataToShow.map((kural) => (
                        <Card key={kural.number} sx={{ mb: 3 }}>
                            <CardContent>
                                <Typography variant="h5" color="primary" fontWeight="bold">குறள் {kural.number}</Typography>
                                <Typography variant="subtitle1" color="textSecondary">{kural.sect_tam}</Typography>
                                <Typography variant="subtitle2" color="textSecondary">{kural.chapgrp_tam}</Typography>
                                <Typography variant="subtitle2" color="textSecondary">{kural.chap_tam}</Typography>
                                <Box sx={{ mt: 2 }}>{getContent(kural)}</Box>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography variant="body1" color="error" sx={{ textAlign: 'center' }}>
                        No results found for "{searchTerm}"
                    </Typography>
                )}
            </Box>

          
        </Container>
    );
};

export default KuralPage;

