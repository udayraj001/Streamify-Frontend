import React from 'react'

const LeftBlock = () => {
  return (
   <>
   <div>
    <aside class="menu">
        <div class="main-content">
            <div class="flex-between">
                <div class="logo-holder">
                    <img src="https://t3.ftcdn.net/jpg/04/64/78/74/360_F_464787423_mFNIhM8f00HagGgI2eGzsf3wevZhPHCC.jpg" id="logo" alt="logo"/>
                    <b>Movie DB</b>
                </div>
                <span class="menu--disabled menu--active back" onclick="closeMenu()"> Back </span>
            </div>

            <menu>
                <li class="main">MENU</li>
                <li class="m15"><a href="" active ><i data-feather="home"></i>Home</a></li>
                <li class="m15"><a href=""><i data-feather="radio"></i>Community</a></li>
                <li class="m15"><a href=""><i data-feather="globe"></i>Discovery</a></li>
                <li class="m15"><a href=""><i data-feather="compass"></i>Comming Soon</a></li>
            </menu>
            <menu>
                <li class="main">SOCIAL</li>
                <li class="m15"><a href=""><i data-feather="user-plus"></i>Friends</a></li>
                <li class="m15"><a href=""><i data-feather="users"></i>Parties</a></li>
                <li class="m15"><a href=""><i data-feather="stop-circle"></i>Media</a></li>
            </menu>
            <menu>
                <li class="main">GENERAL</li>
                <li class="m15"><a href=""><i data-feather="settings"></i>Setting</a></li>
                <li class="m15"><a href=""><i data-feather="log-out"></i>Log Out</a></li>
            </menu>
        </div>
    </aside>
    </div>
    </>
  )
}

export default LeftBlock;
