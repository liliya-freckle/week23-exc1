import React from 'react'
import { data } from './Data'
import Card from './Card'
import "./mainPage.css"



function MainPage() {
    return (
        <div className='container'>
            {
                data.map((tarif) => {
                    return <Card details={tarif} />
                })
            }
        </div>

    )
}

export default MainPage
