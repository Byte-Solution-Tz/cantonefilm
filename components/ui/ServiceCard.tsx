import { Film, Megaphone, GraduationCap, Users, Clapperboard, Video } from 'lucide-react';

// Default icon mapping (used when no icon prop is provided)
const serviceIcons = {
  "Documentary Production": Film,
  "Commercial Films": Megaphone,
  "Educational Content": GraduationCap,
  "Corporate Videos": Users,
  "Event Coverage": Clapperboard,
  "Video Editing": Video,
} as const;

type ServiceTitle = keyof typeof serviceIcons;

interface ServiceCardProps {
  title: string;
  description: string;
  index?: number;
  isInView?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function ServiceCard({ 
  title, 
  description, 
  index = 0,
  isInView = true,
  icon 
}: ServiceCardProps) {
  // Select icon based on title or use provided icon prop
  const IconComponent = icon || serviceIcons[title as ServiceTitle] || Film;

  return (
    <div
      className={`group relative border-2 border-brown/10 p-8 bg-white/60 overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-2xl ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 mb-6 bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          <IconComponent className="w-8 h-8 text-brown group-hover:text-navy transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-xl mb-3 text-navy group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-brown/80 leading-relaxed">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
}
