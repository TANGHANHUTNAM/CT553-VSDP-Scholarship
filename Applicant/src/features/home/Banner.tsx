import { Carousel, ConfigProvider } from "antd";
import vsdp1 from "../../assets/vsdp1.jpg";
import vsdp2 from "../../assets/vsdp2.jpg";

const Banner: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowOffset: 20,
            arrowSize: 25,
            dotWidth: 10,
            dotActiveWidth: 16,
          },
        },
      }}
    >
      <Carousel
        autoplay
        effect="fade"
        autoplaySpeed={3000}
        arrows
        infinite={true}
        speed={2000}
      >
        <img
          src={vsdp1}
          alt="Image 1"
          className="h-[500px] w-full object-cover"
        />
        <img
          src={vsdp2}
          alt="Image 1"
          className="h-[500px] w-full object-cover"
        />
      </Carousel>
    </ConfigProvider>
  );
};

export default Banner;
