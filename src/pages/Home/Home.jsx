import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import Product from '../../components/Product/Product';
import News from '../../components/News/News';
import Newsletter from '../../components/Newsletter/Newsletter';
import Services from '../../components/Services/Services';

import home from './../../images/home.png';
import "./style.css";

import allProducts from '../../helpers/allProducts';
import newsList from '../../helpers/newsList';
import servicesList from '../../helpers/servicesList';

const Home = ({addProductToCart}) => {

    const [products, setProducts] = useState(allProducts);
    const [news, setNews] = useState(newsList);
    const [services, setServices] = useState(servicesList);

    return (
        <section className="section">
            <div className="container">
                <section className="section-header">
                    <div className="section-header__text">
                        <h1>Bringing the sweetness of Apple to your doorstep</h1>
                        <p>Welcome to our online store of Apple, your one-stop destination for all things Apple! We offer a wide range of Apple products, including iPhones, iPads, Macs, Apple Watches, and more. Our store is committed to providing the latest Apple products at competitive prices, along with excellent customer service and fast shipping. Shop with us and experience the joy and convenience of Apple products!</p>
                        <div className="link-container">
                            <NavLink to="/" className="link">Explore now!</NavLink>
                        </div>
                    </div>      
                    <div className="section-header__img" >
                        <img src={home} alt="home" />
                    </div>
                </section>

                <section className="section-sale">
                    <h1 className="section-sale__title"><span style={{color: '#BB2649'}}>Order now</span> and get <span style={{color: '#BB2649'}}>20%</span> off</h1>
                    <ul className="section-sale__products">
                        {products.map((item) => {
                            if (item.sale) {
                                return <Product 
                                            key={item.id} 
                                            img={item.img} 
                                            title={item.title} 
                                            description={item.description}
                                            price={item.price} 
                                            id={item.id} 
                                            sale={item.sale}
                                            saleColor={item.saleColor}

                                            addProductToCart={addProductToCart}
                                        />
                            }
                        })}
                    </ul>
                </section>

                <section className="services">
                    <h1 className="services__title">Exploring Your Personalized Preferences and Shopping Experience</h1>
                    <ul className="services-items">
                        {services.map((service) => 
                            <Services 
                                key={service.id} 
                                img={service.img} 
                                title={service.title}
                                description={service.description}
                            />
                        )}
                    </ul>
                </section>

                <section className="section-news">
                    <h2 className="news-title">News & blogs</h2>
                    <p className="news-description">Our "News" block is designed to keep you informed about the latest product releases, software updates, promotions, and other important news that may be of interest to you. We believe that staying up-to-date with the latest news and trends in the world of Apple can help you make more informed decisions about the products you buy and use.</p>
                    <section className="news">
                        {
                            news.map((item) =>
                                <News key={item.id} title={item.title} img={item.img} date={item.date} />
                            )
                        }
                    </section>
                </section>
                <Newsletter />
            </div>
        </section>
    );
}

export default Home;