import { Projects } from "../../constants/project-constant";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Button, Card, CardFooter, cn, Image, Link } from "@nextui-org/react";
import { useRef } from "react";

export const CertificationCard = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      var slider = sliderRef.current;
      slider.scrollLeft -= 350;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      var slider = sliderRef.current;
      slider.scrollLeft += 350;
    }
  };

  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        size={25}
        className="border border-white text-white z-30 rounded-full hover:bg-green-600
        hover:text-white hover:border-green-600 cursor-pointer absolute right-8 -top-10
        transition duration-150 ease-linear hidden lg:block"
        onClick={slideLeft}
      />
      <div
        ref={sliderRef}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {Projects.map((item, index) => (
          <div key={index} className="aspect-[16/9] inline-block mx-1.5">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none bg-black group cursor-pointer"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover aspect-[16/9] w-96"
                src={item.image}
              />
              <CardFooter
                className={cn(
                  "hidden group-hover:flex flex-col gap-1.5 before:bg-white/20 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition duration-300 delay-150ease-in-out",
                  index <= 2 ? "text-white" : "text-neutral-600"
                )}
              >
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="text-lg font-medium">{item.name}</p>
                </div>
                <p className="text-tiny text-white text-wrap text-start mr-auto">
                  {item.description.length > 200
                    ? item.description.slice(0, 200) + "..."
                    : item.description}
                </p>
                {item.live !== "" && (
                  <Button
                    className="text-tiny text-white bg-black/40 w-full"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <Link
                      href={item.live}
                      target="_blank"
                      className="text-white"
                    >
                      View
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <MdChevronRight
        size={25}
        className="border border-white text-white z-30 rounded-full hover:bg-green-600
        hover:text-white hover:border-green-600 cursor-pointer absolute right-0 -top-10
        transition duration-150 ease-linear hidden lg:block"
        onClick={slideRight}
      />
    </div>
  );
};
