import Testimonials from "@/components/mvpblocks/testimonials-marquee";
import WaitlistPage from "@/components/mvpblocks/waitlist";
import { Particle } from "@/components/reusables";
import  AboutUs2  from "@/components/reusables/customUi/about";
import ContactUs1 from "@/components/reusables/customUi/contact-us-1";
import SendSmarter from "@/components/reusables/customUi/sendsmarter";

export default function Page() {
	return (
		<div>
			<Particle />
			<AboutUs2 id="about"/>
			<div className="flex place-items-center justify-center">
				<Testimonials/>
			</div>
			<SendSmarter id="work"/>
			<WaitlistPage/>
		</div>
	);
}
