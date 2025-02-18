import Image from "next/image";
import cooperMedal from "../../assets/medal-cooper.svg";
import goldMedal from "../../assets/medal-gold.svg";
import silverMedal from "../../assets/medal-silver.svg";

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>
      <div className="space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center gap-3 p-6 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | João Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1.030
          </span>
          <Image
            src={goldMedal}
            alt="gold medal"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center gap-3 p-6 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | João Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            897
          </span>
          <Image
            src={silverMedal}
            alt="silver medal"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 flex flex-col justify-center gap-3 p-6 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | João Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            792
          </span>
          <Image
            src={cooperMedal}
            alt="cooper medal"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
}
