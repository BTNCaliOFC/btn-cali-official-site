
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

const PhotoCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Cali Photo Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore moments from Cali's journey on Be The Next: 9 Dreamers. 
            Swipe left or right to browse, and tap any image to view in full screen.
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm shadow-lg border border-blue-100/20 rounded-xl p-4 md:p-6">
            <ThreeDPhotoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
