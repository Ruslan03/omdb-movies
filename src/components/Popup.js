import React from 'react'
import Styled from 'styled-components';

const PopupWrapper  = Styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CloseButton  = Styled.button`
    background: none;
    border: 1px solid #fff;
    color: #fff;
    padding: .5em 1em;
    border-radius: 5px;
    margin-top: 1em;
    cursor: pointer;
`;

const Popup = ({ content, showPopup, onClose }) => {
    return (
        <>
            {
                showPopup &&
                <PopupWrapper>
                    {content ? content : null}
                    <CloseButton type="button" onClick={onClose}>Close</CloseButton>
                </PopupWrapper>
            }    
        </>
    )
}

export default Popup