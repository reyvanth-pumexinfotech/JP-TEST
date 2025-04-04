import { getImagesApi } from "@/services/imagesService";
import "./ourteam.css";

import Navbar from "@/components/NewNavbar/navbar";
import Footer from "@/components/Footer/footer";

export default async function OurTeamPage() {
  const images = await getImagesApi(); // Server-side API call

  return (
    <div>
      <div className="navbar-holder">
        <Navbar />
      </div>
      <div className="pics-main">
        <div className="pics-top-infobar">
          <h1>ピュメックスの道</h1>
          <h2>
            あなたの才能が羽ばたき、あなたの野心が道を見つけ、あなたの情熱が一歩一歩を後押しする空間。
            ここでは、毎日が喜びと笑いの火花を散らし、旅が目的地と同じくらい実りあるものになります。
          </h2>
        </div>

        <div className="photos-layer">
          {Array.from({ length: 4 }).map((_, layer) => (
            <div key={layer} className={`photo-layer-${layer + 1}`}>
              {images.images
                .filter((_, index) => index % 4 === layer)
                .map((img) => (
                  <div key={img.imageId} className="admin-image-container">
                    <img
                      src={img.url}
                      alt={`img-layer-${layer + 1}-${img.imageId}`}
                      width={300}
                      height={200}
                      className="photo-image"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
