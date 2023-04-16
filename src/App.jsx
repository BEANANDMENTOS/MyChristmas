import './App.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807185612296202/1.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807185612296202/1.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807185985577010/2.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807185985577010/2.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807186291773531/3.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807186291773531/3.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807186723782726/4.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807186723782726/4.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807187080290334/5.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807187080290334/5.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807187495538808/6.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807187495538808/6.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807187977879663/7.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807187977879663/7.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807188376330381/8.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807188376330381/8.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807188758024222/9.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807188758024222/9.jpg"
    },
    {
      original: "https://cdn.discordapp.com/attachments/876740250246971403/1096807189785616475/91.jpg",
      thumbnail: "https://cdn.discordapp.com/attachments/876740250246971403/1096807189785616475/91.jpg"
    }
  ];

  return (
    <div className="App">
      <h1>My Christmas</h1>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={3000}
        slideOnThumbnailOver={true}
        showIndex={true}
      />
    </div>
  );
}
