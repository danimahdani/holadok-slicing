import Headers from "./components/headers";
import Dokter from "../src/images/dokter.png"
import Client from "../src/images/client.jpg"
import petik from '../src/assets/icons/petik.svg'
import calendar from '../src/assets/icons/calendar.svg'
import bell from '../src/assets/icons/bell.svg'
import cam from '../src/assets/icons/cam.svg'

export default function App() {
  return (
    <div>
      <div className="py-6 absolute z-20 left-0 right-0">
        <Headers />
      </div>

      <section className="relative">
          <div className="absolute w-5/12 h-screen right-20 top-0 bottom-0">
            <div className="w-[580px] min-h-screen bg-acc-background transform -skew-x-6"></div>
          </div>
          <div className="max-w-7xl relative mx-auto ">
            <div className="flex">
              <div className="w-2/5 pt-60">
                <h1 className="font-dm-sans font-medium text-5xl text-font-color mb-8 leading-snug">Get the healthcare you need, when you need it.</h1>
                <p className="w-2/3 font-dm-sans text-lg mb-11">
                  Manage all of your healthcare needs in one convenient place – from booking appointments to tracking your health history.
                </p>
                <button className="bg-primary-color px-6 py-4 text-white font-sans-pro text-xl">Book an Appointment</button>
              </div>
              <div className="pt-24 relative">
                <div className="absolute top-1/3">
                  <div className="min-h-fit w-80 bg-white shadow-lg rounded-lg p-5 absolute left-5">
                    <div className="flex justify-between items-center mb-5">
                      <span className="w-12 h-12 overflow-hidden rounded-full mr-3">
                        <img
                          width="100%"
                          className="object-fill"
                          height="100%"
                          alt="Client Holadok"
                          src={Client}
                        />
                      </span>
                   
                      <p className="mr-auto font-sans-pro font-semibold">Jane Doe</p>
                      <span className="w-8 h-8 overflow-hidden rounded-full">
                        <img
                          width="100%"
                          className="object-fill"
                          height="100%"
                          alt="Client Holadok"
                          src={petik}
                        />
                      </span>
                    </div>
                    <p className="leading-relaxed font-sans-pro font-medium text-sm text-font-color">
                      “The doctor appointment app has been great for me. Scheduling appointments and getting medication reminders is much easier, and I love the option for virtual consultations. I'd recommend this app to others.”
                    </p>
                  </div>
                </div>
                <div className="absolute w-[590px] top-0 left-40 z-10 ">
                  <img
                  className="object-cover"
                    alt="Dokter"
                    width="100%"
                    height="100%"
                    src={Dokter}
                  />
                </div>
              </div>
            </div>
            <div className="h-48 w-full absolute mt-20 bg-primary-color z-30 py-10">
              <div className="flex justify-around">
                <div className="w-3/12">
                  <div className="flex">
                    <span className="w-12 h-12 rounded-full mr-6">
                      <img
                        width="100%"
                        className="object-fill"
                        height="100%"
                        alt="Client Holadok"
                        src={calendar}
                      />
                    </span>
                    <div className="w-full">
                      <p className="mr-auto font-sans-pro font-semibold text-white mb-2">Online appointment scheduling</p>
                      <p className="text-white font-light">Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="flex">
                    <span className="w-12 h-12 rounded-full mr-6">
                      <img
                        width="100%"
                        className="object-fill"
                        height="100%"
                        alt="Client Holadok"
                        src={bell}
                      />
                    </span>
                    <div className="w-full">
                      <p className="mr-auto font-sans-pro font-semibold text-white mb-2">Medication reminders</p>
                      <p className="text-white font-light">Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="flex">
                    <span className="w-12 h-12 rounded-full mr-6">
                      <img
                        width="100%"
                        className="object-fill"
                        height="100%"
                        alt="Client Holadok"
                        src={cam}
                      />
                    </span>
                    <div className="w-full">
                      <p className="mr-auto font-sans-pro font-semibold text-white mb-2">Virtual consultations</p>
                      <p className="text-white font-light">Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}