import React, { Component } from 'react'

import './character-details.scss'

import ApiService from '../../services/api-client-service'
import { CardDetails } from '../hoc'
import Card from '../card'
import Loader from '../loader'

const CharacterDetails = (props) => {

    const { data } = props

    return (
        <Card data={data}>


        </Card>
    )
}
//<CardDetailsRow label="Name" value="data.name" />
const { getCharacter } = new ApiService();

export default CardDetails(CharacterDetails, getCharacter)