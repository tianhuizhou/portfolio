import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className={'cards'} id={'cardgroups'}>
            <h1>Check out these EPIC Destinations!</h1>
            <div className={'cards_container'}>
                <div className={'cards-wrapper'}>
                    <ul className={'cards_items'}>
                        <CardItem src="/images/img-2.jpg"
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                        <CardItem src="/images/img-3.jpg"
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                    </ul>
                    <ul className={'cards_items'}>
                        <CardItem src="/images/img-2.jpg"
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                        <CardItem src="/images/img-3.jpg"
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                        <CardItem src="/images/img-2.jpg"
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                        <CardItem src="/images/img-2.jpg"
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;