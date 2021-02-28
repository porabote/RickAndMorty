import React from 'react'

const CardRow = (props) => {

    const { label } = props

    let title = '';

    const parseLinks = (links) => {
        return links.map((item) => {
             return <p key={`f${(~~(Math.random()*1e8)).toString(16)}`}><a target="_blank" href={item}>{item}</a></p>
        })
    }

    const setLink = (link, title) => {
        return <p><a target="_blank" href={link}>{title}</a></p>
    }

    switch (typeof props.value) {
        case "string":
            title = `${props.value}`
            break
        case "number":
            title = `${props.value}`
            break
        case "object":
            title = `${props.value.name}`
            if(props.value.url !== undefined) title = setLink(props.value.url, props.value.name)
            if(props.value.name === undefined) title = parseLinks(props.value)
            break
        case "array":
            title = props.value.map((val) => {console.log(val)})
            break
        default:
            title = `${props.value}`;
    }

    return (
        <div className="card-character__descr-item">
            <div className="card-character__descr-key">{label}</div>
            <div className="card-character__descr-value">{title}</div>
        </div>        
    )
}

export default CardRow