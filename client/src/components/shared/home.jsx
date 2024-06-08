
import React from 'react'

export default function Home() {

    return (

<div>

    <header className="fixed top-0 left-0 z-50 w-full">
        <div
            className="announcement-bar inline-flex min-w-full gap-2 p-3 bg-secondary-900 justify-center items-center  flex-wrap">
            <span
                className="text-center bg-gradient-to-r from-blue-100 to-pink-100 bg-clip-text text-transparent text-body-md font-semibold">Your
                Ultimate Destination for Seamless Online Shopping!</span>
            <button className="text-label-sm px-10 py-2 text-pink-100 rounded-50 border border-pink-100 ">Learn
                More</button>
        </div>


        <nav className="bg-white  "> 
            <div className="mx-auto container px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between flex-wrap">

                    <div className="flex flex-1 items-left justify-left sm:items-stretch sm:justify-start flex-wrap">
                        <a className="flex flex-shrink-0 items-center" href="#top">
                           <img src="/Assets/logo dark.svg" alt="logo"/>

                        </a>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                 {/*-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --*/}
                                <a href="#features"
                                    className="text-primary-900 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-50 px-10 py-2 text-label-lg font-medium  ">Features</a>
                                <a href="#pricing"
                                    className="text-primary-900 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-50 px-10 py-2 text-label-lg font-medium ">Pricing</a>
                                <a href="#contact"
                                    className="text-primary-900 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-50 px-10 py-2 text-label-lg font-medium ">Contact</a>
                            </div>
                        </div>
                    </div>


                    <a href="dashboard.html"
                        className="text-title-md rounded-50 font-medium bg-primary-900 text-white px-30 py-12 max-sm:mr-50">Demo </a>

                     {/*- Profile dropdown */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/*-- Mobile menu button--*/}
                        <button type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 mr-10 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">

                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/*!--
                Icon when menu is closed.
    
                Menu open: "hidden", Menu closed: "block"
              -->*/}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/*--
                Icon when menu is open.
    
                Menu open: "block", Menu closed: "hidden"
              */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>



            </div>


            {/*-- Mobile menu, show/hide based on menu state. --*/}
            <div id="mobile-menu" className="bg-gradient-to-r from-blue-400 to-pink-400 hidden" >
                <div className="flex flex-col items-center justify-center align-items-center h-full">
                    <a href="#features"
                        className=" text-white text-center  hover:text-title-lg px-10 py-10 text-body-lg font-medium min-w-full">Features</a>
                    <a href="#pricing"
                        className=" text-white text-center hover:text-title-lg px-10 py-10 text-body-lg font-medium min-w-full">Pricing</a>
                    <a href="#contact"
                        className=" text-white text-center  hover:text-title-lg px-10 py-10 text-body-lg font-medium min-w-full">Contact</a>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section className="container mx-auto lg:py-150 sm:py-80 max-sm:py-80 mt-100" id="#top">
            <div className="container mx-auto xl:px-150 flex flex-col items-center justify-center align-content-center">
                <h1
                    className="xl:text-display-xl sm:text-display-lg  max-sm:text-display-md lg:px-100 font-bold text-center font-sans ">
                    <span
                        className="bg-gradient-to-r from-pink-400 via-primary-900 to-blue-400 bg-clip-text text-transparent">Exceptional
                        Virtual<br />  Shopping </span>🛍️
                </h1>
                <h3 className="text-center md:text-headline-sm max-sm:text-title-md font-bold mt-30 text-primary-900">Enjoy
                    a secure and hassle-free shopping experience</h3>
                <h3 className="text-center md:text-headline-sm max-sm:text-title-md font-normal text-primary-900">Our
                    virtual marketplace prioritizes your security and convenience</h3>
                <button class="hero-button font-bold lg:text-headline-sm md:text-body-lg"><span>Get Started It’s
                    FREE!</span><i className="material-icons text-white">arrow_forward</i>
                </button>
            </div>
        </section>

        <section className="relative flex flex-col " id="features" >

            <div className="container mx-auto carousel flex flex-col">
                <div className=" draggable-container  ">
                    <div className="radio-buttons radio-buttons-container inline-flex justify-between text-center flex-nowrap min-w-[100%]  gap-5 overflow-x-auto">
                        <input type="radio" name="carousel-radio" id="radio1" checked />
                        <label className="flex flex-col justify-center content-center items-center gap-2 w-auto"
                            for="radio1">

                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_644_537)">
                                    <rect x="3.5" y="2.5" width="55" height="55" rx="15" fill="#F9F9FF" />
                                    <mask id="mask0_644_537" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="16"
                                        y="15" width="30" height="30">
                                        <rect x="16" y="15" width="30" height="30" fill="#F9F9FF" />
                                    </mask>
                                    <g mask="url(#mask0_644_537)">
                                        <path
                                            d="M42.2812 28.8125V38.75C42.2812 39.4375 42.0364 40.026 41.5468 40.5156C41.0573 41.0052 40.4687 41.25 39.7812 41.25H22.2812C21.5937 41.25 21.0052 41.0052 20.5156 40.5156C20.026 40.026 19.7812 39.4375 19.7812 38.75V28.8125C19.302 28.375 18.9322 27.8125 18.6718 27.125C18.4114 26.4375 18.4062 25.6875 18.6562 24.875L19.9687 20.625C20.1354 20.0833 20.4322 19.6354 20.8593 19.2812C21.2864 18.9271 21.7812 18.75 22.3437 18.75H39.7187C40.2812 18.75 40.7708 18.9219 41.1875 19.2656C41.6041 19.6094 41.9062 20.0625 42.0937 20.625L43.4062 24.875C43.6562 25.6875 43.651 26.4271 43.3906 27.0938C43.1302 27.7604 42.7604 28.3333 42.2812 28.8125ZM33.7812 27.5C34.3437 27.5 34.7708 27.3073 35.0625 26.9219C35.3541 26.5365 35.4687 26.1042 35.4062 25.625L34.7187 21.25H32.2812V25.875C32.2812 26.3125 32.427 26.6927 32.7187 27.0156C33.0104 27.3385 33.3645 27.5 33.7812 27.5ZM28.1562 27.5C28.6354 27.5 29.026 27.3385 29.3281 27.0156C29.6302 26.6927 29.7812 26.3125 29.7812 25.875V21.25H27.3437L26.6562 25.625C26.5729 26.125 26.6823 26.5625 26.9843 26.9375C27.2864 27.3125 27.677 27.5 28.1562 27.5ZM22.5937 27.5C22.9687 27.5 23.2968 27.3646 23.5781 27.0938C23.8593 26.8229 24.0312 26.4792 24.0937 26.0625L24.7812 21.25H22.3437L21.0937 25.4375C20.9687 25.8542 21.0364 26.3021 21.2968 26.7812C21.5572 27.2604 21.9895 27.5 22.5937 27.5ZM39.4687 27.5C40.0729 27.5 40.5104 27.2604 40.7812 26.7812C41.052 26.3021 41.1145 25.8542 40.9687 25.4375L39.6562 21.25H37.2812L37.9687 26.0625C38.0312 26.4792 38.2031 26.8229 38.4843 27.0938C38.7656 27.3646 39.0937 27.5 39.4687 27.5ZM22.2812 38.75H39.7812V29.9375C39.677 29.9792 39.6093 30 39.5781 30H39.4687C38.9062 30 38.4114 29.9063 37.9843 29.7188C37.5572 29.5313 37.1354 29.2292 36.7187 28.8125C36.3437 29.1875 35.9166 29.4792 35.4375 29.6875C34.9583 29.8958 34.4479 30 33.9062 30C33.3437 30 32.8177 29.8958 32.3281 29.6875C31.8385 29.4792 31.4062 29.1875 31.0312 28.8125C30.677 29.1875 30.2656 29.4792 29.7968 29.6875C29.3281 29.8958 28.8229 30 28.2812 30C27.677 30 27.1302 29.8958 26.6406 29.6875C26.151 29.4792 25.7187 29.1875 25.3437 28.8125C24.9062 29.25 24.4739 29.5573 24.0468 29.7344C23.6197 29.9115 23.1354 30 22.5937 30H22.4531C22.401 30 22.3437 29.9792 22.2812 29.9375V38.75Z"
                                            fill="#425E91" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_644_537" x="0.5" y="0.5" width="61" height="61"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="1" operator="dilate" in="SourceAlpha"
                                            result="effect1_dropShadow_644_537" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0 0.247059 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_644_537" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_644_537"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            <span className="text-body-md text-primary-400 font-bold">Virtual</span>

                        </label>
                        <input type="radio" name="carousel-radio" id="radio2" />
                        <label className="flex flex-col justify-center content-center items-center gap-2 w-auto"
                            for="radio2">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_663_543)">
                                    <rect x="3.5" y="2" width="55" height="55" rx="15" fill="#F9F9FF" />
                                    <mask id="mask0_663_543" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="16"
                                        y="14" width="30" height="31">
                                        <rect x="16" y="14.5" width="30" height="30" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_663_543)">
                                        <path
                                            d="M20.25 37L18.5 35.25L27.75 25.9375L32.75 30.9375L39.25 24.5H36V22H43.5V29.5H41V26.25L32.75 34.5L27.75 29.5L20.25 37Z"
                                            fill="#425E91" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_663_543" x="0.5" y="0" width="61" height="61"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="1" operator="dilate" in="SourceAlpha"
                                            result="effect1_dropShadow_663_543" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0 0.247059 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_663_543" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_543"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className="text-body-md text-primary-400 font-bold">Trends</span>
                        </label>
                        <input type="radio" name="carousel-radio" id="radio3" />
                        <label className="flex flex-col justify-center content-center items-center gap-2 w-auto"
                            for="radio3">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_663_549)">
                                    <rect x="3.5" y="2" width="55" height="55" rx="15" fill="#F9F9FF" />
                                    <mask id="mask0_663_549" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="16"
                                        y="14" width="30" height="31">
                                        <rect x="16" y="14.5" width="30" height="30" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_663_549)">
                                        <path
                                            d="M28.5 29.5C27.125 29.5 25.9479 29.0104 24.9688 28.0312C23.9896 27.0521 23.5 25.875 23.5 24.5C23.5 23.125 23.9896 21.9479 24.9688 20.9688C25.9479 19.9896 27.125 19.5 28.5 19.5C29.875 19.5 31.0521 19.9896 32.0312 20.9688C33.0104 21.9479 33.5 23.125 33.5 24.5C33.5 25.875 33.0104 27.0521 32.0312 28.0312C31.0521 29.0104 29.875 29.5 28.5 29.5ZM18.5 39.5V36C18.5 35.3125 18.6771 34.6667 19.0312 34.0625C19.3854 33.4583 19.875 33 20.5 32.6875C21.5625 32.1458 22.7604 31.6875 24.0938 31.3125C25.4271 30.9375 26.8958 30.75 28.5 30.75H28.9375C29.0625 30.75 29.1875 30.7708 29.3125 30.8125C29.1458 31.1875 29.0052 31.5781 28.8906 31.9844C28.776 32.3906 28.6875 32.8125 28.625 33.25H28.5C27.0208 33.25 25.6927 33.4375 24.5156 33.8125C23.3385 34.1875 22.375 34.5625 21.625 34.9375C21.4375 35.0417 21.2865 35.1875 21.1719 35.375C21.0573 35.5625 21 35.7708 21 36V37H28.875C29 37.4375 29.1667 37.8698 29.375 38.2969C29.5833 38.724 29.8125 39.125 30.0625 39.5H18.5ZM36 40.75L35.625 38.875C35.375 38.7708 35.1406 38.6615 34.9219 38.5469C34.7031 38.4323 34.4792 38.2917 34.25 38.125L32.4375 38.6875L31.1875 36.5625L32.625 35.3125C32.5833 35.0208 32.5625 34.75 32.5625 34.5C32.5625 34.25 32.5833 33.9792 32.625 33.6875L31.1875 32.4375L32.4375 30.3125L34.25 30.875C34.4792 30.7083 34.7031 30.5677 34.9219 30.4531C35.1406 30.3385 35.375 30.2292 35.625 30.125L36 28.25H38.5L38.875 30.125C39.125 30.2292 39.3594 30.3438 39.5781 30.4688C39.7969 30.5938 40.0208 30.75 40.25 30.9375L42.0625 30.3125L43.3125 32.5L41.875 33.75C41.9167 34 41.9375 34.2604 41.9375 34.5313C41.9375 34.8021 41.9167 35.0625 41.875 35.3125L43.3125 36.5625L42.0625 38.6875L40.25 38.125C40.0208 38.2917 39.7969 38.4323 39.5781 38.5469C39.3594 38.6615 39.125 38.7708 38.875 38.875L38.5 40.75H36ZM37.25 37C37.9375 37 38.526 36.7552 39.0156 36.2656C39.5052 35.776 39.75 35.1875 39.75 34.5C39.75 33.8125 39.5052 33.224 39.0156 32.7344C38.526 32.2448 37.9375 32 37.25 32C36.5625 32 35.974 32.2448 35.4844 32.7344C34.9948 33.224 34.75 33.8125 34.75 34.5C34.75 35.1875 34.9948 35.776 35.4844 36.2656C35.974 36.7552 36.5625 37 37.25 37ZM28.5 27C29.1875 27 29.776 26.7552 30.2656 26.2656C30.7552 25.776 31 25.1875 31 24.5C31 23.8125 30.7552 23.224 30.2656 22.7344C29.776 22.2448 29.1875 22 28.5 22C27.8125 22 27.224 22.2448 26.7344 22.7344C26.2448 23.224 26 23.8125 26 24.5C26 25.1875 26.2448 25.776 26.7344 26.2656C27.224 26.7552 27.8125 27 28.5 27Z"
                                            fill="#425E91" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_663_549" x="0.5" y="0" width="61" height="61"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="1" operator="dilate" in="SourceAlpha"
                                            result="effect1_dropShadow_663_549" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0 0.247059 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_663_549" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_549"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className="text-body-md text-primary-400 font-bold">Tailored</span>
                        </label>
                        <input type="radio" name="carousel-radio" id="radio4" />
                        <label className="flex flex-col justify-center content-center items-center gap-2 w-auto"
                            for="radio4">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_663_555)">
                                    <rect x="3.5" y="2" width="55" height="55" rx="15" fill="#F9F9FF" />
                                    <mask id="mask0_663_555" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="16"
                                        y="14" width="30" height="31">
                                        <rect x="16" y="14.5" width="30" height="30" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_663_555)">
                                        <path
                                            d="M31 42C29.2708 42 27.6458 41.6719 26.125 41.0156C24.6042 40.3594 23.2812 39.4688 22.1562 38.3438C21.0312 37.2188 20.1406 35.8958 19.4844 34.375C18.8281 32.8542 18.5 31.2292 18.5 29.5C18.5 27.7708 18.8281 26.1458 19.4844 24.625C20.1406 23.1042 21.0312 21.7812 22.1562 20.6562C23.2812 19.5312 24.6042 18.6406 26.125 17.9844C27.6458 17.3281 29.2708 17 31 17C32.7292 17 34.3542 17.3281 35.875 17.9844C37.3958 18.6406 38.7188 19.5312 39.8438 20.6562C40.9688 21.7812 41.8594 23.1042 42.5156 24.625C43.1719 26.1458 43.5 27.7708 43.5 29.5C43.5 31.2292 43.1719 32.8542 42.5156 34.375C41.8594 35.8958 40.9688 37.2188 39.8438 38.3438C38.7188 39.4688 37.3958 40.3594 35.875 41.0156C34.3542 41.6719 32.7292 42 31 42ZM31 39.5C33.7917 39.5 36.1562 38.5312 38.0938 36.5938C40.0312 34.6562 41 32.2917 41 29.5C41 29.3542 40.9948 29.2031 40.9844 29.0469C40.974 28.8906 40.9688 28.7604 40.9688 28.6562C40.8646 29.2604 40.5833 29.7604 40.125 30.1563C39.6667 30.5521 39.125 30.75 38.5 30.75H36C35.3125 30.75 34.724 30.5052 34.2344 30.0156C33.7448 29.526 33.5 28.9375 33.5 28.25V27H28.5V24.5C28.5 23.8125 28.7448 23.224 29.2344 22.7344C29.724 22.2448 30.3125 22 31 22H32.25C32.25 21.5208 32.3802 21.099 32.6406 20.7344C32.901 20.3698 33.2188 20.0729 33.5938 19.8438C33.1771 19.7396 32.7552 19.6562 32.3281 19.5938C31.901 19.5312 31.4583 19.5 31 19.5C28.2083 19.5 25.8438 20.4688 23.9063 22.4063C21.9688 24.3438 21 26.7083 21 29.5H27.25C28.625 29.5 29.8021 29.9896 30.7812 30.9688C31.7604 31.9479 32.25 33.125 32.25 34.5V35.75H28.5V39.1875C28.9167 39.2917 29.3281 39.3698 29.7344 39.4219C30.1406 39.474 30.5625 39.5 31 39.5Z"
                                            fill="#425E91" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_663_555" x="0.5" y="0" width="61" height="61"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="1" operator="dilate" in="SourceAlpha"
                                            result="effect1_dropShadow_663_555" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0 0.247059 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_663_555" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_555"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className="text-body-md text-primary-400 font-bold">Global</span>
                        </label>
                        <input type="radio" name="carousel-radio" id="radio5" />
                        <label className="flex flex-col justify-center content-center items-center gap-2 w-auto"
                            for="radio5">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_663_561)">
                                    <rect x="3.5" y="2" width="55" height="55" rx="15" fill="#F9F9FF" />
                                    <path
                                        d="M21 44.5C20.2143 44.5 19.5416 44.2202 18.9821 43.6607C18.4226 43.1012 18.1428 42.4286 18.1428 41.6429V24.5C18.1428 23.7143 18.4226 23.0417 18.9821 22.4821C19.5416 21.9226 20.2143 21.6429 21 21.6429H23.8571C23.8571 19.6667 24.5535 17.9821 25.9464 16.5893C27.3393 15.1964 29.0238 14.5 31 14.5C32.9762 14.5 34.6607 15.1964 36.0535 16.5893C37.4464 17.9821 38.1428 19.6667 38.1428 21.6429H41C41.7857 21.6429 42.4583 21.9226 43.0178 22.4821C43.5773 23.0417 43.8571 23.7143 43.8571 24.5V41.6429C43.8571 42.4286 43.5773 43.1012 43.0178 43.6607C42.4583 44.2202 41.7857 44.5 41 44.5H21ZM21 41.6429H41V24.5H21V41.6429ZM31 33.0714C32.9762 33.0714 34.6607 32.375 36.0535 30.9821C37.4464 29.5893 38.1428 27.9048 38.1428 25.9286H35.2857C35.2857 27.119 34.869 28.131 34.0357 28.9643C33.2023 29.7976 32.1904 30.2143 31 30.2143C29.8095 30.2143 28.7976 29.7976 27.9643 28.9643C27.1309 28.131 26.7143 27.119 26.7143 25.9286H23.8571C23.8571 27.9048 24.5535 29.5893 25.9464 30.9821C27.3393 32.375 29.0238 33.0714 31 33.0714ZM26.7143 21.6429H35.2857C35.2857 20.4524 34.869 19.4405 34.0357 18.6071C33.2023 17.7738 32.1904 17.3571 31 17.3571C29.8095 17.3571 28.7976 17.7738 27.9643 18.6071C27.1309 19.4405 26.7143 20.4524 26.7143 21.6429Z"
                                        fill="#425E91" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_663_561" x="0.5" y="0" width="61" height="61"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="1" operator="dilate" in="SourceAlpha"
                                            result="effect1_dropShadow_663_561" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0 0.247059 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_663_561" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_561"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className="text-body-md text-primary-400 font-bold">Seller View</span>
                        </label>
                        <input type="radio" name="carousel-radio" id="radio6" />
                        <label className="flex flex-col justify-center content-center items-center gap-2 w-auto"
                            for="radio6">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_663_565)">
                                    <rect x="3.5" y="2" width="55" height="55" rx="15" fill="#F9F9FF" />
                                    <path
                                        d="M31 42C29.2708 42 27.6458 41.6719 26.125 41.0156C24.6042 40.3594 23.2812 39.4688 22.1562 38.3438C21.0312 37.2188 20.1406 35.8958 19.4844 34.375C18.8281 32.8542 18.5 31.2292 18.5 29.5C18.5 27.7708 18.8281 26.1458 19.4844 24.625C20.1406 23.1042 21.0312 21.7812 22.1562 20.6562C23.2812 19.5312 24.6042 18.6406 26.125 17.9844C27.6458 17.3281 29.2708 17 31 17H41C41.6875 17 42.276 17.2448 42.7656 17.7344C43.2552 18.224 43.5 18.8125 43.5 19.5V29.5C43.5 31.2292 43.1719 32.8542 42.5156 34.375C41.8594 35.8958 40.9688 37.2188 39.8438 38.3438C38.7188 39.4688 37.3958 40.3594 35.875 41.0156C34.3542 41.6719 32.7292 42 31 42ZM31 39.5C33.7917 39.5 36.1562 38.5312 38.0938 36.5938C40.0312 34.6562 41 32.2917 41 29.5V19.5H31C28.2083 19.5 25.8438 20.4688 23.9063 22.4063C21.9688 24.3438 21 26.7083 21 29.5C21 32.2917 21.9688 34.6562 23.9063 36.5938C25.8438 38.5312 28.2083 39.5 31 39.5ZM24.75 33.25H33.5V30.75L37.25 33.25V25.75L33.5 28.25V25.75H24.75V33.25Z"
                                        fill="#425E91" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_663_565" x="0.5" y="0" width="61" height="61"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="1" operator="dilate" in="SourceAlpha"
                                            result="effect1_dropShadow_663_565" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.105882 0 0 0 0 0.247059 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_663_565" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_565"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className="text-body-md text-primary-400 font-bold">Live</span>
                        </label>

                    </div>

                </div>
                <div className="carousel-container flex " >

                    <div className="carousel-item active">
                        <img src="Assets/Hero Slider Screen 01.svg" alt="Virtual Store"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Assets/Hero Slider Screen 02.svg" alt="Trends"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Assets/Hero Slider Screen 03.svg" alt="Tailored"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Assets/Hero Slider Screen 04.svg" alt="Global"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Assets/Hero Slider Screen 05.svg" alt="Seller View"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Assets/Hero Slider Screen 06.svg" alt="Live"/>
                    </div>


                </div>

            </div>

            <img className="absolute right-0 top-0 -z-10 max-md:hidden" src="Assets/banner background 04.svg" />

            <img className="absolute left-0 bottom-0 -z-10 max-md:hidden" src="Assets/banner background 03.svg" />

            <img className="self-center -z-0" src="Assets/gradient lines.svg" alt="banner background" />


        </section>



        <section className="" id="pricing">
            <div className="p-20 container mx-auto">
                <h2
                    className="xl:text-display-lg sm:text-display-md  max-sm:text-display-sm lg:px-100 font-sans text-center text-display-lg font-bold bg-gradient-to-r from-pink-400 via-primary-900 to-blue-400 bg-clip-text text-transparent">
                    Discover a World of Possibilities</h2>
                <p className="text-center md:text-headline-sm max-sm:text-title-md mt-30 text-primary-900">Explore a vast
                    array of products from the
                    comfort of your home.</p>
            </div>

            <div className="flex flex-row max-xl:flex-wrap justify-center gap-10 lg:py-150 md:py-50">
                <div className="flex flex-col grow lg:basis-1/2 max-xl:basis-full justify-center container">
                    <div className="flex flex-col justify-start p-20 gap-5">
                        <h3
                            className="xl:text-display-sm sm:text-headline-lg max-sm:text-headline-sm font-bold bg-gradient-to-r from-blue-500 to to-pink-600 bg-clip-text text-transparent">
                            Global Marketplace, Local Touch</h3>
                        <p className="text-body-lg text-primary-400">Connect with sellers from around the world while
                            supporting local businesses. Our virtual marketplace bridges the gap between global trends
                            and local artisans, bringing you the best of both worlds.</p>
                    </div>

                    <div className="flex flex-col justify-start p-20 gap-5">
                        <h3 className="xl:text-display-sm sm:text-headline-lg max-sm:text-headline-sm font-bold bg-gradient-to-r from-blue-500 to to-pink-600 bg-clip-text text-transparent">More Than Just Shopping</h3>
                        <p className="text-body-lg text-primary-400 hidden">Yes it's more than shopping</p>
                    </div>

                    <div className="flex flex-col justify-start p-20 gap-5">
                        <h3 className="xl:text-display-sm sm:text-headline-lg max-sm:text-headline-sm font-bold bg-gradient-to-r from-blue-500 to to-pink-600 bg-clip-text text-transparent">Global Marketplace, Local Touch</h3>
                        <p className="text-body-lg text-primary-400 hidden">Yes it's more than global marketplace</p>
                    </div>
                </div>
                <div
                    className="flex flex-col min:basis-1/2 max-xl:basis-full   max-xl:ml-30  bg-gradient-to-r from-blue-400 to-pink-600 rounded-tl-2xl rounded-bl-2xl">
                    <img className="mt-30 ml-30 -mb-30 " src="Assets/Dashbaord.svg"/>
                </div>
            </div>
        </section>

        <section className="py-150">
            <div className="container mx-auto ">
                <h2
                    className="xl:text-display-lg sm:text-display-md  max-sm:text-display-sm container text-center font-bold bg-gradient-to-r from-pink-400 via-primary-900 to-blue-400 bg-clip-text text-transparent">
                    Why Choose Wecartee for Your Business</h2>
                <p className="mt-10 md:text-headline-sm max-sm:text-title-md text-center text-primary-400">Join our vibrant seller community and take
                    advantage of our powerful tools and resources designed to elevate your business.</p>
            </div>

            <div className="slider mt-50 overflow-hidden">
                <div className="slider-container flex flex-row flex-nowrap min-w-max">
                    <div className="slider-item inline-block">
                        <img src="Assets/widget slider.svg" width="100%" height="auto"/>
                    </div>

                    <div className="slider-item inline-block">
                        <img src="Assets/widget slider.svg" width="100%" height="auto"/>
                    </div>




                </div>
            </div>
        </section>

        <section className="container mx-auto pb-150" id="contact">
            <div className="flex flex-row justify-between bg-surface-100 rounded-xl flex-wrap relative">
                <div className="flex flex-col w-auto p-40 z-10">
                    <h3 className="sm:text-display-md max-sm:text-display-sm text-primary-900 font-bold">Shop Safe Sell Smart</h3>
                    <p className="md:text-headline-sm max-sm:text-title-md text-primary-900 mt-2">Enjoy a secure and hassle-free shopping experience
                    </p>
                </div>
                <div className="w-auto p-40 z-10">
                    <button className="hero-button ">
                        <span className="text-headline-sm font-bold">Free Forever</span>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_327_1547" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="24" height="25">
                                <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_327_1547)">
                                <path
                                    d="M16.175 13.5H4V11.5H16.175L10.575 5.9L12 4.5L20 12.5L12 20.5L10.575 19.1L16.175 13.5Z"
                                    fill="white" />
                            </g>
                        </svg>

                    </button>
                </div>

                <img src="Assets/banner background 01.png" className="absolute -z-0 min-lg:top-0 right-0 max-lg:hidden"/>
                <img src="Assets/banner background 02.png" className="absolute -z-0 bottom-0 left-0 min-lg:hidden " />
            </div>
        </section>




    </main>

    <footer class="bg-primary-900 flex flex-col gap-10 py-80 p-3 ">
        <div class="flex flex-row justify-between align-middle flex-wrap container gap-10 mx-auto  ">
            <a class="md:basis-1/2 sm:basis-full max-sm:w-full " href="#top">
                <img src="./Assets/logo light.svg" alt="logo"/>
            </a>
            <nav
                class="bg-transparent flex flex-row max-sm:flex-col gap-10 flex-wrap max-w-max justify-center align-middle items-center md:basis-1/2 sm:basis-full sm:justify-start md:justify-end md:gap-0">
                <a href="#features" class="max-sm:w-full text-body-lg text-center rounded-50 px-3 font-normal text-secondary-100 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white"> Features</a>
                <a href="#pricing" class="max-sm:w-full  text-body-lg text-center font-normal text-secondary-100 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-50 px-3"> Pricing</a>
                <a href="#contact" class="max-sm:w-full  text-body-lg text-center font-normal text-secondary-100 hover:bg-gradient-to-r from-blue-400 to-pink-400 hover:text-white rounded-50 px-3"> Contact</a>
            </nav>
        </div>

        <div class="container mx-auto flex flex-row justify-between flex-wrap py-10 gap-10">
            <p class="text-left font-normal text-secondary-100 text-body-md md:basis-1/2 sm:basis-full ">Our virtual
                marketplace prioritizes your security and convenience. Enjoy a secure and hassle-free shopping
                experience with our robust payment gateways and buyer protection policies.</p>
            <div
                class="flex flex-row gap-10 flex-wrap max-w-max justify-end align-middle items-end md:basis-1/2 sm:basis-full ">
                <a class="hover:mb-5 ease-in duration-300"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18 2.59766H15C13.6739 2.59766 12.4021 3.12444 11.4645 4.06212C10.5268 4.9998 10 6.27157 10 7.59766V10.5977H7V14.5977H10V22.5977H14V14.5977H17L18 10.5977H14V7.59766C14 7.33244 14.1054 7.07809 14.2929 6.89055C14.4804 6.70301 14.7348 6.59766 15 6.59766H18V2.59766Z"
                        stroke="url(#paint0_radial_327_1629)" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <defs>
                        <radialGradient id="paint0_radial_327_1629" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12.9074 15.0977) rotate(26.1468) scale(5.67314 42.6841)">
                            <stop stop-color="#9DB6FF" />
                            <stop offset="1" stop-color="#EEA2FF" />
                        </radialGradient>
                    </defs>
                </svg></a>
                <a class="hover:mb-5  ease-in duration-300"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23 3.59746C22.0424 4.27294 20.9821 4.78957 19.86 5.12746C19.2577 4.43497 18.4573 3.94415 17.567 3.72138C16.6767 3.49862 15.7395 3.55465 14.8821 3.88191C14.0247 4.20917 13.2884 4.79186 12.773 5.55117C12.2575 6.31049 11.9877 7.20979 12 8.12746V9.12746C10.2426 9.17303 8.50127 8.78327 6.93101 7.9929C5.36074 7.20254 4.01032 6.03609 3 4.59746C3 4.59746 -1 13.5975 8 17.5975C5.94053 18.9954 3.48716 19.6964 1 19.5975C10 24.5975 21 19.5975 21 8.09746C20.9991 7.81891 20.9723 7.54105 20.92 7.26746C21.9406 6.26095 22.6608 4.99017 23 3.59746Z"
                        stroke="url(#paint0_radial_327_1631)" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <defs>
                        <radialGradient id="paint0_radial_327_1631" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12.8148 14.8022) rotate(12.4193) scale(10.4292 41.6628)">
                            <stop stop-color="#9DB6FF" />
                            <stop offset="1" stop-color="#EEA2FF" />
                        </radialGradient>
                    </defs>
                </svg></a>
                <a class="hover:mb-5  ease-in duration-300"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 2.59766H7C4.23858 2.59766 2 4.83623 2 7.59766V17.5977C2 20.3591 4.23858 22.5977 7 22.5977H17C19.7614 22.5977 22 20.3591 22 17.5977V7.59766C22 4.83623 19.7614 2.59766 17 2.59766Z"
                        stroke="url(#paint0_radial_327_1633)" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M16 11.9675C16.1234 12.7997 15.9812 13.6497 15.5937 14.3965C15.2062 15.1433 14.5931 15.7489 13.8416 16.1271C13.0901 16.5054 12.2384 16.6371 11.4077 16.5034C10.5771 16.3697 9.80971 15.9776 9.21479 15.3826C8.61987 14.7877 8.22768 14.0203 8.09402 13.1897C7.96035 12.359 8.09202 11.5074 8.47028 10.7558C8.84854 10.0043 9.45414 9.39121 10.2009 9.00371C10.9477 8.61621 11.7977 8.47406 12.63 8.59747C13.4789 8.72335 14.2648 9.11893 14.8716 9.72578C15.4785 10.3326 15.8741 11.1185 16 11.9675Z"
                        stroke="url(#paint1_radial_327_1633)" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M17.5 7.09766H17.51" stroke="url(#paint2_radial_327_1633)" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <radialGradient id="paint0_radial_327_1633" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12.7407 15.0977) rotate(15.1096) scale(9.59082 45.9062)">
                            <stop stop-color="#9DB6FF" />
                            <stop offset="1" stop-color="#EEA2FF" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_327_1633" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12.3395 13.5542) rotate(15.1096) scale(3.83633 18.3625)">
                            <stop stop-color="#9DB6FF" />
                            <stop offset="1" stop-color="#EEA2FF" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_327_1633" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(17.5054 7.72266) rotate(87.8789) scale(0.125086 0.0879972)">
                            <stop stop-color="#9DB6FF" />
                            <stop offset="1" stop-color="#EEA2FF" />
                        </radialGradient>
                    </defs>
                </svg></a>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="flex flex-row bg-slate-950 rounded-full justify-between lg:w-80 md:w-1/2 sm:w-full">
                <input type="email"
                    class="footer-subscription caret-transparent w-full form-input px-4 py-3 rounded-full bg-transparent text-label-sm text-slate-500"
                    placeholder="your email address"/>
                <button type="submit"
                    class=" flex w-32 h-10 text-center justify-center align-middle items-center text-white text-label-md bg-gradient-to-r from-pink-400 to-blue-500 rounded-full m-1">Sign
                    Up</button>
            </div>
        </div>

        </footer>
     
</div>

)}