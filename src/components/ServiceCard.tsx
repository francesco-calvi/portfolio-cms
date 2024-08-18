import Image from "next/image";
import { PageBlocksServicesServices } from "../../tina/__generated__/types";

const ServiceCard = (props: PageBlocksServicesServices) => {
  const { title, image, description } = props;
  return (
    <div
      key={title}
      className="flex items-center space-x-3 rounded-2xl p-3 even:bg-[linear-gradient(90deg,_rgba(130,160,158,1)_0%,_rgba(27,27,27,1)_100%)] odd:bg-[linear-gradient(90deg,_rgba(27,27,27,1)_0%,_rgba(99,128,126,1)_100%)] lg:flex-col-reverse lg:gap-4 lg:p-5"
    >
      <Image src={image} alt={title} width={40} height={40} unoptimized />
      <div className="flex flex-col space-y-1 lg:text-lg">
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
