const Footer = () => {
  return (
    <div className="bg-customWhite flex justify-center mt-10 py-4 px-2 text-xs text-gray-500">
      <div className="w-[1024px]">
        <p>Langganan diperlukan untuk Apple TV+.</p>

        <hr className="border w-full mt-6" />

        <div className="py-6 flex gap-12">
          {/* 1 */}
          <div className="flex flex-col gap-8 w-52">
            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Belanja dan Belajar</p>
              <p className="hover:underline">Mac</p>
              <p className="hover:underline">iPad</p>
              <p className="hover:underline">iPhone</p>
              <p className="hover:underline">Watch</p>
              <p className="hover:underline">AirPods</p>
              <p className="hover:underline">TV & Rumah</p>
              <p className="hover:underline">AirTag</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Dompet Apple</p>
              <p className="hover:underline">Dompet</p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-8 w-52">
            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Akun</p>
              <p className="hover:underline">Kelola ID Apple Anda</p>
              <p className="hover:underline">iCloud.com</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Hiburan</p>
              <p className="hover:underline">Apple One</p>
              <p className="hover:underline">Apple TV+</p>
              <p className="hover:underline">Apple Music</p>
              <p className="hover:underline">Apple Arcade</p>
              <p className="hover:underline">Apple Fitness+</p>
              <p className="hover:underline">Apple Podcasts</p>
              <p className="hover:underline">Apple Books</p>
              <p className="hover:underline">App Store</p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-8 w-52">
            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Untuk Bisnis</p>
              <p className="hover:underline">Apple dan Bisnis</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Untuk Pendidikan</p>
              <p className="hover:underline">Apple dan Pendidikan</p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col gap-8 w-52">
            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Nilai-nilai Apple</p>
              <p className="hover:underline">Aksesibilitas</p>
              <p className="hover:underline">Pendidikan</p>
              <p className="hover:underline">Lingkungan</p>
              <p className="hover:underline">Privasi</p>
              <p className="hover:underline">Rantai Pasokan</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-black/60 font-bold">Tentang Apple</p>
              <p className="hover:underline">Newsroom</p>
              <p className="hover:underline">Kepemimpinan Apple</p>
              <p className="hover:underline">Investor</p>
              <p className="hover:underline">Etika & Kepatuhan</p>
              <p className="hover:underline">Acara</p>
              <p className="hover:underline">Hubungi Apple</p>
            </div>
          </div>
        </div>

        <p>
          {" "}
          <span className="underline text-blue-500">Temukan retailer </span> di
          dekat Anda.
        </p>

        <hr className="border my-6 w-full" />

        <div className="flex justify-between">
          <div className="flex gap-8">
            <p>
              Hak cipta &copy; 2024 Apple Inc. Seluruh hak cipta dilindungi
              undang-undang.
            </p>
            <div className="flex divide-x-2 divide-gray-400">
              <p className="px-2">Kebijakan Privasi</p>
              <p className="px-2">Ketentuan Penggunaan</p>
              <p className="px-2">Legal</p>
              <p className="px-2">Peta Situs</p>
            </div>
          </div>

          <p className="hover:underline">Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
