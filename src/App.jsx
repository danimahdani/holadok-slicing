import Headers from "./components/headers";
import Dokter from "../public/images/dokter.png"

export default function App() {
  return (
    <div>
      <div className="py-6 absolute z-20 left-0 right-0">
        <Headers />
      </div>

      <section className="relative">
          <div className="absolute w-5/12 h-screen right-0 top-0 bottom-0">
            <div className="w-[580px] min-h-screen bg-acc-background transform -skew-x-6"></div>
          </div>
            <div className="max-w-7xl mx-auto px-4 ">
              <div className="flex">
                <div className="w-5/12 pt-60">
                  <h1 className="font-dm-sans font-medium text-5xl text-font-color mb-8 leading-snug">Get the healthcare you need, when you need it.</h1>
                  <p className="w-2/3 font-dm-sans text-lg mb-11">
                    Manage all of your healthcare needs in one convenient place – from booking appointments to tracking your health history.
                  </p>
                  <button className="bg-primary-color px-6 py-4 text-white font-sans-pro text-xl">Book an Appointment</button>
                </div>
                <div className="pt-24 relative">
                  <div className="absolute w-[590px] top-0 left-40 z-30 ">
                    <img
                    className="object-cover"
                      alt="Traverler Hero"
                      width="100%"
                      height="100%"
                      src={Dokter}
                    />
                  </div>
                </div>
              </div>
            </div>
      </section>
    </div>
  )
}