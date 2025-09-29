import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";


<FaUser style={{ color: "white" }} />


const SavedScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const savedImages = [
      { id: 1, uri: "https://picsum.photos/seed/nature1/3000/2000", aspectRatio: 2 },
  { id: 2, uri: "https://picsum.photos/seed/building1/3000/2000", aspectRatio: 1 },
  { id: 3, uri: "https://picsum.photos/seed/nature2/3000/2000", aspectRatio: 2 },
  { id: 4, uri: "https://picsum.photos/seed/building2/3000/2000", aspectRatio: 1 },
  { id: 5, uri: "https://picsum.photos/seed/nature3/3000/2000", aspectRatio: 1 },
  { id: 3, uri: "https://picsum.photos/seed/nature2/3000/2000", aspectRatio: 2 },
  { id: 6, uri: "https://picsum.photos/seed/building3/3000/2000", aspectRatio: 1 },
  { id: 7, uri: "https://picsum.photos/seed/nature4/3000/2000", aspectRatio: 1 },
  { id: 8, uri: "https://picsum.photos/seed/building4/3000/2000", aspectRatio: 1 },
  { id: 9, uri: "https://picsum.photos/seed/nature5/3000/2000", aspectRatio: 1 },
  { id: 10, uri: "https://picsum.photos/seed/building5/3000/2000", aspectRatio: 1 },
  
  ];

  const theme = {
    light: { background: 'rgba(248, 249, 250, 1)', cardBackground: 'rgba(255, 255, 255, 1)', textColor: 'rgba(0, 0, 0, 1)', iconColor: 'rgba(102, 102, 102, 1)' },
    dark: { background: 'rgba(26, 26, 26, 1)', cardBackground: 'rgba(45, 45, 45, 1)', textColor: 'rgba(255, 255, 255, 1)', iconColor: 'rgba(204, 204, 204, 1)' }
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <div style={{
      width: '100%', maxWidth: '414px', height: '100vh', margin: '0 auto',
      backgroundColor: currentTheme.background, display: 'flex', flexDirection: 'column',
      position: 'relative', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '50px 20px 20px 20px'
      }}>
        <span style={{ fontSize: '20px', color: currentTheme.textColor, cursor: 'pointer' }}>←</span>
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            width: '32px', height: '32px', borderRadius: '16px',
            backgroundColor: '#13f37bff', display: 'flex',
            justifyContent: 'center', alignItems: 'center', cursor: 'pointer'
          }}
        >
        <FaUser style={{ color: "white" }} />
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between',
        padding: '0 20px 20px 20px', alignItems: 'center'
      }}>
        <span style={{ color: currentTheme.iconColor }}>Followers</span>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: currentTheme.textColor, margin: 0 }}>Saved</h1>
        <span style={{ color: currentTheme.iconColor }}>Following</span>
      </div>


      <div style={{
        flex: 1,
        overflowY: 'scroll',   
        padding: '0 20px',
        paddingBottom: '100px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px' }}>
          {savedImages.map((image, index) => {
            let style = {};
            if (index < 2) style = { width: 'calc(50% - 6px)', aspectRatio: '1' };
            else if (index === 2) style = { width: '100%', aspectRatio: '2', margin: '6px 0' };
            else style = { width: 'calc(33.333% - 8px)', aspectRatio: '1' };

            return (
              <div key={image.id} style={{
                ...style, borderRadius: '16px', overflow: 'hidden',
                backgroundColor: currentTheme.cardBackground,
                boxShadow: isDarkMode ? '0 2px 8px rgba(255,255,255,0.1)' : '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}>
                <img src={image.uri} alt="Saved" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%',
        backgroundColor: currentTheme.cardBackground,
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '10px 0', borderTop: isDarkMode ? '1px solid rgba(51, 51, 51, 1)' : '1px solid rgba(0,0,0,0.1)'
      }}>
      </div>
    </div>
  );
};

export default SavedScreen;