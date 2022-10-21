import Icon from '../../assets/Icons/Icon.svg'

const Categories = ({blogs}) => {
    return ( 
        <section className="container">
            <h2 className='cat__head'>Choose A Category</h2>
            <div className="cat__container">
                {blogs.slice(0, 5).map((cat) =>{
                    return <Category key={cat.id} {...cat} />
                })}
            </div>
        </section>
     );
}

const Category = ({category}) => {

    return (
        <div className="cat__item">
            <img src={Icon} alt='Icon' />
            <h3>{category}</h3>
            <p>Get quick hacks and updates about {category} </p>
        </div>
    )
}
 
export default Categories;