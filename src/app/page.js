import Link from "next/link";

export default function Home() {
 const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    const cards = [
      {
        title: 'Jenis Sampah Organik',
        image: 'images/organik.png',
        icon: 'images/selengkapnya_organik.png',
        alt: 'Sampah Organik',
        link: '/organik',
      },
      {
        title: 'Jenis Sampah Anorganik',
        image: 'images/anorganik.png',
        icon: 'images/selengkapnya_anorganik.png',
        alt: 'Sampah Anorganik',
        link: '/anorganik',
      },
      {
        title: 'Jenis Sampah Bahan Berbahaya Beracun (B3)',
        image: 'images/b3.png',
        icon: 'images/selengkapnya_b3.png',
        alt: 'Sampah B3',
        link: '/b3',
      },
    ];

    return (
        <div>
            {/* Bagian Hero Section */}
            <section
                className="py-16 px-4 md:px-8 lg:px-16 mt-10"
            >
                <div className="container mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/5 mt-[-80px] md:ml-4">
                    <h1 className="text-4xl font-bold mb-4 leading-snug">
                      Jelajahi Dunia <br />
                      <span className="text-[#006A71]">Daur Ulang</span>
                      <br />
                      Dengan Teknologi
                    </h1>
                    <p className="text-gray-600 mb-8">
                      Kaslam memudahkan kamu mengenali dan memilah sampah secara cerdas lewat teknologi pemindaian gambar.
                      Cukup unggah atau ambil foto, dan biarkan sistem kami menentukan jenis sampahnya untukmu.
                    </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={"/images/hero.jpg"}
                            alt="Hero"
                            className="rounded-lg max-w-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Bagian "Mengapa Kaslam?" */}
            <section
              className="px-4 md:px-8 lg:px-16 "
              style={{
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container mx-auto max-w-[1240px] flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={"/images/gambar_recycle.png"}
                    alt="Hero"
                    className="rounded-lg w-full max-w-md shadow-lg"
                  />
                </div>

                <div className="md:w-1/2 text-left">
                  <h1 className="text-4xl font-bold mb-8">
                    Kenapa Harus Kaslam?
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Kaslam hadir sebagai cara cerdas buat bantu kamu kenali dan kelola sampah dengan mudah. Cukup jepret atau upload gambar, teknologi AI kami langsung kasih tahu jenis sampahnya secara cepat dan akurat.
                  </p>
                  <p className="text-gray-600 mb-10">
                    Kami percaya, hal kecil kayak milah sampah bisa jadi awal perubahan besar. Bareng Kaslam, kamu bisa bantu jaga lingkungan dengan cara yang simpel, seru, dan nggak ribet.
                  </p>
                  <Link href="/tujuan">
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300">
                      Cari Tahu Lebih Lanjut
                    </button>
                  </Link>
                </div>
              </div>
            </section>
            
            {/* Bagian Scan Foto */}
            <section
                className="px-4 md:px-8 lg:px-16"
            >
                <div className="container mx-auto max-w-[1340px] relative mt-32">
                    <div className="md:w-3/5">
                        <h1 className="text-4xl font-bold mb-4 text-dark">
                            Scan Sampahmu
                        </h1>
                        <p className="text-gray-800 mb-8">
                            Pernah bingung harus membuang sampah ke mana? Dengan
                            Kaslam, cukup unggah atau ambil foto, dan AI kami
                            akan membantu mengenali jenis sampah milik anda. 
                            Kaslam memanfaatkan teknologi berbasis AI
                            untuk mengenali jenis sampah dalam hitungan detik.
                            Cukup unggah atau ambil foto, dan sistem kami akan membantu
                            mengidentifikasi apakah sampah tersebut termasuk organik,
                            non-organik ataupun sampah berbahaya.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <div className="flex items-center">
                            <img
                                src={"/images/icon1.png"}
                                alt="Pilah"
                                className="w-6 h-6 mr-2"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-dark">
                                    Pilah dengan Mudah
                                </h2>
                                <p className="text-sm text-gray-800">
                                    Ketahui apakah sampah bisa didaur ulang,
                                    organik, atau residu.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={"/images/icon2.png"}
                                alt="Cepat"
                                className="w-6 h-6 mr-2"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-dark">
                                    Cepat & Akurat
                                </h2>
                                <p className="text-sm text-gray-800">
                                    Hanya butuh satu scan untuk mendapatkan
                                    hasil.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={"/images/icon3.png"}
                                alt="Dukung"
                                className="w-6 h-6 mr-2"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-dark">
                                    Dukung Lingkungan
                                </h2>
                                <p className="text-sm text-gray-800">
                                    Mulai langkah kecil untuk perubahan besar!
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="/scan">
                    <button className="bg-[#D3DE32] hover:bg-teal-600 transition duration-300 hover:text-white text-[#006A71] font-bold py-3 px-12 rounded-md mt-8">
                        Scan Sekarang
                    </button>
                    </Link>
                </div>
            </section>

            {/* Bagian Jenis-jenis Sampah */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
              <div className="container mx-auto max-w-[1330px]">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Udah Tahu Belum? Ini Dia Jenis-jenis Sampah!
                </h2>
                <p className="text-gray-600">
                  Memilah sampah dengan tepat itu langkah awal buat menjaga bumi. Yuk, kenali berbagai jenis sampah supaya proses daur ulang jadi lebih maksimal!
                </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {cards.map((card, index) => {
                    let bgColor = "";
                    let label = "Jenis Sampah";

                    if (card.title.includes("Organik")) {
                      bgColor = "bg-[#B9FF66]";
                      label = "Organik";
                    } else if (card.title.includes("Anorganik")) {
                      bgColor = "bg-[#FF8F2E]";
                      label = "Anorganik";
                    } else if (card.title.includes("B3")) {
                      bgColor = "bg-[#FF3729]";
                      label = "Bahan Berbahaya & Beracun (B3)";
                    }

                    return (
                      <div key={index} className="bg-[#f3f3f3] border rounded-2xl p-6 flex flex-col items-start w-full">
                        <span className={`px-3 py-1 rounded-md ${bgColor} text-black font-semibold mb-2`}>
                          {label}
                        </span>

                        <div className="w-full flex justify-end mb-4">
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="w-32 h-32 object-contain"
                          />
                        </div>

                        <a
                          href={card.link}
                          className="flex items-center text-black hover:underline"
                        >
                          <img
                            src={card.icon}
                            alt="Arrow Icon"
                            className="w-6 h-6 mr-2"
                          />
                          Selengkapnya
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
        </div>
    );
}
