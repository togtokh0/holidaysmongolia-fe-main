import React, { FC, useState, useContext, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import CommentListing from "components/CommentListing/CommentListing";
import FiveStartIconForRate from "components/FiveStartIconForRate/FiveStartIconForRate";
import GuestsInput from "components/HeroSearchForm/GuestsInputXanadu";
import StartRating from "components/StartRating/StartRating";
import GoogleMapReact from "google-map-react";
import useWindowSize from "hooks/useWindowResize";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  DayPickerSingleDateController,
  isInclusivelyAfterDay,
} from "react-dates";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonCircle from "shared/Button/ButtonCircle";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import NcImage from "shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import ModalPhotos from "./ModalPhotos";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import ExperiencesDateSingleInput from "components/HeroSearchForm/ExperiencesDateSingleInput";
import MobileFooterSticky from "./MobileFooterSticky";
import axios from "../../axios";
import AuthContext from "context/AuthContext";
import { includes } from "lodash";
export interface ListingExperiencesDetailPageProps {
  className?: string;
}

const PHOTOS: string[] = [
  "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/3851949/pexels-photo-3851949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const includes_demo = [
  { name: "Set Menu Lunch on boat" },
  { name: "Express Bus From Hanoi To Halong and Return" },
  { name: "Mineral Water On Express Bus" },
  { name: "Kayak or Bamboo Boat. Life Jacket." },
  { name: "Halong Bay Entrance Ticket" },
];
const xanaduData = {
  success: true,
  message: "Амжилттай",
  data: {
    _id: "640b1569f77276d04edaf890",
    authorId: "6301c41c518a99d43c578593",
    date: "Jun 11, 2023",
    href: "/listing-detail",
    listingCategoryId: "6301c77985841e443835fb6c",
    title: "Xanadu event",
    featuredImage: "/uploads/holidays/image/png/641803f7064bc9e6da3a21a4.png",
    galleryImgs: [
      "/uploads/holidays/image/png/6417ca13452699d24c898463.png",
      "/uploads/holidays/image/png/6417ca5e01631f123e3ae379.png",
      "/uploads/holidays/image/png/6417ca5e95aa9a5a1215c05d.png",
      "/uploads/holidays/image/png/6417ca5e2b127302de53b9bf.png",
      "/uploads/holidays/image/png/6417ca5e1980a10b5ddda00a.png",
      "/uploads/holidays/image/png/6417ca5e470b478e5e1c4ec0.png",
      "/uploads/holidays/image/png/6417ca5e997be00b4c6b4cde.png",
      "/uploads/holidays/image/png/6417ca5e811e0e0c14cf46e7.png",
      "/uploads/holidays/image/png/6417ca5e396a3e77e2414d0b.png",
      "/uploads/holidays/image/png/6417ca5e801f643868c63695.png",
      "/uploads/holidays/image/png/6417ca5ef784cafc2d574eae.png",
      "/uploads/holidays/image/png/6417ca5e534caaf8fb42eb0f.png",
      "/uploads/holidays/image/png/6417ca5e640a81dc20d4a81d.png",
      "/uploads/holidays/image/png/6417ca5ed42c67ddb491031b.png",
      "/uploads/holidays/image/png/6417ca5e76ae1bb16e2fa877.png",
      "/uploads/holidays/image/png/6417ca5f48331e1d8f77cea5.png",
      "/uploads/holidays/image/png/6417ca5f6a9110b194513ab1.png",
      "/uploads/holidays/image/png/6417ca5f38680cb3c7988dc0.png",
      "/uploads/holidays/image/png/6417ca5fa2b8ddf0cb6dd557.png",
      "/uploads/holidays/image/png/6417ca5fb4199db6ffdebd98.png",
      "/uploads/holidays/image/png/6417ca5f6fcf5429d78afb5d.png",
    ],
    commentCount: 64,
    viewCount: 369,
    like: true,
    address: "2 Warner Alley",
    reviewStart: 4.4,
    reviewCount: 478,
    price: "$1111",
    maxGuests: 111,
    saleOff: "",
    isAds: true,
    map: { lat: 55.2094559, lng: 61.5594641 },
    about:
      "<h3><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ITINERARY OF THE XANADU EVENT</strong></h3><h3>&nbsp;</h3><h3><i>We welcome you with open arms and warm hearts in Ulaanbaatar, Mongolia, in June 2023.</i></h3><h3><i>For THE XANADU event and retreat, Ulaanbaatar is the place of entertainment in the city, where you will experience and explore the history, arts and nightlife of modern-day Mongolia. Then just outside of the city, your time travelling starts at the 13th Century theme park, where you will meet the horse-riding archers and fabled beauties of the steppe. See you there.</i></h3><h3>&nbsp;</h3><h3><strong>June 10th&nbsp;</strong></h3><h3>&nbsp;</h3><h3><strong>Arrivals Chinggis Khaan Airport, Ulaanbaatar, Mongolia.</strong></h3><h3>&nbsp;</h3><h3>Welcome to Mongolia! Upon your arrival at Chinggis Khaan Airport, our guide greets you and transfers you to your hotel at Zaisan Hill Complex. The rest of the day is yours. Please enjoy yourself, and relax after your long-distance flights.&nbsp;</h3><h3>&nbsp;</h3><h3><strong>June 11th City tour day</strong></h3><h3>&nbsp;</h3><h3><strong>Morning:</strong></h3><h3>Your day starts with breakfast at your hotel and a refreshing climb up to the Zaisan Tolgoi monument where you will have a panoramic view of the city and explore the well-known Soviet-era monument.&nbsp;</h3><h3><strong>Mid-Morning:</strong></h3><h3>After your morning hike, you will have time to do some shopping at the Zaisan Hill Complex. The complex has a great variety of souvenir shops and boutiques selling Mongolian clothing, jewellery, and handicrafts. Take your time browsing and picking up some unique souvenirs or gifts.&nbsp;</h3><h3><strong>Lunch:</strong></h3><h3>For lunch, head to one of the best in the city restaurants in Zaisan Hill for a delicious meal. Some popular options include Modern Nomads, Khara Khorum, and Ananda Coffee &amp; Restaurant.</h3><h3><strong>Afternoon:</strong></h3><h3>After lunch, we get down for business and attend a business conference in the afternoon. Please keep in mind that you may take a taxi or a bus to get to the location.&nbsp;</h3><h3><strong>Evening:</strong></h3><h3>For dinner, you will be at the Choijin Temple, a historic Buddhist temple that now serves as a museum and cultural centre. Enjoy a traditional Mongolian meal there and take in the clashing yet beautiful surroundings of centuries-old buildings and newly built city towers.&nbsp;</h3><h3>Business Lunch hosted by Young Entrepreneurs Counsil &amp; Mongolia Business Counsil.&nbsp;</h3><h3>After dinner, the private fashion show for investors in the temple's main hall will be waiting for you.</h3><h3>With fashion in mind, and at the centre of the city, you are at the right location for bar hopping and clubbing. Some popular options include UB Blues, Metropolis Club, and the Grand Khaan Irish Pub.</h3><h3>&nbsp;</h3><h3><strong>June 12th&nbsp;</strong></h3><h3>&nbsp;</h3><h3><strong>Morning:</strong></h3><h3>Your day starts with breakfast at your hotel. After breakfast, head out to the Chinggis Khaan Statue Complex, about an hour's drive outside Ulaanbaatar. This impressive complex features a massive&nbsp;<a href=\"https://en.wikipedia.org/wiki/Equestrian_statue_of_Genghis_Khan\">Equestrian statue of Genghis Khan</a>, as well as a museum that explores the history and culture of Mongolia.</h3><h3><strong>Lunch:</strong></h3><h3>Enjoy lunch at the Chinggis Khaan Statue restaurant, where you can sample traditional Mongolian cuisine while taking in the stunning views of the surrounding countryside.</h3><h3><strong>Afternoon:</strong></h3><h3>After lunch,&nbsp; as a welcoming gift, we present you with a traditional Mongolian scarf or other small souvenirs to help you feel at home.&nbsp;</h3><h3>Just outside of the statue complex, you will enjoy and experience a mini Naadam festival, a traditional celebration dating back to the time of the Mongol Empire to modern day Mongolia, reimagined and held just for your entertainment.&nbsp;</h3><h3>Afterwards, you’ll elevate your spiritual experience by meeting with a local shaman. Shamanism is an ancient spiritual practice in Mongolia, and a shaman can help you connect with the natural world and gain insights into your own life.</h3><h3><strong>Evening:</strong></h3><h3>For dinner, you will head to the 13th Century Theme Park, for a unique dining experience that transports you back in time to the era of Chinggis Khaan. Enjoy a traditional Mongolian feast in a ger (yurt), complete with traditional live music and dancers.</h3><h3>The after-party in the 13th Century starts there.</h3><h3>&nbsp;</h3><h3><strong>June 13th&nbsp;</strong></h3><h3>&nbsp;</h3><h3><strong>Morning:</strong></h3><h3>Start your day with energizing yoga and a meditation session outside in nature to help you focus and prepare for the day ahead. After your practice, enjoy a delicious breakfast at one of the park's restaurants.&nbsp;</h3><h3><strong>Late Morning:</strong></h3><h3>You will have a chance to learn about Mongolian traditions and culture with a variety of activities, such as horseback riding, archery, and traditional games like ankle bone shooting. The park is yours to explore the museum and exhibitions to learn more about the history of Mongolia.</h3><h3><strong>Lunch:</strong></h3><h3>Take a break from all the exciting activities and enjoy a tasty lunch at one of the park's restaurants.</h3><h3><strong>Afternoon:</strong></h3><h3>In the afternoon, relax and explore the park at your leisure. You can visit the traditional Mongolian village, watch craftsmen at work, or enjoy a horse show. Witness the gripping agility and speed of the horse-riding archers like in 13th-century Mongolia.&nbsp;</h3><h3><strong>Evening:</strong></h3><h3>For dinner, enjoy a delicious meal at the park's restaurant. You'll have a variety of options to choose from, including traditional Mongolian cuisine, international dishes, and vegetarian options. After dinner, you will attend a shamanic ceremony, a powerful and spiritual experience that connects you with the natural world and helps you gain insight and clarity.&nbsp;</h3><h3>With the spiritual enlightenment in you, you will enjoy the afterparty like never before.<strong>&nbsp;</strong></h3><h3>&nbsp;</h3><h3><strong>June 14th&nbsp;</strong></h3><h3>&nbsp;</h3><h3><strong>Morning:</strong></h3><h3>Start your day with a calming yoga and meditation session to help you focus and prepare for the day ahead. After your practice, enjoy a delicious breakfast at one of the park's restaurants.</h3><h3><strong>Late Morning:</strong></h3><h3>Learn about the ancient traditions of the Mongols through various cultural activities, such as a demonstration of traditional Mongolian wrestling, a display of horseback archery, or a lesson in playing the morin khuur, a traditional Mongolian stringed instrument.</h3><h3><strong>Lunch:</strong></h3><h3>Take a break and enjoy a tasty lunch at one of the park's restaurants.</h3><h3><strong>Afternoon:</strong></h3><h3>The day is filled with live music, dancing, and games. Enjoy yourself and the day.</h3><h3><strong>Evening:</strong></h3><h3>In the evening, you will see a theatrical performance that tells the story of the Mongols and their history. Enjoy a delicious dinner from a variety of options, including traditional Mongolian cuisine, international dishes, and vegetarian options.&nbsp;</h3><h3>After dinner, gather around a bonfire party and enjoy a fire performance with dancing, drumming, and a salute to the ancient traditions of the Mongols.&nbsp;</h3><h3>Party like a Mongol!</h3><h3>&nbsp;</h3><h3><strong>June 15th&nbsp;</strong></h3><h3>&nbsp;</h3><h3><strong>Morning:</strong></h3><h3>After a night full of activities, you will go back to the future and to Ulaanbaatar. Your hotel at Zaisan Hill Complex will be waiting for you.</h3><br>Dress code: Marco Polo The 13th century eclefic",
    amount_0: 1,
    amount_1: 0,
    amount_2: 0,
    icons: [3, 7, 14, 18, 27, 13, 24],
    lang: "en",
    pre_payment: 1,
    author: {
      _id: "6301c41c518a99d43c578593",
      firstName: "Admin",
      lastName: "Admin",
      displayName: "Admin",
      email: "admin@admin.mn",
      gender: "men",
      avatar: "/uploads/holidays/image/png/6301c3be16519840a7da4d2f.png",
      bgImage: "/uploads/holidays/image/jpeg/6301c3c7a025846fe4e8c114.jpg",
      count: 40,
      href: "/author",
      desc: "Site superAdmin",
      jobName: "Admin",
      type: "admin",
      password: "1",
      createdAt: "2022-08-21T05:35:24.518Z",
      updatedAt: "2022-08-21T05:35:24.518Z",
      __v: 0,
    },
    listingCategory: {
      _id: "6301c77985841e443835fb6c",
      href: "/listing",
      name: "GOBI DESERT",
      taxonomy: "category",
      count: 0,
      thumbnail: "/uploads/holidays/image/jpeg/63fc466593e1064911a68193.jpg",
      lang: "en",
      createdAt: "2022-08-21T05:49:45.363Z",
      updatedAt: "2023-02-27T05:57:59.335Z",
      __v: 0,
    },
  },
};
const icon_demo = [
  {
    id: 1,
    class: "la-key",
    name_1: "Key",
    name_2: "Түлхүүр",
    type: false,
  },
  {
    id: 2,
    class: "la-luggage-cart",
    name_1: "luggage cart",
    name_2: "Түрдэг тэрэг",
    type: false,
  },
  {
    id: 3,
    class: "la-shower",
    name_1: "Shower",
    name_2: "Душ",
    type: false,
  },
  {
    id: 4,
    class: "la-smoking",
    name_1: "Smoking",
    name_2: "Тамхины өрөө",
    type: false,
  },
  {
    id: 5,
    class: "la-snowflake",
    name_1: "Winter lodging",
    name_2: "Өвлийн байр",
    type: false,
  },
  {
    id: 6,
    class: "la-spa",
    name_1: "기념품점",
    name_2: "Souvenir shop",
    type: false,
  },
  {
    id: 7,
    class: "la-suitcase",
    name_1: "Carrier storage",
    name_2: "Ачаа хадгалалт",
    type: false,
  },
  {
    id: 8,
    class: "la-suitcase-rolling",
    name_1: "Suitcase rolling",
    name_2: "Тээш",
    type: false,
  },
  {
    id: 9,
    class: "la-swimmer",
    name_1: "Swimming pool",
    name_2: "Сэлэлт",
    type: false,
  },
  {
    id: 10,
    class: "la-swimming-pool",
    name_1: "Swimming pool",
    name_2: "Усан сан",
    type: false,
  },
  {
    id: 11,
    class: "la-tv",
    name_1: "TV",
    name_2: "TV",
    type: false,
  },
  {
    id: 12,
    class: "la-umbrella-beach",
    name_1: "Umbrella beach",
    name_2: "Гадна саравч",
    type: false,
  },
  {
    id: 13,
    class: "la-utensils",
    name_1: "Meal",
    name_2: "Хоол",
    type: false,
  },
  {
    id: 14,
    class: "la-wheelchair",
    name_1: "Wheel chair",
    name_2: "Тэргэнцэр",
    type: false,
  },
  {
    id: 15,
    class: "la-wifi",
    name_1: "WIFI",
    name_2: "Интернет",
    type: false,
  },
  {
    id: 16,
    class: "la-baby-carriage",
    name_1: "Baby carriage",
    name_2: "Хүүхдийн тэрэг",
    type: false,
  },
  {
    id: 17,
    class: "la-bath",
    name_1: "Bath",
    name_2: "Ванн",
    type: false,
  },
  {
    id: 18,
    class: "la-bed",
    name_1: "Bed",
    name_2: "Ор",
    type: false,
  },
  {
    id: 19,
    class: "la-briefcase",
    name_1: "Мeeting room",
    name_2: "Хурлын өрөө",
    type: false,
  },
  {
    id: 20,
    class: "la-car",
    name_1: "Car",
    name_2: "Аяллын машин",
    type: false,
  },
  {
    id: 21,
    class: "la-cocktail",
    name_1: "Restaraunt",
    name_2: "Ресторан",
    type: false,
  },
  {
    id: 22,
    class: "la-coffee",
    name_1: "Breakfast",
    name_2: "Өглөөний хоол",
    type: false,
  },
  {
    id: 23,
    class: "la-concierge-bell",
    name_1: "Special meal",
    name_2: "Захиалгын хоол",
    type: false,
  },
  {
    id: 24,
    class: "la-dice",
    name_1: "Activity",
    name_2: "Нэмэлт хөтөлбөр",
    type: false,
  },
  {
    id: 25,
    class: "la-dumbbell",
    name_1: "Fitness",
    name_2: "Фитнесс",
    type: false,
  },
  {
    id: 26,
    class: "la-hot-tub",
    name_1: "Hot spring",
    name_2: "Халуун рашаан",
    type: false,
  },
  {
    id: 27,
    class: "la-infinity",
    name_1: "Tour Guide",
    name_2: "Хөтөч",
    type: false,
  },
];
const ListingExperiencesDetailPage: FC<ListingExperiencesDetailPageProps> = ({
  className = "",
}) => {
  const routerHistory = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(
    moment().add(2, "days")
  );

  const auth: any = useContext(AuthContext);
  const params: any = useParams();
  const id = "640b1569f77276d04edaf890";
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [guestAdults, setguestAdults] = useState<any | null>(1);
  const [guestChildren, setguestChildren] = useState<any | null>(0);
  const [guestInfants, setguestInfants] = useState<any | null>(0);
  const [amount, seamount] = useState([0, 0, 0]);
  const [yurt, setyurt] = useState<any | null>(0);
  const [tent, settent] = useState<any | null>(0);
  const [rv, setrv] = useState<any | null>(0);

  const [user_name, setuser_name] = useState<any | null>("");
  const [user_email, setuser_email] = useState<any | null>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let person = prompt("Password", "");
        if (person == null || person == "") {
          window.location.href = "https://holidaysmongolia.com/";
        } else {
          if (person == "xanadu111") {
            setData(xanaduData?.data);
            setLoading(false);
          } else {
            window.location.href = "https://holidaysmongolia.com/";
          }
        }
        // setData(xanaduData?.data);
        // setLoading(false);
        // if (id) {
        //   const api = await axios.get(`/tour/${id}`);
        //   seamount([
        //     api?.data?.data?.amount_0,
        //     api?.data?.data?.amount_1,
        //     api?.data?.data?.amount_2,
        //   ]);
        //   setData(api?.data?.data);
        //   setLoading(false);
        // } else {
        //   const api = await axios.get(`/tour`);
        //   seamount([
        //     api?.data?.data?.amount_0,
        //     api?.data?.data?.amount_1,
        //     api?.data?.data?.amount_2,
        //   ]);
        //   setData(api?.data?.data[0]);
        //   setLoading(false);
        // }
      } catch (error) {}
    };
    fetchData();
  }, [id]);
  ///

  const ordering = async () => {
    const amount = 1111 + TentCount(tent) + YurtCount(yurt);
    const body = {
      user_id: auth?.user?._id,
      amount: amount,
      accommodations: { yurt, tent, rv },
      tour_id: id,
      user_name: user_name || "",
      user_email: user_email || "",
    };
    await axios
      .post(`/order/xanadu`, body)
      .then(async (result: any) => {
        if (result.data.success) {
          routerHistory.push(`../checkoutxanadu/${result.data.data._id}`);
        } else {
          alert(result.data.message);
        }
      })
      .catch((err: any) => {
        alert(err.response.data.message);
      });
  };
  ////

  const windowSize = useWindowSize();

  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34;
    }
    if (windowSize.width <= 500) {
      return undefined;
    }
    if (windowSize.width <= 1280) {
      return 56;
    }
    return 48;
  };

  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };

  const handleCloseModal = () => setIsOpen(false);
  const YurtCount = (count: any) => {
    switch (count) {
      case 1:
        return 600 * 3;
      case 2:
        return 300 * 3;
      case 3:
        return 200 * 3;
      case 4:
        return 150 * 3;
      default:
        return 0;
    }
  };
  const TentCount = (count: any) => {
    switch (count) {
      case 1:
        return 200 * 3;
      case 2:
        return 100 * 3;
      default:
        return 0;
    }
  };
  const rvCount = (count: any) => {
    switch (count) {
      case 1:
        return 300 * 3;
      default:
        return 0;
    }
  };
  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge color="pink" name={auth.site_data.Specific_Tour} />
          <LikeSaveBtns />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {data.title}
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating
            point={data.reviewStart}
            reviewCount={data.reviewCount}
          />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1">Mongolia</span>
          </span>
        </div>
        {/* 4 */}
        <div className="flex items-center">
          <Avatar
            hasChecked
            sizeClass="h-10 w-10"
            radius="rounded-full"
            imgUrl={data.author.avatar}
          />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            {auth.site_data.Hosted_by}{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              {data.author.jobName}
            </span>
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-clock text-2xl"></i>
            <span className="">{data.date}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-user-friends text-2xl"></i>
            <span className="">{data.maxGuests} people</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-language text-2xl"></i>
            <span className="">English, Mongolia</span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold  flex justify-between">
          {auth.site_data.description}
          <a
            href="https://filepublic.link/uploads/seller.mn/application/pdf/64182a3884336b520f54f698.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            File download
          </a>
        </h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <p dangerouslySetInnerHTML={{ __html: data.about }}></p>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">{auth.site_data.Include} </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {auth.site_data.Included_in_the_price}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {data?.icons && (
            <>
              {icon_demo
                .filter((element: any) => [...data?.icons].includes(element.id))
                .map((item) => (
                  <div
                    key={item.name_1}
                    className="flex items-center space-x-3"
                  >
                    <i className={`text-3xl las ${item.class}`}></i>
                    <span className=" ">
                      {auth.lang == "any" ? item.name_2 : item.name_1}
                    </span>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">{auth.site_data.location}</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {data.address}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
          <div className="rounded-xl overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDxJaU8bLdx7sSJ8fcRdhYS1pLk8Jdvnx0",
              }}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{
                lat: data.map.lat,
                lng: data.map.lng,
              }}
            >
              <LocationMarker lat={data.map.lat} lng={data.map.lng} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return "";
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            {data.price}
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /{auth.site_data.person}
            </span>
          </span>
          <StartRating />
        </div>
        {/* FORM */}
        <form className="flex flex-col sm:flex-row border divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 dark:divide-neutral-700 border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <div className="flex-1">
            <GuestsInput
              fieldClassName="p-5"
              onChange={(e) => {
                console.log(e);
                settent(e.tent);
                setyurt(e.yurt);
                setrv(e.rv);
              }}
              defaultValue={{
                tent: tent,
                yurt: yurt,
                rv: rv,
              }}
              hasButtonSubmit={false}
            />
          </div>
        </form>
        <label className="">
          <span className="text-neutral-800 dark:text-neutral-200">
            {auth.site_data.first_name}
          </span>
          <Input
            type="text"
            placeholder="Name"
            className="mt-1"
            onChange={(e) => {
              setuser_name(e.target.value);
            }}
          />
        </label>
        <label className="">
          <span className="text-neutral-800 dark:text-neutral-200">
            {auth.site_data.Email_address}
          </span>
          <Input
            type="email"
            placeholder="example@example.com"
            className=""
            onChange={(e) => {
              setuser_email(e.target.value);
            }}
          />
        </label>
        {/* SUM */}
        <div className="flex flex-col space-y-4">
          {yurt >= 1 ? (
            <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span>{yurt} person yurt x3 days</span>
              <span>${YurtCount(yurt)}</span>
            </div>
          ) : (
            ""
          )}
          {tent >= 1 ? (
            <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span>{tent} person tent x3 days</span>
              <span>${TentCount(tent)}</span>
            </div>
          ) : (
            ""
          )}
          {rv >= 1 ? (
            <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span>2 person RV x3 days</span>
              <span>${rvCount(rv)}</span>
            </div>
          ) : (
            ""
          )}
          {guestInfants >= 1 ? (
            <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span>
                ${amount[2]} x {guestInfants} {auth.site_data.Infants}
              </span>
              <span>${amount[2] * guestInfants}</span>
            </div>
          ) : (
            ""
          )}
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>{auth.site_data.Total}</span>
            <span>${1111 + TentCount(tent) + YurtCount(yurt)}</span>
          </div>
        </div>
        {/* SUBMIT */}
        <ButtonPrimary
          onClick={() => {
            ordering();
          }}
        >
          {auth.site_data.BOOKING}
        </ButtonPrimary>
      </div>
    );
  };

  return (
    <div
      className={`ListingDetailPage nc-ListingExperiencesDetailPage ${className}`}
      data-nc-id="ListingExperiencesDetailPage"
    >
      {loading ? (
        <div>
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-10 w-10 text-primary-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <>
          {" "}
          {/* SINGLE HEADER */}
          <>
            <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
              <div className="relative grid grid-cols-4 gap-1 sm:gap-2">
                <div
                  className="col-span-3 row-span-3 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => handleOpenModal(0)}
                >
                  <NcImage
                    containerClassName="absolute inset-0"
                    className="object-cover w-full h-full rounded-md sm:rounded-xl"
                    src={data.galleryImgs[0]}
                  />
                  <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                {data.galleryImgs
                  .filter((_: any, i: any) => i >= 1 && i < 4)
                  .map((item: any, index: any) => (
                    <div
                      key={index}
                      className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                        index >= 2 ? "block" : ""
                      }`}
                    >
                      <NcImage
                        containerClassName="aspect-w-4 aspect-h-3"
                        className="object-cover w-full h-full rounded-md sm:rounded-xl "
                        src={item || ""}
                      />

                      {/* OVERLAY */}
                      <div
                        className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => handleOpenModal(index + 1)}
                      />
                    </div>
                  ))}

                <div
                  className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
                  onClick={() => handleOpenModal(0)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span className="ml-2 text-neutral-800 text-sm font-medium">
                    {auth.site_data.Show_all_photos}
                  </span>
                </div>
              </div>
            </header>
            {/* MODAL PHOTOS */}
            <ModalPhotos
              imgs={data.galleryImgs}
              isOpen={isOpen}
              onClose={handleCloseModal}
              initFocus={openFocusIndex}
              uniqueClassName="nc-ListingExperiencesDetailPage__modalPhotos"
            />
          </>
          {/* MAIn */}
          <main className="container relative z-10 mt-11 flex flex-col lg:flex-row ">
            {/* CONTENT */}
            <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:pr-10 lg:space-y-10">
              {renderSection1()}
              {renderSection2()}
              {renderSection3()}
              {renderSection8()}
            </div>

            {/* SIDEBAR */}
            <div className=" lg:block flex-grow mt-14 lg:mt-0">
              <div className="sticky top-28">{renderSidebar()}</div>
            </div>
          </main>
          {/* STICKY FOOTER MOBILE */}
          {/* OTHER SECTION */}
          <div className="container py-24 lg:py-32">
            {/* SECTION 1 */}

            {/* SECTION */}
            <SectionSubscribe2 className="pt-24 lg:pt-32" />
          </div>
        </>
      )}
    </div>
  );
};

export default ListingExperiencesDetailPage;
