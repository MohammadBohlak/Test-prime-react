
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import "./header.css"
export default function Header() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
        
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];
    const start = (
      <h2 className='logo'>Shop Elctronics</h2>
    )
    const end = (
      <div className='header-icons'>
      <span className='pi pi-bell'></span>
      <span className='pi pi-user'></span>
      <span className='pi pi-shopping-bag'></span>
      </div>
    )
    return (
        <div className="card text-500">
            <Menubar className='bg-blue-500'  model={items} start = {start} end = {end}/>
        </div>
    )
}
        