'use client';
import React from 'react';
import {
  Scale,
  Timer,
  VolumeX,
  Zap,
  Wind,
  Cpu,
  Leaf,
  Gauge,
  ThermometerSun,
  Infinity as InfinityIcon,
  MapPin,
  Home,
  Battery,
  Globe,
  Atom,
  Wrench,
  Flower,
  Flower2,
  Trees,
  Users,
  Gift,
  Tractor,
  Apple,
  Carrot,
  Coffee,
  Egg,
  Cookie,
  Soup,
  Wheat,
  Trash2,
  Hammer,
  GlassWater,
  Skull,
  Droplet,
  Ban,
  Settings
} from 'lucide-react';

// Common wrapper style helper
const withIcon = (LucideIconComponent) => {
  return ({ className = 'w-6 h-6', ...props }) => (
    <LucideIconComponent className={className} {...props} />
  );
};

// 1. Capacity
export const ContainerIcon = withIcon(Scale);

// 2. Cycle Time
export const RecycleLeafIcon = withIcon(Timer);

// 3. Noise
export const MuteIcon = withIcon(VolumeX);

// 4. Power
export const BoltIcon = withIcon(Zap);

// 5. Odour
export const WindIcon = withIcon(Wind);

// 6. Technology
export const CpuIcon = withIcon(Cpu);

// 7. Sprout / Leaf
export const SproutIcon = withIcon(Leaf);
export const LeafIcon = withIcon(Leaf);

// 8. Sensors
export const SensorIcon = withIcon(Gauge);

// 9. Heat System
export const ThreeLeavesIcon = withIcon(ThermometerSun);

// 10. Closed Loop
export const FourArrowRecycleIcon = withIcon(InfinityIcon);

// 11. Designed in India (Indian Flag SVG with rounded corners)
export const IndiaIcon = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} overflow-hidden rounded-xs`}
    {...props}
  >
    {/* Saffron Stripe */}
    <rect x="0" y="0" width="24" height="8" fill="#FF9933" />
    {/* White Stripe */}
    <rect x="0" y="8" width="24" height="8" fill="#FFFFFF" />
    {/* Green Stripe */}
    <rect x="0" y="16" width="24" height="8" fill="#138808" />
    {/* Ashoka Chakra */}
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#000080" strokeWidth="0.8" />
    <circle cx="12" cy="12" r="0.8" fill="#000080" />
    {/* Spokes */}
    <path
      d="M12 8.8v6.4M8.8 12h6.4M9.74 9.74l4.52 4.52M9.74 14.26l4.52-4.52M10.8 9.1l2.4 5.8M10.8 14.9l2.4-5.8M8.9 10.8l6.2 2.4M8.9 13.2l6.2-2.4"
      stroke="#000080"
      strokeWidth="0.4"
    />
  </svg>
);

// 12. Miscellaneous Site Icons
export const HomeIcon = withIcon(Home);
export const BatteryIcon = withIcon(Battery);
export const GlobeIcon = withIcon(Globe);
export const IntelligentIcon = withIcon(Atom);
export const MaintenanceIcon = withIcon(Wrench);
export const PlantPotIcon = withIcon(Flower);
export const HerbIcon = withIcon(Flower2);
export const TreeIcon = withIcon(Trees);
export const CommunityIcon = withIcon(Users);
export const GiftIcon = withIcon(Gift);
export const TractorIcon = withIcon(Tractor);

// 13. Transform YES items
export const AppleIcon = withIcon(Apple);
export const VeggiesIcon = withIcon(Carrot);
export const PeelIcon = withIcon(Leaf);
export const CoffeeIcon = withIcon(Coffee);
export const TeaIcon = withIcon(Leaf);
export const EggIcon = withIcon(Egg);
export const BreadIcon = withIcon(Cookie);
export const SoupIcon = withIcon(Soup);
export const GrainsIcon = withIcon(Wheat);

// 14. Transform NO items
export const PlasticIcon = withIcon(Trash2);
export const MetalIcon = withIcon(Hammer);
export const GlassIcon = withIcon(GlassWater);
export const ChemicalIcon = withIcon(Skull);
export const OilIcon = withIcon(Droplet);
export const NonOrganicIcon = withIcon(Ban);
export const GearIcon = withIcon(Settings);
