new Vue({
    el: "#footer",
    data: {
        footerBlog: `
    <footer id="footer">
      <div class="container">
        <div class="row ">
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12 mb-2">
                  <strong>Presencia Internet</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4">
                        <a id="icons" href="#">
                          <img src="../img/github1.png"  width="30em" height="30em">

                          </a>
                      </div>
                      <div class="col-4">
                        <a  id="icons" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 34 34" class="global-nav__logo">
                            <title>LinkedIn</title>
                                      <g>
                            <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                                      </g>
                                    </svg>
                        </a>
                      </div>
                      <div class="col-4">
                        <a  id="icons" href="..\\.">
                          <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-bootstrap-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                  <strong>Links</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a   href="../index.html">Home</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a   href="blog.html">Blog</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a   href="../index.html#contacto">Contacto</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                  <strong>Servicios</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a   href="../index.html">Desarrollador Web</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a   href="../index.html">Desarrollador Android</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a   href="../index.html">Gestion Base de Datos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                  <strong>Contacta</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                    <a   href="../index.html#contacto">joelsct98@gmail.com</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                    </svg>
                    <a   href="../index.html#contacto">+34 685 21 71 94</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-signpost-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1.414V4h2V1.414a1 1 0 0 0-2 0zM1 5a1 1 0 0 1 1-1h10.532a1 1 0 0 1 .768.36l1.933 2.32a.5.5 0 0 1 0 .64L13.3 9.64a1 1 0 0 1-.768.36H2a1 1 0 0 1-1-1V5zm6 5h2v6H7v-6z"/>
                    </svg>
                    <a   href="../index.html#contacto">C/ Soledad Cazorla</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <span>Energia y Salud Web &copy; 2022 - All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
        `,
        footerP_blog: `
    <footer id="footer">
      <div class="container">
        <div class="row ">
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12 mb-2">
                  <strong>Presencia Internet</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-4">
                        <a id="icons" href="#">
                          <img src="../../img/github1.png"  width="30em" height="30em">

                          </a>
                      </div>
                      <div class="col-4">
                        <a id="icons" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 34 34" class="global-nav__logo">
                            <title>LinkedIn</title>
                                      <g>
                            <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                                      </g>
                                    </svg>
                        </a>
                      </div>
                      <div class="col-4">
                        <a id="icons" href="#">
                          <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-bootstrap-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                  <strong>Links</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a  href="../../index.html">Home</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a  href="../blog.html">Blog</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a  href="../../index.html#contacto">Contacto</a>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                  <strong>Servicios</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a  href="../../index.html">Desarrollador Web</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a  href="../../index.html">Desarrollador Android</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <a  href="../../index.html">Gestion Base de Datos</a>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div class="col-6 col-md-3 col-lg-3 mb-2">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                  <strong>Contacta</strong>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                    <a  href="../../index.html#contacto">joelsct98@gmail.com</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                    </svg>
                    <a  href="../../index.html#contacto">+34 685 21 71 94</a>
                  </div>
                  <div class="col-12">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-signpost-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1.414V4h2V1.414a1 1 0 0 0-2 0zM1 5a1 1 0 0 1 1-1h10.532a1 1 0 0 1 .768.36l1.933 2.32a.5.5 0 0 1 0 .64L13.3 9.64a1 1 0 0 1-.768.36H2a1 1 0 0 1-1-1V5zm6 5h2v6H7v-6z"/>
                    </svg>
                    <a  href="../../index.html#contacto">C/ Soledad Cazorla</a>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <span>Energia y Salud Web &copy; 2022 - All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
        `,
        footerIndex: `
      <footer id="footer" >
        <div class="container">
          <div class="row ">
            <div class="col-6 col-md-3 col-lg-3 mb-2">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12 mb-2">
                    <strong>Presencia Internet</strong>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col-4">
                          <a  id="icons" href="#">
                            <img src="img/youtube.png"  width="30em" height="30em">

                            </a>
                        </div>
                        <div class="col-4">
                          <a  id="icons" href="#">
                             <img src="img/instagram.png"  width="30em" height="30em">

                          </a>
                        </div>
                        <div class="col-4">
                          <a  id="icons" href="#">
                             <img src="img/tiktok.png"  width="30em" height="30em">

                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3 col-lg-3 mb-2">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <strong>Enlaces</strong>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="row">
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <a   href="index.html">Home</a>
                    </div>
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <a   href="#Proyectos">Servicios</a>
                    </div>
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <a   href="index.html#contacto">Contacto</a>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div class="col-6 col-md-3 col-lg-3 mb-2">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <strong>Servicios</strong>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="row">
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <a   href="#Proyectos">Pérdida de peso</a>
                    </div>
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <a   href="#Proyectos">Medicina tradicional china y acupuntura</a>
                    </div>
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <a   href="#Proyectos">Elaboración de dietas personalizadas</a>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div class="col-6 col-md-3 col-lg-3 mb-2">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <strong>Contacta</strong>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="row">
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                      </svg>
                      <a   href="index.html#contacto">vicjimper@gmail.com</a>
                    </div>
                    <div class="col-12">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                      </svg>
                      <a href="https://api.whatsapp.com/send?phone=34647041788&text=Energia%20y%20salud">+34 647 041 788</a>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <span>Energia y Salud Web &copy; 2022 - All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
`,
    },
    methods: {}
})