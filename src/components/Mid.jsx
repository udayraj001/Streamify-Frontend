import React from 'react'

const Mid = () => {
  return (
    <main>
    <div class="main-content">
        
    <nav>
        <button class="menu-btn menu--disabled menu--active add" id="op1" onclick="openLeftMenu()">
            <i data-feather="menu"></i>
        </button>
        <menu>
            <li class="menu--disabled menu--active logo" >
                <img src="https://www.leoweekly.com/wp-content/uploads/2021/12/AE_-Comics-Venom-1024x630.jpg?x81395" alt="Movie DB"/>
            </li>
            <li><a href="#tv">Tv Shows</a></li>
            <li><a href="#" active >Movies</a></li>
            <li><a href="#anime">Animes</a></li>
        </menu>
        <button class="menu-btn menu--disabled menu--active add" id="op1" onclick="openRightMenu()">
            <i data-feather="search"></i>
        </button>
    </nav>

   
    <div class="slideshow">
        <img src="https://i.pinimg.com/736x/23/05/1a/23051a285aea13b7496749d117df53e7.jpg" alt="Nice"/>
    </div>


<section class="m15" id="tv">
        
        <div class="section-name flex-between">
            <h3 class="m15">Movies for You</h3>
            <div>
                <button class="left" onclick="swipeLeft(1)">&#60</button>
                <button class="right" onclick="swipeRight(1)">&#62</button>
            </div>
        </div>

       
        <div class="horizontal-scroll-holder m15">
            <div class="horizontal-scroll">
                    
                <div class="card">
                    <img src="https://www.leoweekly.com/wp-content/uploads/2021/12/AE_-Comics-Venom-1024x630.jpg?x81395" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Venom</h4>
                        <p>5 star rateings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOePjPqJsKrXeA8--eaFlXPNizJmUzc1FHiQ&usqp=CAU" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Black Swan</h4>
                        <p>4.5 star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
               
                <div class="card">
                    <img src="https://i.pinimg.com/564x/6a/2e/a1/6a2ea1039b9100aad4d47dacca5a8654.jpg" alt="captain"/>
                    <div class="description-holder">
                        <h4 class="description">Captain America</h4>
                        <p>5 star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                <div class="card">
                    <img src="https://i.pinimg.com/564x/7d/15/1e/7d151e6a28576514f17bdbda09a22992.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Iron Man 3</h4>
                        <p>5 Star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
            </div>
        </div>

    </section>





    <section class="m15" id="tv">
        
        <div class="section-name flex-between">
            <h3 class="m15">Tv shows</h3>
            <div>
                <button class="left" onclick="swipeLeft(1)">&#60</button>
                <button class="right" onclick="swipeRight(1)">&#62</button>
            </div>
        </div>

       
        <div class="horizontal-scroll-holder m15">
            <div class="horizontal-scroll">
                    
                <div class="card">
                    <img src="https://i.pinimg.com/474x/7b/04/7b/7b047b734cddc00546f921cb241596aa.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Tomorrow Land</h4>
                        <p>4 star rateings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                <div class="card">
                    <img src="https://i.pinimg.com/474x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Interstellar</h4>
                        <p>5 star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
               
                <div class="card">
                    <img src="https://i.pinimg.com/564x/83/45/11/834511de6cbfdc330d74646313a5b3a4.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Free Guy</h4>
                        <p>star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                <div class="card">
                    <img src="https://i.pinimg.com/474x/7a/a1/bb/7aa1bb665e012ac9aced007b387c69b5.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Superman Here</h4>
                        <p>ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
            </div>
        </div>

    </section>

    <section class="m15" id="anime">
        
        <div class="section-name flex-between">
            <h3 class="m15">Top animes</h3>
            <div>
                <button class="left" onclick="swipeLeft(2)">&#60</button>
                <button class="right" onclick="swipeRight(2)">&#62</button>
            </div>
        </div>

  
        <div class="horizontal-scroll-holder m15">
            <div class="horizontal-scroll">
                    
                <div class="card">
                    <img src="https://i.pinimg.com/474x/1a/62/39/1a623984e589f659620e397ccbc61a34.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Princess Monokee</h4>
                        <p>5 star rateings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                <div class="card">
                    <img src="https://i.pinimg.com/474x/03/c3/cb/03c3cb1ec8cd38260226773d90fbb956.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Naruto</h4>
                        <p>star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                                <div class="card">
                    <img src="https://i.pinimg.com/474x/c0/f5/d7/c0f5d7632d14c9c565344647b386e392.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Grave of the Fire Flies</h4>
                        <p>star ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
                
                <div class="card">
                    <img src="https://i.pinimg.com/474x/e4/2a/f3/e42af3ce6ba552782018e7462b0b7581.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Hunter</h4>
                        <p>ratings</p>
                    </div>
                    <button class="add">+</button>
                </div>
            </div>
        </div>

    </section>

    <section class="m15">
        
        <div class="section-name flex-between">
            <h3 class="m15">Best artists</h3>
            <div>
                <button class="left" onclick="swipeLeft(3)">&#60</button>
                <button class="right" onclick="swipeRight(3)">&#62</button>
            </div>
        </div>

        <div class="horizontal-scroll-holder m15">
            <div class="horizontal-scroll">
                   
                <div class="card">
                    <img src="https://i.pinimg.com/474x/b3/10/fd/b310fd8745a014cfab29b20d484abf0c.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Architecture</h4>
                        <p>50+ movies</p>
                    </div>
                    <button class="add">+</button>
                </div>
               
                <div class="card">
                    <img src="https://i.pinimg.com/474x/11/f8/c0/11f8c0a30526847eb37834342f043dc9.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Open Hemierr</h4>
                        <p>50+ movies</p>
                    </div>
                    <button class="add">+</button>
                </div>

                <div class="card">
                    <img src="https://i.pinimg.com/474x/37/91/15/3791158917f87b63c46b976e25e337a7.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">DJANGO</h4>
                        <p>50+ movies</p>
                    </div>
                    <button class="add">+</button>
                </div>
               
                <div class="card">
                    <img src="https://i.pinimg.com/474x/1f/60/a6/1f60a67fa5aff3c9be3598c8a4fc7645.jpg" alt="movies-image"/>
                    <div class="description-holder">
                        <h4 class="description">Hritik Roshan</h4>
                        <p>50+ movies</p>
                    </div>
                    <button class="add">+</button>
                </div>
            </div>
        </div>

    </section>

    </div>
</main>

  )
}

export default Mid
