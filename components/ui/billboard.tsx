import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard | null; // Allow data to be null or of type Billboard
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  // Check if data is null or undefined
  if (!data) {
    return null; // You can return null or a message or component to handle this case
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
