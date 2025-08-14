# Deploying Diya's Portfolio to Render

This guide will help you deploy your portfolio website to Render using their Static Site service.

## Prerequisites

1. A GitHub account with your portfolio repository
2. A Render account (free tier available)

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

First, make sure your portfolio code is pushed to a GitHub repository:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/Pdiya13/diya_portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy on Render

1. **Sign up/Login to Render**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account or login

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"

3. **Connect Your Repository**
   - Connect your GitHub account if not already connected
   - Select your portfolio repository (`diya_portfolio`)

4. **Configure Deployment Settings**
   - **Name**: `diya-portfolio` (or any name you prefer)
   - **Branch**: `main` (or your default branch)
   - **Build Command**: Leave empty (not needed for static sites)
   - **Publish Directory**: `.` (root directory)

5. **Advanced Settings (Optional)**
   - **Environment Variables**: None needed for this static site
   - **Custom Domain**: You can add a custom domain later if desired

6. **Deploy**
   - Click "Create Static Site"
   - Render will automatically deploy your site

### 3. Access Your Live Site

- Render will provide you with a URL like: `https://diya-portfolio.onrender.com`
- Your site will be live and accessible to anyone with this URL
- Any future pushes to your GitHub repository will automatically trigger new deployments

## Custom Domain (Optional)

1. **Add Custom Domain in Render**
   - Go to your static site dashboard
   - Click "Settings" → "Custom Domains"
   - Add your domain (e.g., `diya.dev` or `portfolio.diya.com`)

2. **Configure DNS**
   - Add a CNAME record pointing to your Render URL
   - Or add an A record if you have a static IP

## File Structure

Your deployment includes these key files:
- `index.html` - Main portfolio page
- `styles.css` - All styling
- `script.js` - Interactive functionality
- `images/` - Your photos and images
- `render.yaml` - Render deployment configuration
- `package.json` - Project metadata

## Troubleshooting

### Common Issues:

1. **Images not loading**
   - Make sure image paths are relative (e.g., `./images/photo.jpg`)
   - Check that images are committed to GitHub

2. **Styling issues**
   - Verify CSS file is properly linked in HTML
   - Check browser console for any 404 errors

3. **Build failures**
   - Static sites don't require builds, so this shouldn't be an issue
   - Check that all files are properly committed

### Support:
- Render Documentation: [docs.render.com](https://docs.render.com)
- Render Community: [community.render.com](https://community.render.com)

## Benefits of Render

- **Free Tier**: Includes static site hosting
- **Automatic Deployments**: Updates when you push to GitHub
- **Global CDN**: Fast loading worldwide
- **SSL Certificate**: HTTPS included
- **Custom Domains**: Easy domain setup
- **No Server Management**: Fully managed hosting

Your portfolio will be live and accessible to potential employers and collaborators! 