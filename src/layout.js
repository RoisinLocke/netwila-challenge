import React from "react";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #f9f9f9;
          }
          .header-bg {
            background-image: url("./images/header-bg.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            padding: 2% 0 5% 0;
            text-align: center;
          }
          .header-company-bg {
            background-image: url("./images/company.jpg");
            background-repeat: no-repeat;
            background-position: "top";
            padding: 6% 0;
            text-align: "center";
          }
          .header-inner-bg {
            background-image: url("./images/company.jpg");
            background-repeat: no-repeat;
            background-position: "top";
            padding: 6% 0;
            text-align: "center";
          }

          .header-warehouse-bg {
            background-image: url("./images/warehouse.jpg");
            background-repeat: no-repeat;
            background-position: "bottom";
            padding: 6% 0;
            text-align: "center";
          }
          .header-contract-bg {
            background-image: url("./images/contract.jpg");
            background-repeat: no-repeat;
            background-position: "top";
            padding: 6% 0;
            text-align: center;
            display: block;
          }
          .header-route-bg {
            background-image: url("./images/route.jpg");
            background-repeat: no-repeat;
            background-position: "top";
            padding: 6% 0;
            text-align: center;
            display: block;
          }
          .header-product-bg {
            background-image: url("./images/products.jpg");
            background-repeat: no-repeat;
            background-position: "top";
            padding: 6% 0;
            text-align: center;
            display: block;
          }

          .survey-bg {
            background-position: "bottom center";
          }

          .survey-bg {
            background-image: url("./images/header.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            padding: 15% 0;
            color: #fff !important;
            font-size: 28px !important;
            text-align: center;
            display: block;
          }
          .w48 {
            width: 60px;
          }
          .w36 {
            width: 36px;
          }
          .w24 {
            width: 32px;
            padding: 5px;
          }
          time {
            font-size: 11px !important;
            color: #888;
          }
          @font-face {
            font-family: "Material Icons";
            font-style: normal;
            font-weight: 400;
            src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
            src: local("Material Icons"), local("MaterialIcons-Regular"),
              url(https://example.com/MaterialIcons-Regular.woff2)
                format("woff2"),
              url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
              url(https://example.com/MaterialIcons-Regular.ttf)
                format("truetype");
          }

          .material-icons {
            font-family: "Material Icons";
            font-weight: normal;
            font-style: normal;
            font-size: 32px; /* Preferred icon size */
            display: inline-block;
            line-height: 24px;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
            position: absolute;
            margin-top: 5px;

            /* corrected issue here */
            /* Support for all WebKit browsers. */
            -webkit-font-smoothing: antialiased;
            /* Support for Safari and Chrome. */
            text-rendering: optimizeLegibility;

            /* Support for Firefox. */
            -moz-osx-font-smoothing: grayscale;

            /* Support for IE. */
            font-feature-settings: "liga";
          }

          a {
            color: #7ed7ff;
          }
          a:hover {
            color: #2d3e53;
            text-decoration: none;
          }
          h3 a {
            color: #2d3e53;
          }
          h3 a:hover {
            color: #7ed7ff;
          }
          h6 {
            font-size: 14px;
          }
          .page-link {
            color: #7ed7ff;
          }
          .img-max {
            border: none !important;
            max-width: 80%;
            text-align: center;
            display: inline-block;
          }
          .btn-primary {
            background-color: #2d3e53 !important;
            border-color: #2d3e53;
            padding: 5px 25px;
            color: #fff;
          }
          .btn-primary:hover {
            background-color: #2d3e53 !important;
            border-color: #2d3e53;
          }

          .btn-outline-primary {
            border: 1px #7ed7ff solid !important;
            padding: 5px 25px;
            color: #7ed7ff;
          }
          .btn-outline-primary:hover {
            background-color: #2d3e53 !important;
            border-color: #2d3e53;
          }

          h1 {
            color: red;
            text-align: center;
            background-position: top;
            color: #333;
            font-size: 32px;
            margin-top: 2%;
          }
          .logo {
            background-image: url("./images/netwila-logo.svg");
            height: 250px;
            background-size: 30%;
            background-repeat: no-repeat;
            background-position: bottom;
          }
          .footer-bg {
            background-image: url("./images/slide-2.jpg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            padding: 12% 0;
          }
          h1 {
            color: #333;
            font-size: 20px;
          }
          table {
            font-size: 14px !important;
          }
          .grey-bg {
            background-color: #333;
            padding: 15% 0;
          }
          .grey-bg .f48 {
            font-size: 48px;
            margin-top: 3%;
          }
          .process {
            padding: 10% 0;
          }
          .mt30 {
            margin-top: 30px;
          }
          .mt10 {
            margin-top: 10px;
          }
          .ml30 {
            margin-left: 10px;
          }
          .card {
            border: none !important;
            padding: 0px !important;
          }
          .card-body {
            background-color: #ebebeb;
          }
          .mob {
            display: none !important;
          }
          .des {
            display: block !important;
          }
          .bg-light {
            padding: 10px 0;
            background-color: #f2f2f2;
          }
          .s-light-g {
            padding: 10px;
            background-color: #f8f9fa;
          }
          .s-light-w {
            padding: 10px;
            background-color: #ffffff;
          }
          .text-light {
            color: #888 !important;
          }

          .h5 {
            background-image: url("./images/h5-top.png");
            background-repeat: no-repeat;
            padding-top: 30px;
          }
          .h2 {
            background-image: url("./images/h5-top.png");
            background-repeat: no-repeat;
            padding-top: 30px;
          }
          /* removed height as it had no value */
          .no-series {
            background-color: #00c5a6;
            padding: 10px 15px;
            width: 40px;
            text-align: center;
            border-radius: 50px;
            color: #fff;
            font-size: 14px;
            margin-right: 10px;
            margin-bottom: 140px;
            float: left;
          }

          .footer-copyright {
            background-color: #f2f2f2;
            color: #999;
            font-size: 13px;
            padding: 10px 20px;
            display: block;
            text-align: center;
          }
          .route-b {
            border: 5px solid #f2f2f2;
            padding: 15px;
            margin-bottom: 20px;
          }
          table a span.material-icons {
            display: block !important;
            font-size: 18px;
            padding-right: 40px !important;
            width: 30px;
            float: left !important;
          }
          table i {
            display: block !important;
            font-size: 16px;
            padding-right: 40px !important;
            margin-left: 20px;
            font-style: normal;
            font-size: 14px;
          }

          ul.timeline {
            list-style-type: none;
            position: relative;
          }
          ul.timeline:before {
            content: " ";
            background: #d4d9df;
            display: inline-block;
            position: absolute;
            left: 29px;
            width: 2px;
            height: 100%;
            z-index: 400;
          }
          ul.timeline > li {
            margin: 20px 0;
            padding-left: 20px;
          }
          ul.timeline > li:before {
            content: " ";
            background: white;
            display: inline-block;
            position: absolute;
            border-radius: 50%;
            border: 3px solid #22c0e8;
            left: 20px;
            width: 20px;
            height: 20px;
            z-index: 400;
          }

          /* Nav */

          /** ======================  header ==============================**/
          .header {
            background-color: #3c8dbc;
          }
          .header .dropdown-menu {
            position: absolute;
            right: 0;
            left: auto;
            border-radius: 0px;
          }
          .header .user-image {
            float: left;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin-right: 10px;
            margin-top: -2px;
          }

          .header .navbar-light .navbar-nav .nav-link {
            color: #fff;
          }
          .header .navbar-light .navbar-nav .nav-link:hover,
          .header .navbar-light .navbar-nav .nav-link:focus {
            background: rgba(0, 0, 0, 0.1);
            color: #f6f6f6;
          }
          .header .fa.fa-fw.fa-bars {
            color: #fff;
          }
          .header .navbar-light .navbar-nav .nav-link {
            color: #fff;
            padding: 10px 20px;
            position: relative;
          }
          .header li > a > .label {
            position: absolute;
            top: 9px;
            right: 7px;
            text-align: center;
            font-size: 9px;
            padding: 2px 3px;
            line-height: 0.9;
            background-color: #333;
            border-radius: 0.25em;
          }
          .header li > a:after {
            display: none;
          }

          .header-ul {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            background-color: #ffffff;
            padding: 7px 10px;
            border-bottom: 1px solid #f4f4f4;
            color: #333;
            font-size: 14px;
          }

          .navbar-nav > .notifications-menu > .dropdown-menu,
          .navbar-nav > .messages-menu > .dropdown-menu,
          .navbar-nav > .tasks-menu > .dropdown-menu {
            width: 280px;
            padding: 0 0 0 0;
            margin: 0;
            top: 100%;
          }
          .navbar-nav
            > .messages-menu
            > .dropdown-menu
            li
            .menu
            > li
            > a
            > div
            > img {
            margin: auto 10px auto auto;
            width: 40px;
            height: 40px;
          }
          .navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a,
          .navbar-nav > .notifications-menu > .dropdown-menu li .menu > li > a {
            margin: 0;
            padding: 10px 10px;
            display: block;
            white-space: nowrap;
            border-bottom: 1px solid #f4f4f4;
          }
          .navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a > h4 {
            padding: 0;
            margin: 0 0 0 45px;
            color: #333;
            font-size: 15px;
            position: relative;
          }
          .navbar-nav > .messages-menu > .dropdown-menu li .menu > li > a > p {
            margin: 0 0 0 45px;
            font-size: 12px;
            color: #888888;
          }

          .footer-ul a {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;
            font-size: 12px;
            background-color: #fff;
            padding: 7px 10px;
            border-bottom: 1px solid #eeeeee;
            color: #333;
            display: block;
          }

          .dropdown-menu-over .menu {
            max-height: 200px;
            margin: 0;
            padding: 0;
            list-style: none;
            overflow-x: hidden;
          }

          .navbar-nav > .notifications-menu > .dropdown-menu li .menu > li > a {
            color: #444444;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 10px;
          }
          .navbar-nav
            > .notifications-menu
            > .dropdown-menu
            li
            .menu
            > li
            > a
            > .glyphicon,
          .navbar-nav
            > .notifications-menu
            > .dropdown-menu
            li
            .menu
            > li
            > a
            > .fa,
          .navbar-nav
            > .notifications-menu
            > .dropdown-menu
            li
            .menu
            > li
            > a
            > .ion {
            width: 20px;
          }

          a.navbar-brand {
            width: 165px;
          }

          /***    left menu ****/
          .sidenav a span {
            margin-left: 45px;
          }
          .sidenav {
            background-color: #fff;
            height: 100%;
            left: 0;
            overflow-x: hidden;
            padding-top: 60px;
            position: fixed;
            top: 0;
            transition: 0.5s;
            width: 0;
            z-index: 1;
          }
          .sidenavR {
            background-color: #fff;
            height: 100%;
            overflow-x: hidden;
            padding-top: 45px;
            position: fixed;
            right: 0;
            top: 0;
            transition: 0.5s;
            width: 0;
            z-index: 1;
          }
          .sidenav a,
          .sidenavR a {
            color: #2d3e53;
            display: block;
            font-size: 15px;
            padding: 8px 8px 8px 20px;
            text-decoration: none;
            transition: 0.3s;
            line-height: 32px;
          }
          .sidenav a:hover,
          .offcanvas a:focus,
          .sidenavR a:hover,
          .offcanvas a:focus {
            color: #666 !important;
          }
          .sidenav .closebtn,
          .sidenavR .closebtn {
            font-size: 36px;
            margin-left: 50px;
            position: absolute;
            right: 5px;
            top: 0;
          }
          /* added parenthesis & colon here */
          @media screen and (max-height: 450px) {
            .sidenav,
            .sidenavR {
              padding-top: 15px;
            }
            .sidenav a,
            .sidenavR a {
              font-size: 18px;
            }
          }
          /*Nav Close*/
          /* no content */
          .logo {
          }
          .profile-pic {
            width: 48px;
          }
          /*Login*/

          .top_bg {
            background-image: url("/images/header-bg.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            height: 300px;
            background-position: center;
          }
          .mt_80 {
            margin-top: -60px;
          }
          .mlr-30 {
            margin-left: 30px;
            margin-right: 30px;
            border: 1px solid #f0f0f0;
            border-radius: 3px;
          }
          .nav-tabs .nav-item.show .nav-link,
          .nav-tabs .nav-link.active {
            color: #1f4370;
            background-color: #fff;
            border-color: #fff #fff #1f4370;
          }
          .nav-tabs .nav-item.show .nav-link,
          .nav-tabs .nav-link:hover {
            color: #1f4370;
            background-color: #fff;
            border-color: none;
          }
          .nav-tabs .nav-item {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.65) !important;
          }
          .nav-tabs:hover .nav-item:hover {
            font-size: 14px;
            border-color: #fff #fff #1f4370;
            color: rgba(0, 0, 0, 0.65) !important;
          }

          .p20 {
            padding: 20px;
          }
          .p10 {
            padding: 10px;
          }
          .pl10 {
            padding-left: 10px;
          }
          .p0 {
            padding: 0 !important;
          }
          .m-title {
            font-size: 14px;
            color: #1f4370;
            font-weight: bold;
          }
          .m-title {
            font-size: 14px;
            color: #1f4370;
            font-weight: bold;
          }

          .f-13-b {
            font-size: 13px;
            color: #1f4370;
            font-weight: 700;
          }

          .f-13-n {
            font-size: 13px;
            color: #1f4370;
            font-weight: 300;
          }

          /* STRUCTURE */

          .wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            padding: 20px;
          }

          #formContent {
            -webkit-border-radius: 10px 10px 10px 10px;
            border-radius: 10px 10px 10px 10px;
            background: #fff;
            padding: 30px;
            width: 90%;
            max-width: 450px;
            position: relative;
            padding: 0px;
            -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
            box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
            text-align: center;
          }

          #formFooter {
            background-color: #f6f6f6;
            border-top: 1px solid #dce8f1;
            padding: 25px;
            text-align: center;
            -webkit-border-radius: 0 0 10px 10px;
            border-radius: 0 0 10px 10px;
          }

          /* TABS */

          h2.inactive {
            color: #cccccc;
          }

          h2.active {
            color: #0d0d0d;
            border-bottom: 2px solid #5fbae9;
          }

          /* FORM TYPOGRAPHY*/

          input[type="button"],
          input[type="submit"],
          input[type="reset"] {
            background-color: #7ed7ff;
            border: none;
            color: #2d3e53;
            padding: 15px 80px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            text-transform: uppercase;
            font-size: 13px;
            -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
            box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
            -webkit-border-radius: 5px 5px 5px 5px;
            border-radius: 5px 5px 5px 5px;
            margin: 5px 20px 40px 20px;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          /* no content */
          input[type="button"]:hover,
          input[type="submit"]:hover,
          input[type="reset"]:hover {
          }

          input[type="button"]:active,
          input[type="submit"]:active,
          input[type="reset"]:active {
            -moz-transform: scale(0.95);
            -webkit-transform: scale(0.95);
            -o-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
          }

          input[type="text"],
          input[type="password"] {
            color: #2d3e53;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;

            width: 100%;
            padding: 10px 15px;
            border: 1px solid #ddd;

            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -ms-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
            -webkit-border-radius: 3px;
            border-radius: 3px;
          }

          input[type="text"]:focus,
          input[type="password"]:focus {
            background-color: #fff;
            border-bottom: 2px solid #5fbae9;
          }

          input[type="text"]:placeholder,
          input[type="password"]:placeholder {
            color: #cccccc;
          }
          .list-group-item {
            border: none !important;
            font-size: 14px !important;
            background: none !important;
            color: #fff !important;
          }
          .left-nav1 ul li {
            list-style: none;
            padding: 0px !important;
            margin: 0px !important;
            padding-inline-start: 0px !important;
          }
          .left-nav1 span {
            display: block !important;
          }
          .left-nav1 a i {
            display: inline-block !important;
            margin-left: -30px;
            font-size: 16px;
          }
          .left-nav1 a span {
            display: inline-block !important;
          }
          .left-nav1 a {
            color: #bfebff;
            padding-left: 30px;
            font-size: 14px;
            border-bottom: 1px solid #677b93;
            display: block;
            padding-bottom: 10px !important;
            margin-top: 10px;
          }
          .left-nav1 a:hover {
            color: #fff;
          }
          .add_new {
            display: block !important;
            background-color: #bfebff;
            padding: 10px 10px 10px 30px;
            margin-top: 20px;
          }
          .add_new i {
            display: inline-block !important;
            margin-left: -20px;
            font-size: 16px;
          }
          .back {
            display: block !important;
            padding: 10px 10px 10px 30px;
          }
          .back i {
            display: inline-block !important;
            margin-left: -20px;
            font-size: 16px;
          }
          .left-block-bg {
            background-color: #edeff0;
          }

          /* ANIMATIONS */

          /* Simple CSS3 Fade-in-down Animation */
          .fadeInDown {
            -webkit-animation-name: fadeInDown;
            animation-name: fadeInDown;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }

          @-webkit-keyframes fadeInDown {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }
            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }

          @keyframes fadeInDown {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }
            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }

          /* Simple CSS3 Fade-in Animation */
          @-webkit-keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-moz-keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .fadeIn {
            opacity: 0;
            -webkit-animation: fadeIn ease-in 1;
            -moz-animation: fadeIn ease-in 1;
            animation: fadeIn ease-in 1;

            -webkit-animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            animation-fill-mode: forwards;

            -webkit-animation-duration: 1s;
            -moz-animation-duration: 1s;
            animation-duration: 1s;
          }

          .fadeIn.first {
            -webkit-animation-delay: 0.4s;
            -moz-animation-delay: 0.4s;
            animation-delay: 0.4s;
          }

          .fadeIn.second {
            -webkit-animation-delay: 0.6s;
            -moz-animation-delay: 0.6s;
            animation-delay: 0.6s;
          }

          .fadeIn.third {
            -webkit-animation-delay: 0.8s;
            -moz-animation-delay: 0.8s;
            animation-delay: 0.8s;
          }

          .fadeIn.fourth {
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            animation-delay: 1s;
          }

          /* Simple CSS3 Fade-in Animation */
          .underlineHover:after {
            display: block;
            left: 0;
            bottom: -10px;
            width: 0;
            height: 2px;
            background-color: #7ed7ff;
            content: "";
            transition: width 0.2s;
          }

          .underlineHover:hover {
            color: #2d3e53;
          }

          .underlineHover:hover:after {
            width: 100%;
          }

          /* OTHERS */

          *:focus {
            outline: none;
          }

          #icon {
            width: 50%;
          }

          @media (min-width: 320px) and (max-width: 576px) {
            .s-light-w,
            .s-light-g {
              padding: 10px 0 !important;
            }
            .grey-bg .f48 {
              font-size: 28px;
              margin-top: 6%;
            }

            .process {
              padding: 25% 0;
            }
            .mob {
              display: block !important;
            }
            .des {
              display: none;
            }
            .header-contract-bg {
              background-image: url("./images/contract.jpg");
              background-repeat: no-repeat;
              background-position: "bottom center";
              padding: 25% 0;
              text-align: center;
              display: block;
            }
            a {
              color: #7ed7ff;
            }

            .sidenavR {
              background-color: #fff;
              height: 100%;
              overflow-x: hidden;
              padding-top: 15px;
              position: fixed;
              right: 0;
              top: 0px !important;
              transition: 0.5s;
              width: 0;
              z-index: 1;
            }
          }

          /* @media (min-width: 768px) {
  ...;
}

@media (min-width: 992px) {
  ...;
}

@media (min-width: 1200px) {
  ...;
} */
        `}
      />

      <main
        css={css`
          height: 100%;
          background-color: #ffffff;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
