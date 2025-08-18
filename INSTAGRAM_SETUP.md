<!-- Cleared during repository cleanup. -->

```javascript
const instagramPhotos = [
  {
    id: 1,
    src: '/instagram/your-actual-photo-1.jpg', // Update this path
    alt: 'Your photo description',
    caption: 'Your Instagram caption 🏄‍♂️'
  },
  // ... add more photos
];
```

### Step 4: Photo Requirements
- **Format**: JPG or PNG
- **Size**: 300x300px to 400x400px recommended
- **File names**: Use descriptive names without spaces (use hyphens instead)
- **Quantity**: 12 photos work best for the carousel

### Example File Structure:
```
public/
  instagram/
    surf-session-1.jpg
    camp-life-1.jpg
    sunset-bali-1.jpg
    group-surf-lesson.jpg
    food-indonesian-1.jpg
    beach-volleyball.jpg
    surf-boards-lineup.jpg
    evening-camp-vibes.jpg
    wave-action-shot.jpg
    team-photo-2024.jpg
    pristine-beach.jpg
    surf-coaching.jpg
```

### Fallback System
The footer includes a fallback system - if any Instagram photo fails to load, it will automatically show a relevant Unsplash photo instead.

### Features Included:
- ✅ Hover captions showing Instagram text
- ✅ Click to go to Instagram account
- ✅ Instagram icon overlay on hover
- ✅ Automatic fallback to Unsplash photos
- ✅ Responsive carousel with smooth transitions
- ✅ SEO-friendly alt text for each photo

### Tips:
1. Choose your best photos that represent camp life, surfing, and community
2. Keep captions short and engaging with emojis
3. Update photos regularly to keep content fresh
4. Optimize images for web to ensure fast loading
