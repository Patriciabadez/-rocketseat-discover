import React from 'react'
import { ContainerContacts } from './styled';

const Contacts = () => {
    return (
        <>
            <ContainerContacts>
                <img src='./assets/map-pin.svg'></img>
                <p>Brasil</p>
                <p><a href='https://www.linkedin.com/in/patricia-dias-baldez-a89b0818a/'></a></p>

                <img src='./assets/briefcase.svg'></img>
                <p>TrindTech</p>

                <img src='./assets/github.svg'></img>
                <p>GitHub</p>

                <img src='./assets/instagram.svg'></img>
                <p>Instagram</p>

                <img src='./assets/twitter.svg'></img>
                <p>Twitter</p>

                <img src='./assets/globe.svg'></img>
                <p>Site</p>

                <img src='./assets/mail.svg'></img>
                <p>patriciabaldez1985@gmail.com</p>

            </ContainerContacts>
        </>
    )
}
export default Contacts