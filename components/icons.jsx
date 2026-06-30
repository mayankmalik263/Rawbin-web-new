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

// 11. Designed in India (Indian Flag PNG Image)
export const IndiaIcon = ({ className = 'w-6 h-6', ...props }) => (
  <img
    src="/images/indian-flag.png"
    alt="India Flag"
    className={`${className} object-contain select-none`}
    {...props}
  />
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
