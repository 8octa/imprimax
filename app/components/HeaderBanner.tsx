import { Phone, Mail, MapPin } from "lucide-react";

export default function HeaderBanner() {
  return (
    <header className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-2 text-sm font-bold flex justify-between items-center">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
          <Phone strokeWidth={2.5} width={15} fill="white" />
          <a href="tel:+">+84 66 - 567 - 8899</a>
        </div>
        <div className="flex items-center gap-1">
          <Mail strokeWidth={2.5} width={15} />
          <a href="mailto:">support@example.com</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-center font-geist">
        <p>Free metro delivery* Sign Up for $30 off your order!</p>
      </div>

      <div className="flex items-center gap-1">
        <MapPin strokeWidth={2.5} width={15} />
        <a href="#" target="_blank">
          Vino în locație!
        </a>
      </div>
    </header>
  );
}
