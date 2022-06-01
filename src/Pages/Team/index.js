import React from 'react'
import '../Team/Team.scss'

const Team = () => {
  return (
<div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-lg-6">
            {/* <!-- Section Heading--> */}
            <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" >
              <h3>Our Creative <span> Team</span></h3>
              <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- Single Advisor--> */}
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s">
              {/* <!-- Team Thumb--> */}
              <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                {/* <!-- Social Info--> */}
                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
              </div>
              {/* <!-- Team Details--> */}
              <div class="single_advisor_details_info">
                <h6>Yüce Demirayak</h6>
                <p class="designation">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s">
              {/* <!-- Team Thumb--> */}
              <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                {/* <!-- Social Info--> */}
                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
              </div>
              {/* <!-- Team Details--> */}
              <div class="single_advisor_details_info">
                <h6>Serkan Özdemir</h6>
                <p class="designation">UI Designer</p>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s">
              {/* <!-- Team Thumb--> */}
              <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                {/* <!-- Social Info--> */}
                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
              </div>
              {/* <!-- Team Details--> */}
              <div class="single_advisor_details_info">
                <h6>Gökhan Buruş</h6>
                <p class="designation">Developer</p>
              </div>
            </div>
          </div>
          {/* <!-- Single Advisor--> */}
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" >
              {/* <!-- Team Thumb--> */}
              <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                {/* <!-- Social Info--> */}
                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
              </div>
              {/* <!-- Team Details--> */}
              <div class="single_advisor_details_info">
                <h6>Çağdaş Aydemir</h6>
                <p class="designation">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Team