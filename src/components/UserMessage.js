import React from 'react'
import {Card} from 'antd';
import {Avatar} from 'antd';
const {Meta} = Card;

class ShopListHeader extends React.Component{
    render(){
        return (
            <Card>
                <Meta avatar = {
                     <Avatar src="https://spoonacular.com/recipeImages/779276-556x370.jpg" />
                }
                title = "Home Chef Shopping List"
                description = "Notice something new? You can now add your favorite recipes to your shopping list!"
                />
                    
            </Card>
        )
    }
}
export default ShopListHeader