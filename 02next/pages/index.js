import Category  from '@/components/Category'
import AddToCart from "@/components/addToCart";
import Image from "next/image";

export  default  function  index(){
    const style={display:"flex"

    }

    return(
      <div>
          <Category />
          <div style={style}>
              <div className="product-info-row">
                  <div className="details-gallery">
                      <div className="mySwiper">
                          <div className="big-image" id="galleryBox">
                              <a
                                  href="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=800&amp;height=800&amp;format=jpg"
                              >
                                  <picture>
                                      <img alt=""
                                           src="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=600&amp;height=600&amp;format=jpg"/>
                                  </picture>

                              </a>

                          </div>
                      </div>
                      <div className="mySwiper2">
                          <div className="small-images">
                              <div className="swiper-slide">
                                  <img
                                      src="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=100&amp;height=100&amp;format=jpg"
                                      alt="Small Image 1"/>
                              </div>
                              <div className="swiper-slide">
                                  <img
                                      src="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=100&amp;height=100&amp;format=jpg"
                                      alt="Small Image 1"/>
                              </div>
                              <div className="swiper-slide">
                                  <img
                                      src="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=100&amp;height=100&amp;format=jpg"
                                      alt="Small Image 1"/>
                              </div>
                              <div className="swiper-slide">
                                  <img
                                      src="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=100&amp;height=100&amp;format=jpg"
                                      alt="Small Image 1"/>
                              </div>
                              <div className="swiper-slide">
                                  <img
                                      src="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=100&amp;height=100&amp;format=jpg"
                                      alt="Small Image 1"/>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="product-info-row2">
                  <div className="details-info">
                      <div className="product-details">
                          <div className="product-description"><h1 className="product-detail-title">Rugshop Vintage
                              Distressed Bohemian Runner Rug 2' x 7' Gray</h1></div>
                          <div className="product-rating1">
                              <a id="bylineInfo" className="a-link-normal"
                                 href="/stores/Rugshop/page/BBB9F7D5-9545-4CDE-8F39-CA76C7ABF6A8?ref_=ast_bln">Visit the
                                  Rugshop Store</a></div>
                          <div className="stars-wrapper">
                              <div className="shop-rating">
                                  <img src="/images/icon_star(on).jpg" />
                                  <img src="/images/icon_star(off).jpg"/>
                                  <img src="/images/icon_star(off).jpg"/>
                                  <img src="/images/icon_star(off).jpg"/>
                                  <img src="/images/icon_star(off).jpg"/>
                              </div>
                              <div>(4.8)</div>
                              <div><a href="#" data-turbolinks="false">182 reviews</a></div>
                          </div>
                          <span className="discount">-30%</span>
                          <span className="price">$29.99</span>
                          <br />
                          <span className="original-price">$39.99</span>
                          <br />
                          <span className="delivery">Arrives: <span className="date">Wed,June 07-Fri,June 09</span></span>
                      </div>
                      <div className="horizontal-line"></div>
                      <div>
                          <div><span className="color">Color</span></div>
                          <div className="tooltip">
                              <div className="a-button-inner">
                                  <button className="a-button-text" type="button" id="a-autoid-21-announce">
                                      <div className="">
                                          <img src="https://m.media-amazon.com/images/I/61kAEWa-CoL._SS36_.jpg" alt="Blue"
                                               className="imgSwatch"/>
                                      </div>
                                      <div className="color-desc">Yellow</div>
                                  </button>
                              </div>
                              <div className="a-button-inner">
                                  <button className="a-button-text" type="button" id="a-autoid-21-announce">
                                      <div className="">
                                          <img src="https://m.media-amazon.com/images/I/61kAEWa-CoL._SS36_.jpg" alt="Blue"
                                               className="imgSwatch"/>
                                      </div>
                                      <div className="color-desc">Yellow</div>
                                  </button>
                              </div>
                              <div className="a-button-inner">
                                  <button className="a-button-text" type="button" id="a-autoid-21-announce">
                                      <div className="">
                                          <img src="https://m.media-amazon.com/images/I/61kAEWa-CoL._SS36_.jpg" alt="Blue"
                                               className="imgSwatch"/>
                                      </div>
                                      <div className="color-desc">Yellow</div>
                                  </button>
                              </div>
                              <div className="a-button-inner">
                                  <button className="a-button-text" type="button" id="a-autoid-21-announce">
                                      <div className="">
                                          <img src="https://m.media-amazon.com/images/I/61kAEWa-CoL._SS36_.jpg" alt="Blue"
                                               className="imgSwatch"/>
                                      </div>
                                      <div className="color-desc">Yellow</div>
                                  </button>
                              </div>

                          </div>
                      </div>
                      <div>
                          <div><span className="color">About this item</span></div>
                          <ul className="details-more mb-3">
                              <li>100% polypropylene machine made area rug with jute backing.
                              </li>
                              <li>100% polypropylene machine made area rug with jute backing.
                              </li>
                              <li>100% polypropylene machine made area rug with jute backing.
                              </li>
                              <li>100% polypropylene machine made area rug with jute backing.
                              </li>
                              <li>Easy-to-clean, does not shed - Perfect for high traffic areas of your home, this design
                                  beautifully enhances any room of the home.
                              </li>
                              <li>Easy-to-clean, does not shed - Perfect for high traffic areas of your home, this design
                                  beautifully enhances any room of the home.
                              </li>
                          </ul>
                      </div>
                      <div className="specification">
                          <div className="row">

                              <div><span className="cell bold">Brand:</span></div>
                              <div><span className="cell bold">Mpn:</span></div>
                              <div><span className="cell bold">Size:</span></div>
                              <div><span className="cell bold">Color:</span></div>
                              <div><span className="cell bold">Material Type:</span></div>
                              <div><span className="cell bold">Manufacturer:</span></div>
                              <div><span className="cell bold">Model:</span></div>
                              <div><span className="cell bold">Product Dimensions:</span></div>
                              <div><span className="cell bold">Isin:</span></div>
                          </div>
                          <div className="row">

                              <div><span className="cell">Rugshop Store</span></div>
                              <div><span className="cell ">MON836Gray2*7</span></div>
                              <div><span className="cell">2*7 Feet</span></div>
                              <div><span className="cell ">Grey</span></div>
                              <div><span className="cell">Other</span></div>
                              <div><span className="cell ">World Rug Gallery</span></div>
                              <div><span className="cell">Rugshop Vintage</span></div>
                              <div><span className="cell ">0.31 inches</span></div>
                              <div><span className="cell">IBSKEV</span></div>
                          </div>
                      </div>
                  </div>
              </div>
              <AddToCart />
          </div>

\    </div>
  )
}