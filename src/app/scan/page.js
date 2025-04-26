"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from 'axios';


const Scan = () => {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [streamActive, setStreamActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.error("Gagal mengakses kamera", err);
        setStreamActive(false);
      }
    };

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);


  const processImage = async (file) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(`https://web-production-c8bf2.up.railway.app/predict`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Axios automatically parses JSON if the response is in JSON format
      const data = response.data;

      const kategori = data.kategori?.toLowerCase();
      if (kategori === "organik") setBorderColor("border-[#B9FF66]");
      else if (kategori === "non-organik") setBorderColor("border-[#FF8F2E]");
      else setBorderColor("border-[#FF3729]");

      setResult(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error processing image:", error);
      setError("Gagal memproses gambar: " + (error.response?.data?.message || error.message));

      if (process.env.NODE_ENV === "development") {
        const mockResult = {
          kategori: "Non-Organik",
          persen: "0%",
          prediksi: "plastik",
        };
        setResult(mockResult);
        setShowModal(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  

  const handleChooseImage = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      processImage(file);
    }
  };

  const handleCaptureImage = () => {
    if (videoRef.current) {
      setIsLoading(true);
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          const imageUrl = URL.createObjectURL(blob);
          setPreviewImage(imageUrl);
          processImage(blob);
        }
      }, "image/png");
    }
  };

  const closeModal = () => {
    window.location.reload();
  };

  const getDescription = () => {
    if (!result) return "";
    const prediksi = result.prediksi.toLowerCase();
    switch (prediksi) {
      case "plastik": return "Sampah plastik perlu waktu lama terurai. Sebaiknya didaur ulang atau digunakan kembali.";
      case "kertas":
      case "kardus": return "Kertas dan kardus mudah didaur ulang. Pastikan bersih dan kering sebelum dibuang.";
      case "biologis":
      case "sampah": return "Sampah organik terurai alami dan cocok jadi kompos. Buang di tempat sampah organik.";
      case "beterai": return "Sampah berbahaya! Jangan dibuang sembarangan. Bawa ke pusat pengolahan.";
      case "kaca": return "Kaca bisa didaur ulang berkali-kali. Buang di tempat sampah khusus kaca.";
      case "logam": return "Logam bisa didaur ulang berkali-kali. Pisahkan dari sampah lain.";
      case "pakaian":
      case "sepatu": return "Pakaian dan sepatu bisa didonasikan jika masih layak, atau daur ulang jika tidak.";
      default: return "Sampah non-organik sebaiknya dipisahkan untuk didaur ulang.";
    }
  };

  return (
    <section
      className="py-8 px-4 md:px-16 flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundSize: "1440px 863px",
      }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-4">Klasifikasi Sampah Disini!</h2>

        <div className="mx-auto w-[700px] h-[400px] border-2 border-teal-600 rounded-md overflow-hidden flex items-center justify-center bg-black/10 relative">
          {isLoading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
              <p className="text-teal-500">Memproses gambar...</p>
            </div>
          ) : previewImage ? (
            <Image src={previewImage} alt="Preview" fill className="object-cover" />
          ) : (
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
          )}
        </div>

        <div className="mt-4 mb-4 flex justify-center gap-4">
          <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
          <button className="bg-black text-white px-4 py-2 rounded-md" onClick={handleChooseImage} disabled={isLoading}>Pilih gambar</button>
          <button className="bg-black text-white px-4 py-2 rounded-md" onClick={handleCaptureImage} disabled={isLoading}>Ambil gambar</button>
        </div>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        {showModal && result && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-center">Hasil Deteksi Sampah</h3>
                <div className={`mb-2 rounded-lg overflow-hidden border ${borderColor}`}>
                  <Image src={previewImage} alt="Sampah terdeteksi" width={400} height={200} className="w-full h-48 object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 mb-1">Kategori</p>
                    <p className="font-bold text-sm">{result.kategori === "Non-Organik" && result.prediksi === "kertas" ? "Organik" : result.kategori}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 mb-1">Akurasi</p>
                    <p className="font-bold text-sm">{result.persen}</p>
                  </div>
                  <div className="col-span-2 bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 mb-1">Prediksi</p>
                    <p className="font-bold text-sm capitalize">{result.prediksi === "beterai" ? "Baterai" : result.prediksi}</p>
                  </div>
                </div>
                <div className="p-2 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-xs font-medium text-gray-500 mb-1">Deskripsi:</p>
                  <p className="text-gray-700 text-sm">{getDescription()}</p>
                </div>
              </div>
              <div className="bg-gray-100 px-6 py-1 flex justify-end rounded-b-lg">
                <button onClick={closeModal} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-teal-500 transition-colors">
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Scan;