// Utility to generate PWA icons from the logo
// This would typically be run as a build script

export const generateIcons = () => {
  const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
  
  // In a real implementation, you would use a library like sharp or canvas
  // to generate different sized icons from your logo.svg
  
  console.log('Icon generation would create the following sizes:', sizes);
  
  // For now, we'll use placeholder icons
  // In production, replace with actual icon generation logic
  return sizes.map(size => ({
    size: `${size}x${size}`,
    src: `/icons/icon-${size}x${size}.png`
  }));
};

// Generate a simple colored square as placeholder icon
export const createPlaceholderIcon = (size, color = '#000000') => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Fill with background color
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);
  
  // Add border
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, size - 4, size - 4);
  
  // Add "RF" text in center
  ctx.fillStyle = color;
  ctx.font = `bold ${size * 0.3}px Roboto, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('RF', size / 2, size / 2);
  
  return canvas.toDataURL('image/png');
};