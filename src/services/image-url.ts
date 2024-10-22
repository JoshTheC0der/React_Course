const getCroppedImageUrl = (url: string) => {
  if (!url) return '';
  const target = 'media/';
  // as indexOf will find the index of the first letter but we want the index of the last symbol so
  // as to start the splicing from after 'media/'
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
