import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa6';

type TabType = {
    title: string;
    tabUrl: string;
    icon: IconType;
    color: 'white' | 'pink' | 'sky' | 'emerald' | 'rose';
};

const bookmarkTabData: TabType[] = [
    {
        title: 'Github',
        tabUrl: 'https://github.com/zanuaraznan',
        icon: FaGithub,
        color: 'white',
    },
    {
        title: 'Instagram',
        tabUrl: 'https://instagram.com',
        icon: FaInstagram,
        color: 'pink',
    },
    {
        title: 'Linkedin',
        tabUrl: 'https://linkedin.com',
        icon: FaLinkedin,
        color: 'sky',
    },
    {
        title: 'Tiktok',
        tabUrl: 'https://tiktok.com',
        icon: FaTiktok,
        color: 'white',
    },
    {
        title: 'Spotify',
        tabUrl: 'https://spotify.com/',
        icon: FaSpotify,
        color: 'emerald',
    },
    {
        title: 'Youtube',
        tabUrl: 'https://youtube.com',
        icon: FaYoutube,
        color: 'rose',
    },
];

export { bookmarkTabData };
