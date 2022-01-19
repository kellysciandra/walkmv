import { Menu } from "@material-ui/core";
import React, { useEffect, useState } from 'react'


const MenuButton = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('black')
    
    useEffect(() => {
        if (props.open !== isOpen) {
            setIsOpen(props.open)
        }
    }, [props.open]);
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    };

    const styles = {
        container: {
          height: '32px',
          width: '170px',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '2px',
          marginTop: '3em'
        },
        line: {
          height: '50px',
          width: '50px',
          background: 'black',
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: isOpen ? 'rotate(180deg)':'none',
          transformOrigin: 'bottom center',
          marginBottom: '3px',
        },
        lineMiddle: {
          opacity: isOpen ? 0: 1,
          transform: isOpen ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          transform: isOpen ? 'translateX(-1px) rotate(-180deg)':'none',
          transformOrigin: 'bottom center',
          marginTop: '3px',
        }}

    return <>
        <div style={styles.container} 
            onClick={props.onClick ? props.onClick : ()=> {handleClick()}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
    </>
};

export default MenuButton;