<template>
  <footer class="footer footer-white footer-big"
          :class="{
    [`footer-${type}`]: type,
    [`footer-${size}`]: size
  }"
  >
    <div class="container">
      <div class="content">
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
          >
            <h5>About Us</h5>
            <ul class="links-vertical">
              <li>
                <a href="#pablo">
                  Blog
                </a>
              </li>
              <li>
                <a href="#pablo">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Presentation
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div
            class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
          >
            <h5>Market</h5>
            <ul class="links-vertical">
              <li>
                <a href="#pablo">
                  Sales FAQ
                </a>
              </li>
              <li>
                <a href="#pablo">
                  How to Register
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Sell Goods
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Receive Payment
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Transactions Issues
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Affiliates Program
                </a>
              </li>
            </ul>
          </div>
          <div
            class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
          >
            <h5>Market</h5>
            <ul class="links-vertical">
              <li>
                <a href="#pablo">
                  Sales FAQ
                </a>
              </li>
              <li>
                <a href="#pablo">
                  How to Register
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Sell Goods
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Receive Payment
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Transactions Issues
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Affiliates Program
                </a>
              </li>
            </ul>
          </div>

          <div class="md-layout-item md-medium-size-33 md-small-size-100">
            <h5>Follow Us</h5>
            <ul class="social-buttons">
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fa fa-twitter" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fa fa-facebook" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fa fa-whatsapp" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fa fa-google" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fa fa-instagram" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fa fa-slack" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fa fa-github" />
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fa fa-youtube-play" />
                </md-button>
              </li>
            </ul>

            <h5>Numbers Don't Lie</h5>
            <h4>14.521 <small>Freelancers</small></h4>
            <h4>1.423.183 <small>Transactions</small></h4>
          </div>
        </div>
      </div>

      <hr>

      <div class="copyright">
        Copyright © {{ year }} Siyahkare All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      img1: require("@/assets/img/faces/card-profile6-square.jpg"),
      img2: require("@/assets/img/faces/christian.jpg"),
      img3: require("@/assets/img/faces/card-profile4-square.jpg"),
      img4: require("@/assets/img/faces/card-profile1-square.jpg"),
      img5: require("@/assets/img/faces/marc.jpg"),
      img6: require("@/assets/img/faces/kendall.jpg"),
      img7: require("@/assets/img/faces/card-profile5-square.jpg"),
      img8: require("@/assets/img/faces/card-profile2-square.jpg")
    };
  }
};
</script>
<style></style>
