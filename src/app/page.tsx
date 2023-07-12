import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 pb-8">
      <Slider />
      <section className="grid grid-cols-2 gap-3 my-8 w-[95vw] mx-auto">
        {homeProduct.map((item) => (
          <div className=" shadow-lg hover:shadow-xl" key={item.id}>
            <div className="h-[400px] overflow-hidden">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt="mi tv"
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
    image: "/mi-tv.jpg",
  },
  {
    id: 1,
    image: "/realme-watch.webp",
  },
  {
    id: 1,
    image: "/realme-11-pro.jpg",
  },
  {
    id: 1,
    image: "/mi-tab.jpg",
  },
];
