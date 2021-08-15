import React from 'react';
import './Blogs.css'
import img from '../img/portfolio/portfolio-1.jpg'
import img1 from '../img/portfolio/portfolio-3.jpg'
import img2 from '../img/portfolio/portfolio-8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const Blogs = () => {
  const blogs1 = [
    {
        title: 'Video Games',
        catagories: 'Games',
        description: 'Video gaming is an extremely popular leisure-time activity with more than two billion users worldwide (Newzoo, 2017).',
        imageUrl: img,
        postName: 'Morgan Desh',
        time: '10 min'
    },
    {
      title: 'Old Camers',
      catagories: 'Camera',
      description: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convalli a pellentesq.',
      imageUrl: img1,
      postName: 'Morgan Desh',
        time: '10 min'
        
    },
    {
      title: 'AI Table',
      catagories: 'AI Project',
      description: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convalli a pellentesq.',
      imageUrl: img2,
      postName: 'Morgan Desh',
        time: '10 min'
        

    }
]
  return (
    <section id="blogs" class="blog-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h2 class="title-a">
                Blog
              </h2>
              <div class="line-mf mt-5"></div>
            </div>
          </div>
        </div>
        <div class="row">
          {
            blogs1.map(blog2 =>
              <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
            <div class="card-align card card-blog">
              <div class="card-img">
                <a href="blog-single.html"><img src={blog2.imageUrl} alt="" class="img-fluid"/></a>
              </div>
              <div class="card-body">
                <div class="card-category-box">
                  <div class="card-category">
                  <FontAwesomeIcon icon={faPinterest} />  <a href=""></a>
                    <h6 class="category">{blog2.catagories}</h6>
                  </div>
                </div>
                <h1 class="card-title"><a href="blog-single.html">{blog2.title}</a></h1>
                <p class="card-description">
                  {blog2.description}
                </p>
              </div>
              <div class="card-footer">
                <div class="post-author">
                  <a href="#">
                    <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle"/>
                    <span class="author">{blog2.postName}</span>
                  </a>
                </div>
                <div class="post-date">
                  <span class="bi bi-clock"></span> {blog2.time}
                </div>
              </div>
            </div>
          </div>
              )
          }
        </div>
      </div>
    </section>
  );
};

export default Blogs;