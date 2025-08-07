const breakpoints = {
  mobile: {
    small: { width: 320, height: 480 }, // e.g., iPhone SE (1st Gen)
    medium: { width: 375, height: 667 }, // e.g., iPhone 6/7/8
    large: { width: 450, height: 812 } // e.g., iPhone X/11 Pro
  },
  tablet: {
    small: { width: 600, height: 960 }, // e.g., iPad Mini (Older models)
    medium: { width: 768, height: 1024 }, // e.g., iPad (Standard)
    large: { width: 1024, height: 1366 } // e.g., iPad Pro (12.9-inch)
  },
  laptop: {
    small: { width: 1280, height: 800 }, // e.g., MacBook Air (13-inch)
    medium: { width: 1366, height: 768 }, // e.g., Windows Laptops (Widescreen)
    large: { width: 1440, height: 900 } // e.g., MacBook Pro (15-inch)
  },
  desktop: {
    small: { width: 1600, height: 900 }, // Small desktops
    medium: { width: 1920, height: 1080 }, // Standard 1080p
    large: { width: 2560, height: 1440 } // 1440p / 4K Displays
  },
  wideScreen: 900 // For landscape mode breakpoints
}

export default breakpoints
