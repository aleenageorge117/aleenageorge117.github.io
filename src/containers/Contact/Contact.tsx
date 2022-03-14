import React from 'react';

// SCSS
import "./Contact.scss";

const Contact = () => {

    let contactForm = [
        {
            "label": "Name",
            "formField": "input",
            "type": "text",
            "name": "name",
            "placeholder": "Name...",
            "required": true,
            "maxLength": 250
        },
        {
            "label": "Email",
            "formField": "input",
            "type": "text",
            "name": "email",
            "placeholder": "Email...",
            "required": true,
            "maxLength": 250
        },
        {
            "label": "Message",
            "formField": "textarea",
            "type": "",
            "placeholder": "Type your message here...",
            "name": "message",
            "required": true,
            "maxLength": 1000
        },
        {
            "label": "Send Message",
            "formField": "button",
            "type": "submit",
            "placeholder": "",
            "name": "send",
            "required": false,
            "maxLength": 0
        }        
    ];

    return (

        <div className='contactContainer col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <form className='formSection'>
                {
                    contactForm.map((field: any, key: number) => {
                        return (
                            <div>
                                {
                                    field.formField !== 'button' ? 
                                    (   <span>
                                            {field.label}
                                            {
                                                field.required ? <span className='requiredStar'>*</span> : (null)
                                            }: &nbsp;
                                        </span>
                                    ) : (null)
                                }
                                {
                                    field.formField == 'input' ? (<input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required}/>) : (null)
                                }
                                {
                                    field.formField == 'textarea' ? (<textarea name={field.name} placeholder={field.placeholder} required={field.required}/>) : (null)
                                }
                                {
                                    field.formField == 'button' ? (<button className='primaryBtn btn' type={field.type} name={field.name}>{field.label}</button>) : (null)
                                }
                            </div>
                        );
                    })
                }
            </form>
        </div>

    );
}

export default Contact;