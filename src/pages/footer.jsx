
import "./footer.css"
function FooterT() {
  return (
    <>
      <footer>
      <div class="footerContainer">
          {/* <div class="socialIcons">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-google-plus"></i></a>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
          </div> */}
          <div class="footerNav">
              <ul>
                  <li><a href="https://www.facebook.com/headshotenergydrink" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/headshot.energy/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/headshot-energy/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
              </ul>
          </div>
          
      </div>
      <div class="footerBottom">
          <p>Copyright &copy;2023;<span class="designer">headshot.energy</span></p>
      </div>
      </footer>
    </>
  );
}

export default FooterT;