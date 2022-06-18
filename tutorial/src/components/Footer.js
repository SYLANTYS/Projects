import React from 'react'
import { FaTwitterSquare,  } from "react-icons/fa";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaRedditSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      < FaTwitterSquare size={25} color="grey"/>
      < FaFacebookSquare size={25} color="grey"/>
      < FaInstagramSquare size={25} color="grey"/>
      < FaRedditSquare size={25} color="grey"/>
    </footer>
  )
}
