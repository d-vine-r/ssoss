import { Particle } from "@/components/reusables";
import AboutUs2 from "@/components/reusables/customUi/about";
import { CardsCompoonent } from "@/components/reusables/customUi/cardflip";
import ContactUs1 from "@/components/reusables/customUi/contact-us-1";
import SendSmarter from "@/components/reusables/customUi/sendsmarter";

export default function Page() {
	return (
		<div>
			<Particle />
			<AboutUs2/>
			<CardsCompoonent/>
			<SendSmarter/>
			<ContactUs1/>
		</div>
	);
}
