import NavBar from "../../molecules/NavBar";
import Footer from "../../molecules/Footer";
import React from "react";

const Home=()=>{
    return(
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <br /> <br />
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

  </div>
  <div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
  <h1 style={{ color: 'Green', fontWeight: 'bold', fontSize: '100px' }}>TheTeaLeaf</h1>
  
    <img src="https://i.pinimg.com/564x/f7/7c/34/f77c34b317234b4dbc19153858e45eeb.jpg" class="d-block w-100 increased-width" alt="..." />
    <div class="carousel-caption d-none d-md-block"> <br /> <br />  
    </div>
<br /> 
<p style={{ color: 'white' }}>Welcome to TravelEase, your passport to unlocking the world's wonders. We specialize in crafting bespoke journeys to enchanting destinations that cater to your every need. Experience the pure joy of seamless travel, where adventure and relaxation unite to create unforgettable memories. Begin your extraordinary voyage with us today, and let our expertise and personalized service transform your dream vacation into reality. Whether you crave cultural immersion, scenic beauty, or thrilling escapades, we've got you covered. Join us on this incredible journey where every moment is tailored to your desires. It's time to embark on an unforgettable adventure with TravelEase.</p>
<br /> <br />
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://i.pinimg.com/564x/c6/68/5d/c6685d444f22e1a9b28d2dbb3f963a97.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://i.pinimg.com/736x/74/bf/b0/74bfb07157c44721cccb5185a38aeea6.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://i.pinimg.com/564x/83/35/c8/8335c8d2fdbbf2c4cdf0e5f71e4ff8a6.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>
</div>
</div>
</div>
</div>
    );
}
export default Home;