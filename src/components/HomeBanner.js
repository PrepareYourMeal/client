import React, {Component} from "react";

class HomeBanner extends Component {
    state = {};
    render() {
        const {name, profileImage, email, introduction} = this.props;

        return (
        
        <div class="jsx-2228371263 grid-container">
            <div class="sc-bdVaJa itryXm">
                <section aria-label="three steps" id="three-steps" role="section" class="jsx-1201281862">
                    <p aria-hidden="true" class="jsx-4164099341 jsx-2085888330 jsx-2085888330 jsx-1324842411 ">Green Chef delivers organic ingredients and easy recipes to cook incredible meals.</p>
                    <h3 class="jsx-1542136160 jsx-2085888330 jsx-2085888330 jsx-454027488 ">Dinner Is Just 3 Steps Away</h3>
                    <div class="jsx-2589393665 grid-container">
                        <div class="sc-bdVaJa itryXm">
                            <div aria-label="three steps" role="group" class="sc-bwzfXH FqmtD">
                                <div aria-label="step 1" role="figure" class="sc-htpNat eqaQrK">
                                    <div class="jsx-801727242 step">
                                        <img alt="Choose" src="https://images.greenchef.com/greenchef-assets/icons/2019-12-10/powder-choose.svg" class="jsx-1331207374"/>
                                        <h1 class="jsx-2684974212 jsx-2085888330 jsx-2085888330 jsx-729095629 ">Choose</h1>
                                        <p class="jsx-4164099341 jsx-2085888330 jsx-2085888330 jsx-1324842411 ">Choose from our wide variety of deliciously clean meal plans at manageable prices, with options to feed two people or a family of four.</p>
                                    </div>
                                </div>
                                <div aria-label="step 2" role="figure" class="sc-htpNat eqaQrK">
                                    <div class="jsx-801727242 step">
                                        <img alt="Cook" src="https://images.greenchef.com/greenchef-assets/icons/2019-12-10/powder-cook.svg" class="jsx-3840755099"/>
                                        <h1 class="jsx-2684974212 jsx-2085888330 jsx-2085888330 jsx-729095629 ">Cook</h1>
                                        <p class="jsx-4164099341 jsx-2085888330 jsx-2085888330 jsx-1324842411 ">Our premium ingredients come pre-measured and prepped, saving you time. All you have to do is follow easy step-by-step instructions with photos.</p>
                                    </div>
                                </div>
                                <div aria-label="step 3" role="figure" class="sc-htpNat eqaQrK">
                                    <div class="jsx-801727242 step">
                                        <img alt="Enjoy" src="https://images.greenchef.com/greenchef-assets/icons/2019-12-10/powder-enjoy.svg" class="jsx-2621403108"/>
                                        <h1 class="jsx-2684974212 jsx-2085888330 jsx-2085888330 jsx-729095629 ">Enjoy</h1>
                                        <p class="jsx-4164099341 jsx-2085888330 jsx-2085888330 jsx-1324842411 ">Go ahead, pat yourself on the back. You'll be amazed by the tasty, restaurant-worthy meal you cooked. New recipes every week!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jsx-1201281862 start-cooking">
                        <a class="jsx-3718205992 jsx-3258146766 jsx-863172528 jsx-2085888330" href="/sign-up/welcome">Start Cooking</a>
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

export default HomeBanner;
