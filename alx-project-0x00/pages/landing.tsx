import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =()=>{
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
              <div className="space-y-8">
        {/* Size Variants */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <div className="flex justify-center gap-4">
            <Button title="Small" styles="text-sm px-3 py-1 rounded-md" />
            <Button title="Medium" styles="text-base px-4 py-2 rounded-md" />
            <Button title="Large" styles="text-lg px-6 py-3 rounded-md" />
          </div>
        </div>

        {/* Shape Variants */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shapes</h2>
          <div className="flex justify-center gap-4">
            <Button title="Rounded-sm" styles="px-4 py-2 rounded-sm" />
            <Button title="Rounded-md" styles="px-4 py-2 rounded-md" />
            <Button title="Rounded-full" styles="px-4 py-2 rounded-full" />
          </div>
        </div>
      </div>
        </div>
    )
}
export default Landing;