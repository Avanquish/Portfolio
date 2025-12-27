# IT Graduate Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Scroll-triggered animations
  - Animated skill bars
  - Contact form with validation
  - Scroll-to-top button
- **Sections**:
  - Hero/Home section with profile introduction
  - About Me with educational background
  - Technical Skills with visual progress bars
  - Featured Projects showcase
  - Contact form with social links
  - Professional footer

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icon library for social media and UI icons

## Setup Instructions

1. **Clone or Download** this repository
2. **Open `index.html`** in your web browser
3. **Customize** the content:
   - Replace placeholder text with your information
   - Update profile images (currently using placeholder images)
   - Modify project details, skills, and social links
   - Update contact information

## Customization Guide

### Personal Information
- Edit the hero section in `index.html` to add your name and title
- Update the About Me section with your background
- Modify skills percentages in the Skills section
- Add your actual projects with descriptions and links

### Images
- Replace placeholder images in the `images/` folder
- Update image paths in `index.html`:
  - Profile photo (hero section)
  - About section image
  - Project screenshots

### Colors
The site uses a blue theme. To change colors, modify the Tailwind classes:
- `bg-blue-600` → background color
- `text-blue-600` → text color
- `hover:bg-blue-700` → hover states

### Contact Form
Currently, the contact form has a simulated submission. To make it functional:
1. Uncomment the fetch/axios code in `script.js`
2. Replace `'your-api-endpoint'` with your actual backend API
3. Set up a backend service (Node.js, PHP, etc.) to handle form submissions

### Social Media Links
Update all social media links in:
- Hero section
- Contact section
- Replace `https://github.com`, `https://linkedin.com`, etc. with your actual profiles

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # Folder for images (profile, projects, etc.)
└── README.md           # This file
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

- Replace placeholder images with optimized images (WebP format recommended)
- Consider self-hosting Tailwind CSS for production
- Minify CSS and JavaScript files for faster loading
- Use lazy loading for images

## Deployment

You can deploy this portfolio to:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Simple drag-and-drop deployment
- **Vercel**: Fast and easy deployment
- **Any web hosting service**: Upload files via FTP

### GitHub Pages Deployment
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

## Future Enhancements

Consider adding:
- Blog section
- Dark mode toggle
- More interactive animations
- Resume download button
- Project filtering by technology
- Testimonials section
- Achievement/certification section

## Credits

- **Tailwind CSS**: https://tailwindcss.com
- **Font Awesome**: https://fontawesome.com
- **Placeholder Images**: https://placeholder.com (replace with your own)

## License

Feel free to use this template for your own portfolio. Customize it to make it your own!

## Contact

For questions or suggestions, feel free to reach out through the contact form on the website.

---

**Built with ❤️ by an IT Graduate**
