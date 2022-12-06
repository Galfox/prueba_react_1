import '../assets/Header.css';

function Header() {

    return(
        <header>
            <div className="row">
                <div className="col-8">
                <a href="the_simpson_img" title="the_simpson_img"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png" width="400" alt="simpsons, cartoon characters png" /></a>                
                </div>
                <div className='position-relative top-0 start-50 position-absolute'>
                <a href="the_simpson_img" title="the_simpson_img"><img src="https://www.pluggedin.com/wp-content/uploads/2020/01/the-simpsons-review-image-2048x1174.jpg" width="390" alt="simpsons, cartoon characters png" /></a>                
                </div>
            </div>
        </header>
    );
}

export default Header;