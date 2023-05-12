import React from "react";
import "./Footer.css";
import { FaHome, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div class="content">
        <div class="top">
          <div class="logo-details">
            <span class="logo_name">Sitesoch</span>
          </div>
          <div class="media-icons">
            <a href="#">
            <i class="ri-facebook-circle-line"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Links</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Services</li>
            <li>
              <a href="#">App Design</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Logo Design</a>
            </li>
            <li>
              <a href="#">Banner Design</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Other services</li>
            <li>
              <a href="#">SEO</a>
            </li>
            <li>
              <a href="#">Content Marketing</a>
            </li>
            <li>
              <a href="#">Prints</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Contact</li>
            <li>
              <a href="#">+90 506166</a>
            </li>
            <li>
              <a href="#">+990 506166</a>
            </li>
            <li>
              <a href="#">ihlas1mert@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">
            Copyright © 2021 <a href="#">İhlas MERT.</a>
          </span>
          <span class="policy_terms">
            <a href="#">Privacy policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;