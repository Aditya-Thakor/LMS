import Categories from "@/components/Categories";
import CourseSection from "@/components/CourseSection";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChoseUs";



function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <CourseSection />
      <WhyChooseUs />
     
    </>
  );
}

export default Home;
