import './category-item-styles.scss';

const CategoryItem = ({category}) => {
    const { imageUrl, title} = category;
    return (
        <div  className="category-container">
            <div className='background-image' style={{
                backgroundImage:`url(${imageUrl})`//destructuring a quick css using backticks to add the custom url
            }}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )

}

export default CategoryItem;