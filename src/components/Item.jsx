import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/styles/item.css'

const Item = (props) => {
    return(
        <Link to={`/packages/${props.id}`} className='itemfull'>
            <img src={props.imageUrls[0]} alt={props.name} width={280} height={280} className='image' />
            <div className='item'>
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="part-1">
                        <div className="item-price-new">
                            {props.location}
                        </div>
                        <div className="item-price-old">
                            ${props.price}
                        </div>
                    </div>
                    <div className='part-2'>
                        <div className='add-to-cart'>
                            <button>View details</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};
export default Item