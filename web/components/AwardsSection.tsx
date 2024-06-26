// AwardsSection.tsx
import { awards } from "@/lib/lists/Awards";

const AwardsSection = () => {
  return (
    <div className="border-2 border-gray-600 rounded-lg px-10 py-8 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="md:text-4xl text-3xl font-bold text-primary">
          🏆 Awards in VEX
        </h1>
        <h2 className="md:text-2xl text-xl font-bold text-gray-300">
          As cumulatively achieved by our team members.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
            <h2 className="font-bold text-xl text-primary mb-4">
              {award.season}: <span className="text-gray-300">{award.title}</span>
            </h2>
            <ul className="space-y-4">
              {award.details.map((detail, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <div className="flex-shrink-0 text-2xl">🏅</div>
                  <div>
                    <div className="text-white font-semibold">{detail.title}</div>
                    <div className="text-gray-300 text-xs">{detail.competition}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
