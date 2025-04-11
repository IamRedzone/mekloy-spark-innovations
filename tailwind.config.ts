
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        nexa: ['Nexa', ...fontFamily.sans],
        poppins: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Updated brand colors with better contrasting yellow
        mekloy: {
          blue: '#1E3A8A',
          'light-blue': '#E0F7FA',
          yellow: '#FEF08A', // Original yellow
          'deep-yellow': '#F6E05E', // Darker yellow for better contrast with white
          'orange': '#F97316', // Added orange for high contrast options
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'count-up': {
          '0%': { content: '"0"' },
          '100%': { content: 'attr(data-value)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'slide-left': 'slide-left 20s linear infinite',
        'count-up': 'count-up 2s forwards',
        'fade-in': 'fade-in 0.5s ease-out'
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=2000&auto=format&fit=crop&q=80')",
        'vision-pattern': "url('https://images.unsplash.com/photo-1631467989261-42c7ab11659a?w=2000&auto=format&fit=crop&q=80')",
        'logistics-pattern': "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&auto=format&fit=crop&q=80')",
        'projects-pattern': "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2000&auto=format&fit=crop&q=80')",
        'contact-pattern': "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=2000&auto=format&fit=crop&q=80')",
        'sectors-pattern': "url('https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=2000&auto=format&fit=crop&q=80')",
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
