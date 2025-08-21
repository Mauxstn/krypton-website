// Configuration file for Krypton Website
// Ändere diese Werte um die Website anzupassen

const CONFIG = {
    // Personal Information
    personal: {
        name: "KRYPTON",
        age: "23 Jahre (3.12.2001)",
        gender: "Männlich",
        profession: "Koch",
        location: "Deutschland"
    },

    // Avatar
    avatar: {
        url: "https://cdn.discordapp.com/avatars/365940955477573632/a_ff28b3cccb36f3cab394f0cf05552608?size=1024",
        fallback: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
    },

    // Hero Video
    hero: {
        video: "hero-gif/kaneki.mp4",
        fallbackText: "Your browser does not support the video tag."
    },

    // Favorite Games
    games: [
        "VR Chat",
        "Valorant",
        "Rust",
        "CS2",
        "Destiny",
        "Warframe",
        "ARK",
        "Rainbow 6 Siege"
    ],

    // Equipment List - Bereinigt und sortiert
    equipment: [
        "Razer Viper V3 Pro",
        "Razer Huntsman V3 TKL", 
        "HyperX QuadCast S",
        "Logitech G PRO X Wireless",
        "Oculus Quest 2",
        "Valve Index",
        "3× VIVE Tracker 3.0",
        "Elgato Stream Deck"
    ],

    // PC Specifications
    pcSpecs: {
        hardware: {
            cpu: "Ryzen 9 5900X",
            gpu: "RTX 3080 Ti Master 12GB",
            ram: "32 GB 3600 MHz CL16 DDR4",
            motherboard: "ROG Strix X570-F"
        },
        peripherals: {
            cooling: "Arctic Liquid Freezer III 360 A-RGB",
            fans: "Uni Fan SL120 RGB",
            storage: "970 EVO 2 TB + 2×4 TB NAS",
            case: "Lian Li O11 Dynamic"
        }
    },

    // Monitors
    monitors: [
        {
            name: "AOC 27G2ZNE",
            specs: "27″ • 240 Hz • Gaming",
            progress: 100
        },
        {
            name: "ASUS VP28UQG",
            specs: "28″ • 60 Hz • 4K",
            progress: 25
        },
        {
            name: "ASUS VG24QE",
            specs: "24″ • 144 Hz • Gaming",
            progress: 60
        },
        {
            name: "Philips LCD",
            specs: "32″ • 60 Hz • Secondary",
            progress: 25
        }
    ],

    // Gaming Stats
    gamingStats: [
        {
            game: "Valorant",
            icon: "target",
            rank: "Immortal",
            winRate: "68%",
            kdRatio: "1.4",
            rankColor: "text-green-400"
        },
        {
            game: "CS2",
            icon: "sword",
            rank: "Global Elite",
            winRate: "72%",
            kdRatio: "1.6",
            rankColor: "text-green-400"
        },
        {
            game: "VR Gaming",
            icon: "zap",
            level: "Expert",
            hours: "500+",
            favorites: "Beat Saber, VRChat",
            levelColor: "text-blue-400"
        },
        {
            game: "Achievements",
            icon: "trophy",
            steamAchievements: "1,247",
            completedGames: "23",
            totalHours: "2,500+"
        }
    ],

    // Social Media Links
    social: [
        {
            platform: "Discord",
            icon: "discord",
            username: "kryptonn._.",
            url: "#",
            color: "text-blue-500"
        },
        {
            platform: "Twitch",
            icon: "twitch",
            username: "@KryptonGaming",
            url: "#",
            color: "text-purple-500"
        },
        {
            platform: "YouTube",
            icon: "youtube",
            username: "Krypton Gaming",
            url: "#",
            color: "text-red-500"
        },
        {
            platform: "Twitter",
            icon: "twitter",
            username: "@KryptonGaming",
            url: "#",
            color: "text-blue-400"
        }
    ],

    // Theme Colors
    theme: {
        primary: "#dc2626",
        primaryDark: "#b91c1c",
        accent: "#fbbf24",
        bgDark: "#0a0a0a",
        bgDarker: "#000000",
        textPrimary: "#ffffff",
        textSecondary: "#a3a3a3"
    },

    // Animation Settings
    animations: {
        roleRotationInterval: 4000, // milliseconds
        particleCount: 50,
        scrollThreshold: 0.1,
        animationDelay: 100 // milliseconds between staggered animations
    },

    // SEO Settings
    seo: {
        title: "Krypton - Gaming & Setup",
        description: "Krypton",
        keywords: "Krypton, Gaming, Setup, VR",
        author: "Krypton",
        ogImage: "https://cdn.discordapp.com/avatars/365940955477573632/a_ff28b3cccb36f3cab394f0cf05552608?size=1024"
    },

    // Contact Information
    contact: {
        discord: "kryptonn._.",
        email: "krypton@example.com",
        location: "Deutschland"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make config available globally
window.CONFIG = CONFIG;
