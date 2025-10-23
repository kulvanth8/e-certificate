import { forwardRef } from 'react';
import { Star } from 'lucide-react';

interface CertificateProps {
  formData: {
    name: string;
    year: string;
    event: string;
  };
}

const Certificate = forwardRef<HTMLDivElement, CertificateProps>(
  ({ formData }, ref) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="flex justify-center items-center p-8">
        <div
          ref={ref}
          className="relative w-full max-w-4xl bg-white overflow-hidden"
          style={{
            aspectRatio: '1.414/1',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(/background.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/98 to-white/95"></div>

          <div className="absolute inset-0 border-[20px] border-double border-amber-600">
            <div className="absolute inset-4 border-2 border-amber-500"></div>
          </div>

          <div className="absolute top-8 left-8 z-10">
            <img
              src="/dvnlogo.jpg"
              alt="DVN College Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-16 py-12">
            <div className="absolute top-32 left-0 right-0 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-1 tracking-wide">
                D.V.N. COLLEGE, ANAKAPALLE
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
            </div>

            <div className="text-center space-y-5 mt-16">
              <h2 className="text-3xl font-serif text-gray-700 tracking-wider mb-6">
                Certificate of Appreciation
              </h2>

              <div className="space-y-5">
                <p className="text-base text-gray-600">
                  This certificate is proudly presented to
                </p>

                <div className="py-3">
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">
                    {formData.name}
                  </h3>
                  <div className="h-0.5 w-56 bg-gray-300 mx-auto"></div>
                </div>

                <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto px-4">
                  In recognition of outstanding participation and commendable performance
                  in <span className="font-semibold text-gray-800">{formData.event}</span>.
                  Your dedication, enthusiasm, and active involvement have been exemplary
                  and serve as an inspiration to your peers.
                </p>

                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Year of Study:</span> {formData.year}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-16 right-16 flex justify-between items-end">
              <div className="text-center">
                <div className="h-0.5 w-32 bg-gray-400 mb-1"></div>
                <p className="text-xs text-gray-600 font-medium">Principal</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-600 font-medium mb-1">Date</p>
                <p className="text-xs text-gray-700">{currentDate}</p>
              </div>

              <div className="text-center">
                <div className="h-0.5 w-32 bg-gray-400 mb-1"></div>
                <p className="text-xs text-gray-600 font-medium">Event Coordinator</p>
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-8 z-10">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400 opacity-50" />
          </div>
          <div className="absolute bottom-8 left-8 z-10">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400 opacity-50" />
          </div>
          <div className="absolute bottom-8 right-8 z-10">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400 opacity-50" />
          </div>
        </div>
      </div>
    );
  }
);

Certificate.displayName = 'Certificate';

export default Certificate;
