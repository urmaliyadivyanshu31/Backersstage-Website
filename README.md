# BackersStage Website

A modern, responsive website for BackersStage - a premier ecosystem for Web3 startups and investors, focusing on quality connections and long-term growth.

## Features

- 🎯 **Modern Design**: Clean, professional interface with smooth animations and transitions
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js 14 for optimal performance and SEO
- 🎨 **Consistent UI**: Custom components with a cohesive design system
- 🔄 **Interactive Elements**: Smooth animations and transitions using Framer Motion
- 🌐 **Multi-page Structure**: Dedicated sections for About, Vision, Collaborate, and more

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Components**: Custom UI components with shadcn/ui
- **Deployment**: Vercel (recommended)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/backersstage-website.git
   cd backersstage-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # App router pages
│   ├── about/             # About page
│   ├── collaborate/       # Collaboration page
│   ├── contact/          # Contact page
│   ├── media/            # Media mentions
│   ├── vision/           # Vision and roadmap
│   └── what-weve-done/   # Achievements page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Key Components

- **Navbar**: Responsive navigation with mobile menu
- **FeatureCard**: Reusable card component for features and benefits
- **TimelineItem**: Component for displaying roadmap items
- **RevealText**: Animated text reveal component
- **SectionHeading**: Consistent section headers
- **IconWrapper**: Client-side icon rendering wrapper

## Development Guidelines

1. **Component Structure**:
   - Use client components only when necessary
   - Keep components modular and reusable
   - Follow the established naming conventions

2. **Styling**:
   - Use Tailwind CSS classes
   - Maintain consistent spacing and colors
   - Follow the design system

3. **Performance**:
   - Optimize images and assets
   - Use proper loading strategies
   - Implement lazy loading where appropriate

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any inquiries, please reach out to [contact@backersstage.com](mailto:contact@backersstage.com) 