import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <div className="box1">
        <span>
          <div className="home-image"></div>
          <div className="home-text">
            <h2 className="home-title">
              <b>Contact</b>
            </h2>
            <h3>Email : araya.kos@spumail.net</h3>
          </div>
        </span>
      </div>
      <div className="box2">
        <h1 className="home-title"><b>Introduce myself</b></h1>
        <h2>ชื่อ : นางสาวอารยา โฆษิตไกร</h2>
        <h2>รหัส : 66048395</h2>
        <h2>คณะ : เทคโนโลยีสารสนเทศ</h2>
        <h2>สาขา : วิทยาการคอมพิวเตอร์</h2>
        <h2>คำคม : อดีตสร้างปัจจุบัน ปัจจุบันสร้างอนาคต</h2>
      </div>


    </div>
  );
}

export default Home;
