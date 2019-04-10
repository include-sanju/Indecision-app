import React from 'react';
import Option from './Option';
const Options = (props) => ( < div >
        <
        div className = "widget-header" >
        <
        h3 className = "widget-header__title" > Your Options < /h3> <
        button onClick = { props.handleRemoveAll }
        className = 'button button--link' > remove all < /button> < /
        div > {
            props.options.length === 0 && < p className = "widget__message" >
            Please add an option to start! < /p>} {

            props.options.map((option, index) => {
                return <div key = { option } >
                    <
                    Option key = { option }
                handleRemoveOption = { props.handleRemoveOption }
                optionText = { option }
                count = { index + 1 }
                /> < /
                div >
            })
        } <
        /div>);
        export default Options;