import React, { cloneElement } from 'react'

export default props => {

    return (
        <div>
            {/* cloneElement(props.children, props) pode ser usado apenas com 1 elemento*/}
            {
                props.children.map( (child, i) => {
                    return cloneElement(child, { ...props, i })
                })
            }
        </div>

    )
}