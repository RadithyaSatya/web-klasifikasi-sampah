import Link from "next/link";

const BerbahayaPage = () => {
    return (
        <div>
            {/* Bagian Title Section */}
            <section
                className="flex justify-center items-center py-16 px-4 md:px-8 lg:px-16"
                style={{
                    backgroundImage: `url(/images/background/bgb3_1.png)`,
                    backgroundSize: "1440px 783px",
                    backgroundRepeat: "no-repeat",
                    height: "763px",
                    backgroundPosition: "center 0px",
                }}
            >
                <div className="container mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center max-w-[720px] mx-auto">
                        <h1 className="text-5xl text-white font-bold mb-4">
                            Hati-hati! <span className="text-[#FF8F2E]">Sampah Berbahaya</span> Perlu Penanganan Khusus
                        </h1>
                    </div>
                </div>
            </section>

            {/* Bagian Edukasi */}
            <section
                className="flex justify-center items-center py-16 px-4 md:px-8 lg:px-16"
                style={{
                    height: "863px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 0px",
                }}
            >
                <div className="container mx-auto max-w-[1240px] flex flex-col md:flex-row items-center">
                    <div className="w-full text-center md:text-left">
                        <h1 className="text-4xl text-center font-bold mb-16">
                            <span className="text-[#FF8F2E] font-bold">Sampah B3</span>: Kecil Tapi Bisa Berdampak Besar!
                        </h1>
                        <p className="text-black-600 text-2xl mb-8 text-center">
                            <span className="text-[#FF8F2E] font-bold">Sampah Berbahaya</span> atau B3 (Bahan Berbahaya dan Beracun) adalah jenis sampah yang mengandung zat beracun, mudah terbakar, atau korosif yang bisa membahayakan manusia dan lingkungan. Harus ditangani dengan benar agar nggak menimbulkan dampak buruk.
                        </p>
                        <p className="text-black-600 text-2xl mt-16 mb-8 text-center">
                            Contoh <span className="text-[#FF8F2E] font-bold">Sampah Berbahaya</span> yang sering kita temui:
                        </p>

                        {/* Cards */}
                        <div className="flex flex-col md:flex-row gap-4 mt-16 p-4 max-w-screen-lg mx-auto">
                            {/* Baterai Card */}
                            <div className="bg-[#ffd2aa] border-2 border-black-500 rounded-[32px] p-6 text-center w-[420px] shadow-xl shadow-black/50">
                                <h3 className="text-black-800 font-semibold mb-2">Baterai</h3>
                                <hr className="border-black-500 my-4" />
                                <p className="text-black-700 text-sm">
                                    Baterai bekas remote, baterai HP, aki motor
                                </p>
                            </div>

                            {/* Obat Kedaluwarsa Card */}
                            <div className="bg-[#ffd2aa] border-2 border-black-500 rounded-[32px] p-6 text-center w-[420px] shadow-xl shadow-black/50">
                                <h3 className="text-black-800 font-semibold mb-2">Obat Kedaluwarsa</h3>
                                <hr className="border-black-500 my-4" />
                                <p className="text-black-700 text-sm">
                                    Pil, sirup, salep, atau kapsul yang sudah lewat masa pakainya
                                </p>
                            </div>

                            {/* Barang Elektronik Card */}
                            <div className="bg-[#ffd2aa] border-2 border-black-500 rounded-[32px] p-6 text-center w-[420px] shadow-xl shadow-black/50">
                                <h3 className="text-black-800 font-semibold mb-2">Barang Elektronik</h3>
                                <hr className="border-black-500 my-4" />
                                <p className="text-black-700 text-sm">
                                    HP rusak, charger, kabel bekas, lampu neon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Try Scan Feature */}
            <section
                className="flex justify-center items-center pb-16 px-4 md:px-8 lg:px-16"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 0px",
                }}
            >
                <div className="container mx-auto max-w-[1240px] h-full flex flex-col md:flex-row items-center">
                    <div className="w-full mt-16 p-8 md:p-16 flex flex-col h-full md:flex-row items-center bg-white rounded-[32px] shadow-lg shadow-black/50">
                        <div className="w-2/3 md:w-1/2 md:pr-8">
                            <h1 className="text-2xl text-left font-bold mb-8">
                                Nggak yakin jenis sampahmu? Scan aja di Kaslam!
                            </h1>
                            <p className="text-black-600 text-lg mb-8">
                                Pakai fitur Kaslam buat deteksi jenis sampahmu secara instan. Foto, upload, dan lihat hasilnya. Gampang kan?
                            </p>
                            <Link href="/scan">
                                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-teal-600 hover:border-transparent transition duration-300">
                                    Coba Fitur Scan Sekarang!
                                </button>
                            </Link>
                        </div>
                        <div className="w-1/3 md:w-1/2 md:pl-8 mt-8 md:mt-0">
                            <img
                                src={"/images/bedul.jpg"}
                                alt="Scan Sampah"
                                className="w-[320px] mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BerbahayaPage;
