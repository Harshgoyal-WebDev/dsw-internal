import { SITE_CONFIG } from "@/constants/siteConfig";

// Reusable Contact Information Component
export const ContactInfo = ({ 
  className = "",
  variant = "default",
  showEmail = true,
  showPhones = true
}) => {
  const { contact } = SITE_CONFIG;

  const variants = {
    default: "text-foreground",
    footer: "text-foreground",
    compact: "text-sm text-gray-300"
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <div className={`${variantClass} ${className}`}>
      <h5 className="font-medium mb-5 content-p">CONTACT US</h5>
      <ul className="space-y-2">
        {showPhones && contact.phones.map((phone, index) => (
          <li key={index} className="under-multi-parent">
            <a 
              href={`tel:${phone.number}`} 
              className="under-multi content-p hover:text-white transition-colors duration-300"
            >
              {phone.display}
            </a>
          </li>
        ))}
        {showEmail && (
          <li className="under-multi-parent">
            <a 
              href={`mailto:${contact.email}`} 
              className="under-multi content-p hover:text-white transition-colors duration-300"
            >
              {contact.email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactInfo;