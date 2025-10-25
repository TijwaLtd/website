import MediaGrid, {
  type MediaItem as MediaGridItem,
} from "@/components/media/MediaGrid";
import { mediaItems } from "@/data/media";

// export const metadata: Metadata = {
//   title: "Data-Driven Agricultural Strategy | FiveWell Africa",
//   description:
//     "See FiveWell Africa in the news. Explore our publications, white papers, and media mentions showcasing our expertise in African agriculture.",
// };

const MediaContnent = () => {


  // Grid rendering with animations is handled in the client component `MediaGrid`.

  return (
    <div>
      {/* Hero Section */}
      {/* <div className="relative bg-green-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop"
            alt="Publications and Media"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Publications & Media</h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Explore our published research, white papers, and mentions in leading industry publications.
            </p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-6">
        {/* Media Grid */}
        <MediaGrid mediaItems={mediaItems as MediaGridItem[]} />
      </div>
    </div>
  );
};

export default MediaContnent;
