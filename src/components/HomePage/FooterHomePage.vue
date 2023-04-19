<template>
  <div id="footer">
    <ul class="wp-footer container">
      <li class="col-1">
        <h2>ABOUT US</h2>
        <p>
          Pien is a blog that offers valuable and informative content on various
          aspects of web development such as HTML, CSS, and JavaScript, and also
          includes topics like creative UI/UX designs, CSS animations, and
          effects.
        </p>
      </li>
      <li class="col-2">
        <h2>FOLLOW US</h2>
        <div class="wp-info">
          <span>
            <box-icon
              color="#fff"
              size="18px"
              type="logo"
              name="youtube"
            ></box-icon>
          </span>
          <span>
            <box-icon
              color="#fff"
              size="18px"
              type="logo"
              name="facebook"
            ></box-icon>
          </span>
          <span>
            <box-icon
              color="#fff"
              size="18px"
              type="logo"
              name="instagram"
            ></box-icon>
          </span>
          <span>
            <box-icon
              color="#fff"
              size="18px"
              type="logo"
              name="tiktok"
            ></box-icon>
          </span>
        </div>
      </li>
    </ul>
  </div>
  <div class="copyright">
    <div class="wp-copyright container">
      <p>Copyright © 2022 Pien All Rights Reserved</p>
      <span>Contact Us</span>
    </div>
  </div>
</template>


<style scoped>
#footer {
  background-color: #171c24;
  color: #e9ffff;
  font-size: 14px;
  padding: 30px 0px;
}

#footer ul.wp-footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
}

#footer ul.wp-footer li {
  list-style: none;
}

#footer ul.wp-footer li h2 {
  margin-bottom: 15px;
  font-size: 17px;
}

#footer ul.wp-footer li p {
  font-size: 14px;
  line-height: 1.7;
  color: #a09b9b;
}

#footer ul.wp-footer li.col-1 {
  width: 600px;
}

#footer ul.wp-footer li.col-1 p {
  margin: 0;
}

#footer ul.wp-footer li.col-2 {
  width: 200px;
}

.wp-info {
  display: flex;
}

.wp-info span {
  width: 35px;
  height: 35px;
  background-color: #252930;
  margin-right: 7px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
}

.wp-info span:hover {
  background-color: #788a82;
}

.copyright {
  background-color: #12161d;
  padding: 10px 0px;
}

.wp-copyright {
  color: #d7d0d0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wp-copyright p {
  margin: 0;
}
</style>