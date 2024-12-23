import React, { useState } from 'react';
import './App.css'; // Add your custom CSS styles
import thirukkuralData from './thirukkuralData.json'; // Import JSON data

const KuralPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [language, setLanguage] = useState('tamil'); // State to track selected language

    // Filtered data based on the search term
    const filteredData = thirukkuralData.filter((item) => {
        const fullText = `${item.sect_tam} ${item.chapgrp_tam} ${item.chap_tam} ${item.line1} ${item.line2} ${item.tam_exp} ${item.sect_eng} ${item.chapgrp_eng} ${item.chap_eng} ${item.eng} ${item.eng_exp}`;
        return fullText.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Search by Kural number
    const searchByNumber = thirukkuralData.filter((item) => item.number === parseInt(searchTerm));

    // Get content based on the selected language
    const getContent = (kural) => {
        switch (language) {
            case 'tamil':
                return (
                    <>
                        <p className="kural-line">{kural.line1}</p>
                        <p className="kural-line">{kural.line2}</p>
                        <p className="kural-explanation"><strong>விளக்கம்:</strong> {kural.tam_exp}</p>
                    </>
                );
            case 'english':
                return (
                    <>
                        <p className="kural-line">{kural.eng}</p>
                        <p className="kural-explanation"><strong>Explanation:</strong> {kural.eng_exp}</p>
                    </>
                );
            default:
                return <p>Translation not available</p>;
        }
    };

    // Determine which data to show
    const dataToShow = searchByNumber.length > 0 ? searchByNumber : filteredData;

    return (
        <div className="app-container">
            <header className="header">
                <h1>Thirukkural Explorer</h1>
                <input
                    type="text"
                    placeholder="Search Thirukkural by number or text..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <div className="language-selector">
                    <label htmlFor="language">Select Language:</label>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="tamil">Tamil</option>
                        <option value="english">English</option>
                    </select>
                </div>
            </header>

            <main>
                {dataToShow.length > 0 ? (
                    <div className="kural-list">
                        {dataToShow.map((kural) => (
                            <div className="card" key={kural.number}>
                                <div className="card__info">
                                    <h2 className="card__title">குறள் {kural.number}</h2>
                                    <p className="card__category"><strong>{kural.sect_tam}</strong></p>
                                    <p className="card__subcategory"><strong>{kural.chapgrp_tam}</strong></p>
                                    <p className="card__chapter"><strong>{kural.chap_tam}</strong></p>
                                    <div className="card__content">{getContent(kural)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results found for "{searchTerm}"</p>
                )}
            </main>

            <footer>
                <p>Thirukkural Explorer © 2024</p>
            </footer>
        </div>
    );
};

export default KuralPage;
