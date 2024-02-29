import React from 'react'

const RightBlock = () => {
  return (
    <aside class="search">
        <div class="main-content">
            <div class="menu--disabled menu--active back" onclick="closeMenu()"> Back </div>
            <input type="search" name="" id="search-box" placeholder="Search"/>

            <div class="vertical-box">
                <h3>Favorites</h3>
                <div class="card-hl">
                    <img src="https://i.pinimg.com/474x/08/b2/5f/08b25ff9df3a6b68be12ad6e1aff4715.jpg" alt="image"/>
                    <div class="description flex-center">
                        <div class="details">
                            <h5>Godzilla King</h5>
                            <p>Horror, Thriller</p>
                        </div>

                        <div class="rating">
                            <img src="https://i.pinimg.com/564x/74/24/18/74241890238ef6ead94b42f78a91fc9b.jpg" alt="rating"/>
                            7.8
                        </div>
                    </div>
                </div>
                <div class="card-hl">
                    <img src="https://i.pinimg.com/474x/45/ac/87/45ac875a8d93cb58e656c71e1c795e4c.jpg" alt="image"/>
                    <div class="description flex-center">
                        <div class="details">
                            <h5>Last Night In Solo</h5>
                            <p>Horror, Thriller</p>
                        </div>

                        <div class="rating">
                            <img src="https://i.pinimg.com/564x/74/24/18/74241890238ef6ead94b42f78a91fc9b.jpg" alt="rating"/>
                            7.8
                        </div>
                    </div>
                </div>
                <div class="card-hl">
                    <img src="https://i.pinimg.com/474x/77/aa/4a/77aa4a2749dcaddcfd20e845f203ec18.jpg" alt="image"/>
                    <div class="description flex-center">
                        <div class="details">
                            <h5>Star Wars</h5>
                            <p>Action</p>
                        </div>

                        <div class="rating">
                            <img src="https://i.pinimg.com/564x/74/24/18/74241890238ef6ead94b42f78a91fc9b.jpg" alt="rating"/>
                            7.8
                        </div>
                    </div>
                </div>
                

                <button class="btn-l">See More</button>
            </div>

            <div class="vertical-box">
                <h3>Popular Movies</h3>
                <div class="card-hl">
                    <img src="https://i.pinimg.com/474x/b8/78/5f/b8785fdcd412a8656e4c9790f68cfc4b.jpg" alt="image"/>
                    <div class="description flex-center">
                        <div class="details">
                            <h5>Joker</h5>
                            <p>Horror, Thriller</p>
                        </div>

                        <div class="rating">
                            <img src="https://i.pinimg.com/564x/74/24/18/74241890238ef6ead94b42f78a91fc9b.jpg" alt="rating"/>
                            7.8
                        </div>
                    </div>
                </div>
                <div class="card-hl">
                    <img src="https://i.pinimg.com/474x/b9/01/89/b9018984d84ef021f8e7e7497fe09d1a.jpg" alt="image"/>
                    <div class="description flex-center">
                        <div class="details">
                            <h5>The Venom 2</h5>
                            <p>Horror, Thriller</p>
                        </div>

                        <div class="rating">
                            <img src="https://i.pinimg.com/564x/74/24/18/74241890238ef6ead94b42f78a91fc9b.jpg" alt="rating"/>
                            7.8
                        </div>
                    </div>
                </div>
                <div class="card-hl">
                    <img src="https://i.pinimg.com/474x/86/cc/ca/86ccca822e82a8c75b62d9458a4183f1.jpg" alt="image"/>
                    <div class="description flex-center">
                        <div class="details">
                            <h5>Jurassic World 3</h5>
                            <p>Horror, Thriller</p>
                        </div>

                        <div class="rating">
                            <img src="https://i.pinimg.com/564x/74/24/18/74241890238ef6ead94b42f78a91fc9b.jpg" alt="rating"/>
                            7.8
                        </div>
                    </div>
                </div>
                

                <button class="btn-l">See More</button>
            </div>

        </div>
    </aside>


  )
}

export default RightBlock
