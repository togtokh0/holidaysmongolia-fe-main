import React, { FC,useEffect } from "react";
import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";
import __megamenu_api from "./jsons/__megamenu_api.json";
// import axios from "../axios";
// useEffect( () => {
//   const api_menu_1=  axios.post(`/menu/menu_tours`);
//   console.log(api_menu_1)
// }, []);

const megaMenuDemo: MegamenuItem[] = __megamenu_api;
// const megaMenuDemo: MegamenuItem[] = [
//   {
//     id: ncNanoId(),
//     image:
//       "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     title: "Company",
//     items: __megamenu.map((i) => ({
//       id: ncNanoId(),
//       href: "#",
//       name: i.Company,
//     })),
//   },
//   {
//     id: ncNanoId(),
//     image:
//       "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     title: "App Name",
//     items: __megamenu.map((i) => ({
//       id: ncNanoId(),
//       href: "#",
//       name: i.AppName,
//     })),
//   },
//   {
//     id: ncNanoId(),
//     image:
//       "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     title: "City",
//     items: __megamenu.map((i) => ({
//       id: ncNanoId(),
//       href: "#",
//       name: i.City,
//     })),
//   },
//   {
//     id: ncNanoId(),
//     image:
//       "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     title: "Contruction",
//     items: __megamenu.map((i) => ({
//       id: ncNanoId(),
//       href: "#",
//       name: i.Contruction,
//     })),
//   },
//   {
//     id: ncNanoId(),
//     image:
//       "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     title: "Country",
//     items: __megamenu.map((i) => ({
//       id: ncNanoId(),
//       href: "#",
//       name: i.Country,
//     })),
//   },
// ];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online Booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real Estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-1-header-2",
    name: "Home - Header 2",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog Single",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];
const complexs: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/complex/1",
    name: "STATUE COMPLEX OF THE CHINGGIS KHAN",
  },
  {
    id: ncNanoId(),
    href: "/complex/2",
    name: "THE 13TH CENTURY COMPLEX THEME PARKS",
  },
];
const blog_news: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/news",
    name: "Мэдээ",
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Блог",
  },
];
const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing-1",
    name: "Add Listings",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing-1",
        name: "Add Listings 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-2",
        name: "Add Listings 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-3",
        name: "Add Listings 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-4",
        name: "Add Listings 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-5",
        name: "Add Listings 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-6",
        name: "Add Listings 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-7",
        name: "Add Listings 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-8",
        name: "Add Listings 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-9",
        name: "Add Listings 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-10",
        name: "Add Listings 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
  //
  { id: ncNanoId(), href: "/author", name: "Author Page" },
  { id: ncNanoId(), href: "/account", name: "Account Page" },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Нүүр",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Аялалууд",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Цогцолбор",
    type: "dropdown",
    children: complexs,
  },
  {
    id: ncNanoId(),
    href: "/auther",
    name: "Зохиолч",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/event",
    name: "Үйл ажиллагаа",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Мэдээ, блог",
    type: "dropdown",
    children: blog_news,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Тухай",
    isNew: true,
  },
  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Listing Page",
  //   type: "dropdown",
  //   isNew: true,
  //   children: [
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-stay",
  //       name: "Stay listing",
  //       type: "dropdown",
  //       children: [
  //         { id: ncNanoId(), href: "/listing-stay", name: "Stay page" },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-stay-map",
  //           name: "Stay page (map)",
  //         },
  //         { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay Detail" },
  //       ],
  //     },

  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-experiences",
  //       name: "Experiences listing",
  //       type: "dropdown",
  //       children: [
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-experiences",
  //           name: "Experiences page",
  //         },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-experiences-map",
  //           name: "Experiences page (map)",
  //         },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-experiences-detail",
  //           name: "Experiences Detail",
  //         },
  //       ],
  //     },

  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-car",
  //       name: "Cars listing",
  //       type: "dropdown",
  //       children: [
  //         { id: ncNanoId(), href: "/listing-car", name: "Cars page" },
  //         { id: ncNanoId(), href: "/listing-car-map", name: "Cars page (map)" },
  //         { id: ncNanoId(), href: "/listing-car-detail", name: "Car Detail" },
  //       ],
  //     },

  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-real-estate",
  //       name: "Real Estate Listings",
  //       isNew: true,
  //       type: "dropdown",
  //       children: [
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-real-estate",
  //           name: "Real Estate Listings",
  //           isNew: true,
  //         },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-real-estate-map",
  //           name: "Real Estate Maps",
  //           isNew: true,
  //         },
  //       ],
  //     },
  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-flights",
  //       name: "Flights listing",
  //       isNew: true,
  //     },
  //   ],
  // },
  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Templates",
  //   type: "dropdown",
  //   children: templatesChildrenMenus,
  // },

  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Other pages",
  //   type: "dropdown",
  //   children: otherPageChildMenus,
  // },
];
