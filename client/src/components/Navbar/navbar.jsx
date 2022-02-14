import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
export default function navbar() {
    return <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to='/'>ecommerce</Link>
            </div>
            <ul>
                <li className={styles.menu}>
                    <Link to='/'>Products</Link>

                </li>
            </ul>
        </div>
        <div className={styles.right}>
        <Link to='/signin'>
            <Button colorScheme='pink'>Login</Button>
        </Link>
        <Link to='/signup'>
            <Button colorScheme='pink'>Register</Button>
        </Link>
        </div>
    </nav>;
}
