import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PartnerCard from "../cards/PartnerCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const partner = [
  {
    id: 1,
    slug: "parliament.gov.uz",
    about: "O'zbekiston Respublikasi Oliy majlis qonunchilik palatasi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9rZ-7ra_nt5701hcS57ET6g7KQK2rajjRg&usqp=CAU",
  },
  {
    id: 2,
    slug: "egov.uz",
    about: "O'zbekiston Respublikasi Oliy majlis qonunchilik palatasi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9rZ-7ra_nt5701hcS57ET6g7KQK2rajjRg&usqp=CAU",
  },
  {
    id: 3,
    slug: "id.uz",
    about: "O'zbekiston Respublikasi Oliy majlis qonunchilik palatasi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9rZ-7ra_nt5701hcS57ET6g7KQK2rajjRg&usqp=CAU",
  },
  {
    id: 4,
    slug: "gov.uz",
    about: "O'zbekiston Respublikasi Oliy majlis qonunchilik palatasi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9rZ-7ra_nt5701hcS57ET6g7KQK2rajjRg&usqp=CAU",
  },
  {
    id: 5,
    slug: "my.gov.uz",
    about: "O'zbekiston Respublikasi Oliy majlis qonunchilik palatasi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9rZ-7ra_nt5701hcS57ET6g7KQK2rajjRg&usqp=CAU",
  },
];
const Partner = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={"this.props.deviceType" !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {partner.map((item) => {
          return <PartnerCard item={item} />;
        })}
      </Carousel>
    </div>
  );
};

export default Partner;
