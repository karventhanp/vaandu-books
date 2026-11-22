import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const contacts = [
    {
        label: "Email",
        value: "vaandubooks@gmail.com",
        href: "mailto:vaandubooks@gmail.com",
        icon: SiGmail,
        color: "text-[#EA4335]",
    },
    {
        label: "WhatsApp",
        value: "+91 7604883551",
        href: "https://wa.me/917604883551",
        icon: FaWhatsapp,
        color: "text-[#25D366]",
    },
    {
        label: "Instagram",
        value: "@vaandubooks",
        href: "https://instagram.com/vaandubooks",
        icon: FaInstagram,
        color: "text-[#E4405F]",
    },
    {
        label: "Facebook",
        value: "Vaandu Books",
        href: "https://www.facebook.com/share/1ExYYayNRw/",
        icon: FaFacebook,
        color: "text-[#1877F2]",
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="w-full max-w-6xl mx-auto px-4 my-10 scroll-mt-20 text-center text-dark-slatgray"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact Us</h2>
            <p className="text-base md:text-lg mb-6">We&apos;d love to hear from you! 😊</p>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {contacts.map(({ label, value, href, icon: Icon, color }) => {
                    const isExternal = href.startsWith("http");
                    return (
                        <a
                            key={label}
                            href={href}
                            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                            className="flex flex-col items-center rounded-2xl border-2 border-black p-4 bg-white hover:-translate-y-1 transition-transform"
                        >
                            <Icon className={`text-4xl mb-2 ${color}`} />
                            <p className="font-semibold">{label}</p>
                            <p className="text-sm break-all">{value}</p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}