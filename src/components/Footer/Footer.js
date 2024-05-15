import { AtSignIcon, EarthIcon, HeadsetIcon, LinkedinIcon } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const socialLinks = [
  {
    name: 'LinkedIn',
    link: '/',
    icon: <LinkedinIcon />,
  },
  {
    name: 'Facebook',
    link: '/',
    icon: <FaFacebook />,
  },

  {
    name: 'Website',
    link: '/',
    icon: <EarthIcon />,
  },
];

const description =
  'devFind is an open source project that aims to create a platform for developers to showcase their skills and connect with potential collaborators, all in a user-friendly and searchable format.';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-[#191F33]">
      <div className="flex flex-col items-center px-4 py-12">
        {/* app logo */}
        <div>
          <a href="/" className="mb-8 flex items-center justify-center gap-5 text-white">
            <div className="text-secondaryColor text-white dark:text-white">
              <FontAwesomeIcon icon={faCode} size="2xl" />
            </div>

            <span className="text-3xl font-semibold tracking-wider">devFind</span>
          </a>
          <p className="max-w-xl text-center text-lg font-medium text-white">{description}</p>
        </div>

        {/* social links */}
        <div className="mt-8">
          <span className="mb-6 block text-center text-lg font-medium text-[#767E94]">Follow Us</span>
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a href={link} title={name} className="text-white hover:text-[#767e94]" target="_blank">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>

        {/* email */}
        <div className="mb-2 mt-6 flex items-center gap-2 text-white">
          <AtSignIcon size={16} />
          <span className="text-lg font-medium">info@email.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
