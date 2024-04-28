import Lottie from "lottie-react";

const Slider = () => {
    return (
      <div className=''>
        
     


         <div className="carousel w-full rounded-md">
  <div id="slide1" className="carousel-item  relative w-full">
    <img src="https://i.ibb.co/7JfRFw4/wildflowers-with-a-view-of-dublin-dunleary-a-nicholl.jpg
" className="bg-cover w-full h-[430px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
          </div> 
          
          
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/VwDv7MG/mountain-view-1.jpg" className="w-full h-[430px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Bwn7sVm/1000-F-395001497-c-IE9f-Hzp6-TWxf2-ZRi-GQbo-Rw3h2-LSOPnr.jpg
" className="w-full h-[430px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Nydt605/360-F-681619701-1-Bum-Zbtfr-PMzk-Tf0kkd-Gz1p4-CPm6som-Q.jpg" className="w-full h-[430px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;