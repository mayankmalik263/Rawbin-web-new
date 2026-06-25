'use client';
import React from 'react';

// Common wrapper style helper
const withIcon = (SvgComponent) => {
  return ({ className = 'w-6 h-6', ...props }) => (
    <SvgComponent className={className} {...props} />
  );
};

// 1. Capacity (3kg Container)
export const ContainerIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M6 9h12a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 18 5.5H6A1.5 1.5 0 0 0 4.5 7v.5A1.5 1.5 0 0 0 6 9z" />
    <path d="M5.5 9l1.8 10.8A2 2 0 0 0 9.3 21.5h5.4a2 2 0 0 0 2-1.7L18.5 9" />
    <text
      x="12"
      y="15.5"
      fontFamily="system-ui, sans-serif"
      fontSize="5.5"
      fontWeight="900"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="currentColor"
      stroke="none"
    >
      3kg
    </text>
  </svg>
));

// 2. Cycle Time (Recycle Leaf)
export const RecycleLeafIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M19 12c0-3.87-3.13-7-7-7-1.4 0-2.7.41-3.79 1.12M8 5v2h2" />
    <path d="M5 12c0 3.87 3.13 7 7 7 1.4 0 2.7-.41 3.79-1.12M16 19v-2h-2" />
    <path d="M9.5 14.5c0-2.75 2.25-5 5-5 0 2.75-2.25 5-5 5z" />
    <path d="M9.5 14.5l5-5" />
  </svg>
));

// 3. Noise (Mute Speaker)
export const MuteIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
));

// 4. Power (Lightning Bolt)
export const BoltIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
));

// 5. Odour (Wind Breeze)
export const WindIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M5 8h12a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3" />
    <path d="M3 12h15a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3" />
    <path d="M4 16h8a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2" />
  </svg>
));

// 6. Technology (CPU Chip)
export const CpuIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </svg>
));

// 7. Sprout (Y-shaped Double Leaf Sprout)
export const SproutIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22V9" />
    <path d="M12 9c0-3 3-5 7-5 0 3-1.5 5-7 5z" />
    <path d="M12 9c0-3-3-5-7-5 0 3 1.5 5 7 5z" />
  </svg>
));

// 8. Nature / Leaf
export const LeafIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 3c-1.5 4.5-2.5 8.2-8 17z" />
    <path d="M19 3l-8 8" />
  </svg>
));

// 9. Sensor (WiFi / Wave Icon)
export const SensorIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
    <path d="M8.5 14.5a5 5 0 0 1 7 0" />
    <path d="M5.5 11.5a9 9 0 0 1 13 0" />
    <path d="M2.5 8.5a14 14 0 0 1 19 0" />
  </svg>
));

// 10. Heat (Three Leaves Sprout Group)
export const ThreeLeavesIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 20v-8" />
    <path d="M12 12c-2-2-4.5-2-6-1 0 2 2.5 3.5 6 1z" />
    <path d="M12 12c2-2 4.5-2 6-1 0 2-2.5 3.5-6 1z" />
    <path d="M12 12c0-3.5 2-6 4-6 0 3.5-2 6-4 6z" />
    <path d="M12 12c0-3.5-2-6-4-6 0 3.5 2 6 4 6z" />
  </svg>
));

// 11. Closed Loop (Four Arrow Recycle Ring)
export const FourArrowRecycleIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3a9 9 0 0 1 9 9" />
    <path d="M17 12h4v-4" />
    <path d="M21 12a9 9 0 0 1-9 9" />
    <path d="M12 17v4h4" />
    <path d="M12 21a9 9 0 0 1-9-9" />
    <path d="M7 12H3v4" />
    <path d="M3 12a9 9 0 0 1 9-9" />
    <path d="M12 7V3H8" />
  </svg>
));

// 12. India Icon (Circular Chakra badge)
export const IndiaIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
  </svg>
));

// 13. Home
export const HomeIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
));

// 14. Battery
export const BatteryIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="11" x2="23" y2="13" />
  </svg>
));

// 15. Globe
export const GlobeIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
));

// 16. Atom / Intelligent
export const IntelligentIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="3" ry="10" transform="rotate(-45 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
));

// 17. Wrench (Maintenance)
export const MaintenanceIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
));

// 18. Compost Output Pots (Balcony Plants)
export const PlantPotIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M6 15h12l-1.5 6h-9L6 15z" />
    <path d="M5 15h14" />
    <path d="M12 15V8" />
    <path d="M12 11c0-2 2-3 4-3 0 2-1 3-4 3z" />
    <path d="M12 10c0-2-2-3-4-3 0 2 1 3 4 3z" />
  </svg>
));

// 19. Herbs
export const HerbIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22V10" />
    <path d="M12 12c-2.5-1-4-3.5-4-3.5s2.5 0 4 2z" />
    <path d="M12 10c2.5-1 4-3.5 4-3.5s-2.5 0-4 2z" />
    <path d="M12 15c-3-.5-5-2.5-5-2.5s3 0 5 1.5z" />
    <path d="M12 14c3-.5 5-2.5 5-2.5s-3 0-5 1.5z" />
  </svg>
));

// 20. Tree (Home Gardens)
export const TreeIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22v-5M9 17h6" />
    <path d="M12 2C8 2 6 5 6 9c0 3 2 5 6 8 4-3 6-5 6-9 0-4-2-7-6-7z" />
  </svg>
));

// 21. Community (Shared Trees/Buildings)
export const CommunityIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M17 21v-3" />
    <path d="M17 18c-2 0-3-1.5-3-3.5 0 2 1.5 3.5 3 3.5z" />
    <path d="M17 18c2 0 3-1.5 3-3.5 0 2-1.5 3.5-3 3.5z" />
    <path d="M7 21v-5" />
    <path d="M7 16c-2.5 0-4-2-4-4.5 0 2.5 1.5 4.5 4 4.5z" />
    <path d="M7 16c2.5 0 4-2 4-4.5 0 2.5-1.5 4.5-4 4.5z" />
  </svg>
));

// 22. Gift Box
export const GiftIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
));

// 23. Tractor / Farming
export const TractorIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="6" cy="18" r="4" />
    <circle cx="18" cy="16" r="6" />
    <path d="M6 14H3v-4h9v2h6" />
    <path d="M12 10v4" />
    <path d="M18 10h-2V6h4v4h-2z" />
  </svg>
));

// Food Categories (YES items in TransformSection.jsx)

// 24. Apple / Fruit
export const AppleIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22c-3.5 0-6.5-2.5-6.5-7.5s2-7 5.5-7c1 0 1.5.5 2 .5s1-.5 2-.5c3.5 0 5.5 2 5.5 7s-3 7.5-6.5 7.5z" />
    <path d="M12 8c.5-2.5 2-4.5 4.5-4.5" />
  </svg>
));

// 25. Carrot / Veggies
export const VeggiesIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2.5 21.5l6-6M8.5 15.5l10-10a3 3 0 0 1 4.24 4.24l-10 10a3 3 0 0 1-4.24 0z" />
    <path d="M19 5l3-3M20 7l3 1M17 4l-1-3" />
  </svg>
));

// 26. Banana Peel
export const PeelIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s5-2 5-9-1.5-8-5-10c-3.5 2-5 3-5 10s5 9 5 9z" />
    <path d="M12 13c-2-2-4-2.5-7-2.5 3 4 5 5 7 2.5z" />
    <path d="M12 13c2-2 4-2.5 7-2.5-3 4-5 5-7 2.5z" />
  </svg>
));

// 27. Coffee Cup
export const CoffeeIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
));

// 28. Tea Leaf
export const TeaIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M10 21c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 4.4-3.6 8-8 8z" />
    <path d="M2 13h16" />
    <path d="M18 13c1 0 3-1 3-3V5a2 2 0 0 0-2-2h-3" />
  </svg>
));

// 29. Cracked Egg
export const EggIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2C7.5 2 4 7 4 12s3.5 10 8 10 8-5 8-10S16.5 2 12 2z" />
    <path d="M12 2v6l-2 2 4 2-2 2v8" />
  </svg>
));

// 30. Bread
export const BreadIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M3 11c0-4.5 3.5-7 9-7s9 2.5 9 7" />
    <line x1="7" y1="14" x2="7" y2="18" />
    <line x1="12" y1="14" x2="12" y2="18" />
    <line x1="17" y1="14" x2="17" y2="18" />
  </svg>
));

// 31. Soup Bowl
export const SoupIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 11c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8z" />
    <line x1="12" y1="2" x2="12" y2="7" />
    <path d="M9 2a3 3 0 0 0 3 3" />
    <path d="M15 2a3 3 0 0 1-3 3" />
    <line x1="2" y1="11" x2="22" y2="11" />
  </svg>
));

// 32. Wheat Stalk / Grains
export const GrainsIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22V6" />
    <path d="M12 8c1.5-1 3-1 3.5 0s-1 2-3.5 1" />
    <path d="M12 8c-1.5-1-3-1-3.5 0s1 2 3.5 1" />
    <path d="M12 12c1.5-1 3-1 3.5 0s-1 2-3.5 1" />
    <path d="M12 12c-1.5-1-3-1-3.5 0s1 2 3.5 1" />
    <path d="M12 16c1.5-1 3-1 3.5 0s-1 2-3.5 1" />
    <path d="M12 16c-1.5-1-3-1-3.5 0s1 2 3.5 1" />
  </svg>
));

// 33. Plastic (Bottle Outline)
export const PlasticIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 3h6v3H9z" />
    <path d="M10 6L9 9v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9l-1-3" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
));

// 34. Metal (Can Outline)
export const MetalIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M8 4h8" />
    <path d="M8 20h8" />
    <path d="M12 9v6" />
    <path d="M10 12h4" />
  </svg>
));

// 35. Glass (Bottle/Jar Outline)
export const GlassIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M10 2h4v3h-4z" />
    <path d="M10 5L7 8v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8l-3-3" />
    <circle cx="12" cy="14" r="2" />
  </svg>
));

// 36. Chemical Cleaners (Spray Bottle Outline)
export const ChemicalIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M10 2h3v2h-3z" />
    <path d="M13 4l3 1-1 3h-5l-1-4" />
    <path d="M11 6a2 2 0 0 0-2 2" />
    <path d="M11 8v2" />
    <path d="M13 8v2" />
    <path d="M8 10h8l2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8l2-2z" />
  </svg>
));

// 37. Oil (Droplet Outline)
export const OilIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2C12 2 6 10 6 14a6 6 0 0 0 12 0c0-4-6-12-6-12z" />
    <path d="M12 17a3 3 0 0 0 2.12-5.12" />
  </svg>
));

// 38. Non-Organic Materials (Cogwheel Gear Outline)
export const NonOrganicIcon = withIcon(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42" />
  </svg>
));
