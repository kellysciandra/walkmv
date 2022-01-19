import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (props.open !== isOpen) {
            setIsOpen(props.open)
        }

    }, [props.open]);

    const styles = {
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: isOpen ? '100%': 0,
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'aqua',
            opacity: 0.75,
            color: 'rgb(255,78,83 )',
            transition: 'height 0.3s ease',
            zIndex: 2,
        },
        menuList: {
            paddingTop: '3rem',
        }
    }

    return <>
        <div style={styles.container}>
            {
                isOpen? 
                    <div style={styles.menuList}>
                        { props.children }    
                    </div> : null
            }
        </div>
    </>
};

export default Menu;