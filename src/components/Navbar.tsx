// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="sidebar-logo">
          <Link to="/" className="navbar-brand">
            {/* Your Logo */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 13.9688C10.7083 13.9688 10.4688 13.8854 10.2812 13.7188C10.0938 13.5312 10 13.2917 10 13C10 12.6875 10.0938 12.4479 10.2812 12.2812C10.4688 12.0938 10.7083 12 11 12H24.9688C25.6354 12 25.9688 12.3333 25.9688 13C25.9688 13.6458 25.6354 13.9688 24.9688 13.9688H11ZM24.9688 16.9688C25.2812 16.9688 25.5208 17.0625 25.6875 17.25C25.875 17.4375 25.9688 17.6771 25.9688 17.9688C25.9688 18.2604 25.875 18.5 25.6875 18.6875C25.5208 18.875 25.2812 18.9688 24.9688 18.9688H11C10.7083 18.9688 10.4688 18.875 10.2812 18.6875C10.0938 18.5 10 18.2604 10 17.9688C10 17.6771 10.0938 17.4375 10.2812 17.25C10.4688 17.0625 10.7083 16.9688 11 16.9688H24.9688ZM24.9688 21.9688C25.2812 21.9688 25.5208 22.0625 25.6875 22.25C25.875 22.4375 25.9688 22.6771 25.9688 22.9688C25.9688 23.2604 25.875 23.5 25.6875 23.6875C25.5208 23.875 25.2812 23.9688 24.9688 23.9688H11C10.7083 23.9688 10.4688 23.875 10.2812 23.6875C10.0938 23.5 10 23.2604 10 22.9688C10 22.6771 10.0938 22.4375 10.2812 22.25C10.4688 22.0625 10.7083 21.9688 11 21.9688H24.9688Z"
                fill="#1D2D3E"
              />
            </svg>
          </Link>
        </div>
        {/* Your Logo */}
        <Link to="/" className="navbar-brand">
          <svg
            width="157"
            height="30"
            viewBox="0 0 157 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1007_6736)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 29.3515H29.4744L58.3209 0.5H0V29.3515Z"
                fill="url(#paint0_linear_1007_6736)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.6099 5.92432L28.8696 5.9207V19.5707L23.8543 5.9207H18.8818L14.5996 17.3354C14.1432 14.4577 11.1662 13.4639 8.82376 12.7185C7.27732 12.2216 5.63598 11.4915 5.6512 10.6839C5.66351 10.0211 6.53126 9.40545 8.25082 9.49816C9.40612 9.55901 10.4245 9.65245 12.4519 10.6303L14.446 7.15713C12.5953 6.2155 10.0377 5.62083 7.94298 5.61865H7.93066C5.48677 5.61865 3.45068 6.41035 2.18817 7.71486C1.30884 8.62607 0.834401 9.78355 0.814844 11.0634C0.782973 12.825 1.42908 14.0745 2.78575 15.0712C3.93236 15.9114 5.39768 16.4561 6.68988 16.8566C8.28413 17.3499 9.58431 17.7794 9.5691 18.6957C9.55751 19.0282 9.43075 19.3389 9.19172 19.591C8.79479 20.0009 8.18418 20.1552 7.34106 20.1697C5.71566 20.2045 4.50893 19.9502 2.588 18.8152L0.814844 22.3362C2.72997 23.427 4.99857 24.0659 7.31353 24.0659L7.61123 24.0615C9.62632 24.0253 11.2517 23.4517 12.5512 22.4057C12.6258 22.3471 12.6931 22.2855 12.7619 22.2246L12.1861 23.7624H17.4013L18.2763 21.1012C19.1925 21.4148 20.2349 21.5872 21.3416 21.5872C22.4187 21.5872 23.4342 21.4214 24.3338 21.1273L25.177 23.7617H33.682V18.2517H35.5371C40.0192 18.2517 42.6724 15.9672 42.6724 12.1412C42.6724 7.87856 40.096 5.92287 34.6092 5.92287L34.6099 5.92432ZM21.3424 17.6034C20.6724 17.6034 20.0444 17.4875 19.5033 17.2825L21.3228 11.5415H21.3576L23.1452 17.2985C22.6078 17.489 21.9935 17.6034 21.3424 17.6034ZM34.9474 14.3055H33.6828V9.67997H34.9474C36.6337 9.67997 37.9788 10.2399 37.9788 11.9623C37.9788 13.7449 36.6337 14.3063 34.9474 14.3063"
                fill="white"
              />
              <path
                d="M56.2117 21.0638L58.3781 18.885C59.4741 20.3119 61.0031 21.268 63.526 21.268C65.5903 21.268 67.1577 20.5799 67.1577 18.898C67.1577 17.127 65.3484 16.6171 62.9016 16.0181C60.0854 15.3423 57.0265 14.4122 57.0265 10.666C57.0265 7.13561 59.9195 5.59424 63.6404 5.59424C66.571 5.59424 68.6868 6.56267 70.0761 8.18155L67.9733 10.2843C66.8651 9.02249 65.4882 8.33438 63.526 8.33438C61.3088 8.33438 60.3527 9.25211 60.3527 10.4755C60.3527 12.0937 61.9969 12.5275 64.2648 13.1012C67.2852 13.8147 70.4969 14.6686 70.4969 18.6445C70.4969 21.8685 68.0885 24.0733 63.4629 24.0733C60.0731 24.0733 57.6777 22.939 56.2117 21.0659V21.0638Z"
                fill="#002A86"
              />
              <path
                d="M72.9727 5.98831C72.9727 4.86705 73.7752 4.08984 74.8965 4.08984C76.0177 4.08984 76.8333 4.86705 76.8333 5.98831C76.8333 7.10958 76.0177 7.87447 74.8965 7.87447C73.7752 7.87447 72.9727 7.10958 72.9727 5.98831ZM73.2906 9.87507H76.5146V23.8162H73.2906V9.87507Z"
                fill="#002A86"
              />
              <path
                d="M78.9158 26.0335C78.9158 24.5681 79.9603 23.5229 81.49 23.1151C80.4963 22.7457 79.8719 22.1344 79.8719 21.0762C79.8719 19.9295 80.5984 19.0502 81.9232 18.5533C80.4195 17.7508 79.6162 16.3231 79.6162 14.4884C79.6162 11.838 81.3626 9.60784 85.3123 9.60784C86.7653 9.60784 87.8996 9.90119 88.7667 10.385C89.2121 8.76689 90.1168 7.72168 91.8885 7.72168H92.3347V10.5248H91.8632C90.6275 10.5248 90.0538 10.6777 89.5953 10.9964C90.5507 11.888 90.9838 13.1375 90.9838 14.4876C90.9838 17.0742 89.1614 19.2921 85.2624 19.2921C84.3577 19.2921 83.5551 19.1777 82.854 18.9481C82.6627 19.1646 82.536 19.4196 82.536 19.713C82.536 20.6684 83.6188 20.8089 86.0656 20.9364C89.5707 21.1022 92.4245 21.6122 92.4245 24.9122C92.4245 27.945 90.1943 29.4994 85.3138 29.4994C80.7266 29.4994 78.9172 28.0848 78.9172 26.0327L78.9158 26.0335ZM85.4789 27.1801C87.9895 27.1801 89.1998 26.6578 89.1998 25.2563C89.1998 24.0713 88.1807 23.8286 85.6064 23.7142C84.5351 23.6504 83.516 23.5867 82.6367 23.4208C82.1528 23.8286 81.8341 24.3762 81.8341 25.1281C81.8341 26.5427 82.7772 27.1801 85.4789 27.1801ZM87.862 14.4876C87.862 12.8695 86.9182 11.8627 85.3384 11.8627C83.7203 11.8627 82.7388 12.8695 82.7388 14.4876C82.7388 16.1826 83.7717 17.0366 85.2493 17.0366C86.8552 17.0366 87.862 16.0174 87.862 14.4876Z"
                fill="#002A86"
              />
              <path
                d="M94.0361 9.87494H97.1587V12.8056H97.2094C97.8468 11.2128 99.1209 9.60693 101.784 9.60693C104.779 9.60693 106.117 11.6459 106.117 14.615V23.8161H102.893V15.3929C102.893 13.5198 102.243 12.3855 100.37 12.3855C98.4451 12.3855 97.2601 13.6596 97.2601 16.0049V23.8168H94.0361V9.87494Z"
                fill="#002A86"
              />
              <path
                d="M108.519 20.0194C108.519 17.0243 110.965 15.6227 114.585 15.6227H117.108V14.8202C117.108 13.1383 116.293 12.2206 114.598 12.2206C113.017 12.2206 111.908 12.8956 111.042 13.9916L109.118 12.08C110.404 10.6785 112.152 9.60791 114.942 9.60791C118.484 9.60791 120.32 11.4557 120.32 14.8325V23.8164H117.21V21.2298H117.134C116.28 23.179 114.879 24.0713 112.686 24.0713C110.252 24.0713 108.52 22.6183 108.52 20.0187L108.519 20.0194ZM113.833 21.5869C115.909 21.5869 117.107 20.0194 117.107 18.3752V17.4698H115.131C113.284 17.4698 111.729 17.9674 111.729 19.713C111.729 20.8727 112.52 21.5862 113.832 21.5862L113.833 21.5869Z"
                fill="#002A86"
              />
              <path
                d="M121.601 9.875H125.041L127.552 18.0179C127.833 18.9356 128.189 20.2097 128.393 21.0253C128.585 20.2097 128.992 18.9356 129.272 18.0179L131.885 9.875H135.312L130.343 23.8162H126.392L121.601 9.875Z"
                fill="#002A86"
              />
              <path
                d="M136.555 5.98831C136.555 4.86705 137.357 4.08984 138.479 4.08984C139.6 4.08984 140.416 4.86705 140.416 5.98831C140.416 7.10958 139.6 7.87447 138.479 7.87447C137.357 7.87447 136.555 7.10958 136.555 5.98831ZM136.873 9.87507H140.097V23.8162H136.873V9.87507Z"
                fill="#002A86"
              />
              <path
                d="M142.463 16.8461C142.463 12.4495 145.395 9.60791 149.562 9.60791C153.729 9.60791 156.66 12.4495 156.66 16.8461C156.66 21.2428 153.729 24.0721 149.562 24.0721C145.395 24.0721 142.463 21.2428 142.463 16.8461ZM153.283 16.8461C153.283 13.8387 151.728 12.2329 149.562 12.2329C147.395 12.2329 145.84 13.8387 145.84 16.8461C145.84 19.8536 147.395 21.4594 149.562 21.4594C151.729 21.4594 153.283 19.8412 153.283 16.8461Z"
                fill="#002A86"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1007_6736"
                x1="29.1601"
                y1="0.5"
                x2="29.1601"
                y2="29.3515"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00B8F1" />
                <stop offset="0.016" stop-color="#00B5EF" />
                <stop offset="0.308" stop-color="#0D90D8" />
                <stop offset="0.578" stop-color="#1675C8" />
                <stop offset="0.817" stop-color="#1C64BE" />
                <stop offset="1" stop-color="#1E5FBB" />
              </linearGradient>
              <clipPath id="clip0_1007_6736">
                <rect
                  width="156.66"
                  height="29"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Navigation Links */}
        <div className="d-flex">
          <Link to="/" className="nav-link">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.2812 23.625C25.4271 23.7708 25.5 23.9583 25.5 24.1875C25.5 24.4167 25.4167 24.6146 25.25 24.7812C25.1042 24.9271 24.9167 25 24.6875 25C24.4583 25 24.2708 24.9271 24.125 24.7812L21 21.6562C20.4583 22.0729 19.8438 22.4062 19.1562 22.6562C18.4896 22.8854 17.7708 23 17 23C16.0833 23 15.2292 22.8333 14.4375 22.5C13.6458 22.1667 12.9583 21.7083 12.375 21.125C11.7917 20.5417 11.3333 19.8542 11 19.0625C10.6667 18.2708 10.5 17.4167 10.5 16.5C10.5 15.5833 10.6667 14.7292 11 13.9375C11.3333 13.1458 11.7917 12.4583 12.375 11.875C12.9583 11.2917 13.6458 10.8333 14.4375 10.5C15.2292 10.1667 16.0833 10 17 10C17.9167 10 18.7708 10.1667 19.5625 10.5C20.3542 10.8333 21.0417 11.2917 21.625 11.875C22.2083 12.4583 22.6667 13.1458 23 13.9375C23.3333 14.7292 23.5 15.5833 23.5 16.5C23.5 17.2708 23.375 18 23.125 18.6875C22.8958 19.3542 22.5729 19.9583 22.1562 20.5L25.2812 23.625ZM17 21.4062C17.6875 21.4062 18.3229 21.2812 18.9062 21.0312C19.5104 20.7812 20.0312 20.4375 20.4688 20C20.9271 19.5417 21.2812 19.0208 21.5312 18.4375C21.7812 17.8333 21.9062 17.1875 21.9062 16.5C21.9062 15.8125 21.7812 15.1771 21.5312 14.5938C21.2812 13.9896 20.9271 13.4688 20.4688 13.0312C20.0312 12.5729 19.5104 12.2188 18.9062 11.9688C18.3229 11.7188 17.6875 11.5938 17 11.5938C16.3125 11.5938 15.6667 11.7188 15.0625 11.9688C14.4792 12.2188 13.9583 12.5729 13.5 13.0312C13.0625 13.4688 12.7188 13.9896 12.4688 14.5938C12.2188 15.1771 12.0938 15.8125 12.0938 16.5C12.0938 17.1875 12.2188 17.8333 12.4688 18.4375C12.7188 19.0208 13.0625 19.5417 13.5 20C13.9583 20.4375 14.4792 20.7812 15.0625 21.0312C15.6667 21.2812 16.3125 21.4062 17 21.4062Z"
                fill="#1D2D3E"
              />
            </svg>
          </Link>

          <Link to="/about" className="nav-link">
            {/* About Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.25 22.8438C25.4583 23.1146 25.5625 23.3542 25.5625 23.5625C25.5625 23.6667 25.5521 23.7396 25.5312 23.7812C25.3854 24.0938 25.1146 24.25 24.7188 24.25H20.4688C20.3021 24.75 20 25.1667 19.5625 25.5C19.1458 25.8333 18.6458 26 18.0625 26C17.4792 26 16.9688 25.8333 16.5312 25.5C16.1146 25.1667 15.8229 24.75 15.6562 24.25H11.4062C11.0729 24.25 10.8229 24.1042 10.6562 23.8125C10.5938 23.6458 10.5625 23.5104 10.5625 23.4062C10.5625 23.1979 10.625 23.0312 10.75 22.9062C10.8125 22.8438 10.9062 22.7188 11.0312 22.5312C11.1771 22.3438 11.2708 22.2188 11.3125 22.1562C11.6042 21.7396 11.8229 21.3021 11.9688 20.8438C12.1354 20.3854 12.2188 19.8854 12.2188 19.3438V17.6875C12.2188 17.0208 12.2917 16.3021 12.4375 15.5312C12.5833 14.7604 12.8646 14.0521 13.2812 13.4062C13.7188 12.7188 14.3229 12.1562 15.0938 11.7188C15.8854 11.2604 16.875 11.0312 18.0625 11.0312C19.25 11.0312 20.2292 11.25 21 11.6875C21.7708 12.125 22.375 12.6771 22.8125 13.3438C23.25 14.0104 23.5417 14.7396 23.6875 15.5312C23.8333 16.3021 23.9062 17.0208 23.9062 17.6875V19.3438C23.9062 19.8854 23.9688 20.3854 24.0938 20.8438C24.2396 21.2812 24.4271 21.6458 24.6562 21.9375C24.7396 22.1042 24.8333 22.2708 24.9375 22.4375C25.0417 22.6042 25.1458 22.7396 25.25 22.8438ZM23.0625 22.6875C22.8542 22.2708 22.6458 21.7917 22.4375 21.25C22.25 20.6875 22.1562 20.0521 22.1562 19.3438V17.6875C22.1562 17.1042 22.0938 16.5104 21.9688 15.9062C21.8646 15.2812 21.6458 14.7396 21.3125 14.2812C21.0208 13.8021 20.625 13.4167 20.125 13.125C19.625 12.8333 18.9271 12.6875 18.0312 12.6875C17.1146 12.6875 16.3958 12.8333 15.875 13.125C15.3542 13.4167 14.9688 13.8021 14.7188 14.2812C14.4271 14.7396 14.2188 15.2812 14.0938 15.9062C13.9688 16.5104 13.9062 17.1042 13.9062 17.6875V19.3438C13.9062 20.0521 13.8125 20.6875 13.625 21.25C13.4375 21.7917 13.2188 22.2708 12.9688 22.6875H23.0625Z"
                fill="#1D2D3E"
              />
            </svg>
          </Link>

          <Link to="/question" className="nav-link">
            {/* About Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 22.8125C18.3125 22.8125 18.5833 22.6979 18.8125 22.4688C19.0625 22.2188 19.1875 21.9271 19.1875 21.5938C19.1875 21.2812 19.0625 21.0104 18.8125 20.7812C18.5833 20.5312 18.3125 20.4062 18 20.4062C17.6667 20.4062 17.375 20.5312 17.125 20.7812C16.8958 21.0104 16.7812 21.2812 16.7812 21.5938C16.7812 21.9271 16.8958 22.2188 17.125 22.4688C17.375 22.6979 17.6667 22.8125 18 22.8125ZM20.5938 17.625C20.7812 17.3958 20.9271 17.1562 21.0312 16.9062C21.1354 16.6562 21.1875 16.3542 21.1875 16C21.1875 15.5833 21.0938 15.2083 20.9062 14.875C20.7188 14.5208 20.4792 14.2292 20.1875 14C19.8958 13.75 19.5521 13.5625 19.1562 13.4375C18.7812 13.2917 18.3958 13.2188 18 13.2188C17.6042 13.2188 17.2083 13.2917 16.8125 13.4375C16.4375 13.5625 16.0938 13.75 15.7812 14C15.4896 14.2292 15.25 14.5208 15.0625 14.875C14.875 15.2083 14.7812 15.5833 14.7812 16C14.7812 16.25 14.8646 16.4479 15.0312 16.5938C15.2188 16.7396 15.4375 16.8125 15.6875 16.8125C16.2083 16.8125 16.4688 16.5417 16.4688 16C16.4688 15.7083 16.6042 15.4375 16.875 15.1875C17.1458 14.9375 17.5417 14.8125 18.0625 14.8125C18.6042 14.8125 19.0104 14.9375 19.2812 15.1875C19.5521 15.4375 19.6875 15.7083 19.6875 16C19.6875 16.3125 19.6042 16.5521 19.4375 16.7188C19.375 16.7812 19.2812 16.8542 19.1562 16.9375C19.0312 17.0208 18.8958 17.1042 18.75 17.1875C18.6042 17.2708 18.4583 17.3542 18.3125 17.4375C18.1667 17.5 18.0625 17.5521 18 17.5938C17.875 17.6979 17.6771 17.8542 17.4062 18.0625C17.1354 18.25 17 18.5 17 18.8125C17 19.0417 17.1042 19.2604 17.3125 19.4688C17.5417 19.6562 17.8021 19.7083 18.0938 19.625C18.3021 19.5833 18.4479 19.5208 18.5312 19.4375C18.6354 19.3333 18.7083 19.2396 18.75 19.1562C18.8125 19.0521 18.8646 18.9583 18.9062 18.875C18.9688 18.7708 19.0521 18.6875 19.1562 18.625C19.3854 18.5208 19.6354 18.375 19.9062 18.1875C20.1771 18 20.4062 17.8125 20.5938 17.625ZM18 10C19.1042 10 20.1354 10.2083 21.0938 10.625C22.0729 11.0417 22.9271 11.6146 23.6562 12.3438C24.3854 13.0729 24.9583 13.9271 25.375 14.9062C25.7917 15.8646 26 16.8958 26 18C26 19.1042 25.7917 20.1458 25.375 21.125C24.9583 22.0833 24.3854 22.9271 23.6562 23.6562C22.9271 24.3854 22.0729 24.9583 21.0938 25.375C20.1354 25.7917 19.1042 26 18 26C16.8958 26 15.8542 25.7917 14.875 25.375C13.9167 24.9583 13.0729 24.3854 12.3438 23.6562C11.6146 22.9271 11.0417 22.0833 10.625 21.125C10.2083 20.1458 10 19.1042 10 18C10 16.8958 10.2083 15.8646 10.625 14.9062C11.0417 13.9271 11.6146 13.0729 12.3438 12.3438C13.0729 11.6146 13.9167 11.0417 14.875 10.625C15.8542 10.2083 16.8958 10 18 10ZM18 24.4062C18.875 24.4062 19.6979 24.2396 20.4688 23.9062C21.2604 23.5729 21.9375 23.1146 22.5 22.5312C23.0833 21.9479 23.5417 21.2708 23.875 20.5C24.2292 19.7083 24.4062 18.875 24.4062 18C24.4062 17.125 24.2292 16.3021 23.875 15.5312C23.5417 14.7396 23.0833 14.0625 22.5 13.5C21.9375 12.9167 21.2604 12.4583 20.4688 12.125C19.6979 11.7708 18.875 11.5938 18 11.5938C17.125 11.5938 16.2917 11.7708 15.5 12.125C14.7292 12.4583 14.0521 12.9167 13.4688 13.5C12.8854 14.0625 12.4271 14.7396 12.0938 15.5312C11.7604 16.3021 11.5938 17.125 11.5938 18C11.5938 18.875 11.7604 19.7083 12.0938 20.5C12.4271 21.2708 12.8854 21.9479 13.4688 22.5312C14.0521 23.1146 14.7292 23.5729 15.5 23.9062C16.2917 24.2396 17.125 24.4062 18 24.4062Z"
                fill="#1D2D3E"
              />
            </svg>
          </Link>

          <Link to="/contact" className="nav-link">
            {/* Contact Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... (Your SVG Path) ... */}
            </svg>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
