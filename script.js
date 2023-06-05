 const bar = document.getElementById('bar')
 const nav = document.getElementById('navbar')

 if (bar) {
    bar.addEventListener('onclick', () => { 
        nav.classList.add('active');
    })
 } 


 /* Add this media query at the end of your CSS */
@media screen and (max-width: 768px) {
    #header {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 80px;
        background: #E3E6F3;
        z-index: 999;
        position: sticky;
        top:0;
        left: 0;
      
    }
  
    .Logo {
        font-size: 28px;
        font-weight: bold;
        color: #fefefe;
        padding-right: 100px;
        font-style: rubik puddles;
    }
    .hamburger{
        display:block;
        cursor: pointer;

    }
    .hamburger .line{
        width:30px;
        height: 3px;
        background: white;
        margin: 6px 0;
    }
  
    #navbar  {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #navbar li a{
        display: block;
    color: #fefefe;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 50px;
    transition: 0.2s;
    margin:0 5px;
    }
  
    #mobile {
      display: flex;
      align-items: center;
    }
  
    #mobile a {
      margin-right: 10px;
    }
  
    #bar {
      display: inline-block;
      font-size: 20px;
      cursor: pointer;
    }
  
    /* Add any additional responsive styles as needed */
  }
  
   