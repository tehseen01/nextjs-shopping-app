import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 pb-8">
      <Slider />
      <section className="grid grid-cols-2 gap-3 my-8 w-[95vw] mx-auto">
        {homeProduct.map((item) => (
          <div className=" shadow-lg hover:shadow-xl" key={item.id}>
            <div className="md:h-[400px] max-md:aspect-square overflow-hidden">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.image}
                className="h-full w-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

const homeProduct = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689935898/ecom/slider/mi-tv_xzbqid.webp",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689935884/ecom/slider/realme-watch_vljtrt.webp",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689936015/ecom/slider/realme-11-pro_s8oaq4.webp",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689935886/ecom/slider/mi-tab_s3wkhz.webp",
  },
];
