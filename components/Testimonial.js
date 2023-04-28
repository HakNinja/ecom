import React from "react";
import styles from "../styles/Mystyle.module.css";
// import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section className={`${styles.client_section} ${styles.layout_padding}`}>
      <div className={styles.container}>
        <div className={`${styles.heading_container} ${styles.heading_center}`}>
          <h2>Customer's Testimonial</h2>
        </div>
      </div>
      <section class="text-gray-400 bg-silver-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/302x302"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/300x300"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p class="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/305x305"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p class="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    //        <div id={styles.carouselExample3Controls} className={`${styles.carousel} ${styles.slide}`} data-ride="carousel">
    //           <div className={styles['carousel-inner']}>
    //              <div className={`${styles['carousel-item']} ${styles.active}`}>
    //                 <div className={`${styles.box} ${styles['col-lg-10']} ${styles['mx-auto']}`}>
    //                    <div className={styles.img_container}>
    //                       <div className={styles['img-box']}>
    //                          <div className={styles['img_box-inner']}>
    //                             <img src="images/client.jpg" alt=""/>
    //                          </div>
    //                       </div>
    //                    </div>
    //                    <div className={styles['detail-box']}>
    //                       <h5>
    //                          Anna Trevor
    //                       </h5>
    //                       <h6>
    //                          Customer
    //                       </h6>
    //                       <p>
    //                          Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
    //                       </p>
    //                    </div>
    //                 </div>
    //              </div>
    //              <div className={styles['carousel-item']}>
    //                 <div className={`${styles.box} ${styles['col-lg-10']} ${styles['mx-auto']}`}>
    //                    <div className={styles.img_container}>
    //                       <div className={styles['img-box']}>
    //                          <div className={styles['img_box-inner']}>
    //                             <img src="images/client.jpg" alt=""/>
    //                          </div>
    //                       </div>
    //                    </div>
    //                    <div className={styles['detail-box']}>
    //                       <h5>
    //                          Anna Trevor
    //                       </h5>
    //                       <h6>
    //                          Customer
    //                       </h6>
    //                       <p>
    //                          Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
    //                       </p>
    //                    </div>
    //                 </div>
    //              </div>
    //              <div className={styles['carousel-item']}>
    //                 <div className={`${styles.box} ${styles['col-lg-10']} ${styles['mx-auto']}`}>
    //                    <div className={styles.img_container}>
    //                       <div className={styles['img-box']}>
    //                          <div className={styles['img_box-inner']}>
    //                             <img src="images/client.jpg" alt=""/>
    //                          </div>
    //                       </div>
    //                    </div>
    //                    <div className={styles['detail-box']}>
    //                       <h5>
    //                          Anna Trevor
    //                       </h5>
    //                       <h6>
    //                          Customer
    //                       </h6>
    //                       <p>
    //                          Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
    //                       </p>
    //                    </div>
    //                 </div>
    //              </div>
    //           </div>
    //           <div className={styles.carousel_btn_box}>
    //           <a className={styles['carousel-control-prev']} href="#carouselExample3Controls" role="button" data-slide="prev">
    //              <i className={`${styles.fa} ${styles['fa-long-arrow-left']}`} aria-hidden="true"></i>
    //              <span className={styles['sr-only']}>Previous</span>
    //              </a>
    //              <a className={styles['carousel-control-next']} href="#carouselExample3Controls" role="button" data-slide="next">
    //              <i className={`${styles.fa} ${styles['fa-long-arrow-right']}`} aria-hidden="true"></i>
    //              <span className={styles['sr-only']}>Next</span>
    //              </a>
    //           </div>
    //        </div>
    //     </div>
    //  </section>
  );
};

export default Testimonial;
