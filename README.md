# AgriHub - Farming Platform

A comprehensive web application designed to empower farmers by connecting them with buyers, workers, and essential farming resources.

## Features

### 1. Home Dashboard
- Quick access cards for all major features
- Real-time mandi price updates with price trends
- Weather alerts and farming tips
- Today's insights section

### 2. Sell Produce Marketplace
- Farmers can list their crops for sale with details
- Browse available produce listings
- Filter by crop type, price range, and distance
- View detailed product information

### 3. Hire Workers (Job Board)
- Post farm jobs with work type, wages, duration
- Browse available job listings
- Apply for jobs as a worker
- Track applications and worker details

### 4. AI Farming Assistant
- Interactive chat interface for farming queries
- Get advice on crop selection, pest control, diseases
- Image upload support for disease diagnosis
- Context-aware responses based on farming knowledge

### 5. Market & Inputs Store
- Browse and purchase seeds, fertilizers, pesticides
- Machinery rental options
- Category filters (Seeds, Fertilizers, Pesticides, Machinery)
- Product details with pricing

### 6. Community Forum
- Share experiences and ask questions
- Post with images
- Upvote helpful content
- Comment on discussions
- Connect with other farmers

### 7. Government Schemes & Subsidies
- Browse active government schemes
- Check eligibility criteria
- Direct links to apply
- Deadline information

### 8. Weather Updates
- Current weather conditions
- 5-day forecast
- Weather alerts for farming
- Farming tips based on weather

### 9. Market Prices
- Live mandi prices from different markets
- Price trend indicators (up/down)
- Multiple commodities tracked
- Real-time updates

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
app/
├── page.tsx                 # Home Dashboard
├── sell-produce/page.tsx    # Sell Produce Module
├── jobs/page.tsx            # Hire Workers Module
├── advice/page.tsx          # AI Farming Assistant
├── market/page.tsx          # Marketplace
├── forum/page.tsx           # Community Forum
├── schemes/page.tsx         # Government Schemes
├── weather/page.tsx         # Weather Updates
└── market-prices/page.tsx   # Mandi Prices

components/
├── header.tsx               # App Header
├── mobile-nav.tsx           # Bottom Navigation
└── ui/                      # shadcn/ui components

lib/
└── mock-data.ts            # Mock data for prototyping
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features Implementation Status

✅ Home Dashboard with Quick Access
✅ Sell Produce Marketplace
✅ Hire Workers Job Board
✅ AI Farming Assistant Chat Interface
✅ Market & Inputs Store
✅ Community Forum
✅ Government Schemes Page
✅ Weather Updates
✅ Market Prices (Mandi)
✅ Mobile-Responsive Design
✅ Farmer-Friendly UI

## Database Integration

The application currently uses mock data for demonstration. To integrate with a real database:

1. Set up Supabase project
2. Create database tables using the schema defined in the codebase
3. Configure environment variables
4. Replace mock data with Supabase queries

## Design Reference

The UI/UX follows the Visily design export specifications with:
- Mobile-first responsive design
- Green color scheme (farmer-friendly)
- Simple, intuitive navigation
- Clear information hierarchy
- Accessible typography and spacing

## Future Enhancements

- Multi-language support (Hindi, regional languages)
- Payment integration (UPI, wallets)
- Real-time notifications
- User authentication and profiles
- Order tracking system
- Review and rating system
- Offline mode support
- Image upload for produce/forum posts
- Advanced search and filters
- Analytics dashboard for farmers

## License

This project is built for educational and demonstration purposes.
