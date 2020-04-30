import React from 'react'
import {Card} from 'antd';
import {Avatar} from 'antd';
const {Meta} = Card;

class AboutHeader extends React.Component{
    render(){
        return (
            <Card>
                <Meta 
                title = "Meal Prepping Made Easy!"
                />
                <br/>
                 <p className="HeaderDesc">Stove & Oven is a company that wants to do help you make meal prep easy!</p>
                 <p className="HeaderDesc"> It can be hard to search hours for new recipes for your family that may have special dietary restrictions or if you just want a welcome change. </p>
                 <p className="HeaderDesc">We hope to ease some of that pain!</p>   
            </Card>
        )
    }
}
export default AboutHeader