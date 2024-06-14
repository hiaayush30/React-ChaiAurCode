import React from 'react'
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    {/* <Link to='/' className='mr-5'>Home</Link> */}
                    <NavLink className={({isActive,isPending})=>{
                        return isActive ? 'text-red-600 mr-5':'text-black mr-5'
                    }} to='/'>Home</NavLink>

                    <NavLink className={({isActive,isPending})=>{
                        return isActive ? 'text-red-600 mr-5 ':'text-black mr-5'
                    }} to='/about'>About Us</NavLink>

                    <NavLink className={({isActive,isPending})=>{
                        return isActive ? 'text-red-600 mr-5':'text-black mr-5'
                    }} to='/contact'>Contact</NavLink>

                    <NavLink className={({isActive,isPending})=>{
                        return isActive ? 'text-red-600 mr-5':'text-black mr-5'
                    }} to='/github'>Github</NavLink>

                    <NavLink className={({isActive,isPending})=>{
                        return isActive ? 'text-red-600 mr-5':'text-black mr-5'
                    }} to='/github/Aayush'>Custom</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header
