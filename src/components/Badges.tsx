import CertDeck, { type Cert } from "./CertDeck";

const certs: Cert[] = [
  {
    title: "AI for Anomaly Detection",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Avr 2026",
    logo: "/images/certifications/nvidia.png",
    fallback: "NVIDIA",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Fév 2026",
    logo: "/images/certifications/nvidia.png",
    fallback: "NVIDIA",
  },
  {
    title: "CNN with TensorFlow in Python",
    issuer: "365 Data Science",
    date: "Nov 2025",
    logo: "/images/certifications/365 data science.png",
    fallback: "365",
  },
];

export default function Badges() {
  return <CertDeck certs={certs} />;
}