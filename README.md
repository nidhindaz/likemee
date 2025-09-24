# Like Me Family Beauty Hub - Website

A modern, fully responsive website for Like Me Family Beauty Hub, a premier unisex beauty salon in Kozhikode, Kerala. Built with React, TypeScript, Tailwind CSS, and Node.js.

## Features

### Frontend
- **Modern Design**: Elegant gold and black color scheme with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: 
  - Animated hero section with statistics
  - Service showcase with hover effects
  - Interactive image gallery with lightbox
  - Customer testimonials carousel
  - Multi-step booking modal
  - Contact forms with validation

### Backend
- **Node.js/Express API**: RESTful endpoints for form submissions
- **Email Integration**: Automated email confirmations using Nodemailer
- **Contact Management**: Contact form, booking system, newsletter subscription

### Key Sections
1. **Hero Section**: Eye-catching landing with call-to-action buttons
2. **Services**: Comprehensive service listing with pricing
3. **Gallery**: Filterable image gallery showcasing work
4. **About**: Company story and achievements
5. **Testimonials**: Customer reviews with auto-rotating carousel
6. **Contact**: Contact form, location, and business information
7. **Booking System**: Multi-step appointment booking modal

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: CSS3 with custom animations

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Create environment file
cp ../.env.example .env

# Configure email settings in .env file
# EMAIL_USER=your-gmail@gmail.com
# EMAIL_PASS=your-app-password

# Start backend server
npm run dev
```

### Email Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Add your Gmail and App Password to the `.env` file

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── About.tsx        # About section
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Website footer
│   │   └── BookingModal.tsx # Appointment booking
│   ├── context/             # React context
│   │   └── BookingContext.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── server/                 # Backend server
│   ├── index.js            # Express server
│   └── package.json        # Backend dependencies
├── public/                 # Static assets
└── package.json            # Frontend dependencies
```

## Features in Detail

### Responsive Design
- Mobile-first approach with breakpoints for all screen sizes
- Touch-friendly navigation and interactions
- Optimized images and performance

### Animations & Interactions
- Smooth scroll navigation
- Hover effects on interactive elements
- Loading states and transitions
- Micro-interactions for better UX

### Booking System
- Multi-step booking process
- Service selection with pricing
- Date/time picker with availability
- Customer information collection
- Email confirmations

### SEO & Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Optimized meta tags
- Fast loading times

## Customization

### Colors
The website uses a sophisticated color palette defined in `tailwind.config.js`:
- Primary Gold: `#D4AF37`
- Accent colors for success, warning, and error states
- Gradient combinations for visual appeal

### Content
- Update service information in `Services.tsx`
- Modify contact details in `Contact.tsx` and `Footer.tsx`
- Replace placeholder images with actual salon photos
- Customize testimonials in `Testimonials.tsx`

### Email Templates
Email templates can be customized in `server/index.js` for:
- Contact form confirmations
- Booking confirmations
- Newsletter welcome emails

## Deployment

### Frontend (Netlify/Vercel)
```bash
# Build the project
npm run build

# Deploy the dist folder
```

### Backend (Heroku/Railway)
```bash
# In server directory
npm start
```

### Environment Variables
Ensure these are set in production:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Gmail App Password
- `PORT`: Server port (default: 5000)

## Support & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor email deliverability
- Update service pricing and information
- Add new testimonials and gallery images

### Performance Monitoring
- Monitor page load speeds
- Check mobile responsiveness
- Verify form submissions
- Test email functionality

- ##test
- http://localhost:5173/
- https://likemee.vercel.app/
- 

## License

This project is created for Like Me Family Beauty Hub. All rights reserved.

## Contact

For technical support or customization requests:
- Website: [Like Me Beauty Salon](https://likemebeauty.com)
- Email: info@likemebeauty.com
- Phone: +91 9876543210
- Location: NIT Kattangal, Kozhikode, Kerala
