import React from "react"
import "./Button.css"

export default function Button(props) {
    return (
        <div data-testid="button" className="buttonEl">
            {props.label}
        </div>
    )
}