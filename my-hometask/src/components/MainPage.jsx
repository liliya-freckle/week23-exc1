import React from 'react'
import { data } from './Data'
import Card from './Card'
import "./mainPage.css"



function MainPage() {
    function getColor(id) {
        switch (id) {
            case 0:
                return 'turquoise';
            case 1:
                return 'green';
            case 2:
                return 'red';
            case 3:
                return 'black';
            default:
                return 'blue'
        }
    }
    return (
        <div className='container'>
            {
                data.map((tarif, id) => {
                    return <Card key={tarif.id} details={tarif} color={getColor(id)} />
                })
            }
        </div>

    )
}

export default MainPage
