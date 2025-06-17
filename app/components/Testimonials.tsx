import { AnimatedTestimonials } from "./ui/animated-testimonials";
import testimonials from "../../jsons/testimonials.json";

export function Testimonials() {
  return (
    <AnimatedTestimonials testimonials={testimonials} />
  );
}
